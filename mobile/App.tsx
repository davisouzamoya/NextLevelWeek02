import {StatusBar} from 'react-native';
import React from 'react';
import Landing from './src/pages/Landing';

export default function App() {
  return (
    <>
      <Landing />
      <StatusBar barStyle="auto" />
    </>
  );
}
