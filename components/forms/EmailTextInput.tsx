import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { COLORS } from "../../constants/colors";

interface EmailTextInputProps {
  cursorColor?: string;
  fontSize?: number;
  placeholder: string;
  placeholderTextColor?: string;
  value: string;
  onChangeText: (value: string) => void;
}

const EmailTextInput: React.FC<EmailTextInputProps> = (props) => {
  return <FormTextInput {...props} keyboardType={"email-address"} />;
};

const FormTextInput = styled.TextInput`
  padding: 10px;
  border: 1px ${COLORS.lightGray};
  color: ${COLORS.primary};
  font-weight: 600;
  border-radius: 10px;
  margin-bottom: 10px;
`;
export default EmailTextInput;
