import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.labelStyle}>Enter Title:</Text>
            <TextInput 
                style={styles.inputStyle}
                value={title}
                onChangeText={(text) => {setTitle(text)}}
            />
            <Text style={styles.labelStyle}>Enter Content:</Text>
            <TextInput 
                style={styles.inputStyle}
                value={content}
                onChangeText={(content) => {setContent(content)}}
                multiline
            />
            <Button 
                title='Save'
                onPress={() => {
                    onSubmit(title, content);
                }}
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 2,
        borderColor: 'black',
        fontSize: 18,
        marginHorizontal: 5,
        marginBottom: 10,
        paddingLeft: 5
    },
    labelStyle: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default BlogPostForm;