import { View, Text } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { COLORS } from "../../constants/colors";

const FocusedStatusBar = (props: any) => {
  const isFocused = useIsFocused();
  return isFocused ? (
    <StatusBar animated={true} {...props} backgroundColor={COLORS.primary} />
  ) : null;
};

export default FocusedStatusBar;
