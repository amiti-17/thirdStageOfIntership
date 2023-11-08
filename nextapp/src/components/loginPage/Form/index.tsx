import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@apollo/client";
import { Alert, Collapse } from "@mui/material";
import { useFormik } from "formik";
import { SubmitOutlinedButton } from "./components/SubmitOutlinedButton";
import { RequiredTextField } from "./components/RequiredTextField";
import CustomError from "CustomError";
import { ShowMsgType, showMsgDefault } from "CustomError/ShowMshType";
import { graphqlErrorsHandler } from "CustomError/graphqlErrorsHandler";
import { networkErrorsHandler } from "CustomError/networkErrorsHandler";
import { getCryptPassword } from "functions/getCryptPassword";
import { auth } from "Apollo/queries/auth";
import { yupValidationSchema } from "functions/validations/loginInput/yupValidationSchema";
import { pages } from "config/system/pages";
import { UserContext } from "Contexts/userContext";
import { LoginPageButton } from "./styled/LoginPageButton";
import { LoginButtonGroup } from "./styled/LoginButtonGroup";

export default function LoginForm() {

  const { user } = useContext(UserContext);
  const [ showMsg, setShowMsg ] = useState<ShowMsgType>(showMsgDefault);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ getTokenMutation ] = useMutation(auth.login);
  const router = useRouter();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: yupValidationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      const myCryptValues = {
        email: values.email,
        password: getCryptPassword(values.password),
      };
      try {
        const isUserOk = await getTokenMutation({
          variables: { input: myCryptValues },
        });

        if (isUserOk?.data?.login.status) {
          setShowMsg({
            message: CustomError.successfullyLogIn,
            severity: 'success',
          })
          router.replace(pages.weather);
        }
      } catch (error) {

        if (error.graphQLErrors[0]) {
          setShowMsg(graphqlErrorsHandler(error.graphQLErrors));
        }

        if (error.networkError) {
          setShowMsg(networkErrorsHandler(error.networkError));
        }

        console.error('unrecognized error in Form => LoginForm => formik => onSubmit: ', error);
      } finally {
        setIsLoading(false);
      }
    },
  });
  
  return (
    <>
      <form onSubmit={formik.handleSubmit} noValidate>
        <RequiredTextField
          id="email"
          label="Email Address"
          autoComplete="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          errorText={formik.touched.email && formik.errors.email}
          autoFocus
        />
        <RequiredTextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          errorText={formik.touched.password && formik.errors.password}
        />
        <LoginButtonGroup>
          <SubmitOutlinedButton isLoading={isLoading} isDisabled={formik.isSubmitting} />
          {
            user && 
              <LoginPageButton 
                fullWidth
                variant='outlined'
                onClick={() => router.push('/weather')}
              >
                {user.name} {'=>'}
              </LoginPageButton>
          }
        </LoginButtonGroup>
      </form>
      {
        showMsg?.message && (
          <Collapse in={Boolean(showMsg.message)}>
            <Alert severity={showMsg.severity}>{showMsg.message}</Alert>
          </Collapse>
        )
      }
    </>
  )
}
