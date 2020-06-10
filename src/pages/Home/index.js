import React from 'react';
import { View, TextInput, TouchableHighlight, Text, Image} from 'react-native';
import logo from '../../assets/logo.png'
// import { Container } from './styles';

const Home = () => {
  return (
    <View>
      <Image source={logo} />
      <TextInput placeholder="Digite um texto aqui">

      </TextInput>
      <TouchableHighlight>
        <Text>Escutar</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Home;