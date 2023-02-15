import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import FocusedStatusBar from "../../components/statusBar/FocusedStatusBar";
import { COLORS } from "../../constants/colors";
import ShopBoxSVG from "../../assets/logo&labels/logoLight.svg";
import PhoneNumberTextInput from "../../components/forms/PhoneNumberTextInput";
import PasswordTextInput from "../../components/forms/PasswordTextInput";
import LoginButton from "../../components/ui/Button";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<any>();
  return (
    <LoginScreen>
      <FocusedStatusBar />
      <WelcomeView>
        <ShopBoxSVG width={180} />
        <WelcomeText>Добро пожаловать!</WelcomeText>
        <SignInText>Войдите, чтобы продолжить</SignInText>
      </WelcomeView>
      <FormView>
        <View>
          <PhoneNumberTextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder={"Номер телефона"}
            cursorColor={COLORS.black}
            fontSize={16}
            placeholderTextColor={COLORS.primary}
          />
          <PasswordTextInput
            value={password}
            onChangeText={setPassword}
            placeholder={"Пароль"}
            cursorColor={COLORS.black}
            fontSize={16}
            placeholderTextColor={COLORS.primary}
          />
        </View>
        <ForgotPassword>
          <ForgotPasswordText>Забыли пароль?</ForgotPasswordText>
        </ForgotPassword>
        <LoginButton
          title="Войти"
          backgroundColor={COLORS.secondary}
          color={COLORS.white}
        />
        <Register>
          <DoNotHaveAnAccountText>
            Еще не регистрировались?
          </DoNotHaveAnAccountText>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Register")}
          >
            <RegisterText>Зарегистрироваться</RegisterText>
          </TouchableWithoutFeedback>
        </Register>
      </FormView>
    </LoginScreen>
  );
};
const LoginScreen = styled.SafeAreaView`
  background-color: ${COLORS.primary};
  flex: 1;
`;

const WelcomeView = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WelcomeText = styled.Text`
  font-weight: 800;
  font-size: 30px;
  color: ${COLORS.white};
  margin-bottom: 10px;
`;

const SignInText = styled.Text`
  font-weight: 800;
  font-size: 16px;
  color: ${COLORS.white};
  margin-bottom: 10px;
`;

// FORM CONTENT
const FormView = styled.View`
  flex: 1;
  background-color: ${COLORS.white};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px;
`;

const ForgotPassword = styled.View`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;

const ForgotPasswordText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${COLORS.secondary};
  margin-bottom: 20px;
`;

const Register = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const DoNotHaveAnAccountText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${COLORS.primary};
  margin-right: 10px;
`;

const RegisterText = styled.Text`
  font-size: 15px;
  font-weight: 800;
  color: ${COLORS.secondary};
`;
export default Login;
