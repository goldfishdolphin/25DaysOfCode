import React, { useState } from 'react';
import { View, StyleSheet, Text, SectionList, RefreshControl } from "react-native";

function PracticeSectionList() {
    const [Sections, setSections] = useState(
        [
            {
                title: `Title 1`,
                data: [`Item 1 -1`, `Item 1 -2`]
            }
        ]);

    const [Refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        const indexNumber = Sections.length + 1;
        setSections([...Sections, {
            title: `Title ${indexNumber}`,
            data: [`Item ${indexNumber} -1`, `Item ${indexNumber} -2`]
        }
        ]);
        setRefreshing(false);
    };
    return (
        <SectionList
            style={styles.body}
            keyExtractor={(item, index) => index.toString()}
            sections={Sections}
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
            refreshControl={<RefreshControl
                refreshing={Refreshing}
                onRefresh={onRefresh}
            />
            }
        />

    );
};
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