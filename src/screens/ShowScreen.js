import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');

    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id == id);

    return (
        <View>
            <Text style={styles.titleStyle}>{blogPost.title}</Text>
            <Text style={styles.contentStyle}>{blogPost.content}</Text>
        </View>
    );
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => {
            return (
                <TouchableOpacity onPress = {() => navigation.navigate('Edit', { id: navigation.getParam('id') } )}>
                    <EvilIcons name='pencil' size={30}/>
                </TouchableOpacity>
            );
        }
    };
}

const styles = StyleSheet.create({
    titleStyle: {
        marginHorizontal: 10,
        fontSize: 20
    },
    contentStyle: {
        marginTop: 10,
        marginHorizontal: 10,
        fontSize: 17
    }
});

export default ShowScreen;