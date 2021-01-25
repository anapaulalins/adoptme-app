import React, {useRef, useCallback, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  CreateAccountButton,
  CreateAccountText,
  ForgotPasswordButton,
  ForgotPasswordText,
  Logo,
  Title,
} from './styles';

import logoImage from '../../assets/3778545.jpg';
import Input from '../../components/input';
import Button from '../../components/Button';
import {Alert} from 'react-native';
import getErros from '../../Error/getError';
import {useAuth} from '../../hooks/Auth';

interface DataSingIn {
  email: string;
  password: string;
}

const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation();

  const [secureText, setSecureText] = useState(true);

  const {SingIn} = useAuth();

  const HandleSingIn = useCallback(
    async (data: DataSingIn) => {
      formRef.current?.setErrors({});

      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email Obrigatorio.')
            .email('Porfavor digite um email valido.'),
          password: Yup.string().required('Senha Obrigatoria.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await SingIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getErros(err);
          formRef.current?.setErrors(errors);
          return;
        } else {
          Alert.alert(
            'Erro na autenticação',
            'Ocorreu um erro,cheque os campos preenchidos',
          );
        }
      }
    },
    [SingIn],
  );

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flex: 1}}>
      <Container>
        <Logo source={logoImage} resizeMode="contain" />

        <Title>Log In</Title>

        <Form ref={formRef} onSubmit={HandleSingIn}>
          <Input
            name="email"
            nameLabel="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            name="password"
            nameLabel="Password"
            secure={secureText}
            setSecure={setSecureText}
            secureTextEntry={secureText}
            returnKeyType="send"
            onSubmitEditing={() => formRef.current?.submitForm()}
          />
        </Form>

        <Button onPress={() => formRef.current?.submitForm()}>logar</Button>

        <ForgotPasswordButton>
          <ForgotPasswordText>Esqueci a senha</ForgotPasswordText>
        </ForgotPasswordButton>

        <CreateAccountButton onPress={() => navigation.navigate('SingUp')}>
          <CreateAccountText>Criar Conta</CreateAccountText>
        </CreateAccountButton>
      </Container>
    </ScrollView>
  );
};

export default SingIn;
