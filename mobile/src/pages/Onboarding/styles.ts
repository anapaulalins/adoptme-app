import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  padding-right: ${width}px;
  width: ${width * 2}px;
  height: ${width + width * 0.74}px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  padding: 30px;
  align-items: center;
`;

export const ContentTitle = styled.View`
  width: 330px;
  height: 150px;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  color: #10162d;
  font-size: 28px;
  letter-spacing: 1px;
  font-family: 'BreeSerif-Regular';
`;

export const ImageContainer = styled.Image`
  width: 300px;
  height: 300px;
`;

export const SkipContainer = styled.View`
  position: absolute;
  top: 50px;
  left: 40px;
  z-index: 1000;
`;

export const SkipButton = styled.TouchableOpacity``;

export const SkipText = styled.Text`
  color: #ffffff;
  font-size: 12px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  font-family: 'BreeSerif-Regular';
`;
