import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProviderDashboard from '../pages/Provider/Dashboard';

const App = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#ffffff' },
    }}
  >
    <App.Screen name="ProviderDashboard" component={ProviderDashboard} />
  </App.Navigator>
);

export default AuthRoutes;
