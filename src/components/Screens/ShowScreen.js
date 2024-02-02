import React, { useLayoutEffect, useEffect, useState } from 'react';
import { ArrowLeftIcon, HStack, Image, Text, VStack } from "@gluestack-ui/themed";
import { useRoute } from '@react-navigation/native';
import { findItembyID } from '../api';
import { ScrollView, StyleSheet } from 'react-native';

const ShowScreen = ({ navigation }) => {
  const route = useRoute();
  const { object } = route.params;
  const { type } = route.params;
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await findItembyID(object.id, type);
        setItem(fetchedItems);
        console.log(fetchedItems)

      } catch (error) {
        console.error('Error fetching item:', error);
        setError(error.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [object.id]);

  useLayoutEffect(() => {
    if (item) {
      navigation.setOptions({
        headerTitle: item.title || item.name,
        
        headerTitleStyle: {
          fontSize: 16, 
          fontWeight: 'bold',         
        },
        headerTitleAlign:'center'
        
      });
    }
  }, [navigation, item]);

  if (loading) {
    return <Text>Loading...</Text>; 
  }

  if (error) {
    return <Text>Error: {error}</Text>; 
  }

  return (
    <ScrollView>
    <VStack alignItems='center' gap={20}>
      <Text> </Text>
      <VStack gap={40} alignItems='center' >
        {item.title || item.name ? (
            <Text fontWeight='bold'>{item.title ? item.title : item.name}
            </Text>
        ) : (
          <Text fontWeight='bold'>No title available</Text>
        )}
        <Image
          size="2xl"
          alt="movie Image"
          borderRadius="$lg"
          style={styles.imageStyle}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
        />
        <Text p={20}>{item.overview || 'No overview available'}</Text>
        <HStack gap={6}>
          <Text>Popularity: {item.popularity}</Text>
          <Text>Release Date: {item.release_date || item.first_air_date
}</Text>
        </HStack>
      </VStack>
    </VStack>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  imageStyle:{
    objectFit:'contain'
  }
})

export default ShowScreen;
