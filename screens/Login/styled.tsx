import styled from "styled-components/native";
import { COLORS } from "../../constants/colors";

export const LoginScreen = styled.SafeAreaView`
  background-color: ${COLORS.primary};
  flex: 1;
`;

export const WelcomeView = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WelcomeText = styled.Text`
  font-weight: 800;
  font-size: 30px;
  color: ${COLORS.white};
  margin-bottom: 10px;
`;

export const SignInText = styled.Text`
  font-weight: 800;
  font-size: 16px;
  color: ${COLORS.white};
  margin-bottom: 10px;
`;

// FORM CONTENT
export const FormView = styled.View`
  flex: 1;
  background-color: ${COLORS.white};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px;
`;

export const ForgotPassword = styled.View`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${COLORS.secondary};
  margin-bottom: 20px;
`;

export const Register = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const DoNotHaveAnAccountText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${COLORS.primary};
  margin-right: 10px;
`;

export const RegisterText = styled.Text`
  font-size: 15px;
  font-weight: 800;
  color: ${COLORS.secondary};
`;
