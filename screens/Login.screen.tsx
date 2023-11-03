import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";

//import { InputForm } from "../components/InputForm";
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

  function handleChange(field: keyof UserData) {
    return function (value: string) {
      dispatch(updateField({ field, value }));
    };
  }

  useEffect(() => {
    console.log(loginData);
    if (loginData?.status === "fulfilled") dispatch(setLoggedIn(true));
    console.log(isLoggedIn);
  }, [loginData]);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{
          width: "100%",
        }}
        behavior="padding"
      >
        <TextInput
          style={styles.formInput}
          placeholder="email"
          keyboardType="email-address"
          value={email}
          onChangeText={handleChange("email")}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.formInput}
          placeholder="password"
          keyboardType="default"
          secureTextEntry
          value={password}
          onChangeText={handleChange("password")}
          autoCapitalize="none"
        />
        {isLoading && (
          <ActivityIndicator size={20} color={COLORS.colorOxfordBlue} />
        )}
        <Pressable
          onPress={() => logUser({ email, password })}
          style={[styles.submitButton]}
        >
          <Text style={styles.submitButtonText}>Log In</Text>
        </Pressable>
        <Pressable
          onPress={() => registerUser({ email, password })}
          style={[styles.submitButton]}
        >
          <Text style={styles.submitButtonText}>Register</Text>
        </Pressable>
        {loginData && <Text>data</Text>}
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
  formInput: {
    paddingVertical: SPACING.spacing10,
  },
  submitButton: {
    backgroundColor: COLORS.colorYaleBlue,
    width: "100%",
    paddingVertical: SPACING.spacing10,
    borderRadius: SPACING.spacing10,
  },
  submitButtonText: {
    color: COLORS.colorWhite,
    textAlign: "center",
  },
});
