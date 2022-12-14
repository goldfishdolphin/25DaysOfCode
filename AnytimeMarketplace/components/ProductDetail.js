import { FlatList, Box, NativeBaseProvider, View, Center, Button } from "native-base";
import { Text } from "native-base";
import React from "react";
import { useEffect } from "react";
import { create } from "apisauce";
import { useState } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation();
export default function ProductDetail({ navigation, id }) {
    const [data, setData] = useState([]);

    const api = create({
        baseURL: "https://fakestoreapi.com/products/",
    });

    const fetchData = () => {
        api
            .get('1')
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

            </Box>
        );
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <NativeBaseProvider>
            <Center flex={1}>
                {data && (
                    <View>
                        <Text>{data.category}</Text>
                        <Text>{data.id}</Text>

                    </View>
                )}
            </Center>
        </NativeBaseProvider>
    );
}