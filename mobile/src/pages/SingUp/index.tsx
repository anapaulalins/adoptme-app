import React, {useState, useRef, useCallback} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Alert} from 'react-native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {
  BackLoginButton,
  BackLoginText,
  Container,
  ImageLogo,
  Title,
} from './styles';

import Logo from '../../assets/3821456.jpg';
import Input from '../../components/input';
import Button from '../../components/Button';
import getErros from '../../Error/getError';
import api from '../../service/api';

interface PropsSingUp {
  name: string;
  email: string;
  password: string;
}

const SingUp: React.FC = () => {
  const [secureText, setSecureText] = useState(true);
  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation();

  const HandleSingUp = useCallback(
    async (data: PropsSingUp) => {
      formRef.current?.setErrors({});
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatorio.'),
          email: Yup.string()
            .required('Email obrigatorio.')
            .email('Porfavor digite um email valido'),
          password: Yup.string().min(6, 'Minimo 6 digitos.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        navigation.goBack();

        Alert.alert('Usuario cadastrado com sucesso!', 'Faça já seu login!!!');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getErros(err);
          formRef.current?.setErrors(errors);
          return;
        } else {
          const {data} = err.response;
          Alert.alert('Erro ao cadastrar', `${data.erro}`);
        }
      }
    },
    [navigation],
  );

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flex: 1}}>
      <Container>
        <ImageLogo source={Logo} resizeMode="contain" />

        <Title>Faça seu cadastro</Title>

        <Form ref={formRef} onSubmit={HandleSingUp}>
          <Input name="name" nameLabel="Username" />
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

        <Button onPress={() => formRef.current?.submitForm()}>Cadastrar</Button>

        <BackLoginButton onPress={() => navigation.goBack()}>
          <BackLoginText>Log In</BackLoginText>
        </BackLoginButton>
      </Container>
    </ScrollView>
  );
};

export default SingUp;
