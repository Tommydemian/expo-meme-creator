import React from "react";
import { Pressable, StyleSheet, Text, PressableProps } from "react-native";

import { COLORS, SPACING } from "../theme";

type Props = PressableProps & {
  buttonText: string;
  customButtonStyle?: object;
  customButtonTextStyle?: object;
};

export const AppButton: React.FC<Props> = ({
  buttonText,
  customButtonStyle,
  customButtonTextStyle,
  ...rest
}) => {
  return (
    <Pressable {...rest} style={[styles.button, customButtonStyle]}>
      <Text style={[styles.buttonText, customButtonTextStyle]}>
        {buttonText}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: SPACING.spacing10,
    marginVertical: SPACING.spacing10,
    backgroundColor: COLORS.colorYaleBlue,
    borderRadius: SPACING.spacing10,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 17,
    color: COLORS.colorWhite,
  },
});
