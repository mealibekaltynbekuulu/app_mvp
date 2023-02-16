import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { COLORS } from "../../constants/colors";

interface PhoneNumberTextInputProps {
  cursorColor?: string;
  fontSize?: number;
  placeholder: string;
  placeholderTextColor?: string;
  value: string;
  onChangeText: (value: string) => void;
}
const PhoneNumberTextInput: React.FC<PhoneNumberTextInputProps> = (props) => {
  return (
    <FormTextInput
      {...props}
      keyboardType={"phone-pad"}
      textContentType={"telephoneNumber"}
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

export default PhoneNumberTextInput;
