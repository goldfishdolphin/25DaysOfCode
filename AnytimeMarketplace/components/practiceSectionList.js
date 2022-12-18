import React, { useState } from 'react';
import { View, StyleSheet, Text, SectionList } from "react-native";

function PracticeSectionList() {
    const [number, setNumber] = useState(1);
    const DATA = [
        {
            title: `Title ${number}`,
            data: [`Item ${number}`]
        }
    ];
    return (
        <SectionList
            style={styles.body}
            keyExtractor={(item, index) => index.toString()}
            sections={DATA}
            renderItem={({ item }) => (
                <View style={styles.item} >
                    <Text style={styles.text}>{item}</Text>
                </View>
            )}
            renderSectionHeader={({ section }) => (
                <View style={styles.item} >
                    <Text style={styles.text}>{section.title}</Text>
                </View>
            )}
        />

    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'purple',
        flexDirection: 'column',
    },
    item: {
        margin: 10,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'brown',
        fontSize: 60,
        fontStyle: 'italic',
        margin: 10
        ,
    }
});
export default PracticeSectionList;