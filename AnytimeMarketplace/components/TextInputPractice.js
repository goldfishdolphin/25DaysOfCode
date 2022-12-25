import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, Touchable, TouchableOpacity, TouchableHighlight, Pressable, Alert, Modal } from "react-native";
function TextInputPractice() {

    const [name, setName] = useState('');
    const [sumbitted, setSubmitted] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const onPressHandler = () => {
        if (name.length > 3) {

            setSubmitted(!sumbitted);
        } else {
            setShowWarning(true);

        }
    };

    return (
        <View style={styles.body}>
            <Modal visible={showWarning}
                transparent
                onRequestClose={() => setShowWarning(false)}
            >
                <View style={styles.warning_title}>
                    <Text>Warning</Text>
                </View>
                <View style={styles.centered_view}>
                    <View style={styles.warning_modal}>
                        <Text> The name must be longer than 3 characters</Text>
                    </View>
                </View>
            </Modal>
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
        </View>
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
    },
    centered_view: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    warning_modal: {
        backgroundColor: 'grey',
        width: 300,
        height: 300,
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'pink',

    }
});

export default TextInputPractice;