import React from 'react';
import {Text, StyleSheet, View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PreviewImage = () => {
    return(
        <View style = {styles.previewImage}>
            <View style = {styles.header}>
                <Text style = {styles.headerText}>
                    Images
                    <Icon name = {'image'} size = {35} color = {'white'}/>
                </Text>
                <Pressable 
                style = {styles.backButton}
                android_ripple = {{color: 'gray', borderless: true}}
                onPress = {() => {navigation.navigate('Collections')}}
                >
                    <Icon name = {'caret-left'} size = {50} color = {'white'}/>
                </Pressable>
            </View>
        </View>
    );
}

export default PreviewImage;

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'black',
    },

    headerText: {
        flex: 1,
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    
});