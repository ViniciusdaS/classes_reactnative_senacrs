import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export default function ImagemTDS241T(){
    return(
        <View style={styles.container}>
            {/**Exibe uma imagem vinda da internet */}
            <Image source={{uri:'https://s2.glbimg.com/1GgOXdAySCjweuxuVSOoI4mR4wA=/e.glbimg.com/og/ed/f/original/2022/06/16/1231px-comets_kick_up_dust_in_helix_nebula_pia09178.jpeg'}}
            style={styles.imagem}/>
            <Text style={styles.legenda}>Nebulosa da hélice em infravermelho</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        alignItems:'center',
    },
    imagem:{
        width:200,
        height:200,
        marginBottom:10,
    },
    legenda:{
        textAlign:'center',
        fontSize: 7,
        color:'red'
    }
})
