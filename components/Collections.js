import React from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';

const Collections = ({navigation}) => {
    return(
        <Pressable onPress = {() => {navigation.navigate('CollectionImages')}}>
        <Text>
            Collections
        </Text>
        </Pressable>
    );
}

export default Collections;

const styles = StyleSheet.create({
    
});