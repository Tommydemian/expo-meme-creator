import React, { useCallback, useEffect } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
  Text,
} from "react-native";

import { AppButton } from "../components/AppButton";
import { InputForm } from "../components/InputForm";
import { UserData, setLoggedIn, updateField } from "../features/user.slice";
import { useAppDispatch, useAppSelector } from "../hooks/redux/hooks";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../services/user.services";
import { COLORS, SPACING } from "../theme";

export const Login = () => {
  const { email, password } = useAppSelector((state) => state.user.data);
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const dispatch = useAppDispatch();

  //[1rts el => mutation trigger, {isLoading, error, data}: MutationResult ] = useMutation()
  const [
    logUser,
    { isLoading: loginLoading, error: loginError, data: loginData },
  ] = useLoginUserMutation();
  const [registerUser, { isLoading, error, data }] = useRegisterUserMutation();

  // Currying handleChange
  function handleChange(field: keyof UserData) {
    return function (value: string) {
      dispatch(updateField({ field, value }));
    };
  }

  const handleLogin = useCallback(() => {
    logUser({ email, password });
  }, [email, password, logUser]);

  const handleRegister = useCallback(() => {
    registerUser({ email, password });
  }, [email, password, registerUser]);

  useEffect(() => {
    if (loginData?.status === "fulfilled") {
      dispatch(setLoggedIn(true));
    } else {
      loginError && console.log("unable to login", loginError.data);
    }
  }, [loginData, dispatch, loginError]);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{
          width: "100%",
        }}
        behavior="padding"
      >
        <InputForm
          autoCapitalize="none"
          secureTextEntry={false}
          placeholder="Email"
          value={email}
          keyboardType="email-address"
          onChangeText={handleChange("email")}
          accessibilityLabel="Email address input"
        />
        <InputForm
          placeholder="password"
          keyboardType="default"
          secureTextEntry
          value={password}
          onChangeText={handleChange("password")}
          autoCapitalize="none"
          accessibilityLabel="Password input"
        />
        {isLoading && (
          <ActivityIndicator size={20} color={COLORS.colorOxfordBlue} />
        )}
        <AppButton
          accessibilityLabel="Log in "
          buttonText="Log In"
          onPress={handleLogin}
        />
        {(loginError as { data: string; status: string }) && (
          <Text>{loginError.data}</Text>
        )}
        <AppButton
          accessibilityLabel="Sign up for a new account"
          buttonText="Sign Up"
          onPress={handleRegister}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "10%",
  },
});
