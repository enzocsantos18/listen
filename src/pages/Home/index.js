import React from 'react';
import {Text} from 'react-native';
import logo from '../../assets/logo.png'
import { Container, Logo, Input, ListenButton, ListenText} from './styles';

const Home = () => {
  return (
    <Container>
      <Logo source={logo} />
      <Input 
      style={{ textAlignVertical : "top" }}
        scrollEnabled={true}
        multiline={true}
        placeholder="Digite um texto aqui..."
      />
      <ListenButton>
        <ListenText>ESCUTAR</ListenText>
      </ListenButton>
    </Container>
  );
}

export default Home;