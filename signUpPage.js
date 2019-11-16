import React from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import AwesomeButton from "react-native-really-awesome-button/src/themes/cartman";
import Image from "react-native-scalable-image";
import ModalDropDown from "react-native-modal-dropdown";

class signUpScreen extends React.Component{
    render(){
        return(
            <KeyboardAvoidingView style = {signUpStyles.container}>
                <TouchableOpacity>
                <View >
                <Text> Please Fill Everything Below </Text>

                <Image 
                width = {Dimensions.get('window').width}
                source = {require("./assets/Registration.png")}
                />


                <TextInput 
                    style ={signUpStyles.textBoxContainer}
                    placeholder = "First Name"
                    placeholderTextColor = "rgb(0,0,0)"
                    returnKeyType = "next"
                    onSubmitEditing={() => this.lastName.focus()}
                    autoCapitalize ="none"
                    autoCorrect={false}
                    />

                <TextInput 
                    style ={signUpStyles.textBoxContainer}
                    placeholder = "Last Name"
                    placeholderTextColor = "rgb(0,0,0)"
                    returnKeyType = "next"
                    onSubmitEditing={() => this.emails.focus()}
                    autoCapitalize ="none"
                    autoCorrect={false}
                    ref ={(lastInput) => this.lastName = lastInput}
                    />

                <TextInput 
                    style ={signUpStyles.textBoxContainer}
                    placeholder = "E-Mail"
                    placeholderTextColor = "rgb(0,0,0)"
                    returnKeyType = "next"
                    onSubmitEditing={() => this.userName.focus()}
                    autoCapitalize ="none"
                    autoCorrect={false}
                    keyboardType = "email-address"
                    ref ={(signUpInput) => this.emails = signUpInput}
                    />

                <TextInput 
                    style ={signUpStyles.textBoxContainer}
                    placeholder = "Username"
                    placeholderTextColor = "rgb(0,0,0)"
                    returnKeyType = "next"
                    onSubmitEditing={() => this.passwords.focus()}
                    autoCapitalize ="none"
                    autoCorrect={false}
                    ref ={(userNameInput) => this.userName = userNameInput}
                    />

                <TextInput 
                    style ={signUpStyles.textBoxContainer}
                    placeholder = "Password"
                    placeholderTextColor = "rgb(0,0,0)"
                    returnKeyType = "next"
                    secureTextEntry
                    autoCapitalize ="none"
                    autoCorrect={false}
                    ref ={(passwordInput) => this.passwords = passwordInput}
                />

               <ModalDropDown
               style = {signUpStyles.selectionType}
               Text = "Please Select a Type" 
               options = {['General User', 'Professional User']}
               />

                <View>
                    <AwesomeButton
                    style = {signUpStyles.buttonCentered}
                    type="primary"
                    textColor= "#000000"
                    progress
                    onPress = {() => this.props.navigation.navigate('ProfileCreation')}
                    >Register
                    </AwesomeButton>
                </View>

            </View>
            </TouchableOpacity>
            </KeyboardAvoidingView>
            
        );
    }
}

export default signUpScreen;

const signUpStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'rgb(159,210,202)',
        alignItems: "center",
        justifyContent: "center"
    },

    textBoxContainer:{
        marginTop: 10,
        backgroundColor: 'rgb(255,223,253)',

    },

    buttonCentered:{
        marginTop: 20,
        alignSelf: "center"
    },
    selectionType: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    }

})