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
import {
  DoNotHaveAnAccountText,
  ForgotPassword,
  ForgotPasswordText,
  FormView,
  LoginScreen,
  Register,
  RegisterText,
  SignInText,
  WelcomeText,
  WelcomeView,
} from "./styled";

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

export default Login;
