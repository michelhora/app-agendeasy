import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import {
  Container,
  ServiceText,
  ServiceDate,
  ServiceDay,
  EmployeerAvatar,
  LeftListBox,
  RightListBox,
  ListIcon,
  ListIcons,
  ServicePrice,
  AppointmentListComponent,
  FrontBorder,
} from './styles';

interface ButtonProps {
  item?: any;
}

const AppointmentList: React.FC<ButtonProps> = ({ item }) => (
  <Container>
    <AppointmentListComponent>
      <LeftListBox>
        <ServiceText>{item.service.name}</ServiceText>
        <ServiceDate>{item.date}</ServiceDate>
        <ServiceDay>{item.date}</ServiceDay>
        <EmployeerAvatar />
      </LeftListBox>
      <RightListBox>
        <ListIcons>
          <ListIcon />
          <ListIcon />
          <ListIcon />
        </ListIcons>
        <ServicePrice>{item.price}</ServicePrice>
      </RightListBox>
    </AppointmentListComponent>
  </Container>
);

export default AppointmentList;
