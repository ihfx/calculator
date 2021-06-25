import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

// Component Custom
import Calculator from '../components/Calculator'

import { useSelector } from 'react-redux'


export default function HomeView(props) {

  const resultGlobal = useSelector((state)=>{
    return state.calculator
  })

  return <>
    <SafeAreaView style={styles.container}>

      <Text style={styles.textHeader}>
        Calculadora Básica
      </Text>

      <View style={styles.result}>
        <Text style={styles.text}>
          Resultado capturando o estado global com Redux:
        </Text>
        <Text style={styles.textResult}>
        {isNaN(resultGlobal)? 0:resultGlobal}
        </Text>
      </View>
      
      <Calculator/>
      
    </SafeAreaView>
  </>
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  textHeader:{
    marginTop:20,
    fontSize:30
  },
  result:{
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    margin:5,
  },
  text:{
    fontSize:17,
    color:'black'
  },
  textResult:{
    fontSize:40,
    color:'black'
  }
})