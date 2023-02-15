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
const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation<any>();
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

const RegisterScreen = styled.View`
  flex: 1;
  background-color: ${COLORS.primary};
`;

const RegisterHeader = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RegisterText = styled.Text`
  font-weight: 800;
  font-size: 25px;
  color: ${COLORS.white};
  margin-bottom: 10px;
`;

const FormView = styled.View`
  flex: 2;
  background-color: ${COLORS.white};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px;
`;

const AgreementText = styled.Text`
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  color: ${COLORS.primary};
  margin-bottom: 20px;
`;

const HaveAccountView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const HaveAnAccountText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${COLORS.primary};
  margin-right: 10px;
`;

const LoginText = styled.Text`
  font-size: 15px;
  font-weight: 800;
  color: ${COLORS.secondary};
`;
export default Register;
