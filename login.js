import React from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import AwesomeButton from "react-native-really-awesome-button/src/themes/cartman";
import Image from "react-native-scalable-image";

class loginScreen extends React.Component{
    render(){
        return(
            <KeyboardAvoidingView style ={loginStyle.container}>
                <TouchableOpacity>
                    <View>
                   
                    <TextInput 
                    style ={loginStyle.textBoxContainer}
                    placeholder = "Username or Email"
                    placeholderTextColor = "rgb(0,0,0)"
                    returnKeyType = "next"
                    onSubmitEditing={() => this.passwordLogin.focus()}
                    autoCapitalize ="none"
                    autoCorrect={false}
                    />

                    <TextInput 
                    style ={loginStyle.textBoxContainer}
                    placeholder = "Password"
                    placeholderTextColor = "rgb(0,0,0)"
                    returnKeyType = "next"
                    secureTextEntry
                    autoCapitalize ="none"
                    autoCorrect={false}
                    ref ={(passwordLoginInput) => this.passwordLogin = passwordLoginInput}
                    />

                    <View style = {loginStyle.buttoncontainer}>
                    <AwesomeButton
                    type="primary"
                    textColor= "#000000"
                    progress
                    onPress = {() => this.props.navigation.navigate('Profile')}
                    >Logging in
                    </AwesomeButton>
                    </View>

                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

export default loginScreen;

const loginStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(159,210,202)',
        alignItems: "center",
        justifyContent: "center"
    },
    textBoxContainer:{
        marginTop: 10,
        backgroundColor: 'rgb(255,223,253)',

    },
    buttoncontainer:{
        marginTop: 10,
        alignSelf: 'center'
    },
})