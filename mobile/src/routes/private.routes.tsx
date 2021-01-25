import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import TabRoutes from './tab.routes';
import Profile from '../pages/Profile';
import PetPage from '../pages/PetPage';

const Route = createStackNavigator();

const PrivateRoutes: React.FC = () => (
  <>
    <StatusBar
      backgroundColor="rgba(0,0,0,0.0)"
      translucent
      barStyle="dark-content"
    />
    <Route.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Route.Screen name="TabRoutes" component={TabRoutes} />
      <Route.Screen name="Profile" component={Profile} />
      <Route.Screen name="PetPage" component={PetPage} />
    </Route.Navigator>
  </>
);

export default PrivateRoutes;
