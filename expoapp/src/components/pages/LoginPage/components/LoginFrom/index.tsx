import { Formik } from "formik";
import { Button, GestureResponderEvent, TextInput } from "react-native";
import { useMutation } from "@apollo/client";
import { yupValidationSchema } from "functions/validations/loginInput/yupValidationSchema";
import { auth } from "Apollo/queries/auth";
import CustomError from "CustomError";
import { graphqlErrorsHandler } from "CustomError/graphqlErrorsHandler";
import { networkErrorsHandler } from "CustomError/networkErrorsHandler";
import { strConstants } from "config/system/constants/strConstants";
import { useContext } from "react";
import { MessageContext } from "context/MessageContext";

export const LoginForm = () => {

  const [ getTokenMutation ] = useMutation(auth.login);
  const { setMessage } = useContext(MessageContext);

  const initialValues = { 
    email: strConstants.emptyStr, 
    password: strConstants.emptyStr,
  }

  const onSubmitHandler = async (values) => {
    try {
      const isUser = await getTokenMutation({
        variables: { input: values },
      });

      if (isUser?.data?.login.status) {
        setMessage({
          message: CustomError.successfullyLogIn,
          title: 'Success',
        })
        // router.push(pages.weather); TODO: perform this features
      }
    } catch (error) {

      if (error.graphQLErrors[0]) {
        setMessage(graphqlErrorsHandler(error.graphQLErrors));
      }

      if (error.networkError) {
        setMessage(networkErrorsHandler(error.networkError));
      }

      console.error('unrecognized warn in Form => LoginForm => formik => onSubmit: ', error);
    }
  }

  // const formik = useFormik({
  //   ,
  //   validationSchema: yupValidationSchema,
  //   onSubmit: async (values) => {
  //     try {
  //       const isUser = await getTokenMutation({
  //         variables: { input: values },
  //       });

  //       if (isUser?.data?.login.status) {
  //         Alert({
  //           message: CustomError.successfullyLogIn,
  //           severity: 'success',
  //         })
  //         router.push(pages.weather);
  //       }
  //     } catch (error) {

  //       if (error.graphQLErrors[0]) {
  //         Alert(graphqlErrorsHandler(error.graphQLErrors));
  //       }

  //       if (error.networkError) {
  //         Alert(networkErrorsHandler(error.networkError));
  //       }

  //       console.error('unrecognized warn in Form => LoginForm => formik => onSubmit: ', error);
  //     }
  //   },
  // });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yupValidationSchema}
      onSubmit={onSubmitHandler}
    >
      {(prop) => { //: { handleChange, handleBlur, handleSubmit, values }
        console.log(prop);
        return (
          <>
            <TextInput
              onChangeText={prop.handleChange('email')}
              onBlur={prop.handleBlur('email')}
              value={prop.values.email}
            />
            <Button onPress={prop.handleSubmit as unknown as (e: GestureResponderEvent) => void} title="Submit" />
          </>
        )
      }}
    </Formik>
  )
}