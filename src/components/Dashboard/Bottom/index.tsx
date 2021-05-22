import React, { useCallback } from 'react';
import { Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ceil } from 'react-native-reanimated';
import { useAuth } from '../../../hooks/AuthContext';
import {
  LeftButton,
  MainButton,
  RightButton,
  Container,
  ButtonText,
  ButtonTextWhite,
} from './styles';

const Bottom: React.FC = () => {
  const { signOut, user } = useAuth();
  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);
  return (
    <Container>
      <LinearGradient
        colors={['#2B90D9', '#00D4FF']}
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
          height: 40,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 4 }}
      >
        <LeftButton>
          <Image
            style={{ width: 25, height: 25, marginBottom: 5 }}
            source={require('../../../assets/icons/User/NearbyEstablishments/NearbyEstablishments.png')}
          />
        </LeftButton>
        <MainButton onPress={handleSignOut}>
          <Image
            style={{ width: 25, height: 25 }}
            source={require('../../../assets/icons/User/MySchedule/MySchedule.png')}
          />
        </MainButton>

        <RightButton>
          <Image
            style={{ width: 25, height: 25, marginBottom: 5 }}
            source={require('../../../assets/icons/User/FavouriteEstablishments/FavouriteEstablishments.png')}
          />
        </RightButton>
      </LinearGradient>
    </Container>
  );
};

export default Bottom;
