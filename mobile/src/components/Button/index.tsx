import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {Container, TextButton} from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({children, ...props}) => {
  return (
    <Container {...props}>
      <TextButton>{children}</TextButton>
    </Container>
  );
};

export default Button;
