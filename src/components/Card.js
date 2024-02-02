import React from "react";
import { VStack, HStack, Image, Text, Button, ButtonText } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

const Card = ({ id, type, object, navigation }) => (
  <HStack style={styles.cardContainer}>
    <Image style={styles.cardImage}
      size="xl"
      alt="movie Image"
      borderRadius="$lg"
      source={{
        uri: `https://image.tmdb.org/t/p/w500/${object.poster_path}`,
      }}
    />
    <VStack key={id} space="sm" style={styles.contentContainer}>
      {object.title ? (
        <Text>{object.title}</Text>
      ) : (
        <Text>{object.name}</Text>
      )}
      <Text>Popularity: {object.popularity}</Text>
      <Text>Release Date: {object.release_date || object.first_air_date
}</Text>
      <Button
       bg="$indigo600"
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={() => { navigation.navigate('Back To List', { id,type }) }}
      >
        <ButtonText>More Details </ButtonText>
      </Button>
    </VStack>
  </HStack>
);

const styles= StyleSheet.create({
  cardContainer:{
    display:'flex',

  },
  cardImage: {
    objectFit:'contain',
    height:170  
    
  },
  contentContainer:{
    display:'flex',
    flex: 2,
    padding:10,
    paddingRight:30
  }
})


export default Card;
