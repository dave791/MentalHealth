import React from 'react';
import { Image, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import AwesomeButton from "react-native-really-awesome-button/src/themes/cartman";

class profileCreationScreen extends React.Component{
    render(){
        return(
            <KeyboardAvoidingView style = {creationProfileStyle.container}>
                <TouchableOpacity>
                <View >
                <Image
                width = "150"
                source = {require("./assets/Face.png")}
                />
                <View style = {creationProfileStyle.displayRow}>
                    <Text>First Name: </Text> 
                    <Text>Last Name: </Text>
                </View>
                
                <TextInput 
                    style ={creationProfileStyle.textBoxContainer}
                    placeholder = "Description of Self"
                    placeholderTextColor = "rgb(0,0,0)"
                    returnKeyType = "next"
                    onSubmitEditing={() => this.lastName.focus()}
                    autoCapitalize ="none"
                    autoCorrect={false}
                />

                </View>
                </TouchableOpacity>   
            </KeyboardAvoidingView>
        )
    }
}

export default profileCreationScreen;

const creationProfileStyle = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'rgb(159,210,202)',
            alignItems: "center",
            justifyContent: "center",
        },

        ProfileBox: {
            borderRadius: 30
        },

        displayRow: {
            flexDirection: 'row',
            alignItems: "center"
        },
        textBoxContainer:{
            marginTop: 10,
            backgroundColor: 'rgb(255,223,253)',
            padding: 20
        }

})