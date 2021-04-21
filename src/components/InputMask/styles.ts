import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #ffffff;
  border-radius: 105px;
  margin-bottom: 16px;
  border-width: 2px;
  border-color: #ffffff;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #adadad;
  font-size: 14px;
  font-family: Poppins-Regular;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 8px;
  font-size: 20px;
  margin-bottom: 5px;
`;
