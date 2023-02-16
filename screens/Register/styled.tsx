import styled from "styled-components/native";
import { COLORS } from "../../constants/colors";

export const RegisterScreen = styled.View`
  flex: 1;
  background-color: ${COLORS.primary};
`;

export const RegisterHeader = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterText = styled.Text`
  font-weight: 800;
  font-size: 25px;
  color: ${COLORS.white};
  margin-bottom: 10px;
`;

export const FormView = styled.View`
  flex: 2;
  background-color: ${COLORS.white};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px;
`;

export const AgreementText = styled.Text`
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  color: ${COLORS.primary};
  margin-bottom: 20px;
`;

export const HaveAccountView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const HaveAnAccountText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${COLORS.primary};
  margin-right: 10px;
`;

export const LoginText = styled.Text`
  font-size: 15px;
  font-weight: 800;
  color: ${COLORS.secondary};
`;
