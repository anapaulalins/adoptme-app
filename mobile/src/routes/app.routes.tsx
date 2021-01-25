import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../pages/Onboarding';
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

const Route = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Route.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
      }}>
      <Route.Screen name="Onboarding" component={Onboarding} />
      <Route.Screen name="SingIn" component={SingIn} />
      <Route.Screen name="SingUp" component={SingUp} />
    </Route.Navigator>
  );
};

export default AppRoutes;
