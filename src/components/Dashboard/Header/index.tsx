import { forSlideRight } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useAuth } from '../../../hooks/AuthContext';

import {
  HeaderTitle,
  UserName,
  Container,
  ProfileButton,
  UserAvatar,
} from './styles';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <LinearGradient
      colors={['#2B90D9', '#00D4FF']}
      style={{
        paddingLeft: 32,
        paddingBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
        height: 60,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
      }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 4 }}
    >
      <ProfileButton onPress={() => {}}>
        <UserAvatar source={{ uri: user.avatar?.url }} />
      </ProfileButton>
      <HeaderTitle>
        Bem vindo , {'\n'}
        <UserName>{user.name}</UserName>
      </HeaderTitle>
    </LinearGradient>
  );
};

export default Header;
