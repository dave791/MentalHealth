import React from 'react';
import { Image, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import AwesomeButton from "react-native-really-awesome-button/src/themes/cartman";

class newsfeedScreen extends React.Component{
    render(){
        return(
            <KeyboardAvoidingView style = {newsfeedStyle.container}>
                <TouchableOpacity>
                    <View>
                        <Text>News Feed</Text>

                        <View style = {newsfeedStyle.newsfeedButton}>
                        <AwesomeButton
                        
                        type="primary"
                        textColor= "#000000"
                        onPress = {() => this.props.navigation.navigate('Null')}
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

export default newsfeedScreen;

const newsfeedStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'rgb(159,210,202)',
        alignItems: "center",
        justifyContent: "center",
    },

    newsfeedButton:{
        flexDirection: 'row',
        marginTop: 520
    }
})