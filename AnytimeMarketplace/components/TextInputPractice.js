import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button } from "react-native";
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
            <Button
                title={sumbitted ? 'Clear' : "Submit"}
                onPress={onPressHandler}
                disabled={sumbitted}
            />
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
});

export default TextInputPractice;