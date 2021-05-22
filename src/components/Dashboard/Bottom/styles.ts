import styled from 'styled-components/native';

// Bottom, LeftButton, MainButton, RightButton

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  background: #2b90d9 linear-gradient(180deg, #2b90d9 0%, #00d4ff 100%) 0% 0%
    no-repeat padding-box;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const LeftButton = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
`;

export const MainButton = styled.TouchableOpacity`
  margin-top: -25px;
  justify-content: center;
  align-items: center;
  background: #2b90d9;
  border: 3px #ffffff;
  width: 57px;
  height: 50px;
  border-radius: 350px;
`;

export const ButtonText = styled.Text`
  position: absolute;
  left: 147px;
  bottom: 8px;
  font-size: 10px;
  line-height: 11px;
  font-family: 'Poppins-Bold';
  color: white;
  width: 100px;
  text-align: center;
`;
export const ButtonTextWhite = styled.Text`
  text-align: center;
  line-height: 11px;
  font-size: 10px;
  font-family: 'Poppins-Bold';
  color: white;
`;
export const RightButton = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 80px;
`;
