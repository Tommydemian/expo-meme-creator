import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";

import { COLORS, SPACING } from "../theme";

type Props = TextInputProps & {
  autoCapitalize: string;
  customStyle?: object;
  placeholder: string;
  keyboardType: string;
  secureTextEntry: boolean;
  value: string | number | undefined;
  onChangeText: (text: string) => void;
};

export const InputForm: React.FC<Props> = ({
  autoCapitalize,
  customStyle,
  placeholder,
  keyboardType,
  secureTextEntry,
  value,
  onChangeText,
  ...rest
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
      style={[styles.input, customStyle]}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
    backgroundColor: COLORS.colorGreyInput,
    paddingVertical: SPACING.spacing10,
    marginVertical: SPACING.spacing10,
    borderWidth: 1,
    borderColor: COLORS.colorGreyBorder,
    borderRadius: SPACING.spacing10,
  },
});
