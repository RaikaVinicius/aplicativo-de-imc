import React from "react";
import { View, Text  } from "react-native";
import { TextInput } from "react-native-web";

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

        </View>
        </View>
    );
}