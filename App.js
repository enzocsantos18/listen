import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import Home from './src/pages/Home'

export default function App() {
  return (
    <>
      <StatusBar translucent={true} />
      <Home/>
    </>
  );
}
