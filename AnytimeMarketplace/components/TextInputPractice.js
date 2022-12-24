import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, Touchable, TouchableOpacity, TouchableHighlight, Pressable, Alert } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";
function TextInputPractice() {

    const [name, setName] = useState('');
    const [sumbitted, setSubmitted] = useState(false);
    const onPressHandler = () => {
        if (name.length > 3) {

            setSubmitted(!sumbitted);
        } else {
            Alert.alert('Warning', 'The name must be more than three characters', [
                { text: 'Cancel', onPress: () => console.warn('Cancel Pressed') },
                { text: 'Do not show again', onPress: () => console.warn('Do not show Pressed') },
                { text: 'OK', onPress: () => console.warn('Ok Pressed') },
            ], { cancelable: true, onDismiss: () => console.warn('Altert dismissed') });
        }
    };

    return (
        <SafeAreaView style={styles.body}>
            <Text>Please enter your name:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(value) => setName(value)}
                placeholder='e.g Tom'
            />
            <Pressable
                onPress={onPressHandler}
                style={styles.button}

            >
                <Text>
                    {sumbitted ? 'Clear' : "Submit"}
                </Text>
            </Pressable>

            {sumbitted ?
                <Text>Your name is {name}</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    body: {
        alignItems: 'center'
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20
    },
    button: {
        borderWidth: 1,
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'pink'
    }
});

export default TextInputPractice;