import React from 'react'; 
import {Text, StyleSheet} from 'react-native'; 

// Estilo aplicado ao titulo

const style = StyleSheet.create({
    texto:{
        fontSize:30,
        color: 'blue',
        marginBottom: 20,
        textAlign: 'center' 
    }
})

// Este componente mostra o titulo na tela. 

export default function Titulo() {
    return(
        <Text style={style.texto}>Hey body, look up! 🦸‍♂️</Text>
    )
}

