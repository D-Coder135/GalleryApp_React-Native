import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, Pressable, View, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const CollectionImages = ({navigation}) => {
    const [collection, setCollection] = useState([]);
    return(
        <View style = {styles.collectionComponent}>
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

            <View style = {styles.body}>
                <ScrollView style = {styles.scroll} contentContainerStyle = {styles.contentContainerStyle}>
                    {collection.map((item, index) => (
                        <Pressable 
                        style = {{...styles.collection}} 
                        android_ripple = {{color: 'lightgray', borderless: true}}
                        >
                            <Image source = {{uri: `https://picsum.photos/seed/${index + 800}/200`}} style = {styles.image}/>
                            {/* <Text style = {styles.collectionName}>{itemName}</Text> */}
                        </Pressable>
                    ))
                    }
                    {/* <Pressable style = {styles.collection} android_ripple = {{color: 'lightgray', borderless: true}}></Pressable> */}
                </ScrollView>
            </View>
        </View>
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
        // borderColor: 'red',
        // borderWidth: 1,
        height: 150,
        width: '31.33%',
        borderRadius: 15,
        marginBottom: 15,
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },

    backButton: {
        position: 'absolute',
        top: 0,
        height: '100%',
        width: '20%',
        padding: 15,
        justifyContent: 'center',
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