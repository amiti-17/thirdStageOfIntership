import { Alert, Box, Collapse } from "@mui/material";
import RequiredTextField from "./components/RequiredTextField";
import SubmitOutlinedButton from "./components/SubmitOutlinedButton";
import { validateInputValue } from "../../../functions/validations/loginInput";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { z } from 'zod';
import { LoginType } from "../../../config/system/types/login";
import { getCryptPassword } from "../../../functions/getCryptPassword";
import { ApolloError, useMutation } from "@apollo/client";
import { auth } from "../../../Apollo/auth";
import CustomError from "../../../CustomError";

export default function LoginForm() {

  type errorValidation = {
    status: boolean, 
    message: string
  }
  const defaultErrorValidation = {
    status: false,
    message: '',
  }

  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ emailValidationError, setEmailValidationError ] = useState<errorValidation>(defaultErrorValidation);
  const [ passwordValidationError, setPasswordValidationError ] = useState<errorValidation>(defaultErrorValidation);
  const [ getTokenMutation, {error, loading, data}] = useMutation(auth.login);
  const [ checkedErr, setCheckedErr ] = useState(false);
  const [ timeOutErr, setTimeOutErr ] = useState<NodeJS.Timeout>();
  const [ errorMsg, setErrorMsg ] = useState<string>('');
  const customError = new CustomError('');
  const router = useRouter();

  useEffect(() => {
    clearTimeout(timeOutErr);
    if (errorMsg) {
      setCheckedErr(true);
      const timer = setTimeout(()=> {
        setCheckedErr(false);
      }, 3000);
      setTimeOutErr(timer);
    }
  }, [errorMsg])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const myFormData = {
      email: formData.get('email'),
      password: formData.get('password'),
    }

    try {
      const getValidatedFormData: LoginType = validateInputValue(myFormData);
      getValidatedFormData.password = getCryptPassword(getValidatedFormData.password);
      console.log("sha hash: ", getValidatedFormData.password, getValidatedFormData);
      
      getTokenMutation({
        variables: { input: getValidatedFormData },
      }).then(() => {
        router.replace('/weather');
      }).catch(e => {
        if (e instanceof ApolloError) {
          Object.keys(e).forEach(el => {
            console.log(el, ": ", e[el])
          })
          console.log('sdf', );
          Object.keys(e).forEach(key => console.log(e[key]))
          if (e.graphQLErrors.find(el => el.message)?.message === customError.unauthorized) {
            setErrorMsg(CustomError.unauthorizedMsg)
          }
        }
      })

      if (error?.message === customError.unauthorized && error?.graphQLErrors.find(el => el.message === customError.unauthorized)) {
        throw new CustomError(CustomError.unauthorizedMsg);
      }
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        if (error.issues[0].path[0] === 'email') {
          setEmailValidationError({
            status: true,
            message: error.issues[0].message,
          })
        } else {
          setEmailValidationError(defaultErrorValidation);
        }
        if (error.issues[0].path[0] === 'password') {
          setPasswordValidationError({
            status: true,
            message: error.issues[0].message,
          })
        } else {
          setPasswordValidationError(defaultErrorValidation);
        }
      } else if (error instanceof CustomError) {
        setErrorMsg(error.message)
        console.warn(error.message);
      } else {
        console.error(Object.keys(error));
        throw error;
      }
    } finally {
      setIsLoading(false);
    }
    
    console.log();
  };

  return (
    <Box component="form" onSubmit={async (e) => await handleSubmit(e)} noValidate sx={{ mt: 1 }}>
      <RequiredTextField
        id="email"
        label="Email Address"
        autoComplete="email"
        type="email"
        error={emailValidationError.status}
        errorText={emailValidationError.message}
        autoFocus
      />
      <RequiredTextField
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        error={passwordValidationError.status}
        errorText={passwordValidationError.message}
      />

      <SubmitOutlinedButton sx={{mt: 3, mb: 2}} isLoading={isLoading} />

      <Collapse in={Boolean(checkedErr)} addEndListener={() => setErrorMsg('')}>
        <Alert severity="error">{errorMsg}</Alert>
      </Collapse>
      
    </Box>
  )
}