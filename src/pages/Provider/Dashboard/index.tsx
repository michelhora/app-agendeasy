import { forSlideRight } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';
import React, { useCallback } from 'react';
import { Text } from 'react-native-svg';
import Button from '../../../components/Button';
import { ButtonText } from '../../../components/Button/styles';
import Bottom from '../../../components/Dashboard/Bottom';
import Header from '../../../components/Dashboard/Header';
import Input from '../../../components/Input';
import { useAuth } from '../../../hooks/AuthContext';

import { Container, Textera } from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <Button onPress={handleSignOut}>sair fora</Button>
    </Container>
  );
};

export default Dashboard;
