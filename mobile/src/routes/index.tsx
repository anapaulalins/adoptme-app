import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useAuth} from '../hooks/Auth';
import AppRoutes from './app.routes';
import PrivateRoutes from './private.routes';

const Routes: React.FC = () => {
  const {user, loading} = useAuth();

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return user ? <PrivateRoutes /> : <AppRoutes />;
};

export default Routes;
