import styled from 'styled-components/native';

import {Dimensions, Platform} from 'react-native';

const {width} = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  background-color: #eef2f3;
  /* padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px; */
`;

export const ImageLogo = styled.Image`
  width: 300px;
  height: 300px;
`;

export const Title = styled.Text`
  font-family: 'BreeSerif-Regular';
  color: #0b1828;
  letter-spacing: 1px;
  font-size: 30px;
  margin-bottom: 20px;
`;

export const BackLoginButton = styled.TouchableOpacity`
  margin-top: 30px;
`;

export const BackLoginText = styled.Text`
  font-family: 'BreeSerif-Regular';
  color: #0b1828;
  letter-spacing: 1px;
  font-size: 15px;
`;
