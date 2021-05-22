import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import UserDashboard from '../pages/User/Dashboard';

const App = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#ffffff' },
    }}
  >
    <App.Screen name="UserDashboard" component={UserDashboard} />
  </App.Navigator>
);

export default AuthRoutes;
