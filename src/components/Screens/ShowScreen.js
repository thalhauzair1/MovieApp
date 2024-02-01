import React, { useLayoutEffect } from 'react';
import { HStack, Image, Text, VStack } from "@gluestack-ui/themed";
import { useRoute } from '@react-navigation/native';


const ShowScreen = ({ navigation }) => {
    const route = useRoute();
    const { object } = route.params;
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: object.title,

        });
    }, [navigation, object.title]);

    return (
        <VStack alignItems='center' gap={55}>
            <Text> </Text>
            <VStack gap={40} alignItems='center' justifyContent='center'>
                {object.title ? (
                    <Text fontWeight='bold'>{object.title}</Text>
                ) : (
                    <Text fontWeight='bold'>{object.name}</Text>
                )}                
                <Image
                    size="2xl"
                    alt="movie Image"
                    borderRadius="$lg"
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500/${object.poster_path}`,
                    }}
                />
                <Text> {object.overview}</Text>
                <HStack gap={6}>
                    <Text>Popularity: {object.popularity}</Text>
                    <Text>Release Date: {object.release_date}</Text>
                </HStack>

            </VStack>
        </VStack>
    );
};

export default ShowScreen;
