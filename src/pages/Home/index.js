import React, {useState} from 'react';
import * as Speech from 'expo-speech';
import logo from '../../assets/logo.png'
import { Container, Logo, Input, ListenButton, ListenText} from './styles';

const Home = () => {

  const [text, setText] = useState('');

  function handleListen(){
    Speech.speak(text, {language: 'pt-BR'})
  }

  return (
    <Container>
      <Logo source={logo} />
      <Input 
        value={text}
        onChangeText={text => setText(text)}
        style={{ textAlignVertical : "top" }}
        scrollEnabled={true}
        multiline={true}
        placeholder="Digite um texto aqui..."
      />
      <ListenButton onPress={handleListen}>
        <ListenText>ESCUTAR</ListenText>
      </ListenButton>
    </Container>
  );
}

export default Home;