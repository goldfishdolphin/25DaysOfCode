import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Text, RefreshControl } from "react-native";

function FlatlistPractice() {
    const [items, setItems] = useState([
        { key: '1', name: 'Item1' },
        { key: '2', name: 'Item2' },
        { key: '3', name: 'Item4' },
        { key: '4', name: 'Item4' },
        { key: '5', name: 'Item5' },
        { key: '6', name: 'Item6' },
        { key: '7', name: 'Item7' },
        { key: '0', name: 'Item1' },
        { key: '11', name: 'Item11' },
        { key: '10', name: 'Item10' },
        { key: '8', name: 'Item8' },
        { key: '9', name: 'Item9' },
    ]);
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        setItems([...items, { key: '202', name: 'item99' }]);
        setRefreshing(false);
    };
    return (

        <FlatList style={styles.body}
            keyExtractor={(item, index) => index.toString()}
            data={items}
            renderItem={({ item }) => (
                <View style={styles.item} >
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            )}
            refreshControl={<RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                color={'white'}
            />}
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

export default FlatlistPractice;