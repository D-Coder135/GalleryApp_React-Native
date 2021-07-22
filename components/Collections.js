import React from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';

const Collections = ({navigation}) => {
    return(
        <View style = {styles.collectionComponent}>
            <View style = {styles.header}></View>

            <View style = {styles.body}></View>
        </View>
    )
}

export default Collections;

const styles = StyleSheet.create({
    collectionComponent: {
        flex: 1,
        borderColor: 'red',
        borderWidth: 1,
    },

    header: {
        flex: 1,
    },

    body: {

    }
});