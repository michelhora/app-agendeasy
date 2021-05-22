import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { View } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
`;
export const AppointmentListComponent = styled.View`
  width: 318px;
  height: 109px;
  background: rgba(43, 144, 217, 0.19)
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  justify-content: space-between;
  flex-direction: row;
`;
export const FrontBorder = styled.View`
  width: 7px;
  height: 109px;
  background: #46abf5 0% 0% no-repeat padding-box;
  opacity: 0.81;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
`;
export const LeftListBox = styled.View`
  justify-content: space-between;
  flex-direction: column;
  padding: 13px;
  height: 109px;
`;
export const ServiceText = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-SemiBold';
  color: #2b90d9;
  opacity: 1;
`;
export const ServiceDate = styled.Text`
  font-size: 11px;
  font-family: 'Poppins-Regular';
  color: #2b90d9;
  opacity: 1;
`;
export const ServiceDay = styled.Text`
  font-size: 11px;
  font-family: 'Poppins-Regular';
  color: #2b90d9;
  opacity: 1;
`;
export const EmployeerAvatar = styled.View`
  height: 23px;
  width: 23px;
  background: #fff;
  border-radius: 150px;
`;
export const RightListBox = styled.View`
  justify-content: space-between;
  flex-direction: column;
  height: 109px;
`;
export const ListIcons = styled.View`
  left: 5px;
  margin-top: -8px;
  flex-direction: row;
`;
export const ListIcon = styled.View`
  width: 20px;
  height: 20px;
  margin-left: 8px;
  background: #fff;
  border-radius: 150px;
  border: 0.7px #2b90d9;
`;
export const ServicePrice = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-SemiBold';
  color: #2b90d9;
  opacity: 1;
  margin-bottom: 15px;
`;
