import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

// Hooks redux
import { useSelector, useDispatch } from 'react-redux'

// Actions
import {sum, subtract, multi, clearResult} from '../store/Calculator/Calculator.actions'

export default function Calculator(props){
  const dispatch = useDispatch()

  const resultGlobal = useSelector((state)=>{
    return state.calculator
  })

  const [number1, setNumber1] = useState(null)
  const [number2, setNumber2] = useState(null)

  function clearStatesLocal() {
    setNumber1(null)
    setNumber2(null)
  }

  return <>
    <View style={styles.container}>
      <View style={styles.calculator}>
        <View style={styles.result}>
          <Text style={styles.textResult}>
            {isNaN(resultGlobal)? 0:resultGlobal}
          </Text>
        </View>
        
        <TextInput 
          style={styles.inputText}
          placeholderTextColor={'gray'}
          placeholder='Digite um numero:'
          keyboardType='numeric'
          value={number1 == null || isNaN(number1)? '': number1.toString()}
          onChangeText={(value)=>{setNumber1(parseInt(value))}}
        />
        <TextInput
          style={styles.inputText}
          placeholderTextColor={'gray'}
          placeholder='Digite um numero:'
          keyboardType='numeric'
          value={number2 == null || isNaN(number2)? '': number2.toString()}
          onChangeText={(value)=>{setNumber2(parseInt(value))}}
        />

        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{
              dispatch(sum(number1, number2))
            }}
          >
            <Text style={styles.textButton}>
              Somar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={()=>{
              dispatch(subtract(number1, number2))
            }}
          >
            <Text style={styles.textButton}>
              Subtrair
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{
              dispatch(multi(number1, number2))
            }}
          >
            <Text style={styles.textButton}>
              Multiplicar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={()=>{
              dispatch(clearResult())
              clearStatesLocal()
            }}
          >
            <Text style={styles.textButton}>
              Limpar
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
      

    </View>
  </>
} 

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems:'center',
  },
  calculator:{
    backgroundColor:'#444444',
    borderRadius:25,
    padding:20
  },
  inputText:{
    color:'black',
    borderWidth:1,
    padding:5,
    margin:5,
    textAlign:'right',
    fontSize:17,
    borderRadius:10,
    backgroundColor:'white'
  },
  button:{
    backgroundColor: '#F98404',
    width:100,
    justifyContent:'center',
    alignItems:'center',
    margin:5,
    padding:5,
    borderRadius:5
  },
  textButton:{
    color:'white',
    fontSize:18
  },
  result:{
    borderWidth:1,
    padding:5,
    margin:5,
    backgroundColor:'#5B5B5B',
    borderRadius:10
  },
  text:{
    fontSize:16,
    color:'white'
  },
  textResult:{
    fontSize:30,
    color:'white',
    textAlign:'right'
  }
})