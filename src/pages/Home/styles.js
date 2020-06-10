import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex: 1;
  padding: 24px;
`
export const Logo = styled.Image`
  height: 96px;
  width: 96px;
`



export const Input = styled.TextInput`
  flex: 1;
  border-color: #B1B1B1;
  border-width: 2px;
  border-radius: 4px;
  font-size: 18px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const ButtonsContainer = styled.View`
display: flex;
flex-direction: row;
`
export const ListenButton = styled.TouchableOpacity`
  background: black;
  flex: 1;
  margin-right: 8px;
  padding: 20px;
  border-radius: 4px;
  align-items: center;
`;

export const ListenText= styled.Text`
 color: white;
 font-weight: bold;
 font-size: 18px;
 
`;

export const SpeedButton = styled.TouchableOpacity`
  padding: 20px;
  width: 90px;
  border: 2px solid #000;
  border-radius: 4px;
  align-items: center;
`;

export const SpeedText= styled.Text`
 color: #000;
 font-weight: bold;
 font-size: 18px;
 
`;