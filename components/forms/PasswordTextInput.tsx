import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { COLORS } from "../../constants/colors";

interface PasswordTextInputProps {
  cursorColor?: string;
  fontSize?: number;
  placeholder: string;
  placeholderTextColor?: string;
  value: string;
  onChangeText: (value: string) => void;
}

const PasswordTextInput: React.FC<PasswordTextInputProps> = (props) => {
  return (
    <FormTextInput
      {...props}
      secureTextEntry={true}
      keyboardType={"numbers-and-punctuation"}
      textContentType={"password"}
      caretHidden={false}
    />
  );
};

const FormTextInput = styled.TextInput`
  padding: 10px;
  border: 1px ${COLORS.lightGray};
  color: ${COLORS.primary};
  font-weight: 600;
  border-radius: 10px;
  margin-bottom: 10px;
`;
export default PasswordTextInput;
