import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, Pressable, View, ScrollView,} from 'react-native';

const CollectionImages = () => {
    return(
        <Text>
            CollectionImages
        </Text>
    );
}

export default CollectionImages;

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
        flex: 1,
    },

    contentContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        flexWrap: 'wrap'
    },

    collection: {
        borderColor: 'red',
        borderWidth: 1,
        height: 200,
        width: '48%',
        borderRadius: 20,
        marginBottom: 10,
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },

    collectionName: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#09090963',
        fontSize: 18,
    }
});