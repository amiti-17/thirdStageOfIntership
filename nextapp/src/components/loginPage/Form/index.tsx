import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@apollo/client";
import { Alert, Collapse } from "@mui/material";
import { useFormik } from "formik";
import RequiredTextField from "./components/RequiredTextField";
import SubmitOutlinedButton from "./components/SubmitOutlinedButton";
import CustomError from "CustomError";
import { getCryptPassword } from "functions/getCryptPassword";
import { auth } from "Apollo/queries/auth";
import { yupValidationSchema } from "functions/validations/loginInput/yupValidationSchema";
import { ShowMsgType, showMsgDefault } from "CustomError/ShowMshType";
import { graphqlErrorsHandler } from "CustomError/graphqlErrorsHandler";
import { networkErrorsHandler } from "CustomError/networkErrorsHandler";
import { pages } from "config/system/pages";

export default function LoginForm() {

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

        if (isUserOk?.data.login.status) {
          setShowMsg({
            message: CustomError.successfullyLogIn,
            severity: 'success',
          })
          router.replace(pages.weather); //TODO: make it uncomment
        }
      } catch (error) {
        // Object.keys(error).map(el => console.log('map: ', el, error[el]))
        if (error.graphQLErrors[0]) setShowMsg(graphqlErrorsHandler(error.graphQLErrors));
        if (error.networkError) setShowMsg(networkErrorsHandler(error.networkError));

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
          autoComplete="current-password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          errorText={formik.touched.password && formik.errors.password}
        />
        <SubmitOutlinedButton isLoading={isLoading} isDisabled={formik.isSubmitting} />
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
    // validate: values => {
    //   console.log("values: ", values);
    //   try {
    //     const getValidatedFormData: LoginType = validateInputValue(values);
    //     return {};
    //   } catch (error) {
    //     const errors = {};
    //     if (error instanceof z.ZodError) {
    //       if (error.issues[0].path[0] === strConstants.email) {
    //         setEmailValidationError({
    //           status: true,
    //           message: error.issues[0].message,
    //         })
    //       } else {
    //         setEmailValidationError(defaultErrorValidation);
    //       }
    //       if (error.issues[0].path[0] === strConstants.password) {
    //         setPasswordValidationError({
    //           status: true,
    //           message: error.issues[0].message,
    //         })
    //       } else {
    //         setPasswordValidationError(defaultErrorValidation);
    //       }
    //     } else if (error instanceof CustomError) {
    //       setErrorMsg(error.message)
    //       console.warn(error.message);
    //     } else {
    //       console.error(Object.keys(error));
    //       throw error;
    //     }
    //     return errors;
    //   } finally {
    //     setIsLoading(false);
    //   }
    // }

  // useEffect(() => {
  //   const currentInfoMsg = localStorage.getItem(localStorageKeys.loginInfoMsg);
  //   if (currentInfoMsg) {
  //     setInfoMsg(currentInfoMsg);
  //     localStorage.removeItem(localStorageKeys.loginInfoMsg);
  //   }
  // }, []);

  // useEffect(() => {
  //   clearTimeout(timeOutInf);
  //   if (infoMsg) {
  //     setCheckedInf(true);
  //     const timer = setTimeout(()=> {
  //       setCheckedInf(false);
  //     }, digits[3000]);
  //     setTimeOutInf(timer);
  //   }
  // }, [infoMsg]);

  // useEffect(() => {
  //   clearTimeout(timeOutErr);
  //   if (errorMsg) {
  //     setCheckedErr(true);
  //     const timer = setTimeout(()=> {
  //       setCheckedErr(false);
  //     }, digits[3000]);
  //     setTimeOutErr(timer);
  //   }
  // }, [errorMsg]);

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   const formData = new FormData(event.currentTarget);
  //   const myFormData = {
  //     email: formData.get(strConstants.email),
  //     password: formData.get(strConstants.password),
  //   }



  //   try {
  //       const getValidatedFormData: LoginType = validateInputValue(myFormData);
  //       getValidatedFormData.password = getCryptPassword(getValidatedFormData.password);
      
  //     const isUserOk = await getTokenMutation({
  //       variables: { input: getValidatedFormData },
  //     });

  //     if (isUserOk?.data.login.status) {
  //       router.replace(pages.weather); //TODO: make it uncomment
  //     } else {
  //       throw new CustomError(CustomError.unauthorizedMsg);
  //     }
      
      
  //     // .catch(e => {
  //     //   if (e instanceof ApolloError) {
  //     //     if (e.graphQLErrors.find(el => el.message)?.message === customError.unauthorized) {
  //     //       setErrorMsg(() => CustomError.unauthorizedMsg);
  //     //       
  //     //     }
  //     //   }
  //     // })

  //     if (loginError?.message === customError.unauthorized && loginError?.graphQLErrors.find(el => el.message === customError.unauthorized)) {
  //       console.log('error in mutation login: 109, form/index.ts', loginError);
  //       setErrorMsg(CustomError.unauthorizedMsg)
  //       throw new CustomError(CustomError.unauthorizedMsg);
  //     }
      
  //   } catch (error) {
  //     console.log('error in handleSubmit catch: 115, form/index.ts', error);
      
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
