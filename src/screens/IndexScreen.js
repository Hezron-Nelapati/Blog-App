import React, { useContext } from 'react';
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'; 
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {

    const { state, deleteBlogPost } = useContext(Context);

    return (
        <View>
            <FlatList 
                data={state}
                keyExtractor={(blogPost) => {blogPost.title}}
                renderItem={({ item })=>{
                    return (
                        <TouchableOpacity onPress={() => {navigation.navigate('Show', { id: item.id })}}>
                        <View style={styles.row}>
                            <Text style={styles.titleStyle}>{item.title}</Text>
                            <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}}>
                                <Feather name='trash' style={styles.trashStyle}/>
                            </TouchableOpacity>
                        </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => {
            return (
                <View style={{ backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                    <Feather name='plus' size={30} style={{paddingRight: 10, backgroundColor: 'white'}}/>
                </TouchableOpacity>
                </View>
            );
        }
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 2,
        borderColor: 'grey',
        paddingHorizontal: 10
    },
    titleStyle: {
        fontSize: 18
    },
    trashStyle: {
        fontSize: 24
    }

});

export default IndexScreen;