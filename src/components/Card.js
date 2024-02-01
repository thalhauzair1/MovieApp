import React from "react";
import { VStack, HStack, Image, Text, Button, ButtonText } from "@gluestack-ui/themed";

const Card = ({ object, navigation }) => (
  <HStack gap={5}>
    <Image
      size="xl"
      alt="movie Image"
      borderRadius="$lg"
      source={{
        uri: `https://image.tmdb.org/t/p/w500/${object.poster_path}`,
      }}
    />
    <VStack key={object.id} space="sm">
      {object.title ? (
        <Text>{object.title}</Text>
      ) : (
        <Text>{object.name}</Text>
      )}
      <Text>Popularity: {object.popularity}</Text>
      <Text>Release Date: {object.release_date}</Text>
      <Button
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={() => { navigation.navigate('Back To List', { object }) }}
      >
        <ButtonText>More Details </ButtonText>
      </Button>
    </VStack>
  </HStack>
);

export default Card;
