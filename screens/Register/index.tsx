import { View, Text } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { COLORS } from "../../constants/colors";
import FocusedStatusBar from "../../components/statusBar/FocusedStatusBar";
import ShopBoxSVG from "../../assets/logo&labels/logoLight.svg";
import PhoneNumberTextInput from "../../components/forms/PhoneNumberTextInput";
import PasswordTextInput from "../../components/forms/PasswordTextInput";
import EmailTextInput from "../../components/forms/EmailTextInput";
import Button from "../../components/ui/Button";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/core";
import axios, { AxiosError } from "axios";
import { useEffect } from "react";
import {
  RegisterText,
  AgreementText,
  FormView,
  HaveAccountView,
  HaveAnAccountText,
  LoginText,
  RegisterHeader,
  RegisterScreen,
} from "./styled";

interface RegisterData {
  phone_number: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  id: number;
}

const handleRegister = async (
  data: RegisterData
): Promise<RegisterResponse> => {
  try {
    console.log(data);
    const response = await axios.post(
      "https://4c94-213-109-66-166.in.ngrok.io/api/users/create/",
      data
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw new Error(err.message || "An error occurred while registering.");
  }
};

const getData = async () => {
  try {
    console.log("get data");
    const response = await axios.get(
      "https://4c94-213-109-66-166.in.ngrok.io/api/users/"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation<any>();

  useEffect(() => {
    // getData();
  }, []);
  return (
    <RegisterScreen>
      <FocusedStatusBar />
      <RegisterHeader>
        <ShopBoxSVG width={180} />
        <RegisterText>Регистрация</RegisterText>
      </RegisterHeader>
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
          <EmailTextInput
            value={email}
            onChangeText={setEmail}
            placeholder={"Электронная почта"}
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
          <AgreementText>
            Продолжая, вы соглашаетесь с нашими Условиями и Условия и политика
            конфиденциальности
          </AgreementText>
          <Button
            title="Зарегистрироваться"
            backgroundColor={COLORS.secondary}
            color={COLORS.white}
            onPress={() => {
              const data = { phone_number: phoneNumber, email, password };
              handleRegister(data);
            }}
          />
        </View>
        <HaveAccountView>
          <HaveAnAccountText>У вас уже есть аккаунт?</HaveAnAccountText>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Login")}
          >
            <LoginText>Войти</LoginText>
          </TouchableWithoutFeedback>
        </HaveAccountView>
      </FormView>
    </RegisterScreen>
  );
};

export default Register;
