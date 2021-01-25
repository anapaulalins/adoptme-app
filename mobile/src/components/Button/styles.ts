import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #8091b4;
  border-radius: 6px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-family: 'BreeSerif-Regular';
  text-transform: uppercase;
  letter-spacing: 1px;
`;
