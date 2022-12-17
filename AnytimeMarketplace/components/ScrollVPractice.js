import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text, RefreshControl } from "react-native";
function ScrollVPractice() {
    const [items, setItems] = useState([
        { key: 1, item: 'Item1' },
        { key: 2, item: 'Item2' },
        { key: 3, item: 'Item4' },
        { key: 4, item: 'Item4' },
        { key: 5, item: 'Item5' },
        { key: 6, item: 'Item6' },
        { key: 7, item: 'Item7' },
        { key: 0, item: 'Item1' },
        { key: 11, item: 'Item11' },
        { key: 10, item: 'Item10' },
        { key: 8, item: 'Item8' },
        { key: 9, item: 'Item9' },
    ]);
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        setItems([...items, { key: 90, item: 'item9' }]);
        setRefreshing(false);
    };
    return (
        <ScrollView horizontal={false}
            style={styles.body}
            refreshControl={<RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                color={'white'}
            />}
        >
            {items.map((object) => {
                return (
                    <View style={styles.item} key={object.key}>
                        <Text style={styles.text}>{object.item}</Text>
                    </View>
                );
            })}
        </ScrollView>
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
export default ScrollVPractice;