import { black } from 'ansi-colors';
import React from 'react';
import {Text, StyleSheet, Pressable, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const Collections = ({navigation}) => {
    return(
        <View style = {styles.collectionComponent}>
            <View style = {styles.header}>
                <Text style = {styles.headerText}>
                    Collections
                    <Icon name = {'images'} size = {35} color = {'white'}/>
                </Text>
            </View>

            <View style = {styles.body}></View>
        </View>
    )
}

export default Collections;

const styles = StyleSheet.create({
    collectionComponent: {
        flex: 1,
        // borderColor: 'red',
        // borderWidth: 1,
    },

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

    body: {
        flex: 9,
    }
});