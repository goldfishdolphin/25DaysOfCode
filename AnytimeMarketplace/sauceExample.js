import { FlatList, Box, NativeBaseProvider, Center } from "native-base";
import { Text } from "native-base";
import React from "react";
import { useEffect } from "react";
import { create } from "apisauce";
import { useState } from "react";
import { Image } from "react-native";

export default function SauceExample() {
    const [data, setData] = useState([]);
    const api = create({
        baseURL: "https://fakestoreapi.com/products",
    });

    const fetchData = () => {
        api
            .get("")
            .then((response) => response.data)
            .then((data) => setData(data));
    };

    const renderItem = ({ item }) => {
        return (
            <Box px={5} py={2} rounded="md" my={2}>
                {item.title}
                <Text>price: £{item.price}</Text>
                <Image
                    source={{ uri: item.image }}
                    style={{ width: 100, height: 100 }}
                />
                {item.rate}
            </Box>
        );
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <NativeBaseProvider>
            <Center flex={1}>
                <Box> Items for Sale</Box>
                {data && (
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                )}
            </Center>
        </NativeBaseProvider>
    );
}