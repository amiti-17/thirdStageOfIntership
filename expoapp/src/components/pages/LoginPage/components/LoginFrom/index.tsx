import { Formik } from "formik";
import { useContext } from "react";
import { useMutation } from "@apollo/client";
import { Button, GestureResponderEvent, Platform, StyleSheet } from "react-native";
import { yupValidationSchema } from "functions/validations/loginInput/yupValidationSchema";
import { auth } from "Apollo/queries/auth";
import CustomError from "CustomError";
import { graphqlErrorsHandler } from "CustomError/graphqlErrorsHandler";
import { networkErrorsHandler } from "CustomError/networkErrorsHandler";
import { MessageContext } from "context/MessageContext";
import { TextInputWithClue } from "./components/TextInputWithClue";
import { formConstants } from "config/system/constants/formConstants";
import { strConstants } from "config/system/constants/strConstants";
import { cssConstants } from "config/system/constants/cssConstants";

export const LoginForm = () => {

  const [ getTokenMutation ] = useMutation(auth.login);
  const { setMessage } = useContext(MessageContext);

  const initialValues = { 
    email: strConstants.emptyStr, 
    password: strConstants.emptyStr,
  }

  const onSubmitHandler = async (values) => {
    try {
      const userStatus = await getTokenMutation({
        variables: { input: values },
      });

      if (userStatus?.data?.login.status) {
        console.log(userStatus);
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yupValidationSchema}
      onSubmit={onSubmitHandler}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, isSubmitting }) => {
        
        return (
          <>
            <TextInputWithClue
              type={formConstants.email}
              value={values.email}
              error={errors.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <TextInputWithClue
              type={formConstants.password}
              value={values.password}
              error={errors.password}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <Button onPress={handleSubmit as unknown as (e: GestureResponderEvent) => void} title="Submit" disabled={isSubmitting} />
          </>
        )
      }}
    </Formik>
  )
}

const style = StyleSheet.create({
  generalFromWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
  }
})