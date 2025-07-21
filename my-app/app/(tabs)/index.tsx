import React from 'react'; 
import {View, StyleSheet} from 'react-native'; 
// Aqui estamos importando o componente que criamos
import Titulo from '@/components/Titulo'; 
import Mensagem from '@/components/Mensagem';

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'whitesmoke',
    justifyContent:'center',
    alignItems: 'center',
    padding: 24,  
  }
})

export default function App(){
  return(
    <View style={style.container}>
      {/** Titulo da tela */}
      <Titulo />
      <Mensagem />
    </View>
  )
}