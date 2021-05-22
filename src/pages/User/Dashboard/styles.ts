import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Appointment } from './index';

export const Container = styled.View`
  flex: 1;
`;

export const UserName = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  color: black;
`;

export const AppointmentsList = styled(
  FlatList as new () => FlatList<Appointment>,
)`
  padding-bottom: 16px;
`;
// Container, Header, HeaderTitle, UserName,
