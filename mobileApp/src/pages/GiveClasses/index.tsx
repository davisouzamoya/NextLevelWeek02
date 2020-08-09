import React from 'react'
import { View,ImageBackground,Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import giveBg from '../../assets/images/give-classes-background.png'

import styles from './styles';

function GiveClasses(){
  const { goBack } = useNavigation()

  function handleNavigateBack(){
    goBack()
  }
  return(
    <View style={styles.container}>
      <ImageBackground 
        resizeMode='contain' 
        source={giveBg} 
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy</Text>
        <Text style={styles.description}>
          Para comecar, voce precisa se cadastrar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.OkButton}>
        <Text style={styles.OkButtontext}>Tudo Bem</Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses