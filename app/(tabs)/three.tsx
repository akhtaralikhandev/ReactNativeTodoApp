import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import TodoApp from '../../components/todo/app'
const HelloWorld: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/abc.jpg')} // Update with your image path
                style={styles.image}
            />
            <TodoApp />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    image: {
        width: 200, // Set the desired width
        height: 200, // Set the desired height
        marginBottom: 16,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default HelloWorld;
