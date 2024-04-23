import React from "react";
import { View, Text, TextInput, Button  } from "react-native";
import Title from "../Title";


export default function Form(){
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
             onPress={validation()}
             title="Calcular IMC"
             color="#61dafb"
            />
        </View>
        </View>
    );
}