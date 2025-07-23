import React from "react";
import {View, StyleSheet} from 'react-native'
// importamos o componente criado
import Titulo from "@/components/Titulo";
import TextTDS241T from "@/components/textTDS241T";
import TextInputTDS241T from "@/components/TextInputTDS241T";
import Imagem from "@/components/ImagemTDS241T";
import ImagemLocal from "@/components/ImagemAssetsTDS241T";

export default function App(){
  return(
    <View style={styles.container}>
      {/** Título da tela  */}
      <Titulo />
      <TextTDS241T />
      <TextInputTDS241T />
      <Imagem />
      <ImagemLocal />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  }
})