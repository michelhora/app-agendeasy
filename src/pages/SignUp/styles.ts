import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
  background: #f8f8ff;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #000000;
  font-family: 'Poppins-Medium';
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #000000;
  font-size: 14px;
  font-family: Poppins-Regular;
`;

export const BackToSignInButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f8f8ff;
  border-top-width: 1px;
  border-color: #2b90d9;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #2b90d9;
  font-size: 14px;
  font-family: 'Poppins-Regular';
  margin-left: 16px;
`;
