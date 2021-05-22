import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AuthRoutes from './auth.routes';
import UserRoutes from './user.routes';
import ProviderRoutes from './provider.routes';
import { useAuth } from '../hooks/AuthContext';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#2b90d9" />
      </View>
    );
  }
  console.log(user);
  return user ? (
    user?.provider ? (
      <ProviderRoutes />
    ) : (
      <UserRoutes />
    )
  ) : (
    <AuthRoutes />
  );
};

export default Routes;
