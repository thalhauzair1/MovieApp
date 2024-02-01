import React from 'react';
import { Text } from "@gluestack-ui/themed";
import { View } from 'react-native';

const SingleMovie = ({ movie }) => {
  return (
    <View>
      <Text>TESTING</Text>
      {/* You can use the 'movie' prop in your component as needed */}
      {/* For example: <Text>{movie.title}</Text> */}
    </View>
  );
};

export default SingleMovie;
