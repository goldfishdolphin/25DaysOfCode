import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, Touchable, TouchableOpacity, TouchableHighlight } from "react-native";
function TextInputPractice() {

    const [name, setName] = useState('');
    const [sumbitted, setSubmitted] = useState(false);
    const onPressHandler = () => {
        setSubmitted(!sumbitted);
    };

    return (
        <SafeAreaView style={styles.body}>
            <Text>Please enter your name:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(value) => setName(value)}
                placeholder='e.g Tom'
            />
            <TouchableHighlight
                onPress={onPressHandler}
                style={styles.button}
                activeOpacity={0.5}
                underlayColor='yellow'
            >
                <Text>
                    {sumbitted ? 'Clear' : "Submit"}
                </Text>
            </TouchableHighlight>
            {/* <Button
                title={sumbitted ? 'Clear' : "Submit"}
                onPress={onPressHandler}
                disabled={sumbitted}
            /> */}
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