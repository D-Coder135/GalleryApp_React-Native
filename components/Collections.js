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

            <View style = {styles.body}>
                <ScrollView style = {styles.scroll} contentContainerStyle = {styles.contentContainerStyle}>
                    <Pressable style = {styles.collection}></Pressable>
                    <Pressable style = {styles.collection}></Pressable>
                </ScrollView>
            </View>
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
    },

    scroll: {
        // backgroundColor: 'red',
    },

    contentContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },

    collection: {
        borderColor: 'red',
        borderWidth: 1,
        height: 200,
        width: '48%',
        borderRadius: 20,
    }
});