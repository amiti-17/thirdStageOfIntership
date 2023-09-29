import { Box } from "@mui/material";
import RequiredTextField from "./components/RequiredTextField";
import SubmitOutlinedButton from "./components/SubmitOutlinedButton";
import { validateInputValue } from "../../../functions/validations/loginInput";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { z } from 'zod';
import { LoginType } from "../../../config/system/types/login";
import { UserAccessTokenContext } from "../../../Contexts/userAccessTokenContext";
import { getCryptPassword } from "../../../functions/getCryptPassword";
import { useLazyQuery, useMutation } from "@apollo/client";
import { auth } from "../../../../Apollo/auth";
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

  const { userAccessToken, setUserAccessToken } = React.useContext(UserAccessTokenContext);
  const [ isLoading, setIsLoading ] = React.useState<boolean>(false);
  const [ emailValidationError, setEmailValidationError ] = React.useState<errorValidation>(defaultErrorValidation);
  const [ passwordValidationError, setPasswordValidationError ] = React.useState<errorValidation>(defaultErrorValidation);
  const [getTokenMutation, {error, loading, data}] = useMutation(auth.login);
  const router = useRouter();
  const customError = new CustomError('');

  useEffect(() => {
    if (data) {
      console.log(data.login);
      if (data?.login?.access_token) {
        setUserAccessToken(data.login.access_token);
        router.replace('/weather'); 
      } else {
        throw new CustomError('Access token is false.');
      }
    }
  }, [loading, data])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // it is here, because I don`t wanna save sensitive data...
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
      });
      console.log(error?.message, customError.unauthorized)
      if (error?.message === customError.unauthorized && error?.graphQLErrors.find(el => el.message === customError.unauthorized)) {
        throw new CustomError(CustomError.unauthorizedMsg);
      }

      // Object.keys(error).forEach(key => {
      //   console.log(key, error[key])
      // })
      
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
        //ToDo: make some error box, where display this error...
        console.warn(error.message);
      } else {
        // console.log("cached in loginForm", error.message, error.name, error);
        // console.warn(Object.keys(error));
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
    </Box>
  )
}