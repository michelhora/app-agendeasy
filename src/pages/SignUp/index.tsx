import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Image,
  Keyboard,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/Feather';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import {
  Container,
  Title,
  BackToSignInButton,
  BackToSignInText,
} from './styles';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import InputMask from '../../components/InputMask';
import { State } from 'react-native-gesture-handler';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const telephoneInputRef = useRef<TextInput>(null);
  const documentInputRef = useRef<TextInput>(null);

  interface SignUpFormData {
    name: string;
    email: string;
    business_name: string;
    document_number: string;
    phone_number: string;
    password: string;
    provider: true;
  }

  const handleSignUp = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current !== null
        ? formRef.current.setErrors({})
        : console.log('nada');

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-Mail obrigatório')
          .email('Digite um e-mail válido.'),
        business_name: Yup.string().min(6, 'No minimo 6 caracteres'),
        password: Yup.string().min(6, 'No minimo 6 caracteres'),
        phone_number: Yup.string().min(6, 'No minimo 6 caracteres'),
        document_number: Yup.string().min(6, 'No minimo 6 caracteres'),
      });

      await schema.validate(data, { abortEarly: false });
      data.provider = true;
      console.log(data);
      await api.post('/users', data);

      Alert.alert('Cadastro realizado com sucesso!');
      navigation.navigate('SignIn');
    } catch (err) {
      console.log(err);
      const errors = getValidationErrors(err);

      formRef.current !== null
        ? formRef.current.setErrors(errors)
        : console.log('nada');
    }
  }, []);

  return (
    <>
      <ScrollView keyboardShouldPersistTaps="always">
        <Container>
          <Image source={logoImg} />
          <View>
            <Title>Cadastrar Empresa</Title>
          </View>
          <Form ref={formRef} onSubmit={handleSignUp}>
            <Input
              autoCapitalize="words"
              name="name"
              icon="user"
              placeholder="Nome"
              returnKeyType="next"
              onSubmitEditing={() => {
                documentInputRef.current?.focus();
              }}
            />
            <Input
              autoCapitalize="words"
              name="business_name"
              icon="archive"
              placeholder="Nome da empresa"
              returnKeyType="next"
              onSubmitEditing={() => {
                documentInputRef.current?.focus();
              }}
            />
            <InputMask
              ref={documentInputRef}
              name="document_number"
              keyboardType="numeric"
              placeholder="CPF ou CNPJ"
              label="CPF"
              onSubmitEditing={() => {
                emailInputRef.current?.focus();
              }}
            />
            <Input
              ref={emailInputRef}
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              name="email"
              icon={'mail'}
              placeholder="E-mail"
              returnKeyType="next"
              onSubmitEditing={() => {
                telephoneInputRef.current?.focus();
              }}
            />

            <InputMask
              ref={telephoneInputRef}
              name="phone_number"
              icon="phone"
              type="cel-phone"
              placeholder="Numero de contato"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}
              textContentType="telephoneNumber"
            />
            <Input
              ref={passwordInputRef}
              secureTextEntry
              name="password"
              icon="lock"
              placeholder="Senha"
              textContentType="newPassword"
              returnKeyType="send"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />
          </Form>
          <Button
            onPress={() => {
              formRef.current?.submitForm();
            }}
          >
            Criar Conta
          </Button>
        </Container>

        <BackToSignInButton
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        >
          <Icon name="arrow-left" size={20} color="#2b90d9" />
          <BackToSignInText>Acessar Conta</BackToSignInText>
        </BackToSignInButton>
      </ScrollView>
    </>
  );
};

export default SignUp;
