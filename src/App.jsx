import React from "react";
import { SafeAreaView,View  } from "react-native";
import Estilo from "./components/Estilo";
import Soma from "./components/Soma";
import Entrada from "./components/Entrada";

export default ()=>{
    return(
      <View>
         {/* <Soma num1={50} num2={10}/> */}
         <Entrada/>
      </View>
    )
}