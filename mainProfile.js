import React from 'react';
import { Image, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import AwesomeButton from "react-native-really-awesome-button/src/themes/cartman";

class profileScreen extends React.Component{
    render(){
        return(
            <KeyboardAvoidingView style = {mainProfileStyle.container}>
                <TouchableOpacity>
                    <View>
                        <Text>Profile</Text>

                        <View style = {mainProfileStyle.mainProfileButton}>
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
                        onPress = {() => this.props.navigation.navigate('Reminder')}
                        >Reminder
                        </AwesomeButton>

                        <AwesomeButton
                        type="primary"
                        textColor= "#000000"
                        onPress = {() => this.props.navigation.navigate('null')}
                        >Profile
                        </AwesomeButton>

                        </View>
                    
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

export default profileScreen;

const mainProfileStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'rgb(159,210,202)',
        alignItems: "center",
        justifyContent: "center",
    },

    mainProfileButton:{
        flexDirection: 'row',
        marginTop: 520
    }
})