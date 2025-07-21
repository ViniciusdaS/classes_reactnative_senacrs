import React from 'react'; 
import {Text, StyleSheet} from 'react-native';

// Definimos o tipo de propriedade que será recebido

type Props = {
    texto: string
} 

const style = StyleSheet.create({
    texto:{
        color:'red',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center', 
    }
})

//Este componente recebe uma mensagem
export default function Mensagem({ texto}: Props){
    return(
        <Text style={style.texto}></Text>
    )
}
