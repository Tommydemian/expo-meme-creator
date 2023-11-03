// import React from "react";
// import { TextInput, TextInputProps, StyleSheet } from "react-native";

// type Props = TextInputProps & {
//   autoCapitalize: string;
//   customStyle?: object;
//   placeholder: string;
//   keyboardType: string;
//   secureTextEntry: boolean;
//   value: string | number | undefined;
//   onChangeText: () => void;
// };

// export const InputForm: React.FC<Props> = ({
//   autoCapitalize,
//   customStyle,
//   placeholder,
//   keyboardType,
//   secureTextEntry,
//   value,
//   onChangeText,
//   ...rest
// }) => {
//   return (
//     <TextInput
//       placeholder={placeholder}
//       autoCapitalize={autoCapitalize}
//       style={[styles.input, customStyle]}
//       secureTextEntry={secureTextEntry}
//       keyboardType={keyboardType}
//       value={value}
//       onChangeText={onChangeText}
//       {...rest}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   input: {},
// });
