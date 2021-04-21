import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Watering from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Welcome(){
  return(
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Gerencie {'\n'} 
        suas plantas {'\n'} 
        de forma fácil
      </Text>

      <Image source={Watering} style={styles.image} resizeMode="contain"/>

      <Text style={styles.subTitle}>
        Não esqueça de regar suas plantas. 
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.button}>
          <Feather name="chevron-right" style={styles.buttonIcon}/>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 56,
    lineHeight: 38,
    fontFamily: fonts.heading
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 32,
  }
});