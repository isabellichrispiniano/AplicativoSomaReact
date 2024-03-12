import React, { useState } from "react";
import { SafeAreaView,View,Text,Button, StyleSheet} from "react-native";

export default props=>{
     const num1 = props.num1
     const num2 = props.num2
     const [resultado, setResultado] = useState(resultado) 
     soma = () => {
          setResultado (num1 + num2)
     } 
    return(
        <View style={style.txtG}>
            <Text>Soma valores</Text>
            <Text>Primeiro valor {num1}</Text>
            <Text>Segundo valor {num2} </Text>
            <Button title="soma" onPress={soma}/>
            <Text>Resultado: {resultado}</Text>
        </View>
    )
}

const style = StyleSheet.create(
    {
        txtG:{
            fontSize: 50,
            margin: 80 ,
            textAlign:'center',
            color:"white"
        }
    }
)