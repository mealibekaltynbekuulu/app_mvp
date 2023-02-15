import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";
import styled from "styled-components/native";
import { COLORS } from "../../constants/colors";
interface ButtonProps {
  title: string;
  color: string;
  backgroundColor: string;
}
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonView style={{ backgroundColor: props.backgroundColor }}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("", true)}
      >
        <ButtonInner>
          <ButtonText style={{ color: props.color }}>{props.title}</ButtonText>
        </ButtonInner>
      </TouchableNativeFeedback>
    </ButtonView>
  );
};

const ButtonView = styled.View`
  border-radius: 10px;
`;
const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: 800;
  text-align: center;
`;

const ButtonInner = styled.View`
  padding: 10px;
`;
export default Button;
