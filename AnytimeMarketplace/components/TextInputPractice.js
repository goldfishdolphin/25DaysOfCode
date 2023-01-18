import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, Touchable, TouchableOpacity, TouchableHighlight, Pressable, Alert, Modal, Image, ImageBackground } from "react-native";
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
        <ImageBackground style={styles.body} source={{ uri: 'https://img.freepik.com/free-vector/pink-watercolor-leaves-background_23-2148907681.jpg?w=2000&t=st=1674048801~exp=1674049401~hmac=f9c70ae69bc28e9a5c10f59eb836da7c8b43d577a81aa579087d17476b26bae3' }}>
            <Modal visible={showWarning}
                transparent
                onRequestClose={() => setShowWarning(false)}
            >

                <View style={styles.centered_view}>
                    <View style={styles.warning_modal}>
                        <View style={styles.warning_title}>
                            <Text style={styles.title}>Warning! </Text>
                        </View>
                        <View >
                            <Text> The name must be longer than 3 characters</Text>
                        </View>
                        <Pressable onPress={() => setShowWarning(false)}>
                            <Text style={styles.ok_button}>OK</Text>
                        </Pressable>
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
                <View style={styles.body}>
                    <Text>Your name is {name}</Text><Image style={styles.image}
                        source={require('../assets/done.png')}
                        resizeMode='stretch'
                    />
                </View> :
                <Image style={styles.image}
                    source={require('../assets/error.png')}
                    resizeMode='stretch'
                    blurRadius={1}
                />}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    body: {

        alignItems: 'center',
        flex: 1
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
        alignContent: 'center',
        width: 300,
        height: 300,
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'pink',

    },
    warning_title: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 50,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'purple',
        justifyContent: 'center'
    },
    title: {
        color: 'yellow',

    },
    ok_button: {
        backgroundColor: 'green',
        textAlign: "center",
        padding: 5,
        margin: 50,
        borderRadius: 20,
    },
    image: {
        width: 100,
        height: 100,
        margin: 10
    }
});

export default TextInputPractice;