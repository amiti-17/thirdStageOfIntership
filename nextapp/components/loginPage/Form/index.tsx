import { Box } from "@mui/material";
import RequiredTextField from "./components/RequiredTextField";
import SubmitOutlinedButton from "./components/SubmitOutlinedButton";
import { validateInputValue } from "../../../src/functions/validations/loginInput";
import React from "react";
import { sha256 } from "js-sha256";
import { useRouter } from "next/navigation";
import { z } from 'zod';
import { LoginType } from "../../../src/config/system/types/login";
import { login } from "../../../src/functions/auth";
import { UserAccessTokenContext } from "../../../src/Contexts/userAccessTokenContext";
import CustomError from "../../../src/CustomError";

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
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // it is here, because I don`t wanna save sensitive data...
    event.preventDefault();
    setIsLoading(true);
    const data = new FormData(event.currentTarget);
    const myFormData = {
      email: data.get('email'),
      password: data.get('password'),
    }

    try {
      const getValidatedFormData: LoginType = validateInputValue(myFormData);
      getValidatedFormData.password = sha256(getValidatedFormData.password);
      const getToken = await login(getValidatedFormData);
      setUserAccessToken(getToken.access_token);
      console.log({userAccessToken});
      if (getToken.access_token) {
        router.replace('/weather')
      } else {
        throw new CustomError('Access token is false.');
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
        //ToDo: make some error box, where display this error...
        console.log(error.message);
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