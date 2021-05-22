import { forSlideRight } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Button from '../../../components/Button';
import { ButtonText } from '../../../components/Button/styles';
import Bottom from '../../../components/Dashboard/Bottom';
import Header from '../../../components/Dashboard/Header';
import Input from '../../../components/Input';
import { useAuth } from '../../../hooks/AuthContext';
import AppointmentList from '../../../components/AppointmentList';
import api from '../../../services/api';

import { Container, AppointmentsList, UserName } from './styles';

export interface Appointment {
  id: number;
  avatar: string;
  date: string;
  name: string;
  service: string;
  service_price: string;
  appointment: number;
  item: string;
  provider: string;
}

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get(`appointments?page=${page}`).then((response) => {
      setAppointments(response.data);
      console.log(response.data);
    });
    setLoading(false);
    console.log('rodei');
  }, []);

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);
  const handleNewArray = useCallback(() => {
    setPage(page + 1);
    api.get(`appointments?page=${page}`).then((response) => {
      // setAppointments(response.data);
      setAppointments([...appointments, ...response.data]);
      console.log(appointments.length);
    });
  }, [page]);

  return (
    <Container>
      <Header />
      <AppointmentsList
        onEndReachedThreshold={0.1}
        onEndReached={handleNewArray}
        data={appointments}
        renderItem={({ item }) => <AppointmentList item={item} />}
        keyExtractor={(appointment) => appointment.id}
      />

      <Bottom />
    </Container>
  );
};

export default Dashboard;
