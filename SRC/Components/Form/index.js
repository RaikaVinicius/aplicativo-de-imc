import React, { useState } from "react";
import { View, Text, TextInput, Button  } from "react-native";
import ResultImc from "./ResultImc/Index";


export default function Form(){ 

    const[height, setHight] = useState(null)
    const[weight, setWeight] = useState(null)
    const[message, setMessage] = useState("Preencha o peso e altura")
    const[imc, setImc] = useState(null)
    const[textButton, setTextButton] = useState("Calcular IMC")
    
        function imcCalcular(){
            return setImc((weight/(height*height)).toFixed(2))
        }
        function validationImc(){
            if(weight != null && height != null){
                imcCalcular()
                setHeight(null)
                setWeight(null)
                setMessage("seu IMC é = ")
                setTextButton("Calcular Novamente")
                return
            }
            setTextButton("Preencha novamente o peos e altura")
        } 

    return(
        
        <View>
        <View>
           <Text>altura</Text>
           <TextInput
           placeholder="Ex. 1.75"
           keyboardType="numeric"
           />
           <Text>Altura</Text>
           <TextInput
           placeholder="75.865"
           keyboardType="numeric"
           />

            <Button
             onPress={() => validation()}
             title="Calcular IMC"
             color="#61dafb"
            />
        </View>
        </View>
    );
}