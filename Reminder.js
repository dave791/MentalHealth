import React from 'react';
import { Image, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import AwesomeButton from "react-native-really-awesome-button/src/themes/cartman";

class reminderScreen extends React.Component{
    render(){
        return(
            <KeyboardAvoidingView style = {reminderStyle.container}>
                <TouchableOpacity>
                    <View>
                        <Text>Reminder</Text>

                        <View style = {reminderStyle.reminderButton}>
                        <AwesomeButton
                        
                        type="primary"
                        textColor= "#000000"
                        onPress = {() => this.props.navigation.navigate('NewsFeed')}
                        >NewsFeed
                        </AwesomeButton>

                        <AwesomeButton
                        type="primary"
                        textColor= "#000000"
                        onPress = {() => this.props.navigation.navigate('Therapist')}
                        >Therapist Near Me
                        </AwesomeButton>

                        <AwesomeButton
                        type="primary"
                        textColor= "#000000"
                        onPress = {() => this.props.navigation.navigate('Null')}
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

export default reminderScreen;

const reminderStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'rgb(159,210,202)',
        alignItems: "center",
        justifyContent: "center",
    },

    reminderButton:{
        flexDirection: 'row',
        marginTop: 520
    }
})