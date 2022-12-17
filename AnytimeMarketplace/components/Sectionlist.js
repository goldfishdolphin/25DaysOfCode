import React, { useState } from 'react';
import { View, StyleSheet, Text, RefreshControl, SectionList } from "react-native";

function Sectionlist() {
    const DATA = [

        {
            title: 'Biscuits',
            data: ['custard cream', 'oreo', 'chocolate-chip']
        },
        {
            title: 'Ice-cream',
            data: ['vanilla', 'strawberry', 'mint', 'raspberry']
        },
        {
            title: 'soft drinks',
            data: ['pepsi', 'sprite', 'fanta']
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

export default Sectionlist;