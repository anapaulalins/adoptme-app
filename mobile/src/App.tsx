import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {AuthProvider} from './hooks/Auth';
import {PostProvider} from './hooks/PetContext';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="rgba(0,0,0,0.0)" translucent />
      <NavigationContainer>
        <AuthProvider>
          <PostProvider>
            <Routes />
          </PostProvider>
        </AuthProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
