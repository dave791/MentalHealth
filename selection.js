import React from 'react';
import {StyleSheet, View, Text, Picker} from "react-native";

class selectType extends React.Component{
    state = {user: ''}
    updatedUser = (user) => {
        this.setState({user:user})
    }
    render(){
        return(
            <View style = {selectContainerStyle.selectContainer}>
                <Picker selectedValue = {this.state.user} onValueChange = {this.updatedUser}>
                    <Picker.Item label = "General User" value = "Regular User" />
                    <Picker.Item label = "Professional User" value = "Therapist"/>
                </Picker>
                <Text>{this.state.user}</Text>
            </View>
        )
    }

}

export default selectType;

const selectContainerStyle = StyleSheet.Create({
    selectContainer: {
        marginTop: 10,
        alignSelf: "center",
        color: "red"
    },
    textInner:{
        alignSelf: "Center"
    }

})