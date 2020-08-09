/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import landingImg from '../../assets/images/icons/landing.png';

function Landing() {
  return (
    <View style={styles.container}>
      <Image source={landingImg}/>
    </View>
  );
}

export default Landing;
