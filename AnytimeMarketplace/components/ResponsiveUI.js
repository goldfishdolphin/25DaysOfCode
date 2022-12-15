import React from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView, Image, Linking } from 'react-native';


export default function ResponsiveUI() {
    return (
        <View style={styles.body
        } >
            <View style={styles.row}>
                <View style={styles.view1}>
                    <Text style={styles.text}>1</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.text}>2</Text>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.text}>3</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.view4}>
                    <Text style={styles.text}>4</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.view5}>
                    <Text style={styles.text}>5</Text>
                </View>
            </View>


            <View style={styles.row1}>
                <View style={styles.view6}>
                    <Text style={styles.text}>6</Text>
                </View>
                <View style={styles.view7}>
                    <Text style={styles.text}>7</Text>
                </View>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'lightblue',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    row1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    view1: {
        flex: 1,
        alignItems: 'center',
        fontSize: 40,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    view2: {
        flex: 2,
        alignItem: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        alignItems: 'center',
    },
    view3: {
        flex: 3,
        alignItem: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple',

    },
    view4: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
    },
    view5: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgreen',
    },
    view6: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',

    }, view7: {
        flex: 1,
        alignItems: 'center',
        fontSize: 40,
        justifyContent: 'center',
        backgroundColor: 'blue',

    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        fontStyle: 'italic',
        fontSize: 30
    }
});
