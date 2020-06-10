import React, {useState} from 'react';
import * as Speech from 'expo-speech';
import { Container, Logo, Input,ButtonsContainer, ListenButton, ListenText, SpeedButton, SpeedText} from './styles';
import logo from '../../assets/logo.png'

const Home = () => {

  const [text, setText] = useState('');
  const [speed, setSpeed] = useState(1);


  function handleListen(){
    Speech.stop();
    Speech.speak(text, {language: 'pt-BR', rate: speed})
  }
  
  function handleSpeed(){
    Speech.stop()
    if(speed != 3){
      setSpeed(speed + 0.5)
    }
    else{
      setSpeed(1)
    }
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
      <ButtonsContainer>

      <ListenButton onPress={handleListen}>
        <ListenText>ESCUTAR</ListenText>
      </ListenButton>
      <SpeedButton onPress={handleSpeed}>
        <SpeedText>{speed.toString()}X</SpeedText>
      </SpeedButton>
      </ButtonsContainer>
    </Container>
  );
}

export default Home;