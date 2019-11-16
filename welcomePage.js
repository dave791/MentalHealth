import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import AwesomeButton from "react-native-really-awesome-button/src/themes/cartman";
import Image from "react-native-scalable-image";

class welcomeScreen extends React.Component{
    render(){
        return(
            <View style = {styleWelcome.container}>
                <Text>Welcome to Mental Health</Text>
                
                <Image
                width = {Dimensions.get('window').width}
                source = {require("./assets/MentalHealth_welcome.png")}
                />

                <TouchableOpacity style = {styleWelcome.buttoncontainer} >
                    <View >
                    <AwesomeButton 
                    style = {styleWelcome.buttonInside}
                    type="primary"
                    textColor= "#000000"
                    onPress = {() => this.props.navigation.navigate('Login')}
                    >Log In
                    </AwesomeButton>
                    </View>
                    
                    <View >
                    <AwesomeButton
                    type="primary"
                    textColor= "#000000"
                    onPress = {() => this.props.navigation.navigate('SignUp')}
                    >Sign Up
                    </AwesomeButton>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

export default welcomeScreen;

const styleWelcome = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(255,253,189)',
        alignItems: "center",
        justifyContent: "center",
    },

    buttoncontainer:{
        marginTop: 10,
        flexDirection: "row",
    },

    buttonInside: {
        marginRight: 20,
    }
});
