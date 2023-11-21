import { Formik } from "formik";
import { useContext, useEffect } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GestureResponderEvent, Pressable, StyleSheet, Text } from "react-native";
import { showMessage } from "react-native-flash-message";
import { yupValidationSchema } from "functions/validations/loginInput/yupValidationSchema";
import { auth } from "Apollo/queries/auth";
import { users } from "Apollo/queries/users";
import CustomError from "CustomError";
import { graphqlErrorsHandler } from "CustomError/graphqlErrorsHandler";
import { networkErrorsHandler } from "CustomError/networkErrorsHandler";
import { MessageContext } from "context/MessageContext";
import { TextInputWithClue } from "./components/TextInputWithClue";
import { formConstants } from "config/system/constants/formConstants";
import { strConstants } from "config/system/constants/strConstants";
import { cssConstants } from "config/system/constants/cssConstants";
import { pages } from "config/system/pages";
import { CurrentUserContext } from "context/CurrentUserContext";

export const LoginForm = ({ navigation }) => {

  const [ getTokenMutation, { data: tokenData, loading } ] = useMutation(auth.login);
  const [ getCurrentUser, { data: userData } ] = useLazyQuery(users.getCurrentUser);
  const { setMessage } = useContext(MessageContext);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

  const initialValues = {
    email: strConstants.emptyStr,
    password: strConstants.emptyStr,
  }

  useEffect(() => {
    if (tokenData?.login.status) {
      getCurrentUser({
        fetchPolicy: 'network-only',
      });
    }
    if (currentUser?.email) {
      navigation.navigate(pages.weather);
    }
  }, [ tokenData ]);

  useEffect(() => {
    if (userData?.getCurrentUser.email !== currentUser?.email) {
      setCurrentUser(userData?.getCurrentUser);
    }
    if (userData?.getCurrentUser.email || currentUser?.email) {
      navigation.navigate(pages.weather);
    }
  }, [ userData, loading]);

  const onSubmitHandler = async (values) => {
    try {
      const userStatus = await getTokenMutation({
        variables: { input: values },
        fetchPolicy: 'network-only',
      });

      if (userStatus?.data?.login.status) {
        showMessage({
          message: CustomError.successfullyLogIn,
          type: 'success', // is it magic string? I think no.
        })
      }
    } catch (error) {

      if (error.graphQLErrors[0]) {
        setMessage(graphqlErrorsHandler(error.graphQLErrors));
      }

      if (error.networkError) {
        setMessage(networkErrorsHandler(error.networkError));
      }
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yupValidationSchema}
      onSubmit={onSubmitHandler}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, isSubmitting, touched }) => {
        return (
          <>
            <TextInputWithClue
              type={formConstants.email}
              value={values.email}
              error={errors.email}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <TextInputWithClue
              type={formConstants.password}
              value={values.password}
              error={errors.password}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <Pressable 
              onPress={handleSubmit as unknown as (e: GestureResponderEvent) => void}
              disabled={isSubmitting}
              style={[ style.submitButtonStyle, isSubmitting ? style.disabledColor : style.mainColor ]}
            >
              <Text style={style.buttonText} disabled={loading}>Submit</Text>
            </Pressable>
          </>
        )
      }}
    </Formik>
  )
}

const style = StyleSheet.create({
  submitButtonStyle: {
    marginTop: 10,
    width: '50%',
    padding: 10,
    borderRadius: 50,
    minWidth: 150,
    maxWidth: 300,
    backgroundColor: cssConstants.mainColor,
  },
  mainColor: {
    backgroundColor: cssConstants.mainColor,
  },
  disabledColor: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  }
})