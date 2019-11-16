import React from 'react';
import { Image, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import AwesomeButton from "react-native-really-awesome-button/src/themes/cartman";

class therapistScreen extends React.Component{
    render(){
        return(
            <KeyboardAvoidingView style = {therapistStyle.container}>
                <TouchableOpacity>
                    <View>
                        <Text>Therapist</Text>

                        <View style = {therapistStyle.therapistButton}>
                        <AwesomeButton
                        
                        type="primary"
                        textColor= "#000000"
                        onPress = {() => this.props.navigation.navigate('NewsFeed')}
                        >NewsFeed
                        </AwesomeButton>

                        <AwesomeButton
                        type="primary"
                        textColor= "#000000"
                        onPress = {() => this.props.navigation.navigate('Null')}
                        >Therapist Near Me
                        </AwesomeButton>

                        <AwesomeButton
                        type="primary"
                        textColor= "#000000"
                        onPress = {() => this.props.navigation.navigate('Reminder')}
                        >Reminder
                        </AwesomeButton>

                        <AwesomeButton
                        type="primary"
                        textColor= "#000000"
                        onPress = {() => this.props.navigation.navigate('Profile')}
                        >Profile
                        </AwesomeButton>

                        </View>
                    
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

export default therapistScreen;

const therapistStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'rgb(159,210,202)',
        alignItems: "center",
        justifyContent: "center",
    },

    therapistButton:{
        flexDirection: 'row',
        marginTop: 520
    }
})