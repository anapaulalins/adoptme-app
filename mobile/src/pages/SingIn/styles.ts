import styled from 'styled-components/native';

import {Dimensions, Platform} from 'react-native';

const {width} = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  background-color: #ffc9d6;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const Logo = styled.Image`
  width: 300px;
  height: 300px;
`;

export const Title = styled.Text`
  font-family: 'BreeSerif-Regular';
  color: #fff;
  letter-spacing: 1px;
  font-size: 30px;
  margin-bottom: 20px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin-top: 30px;
`;

export const ForgotPasswordText = styled.Text`
  font-family: 'BreeSerif-Regular';
  letter-spacing: 1px;
  font-size: 15px;
  color: #8091b4;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #ffb0c3;
  width: ${width}px;
  padding: 16px 0;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const CreateAccountText = styled.Text`
  color: #fff;
  font-family: 'BreeSerif-Regular';
  letter-spacing: 1px;
  font-size: 15px;
`;
