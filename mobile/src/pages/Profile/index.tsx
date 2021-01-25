import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useAuth} from '../../hooks/Auth';
import {Container, Title} from './styles';

const Profile: React.FC = () => {
  const {SingOut} = useAuth();
  return (
    <Container>
      <Title>Profile</Title>
      <TouchableOpacity
        onPress={() => SingOut()}
        style={{
          backgroundColor: '#a2b1ce',
          padding: 10,
          width: 150,
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Profile;
