import React, { useState, useEffect } from "react";
import {
  Text,
  VStack
} from "@gluestack-ui/themed";
import Card from './Card'; 
import { getTvShows } from "./api";
import SortDropDown from "./SortDropDown";

const TvListAndSorting = ({ navigation }) => {
  const [sortBy, setSortBy] = useState("popular");
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        setLoading(true);
        const fetchedTvShows = await getTvShows(sortBy);
        setTvShows(fetchedTvShows.results);
      } catch (error) {
        console.error("Error fetching TV shows:", error);
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchTvShows();
  }, [sortBy]);

  const handleSelectChange = (selectedValue) => {
    setSortBy(selectedValue);
  };

  const sortingOptions = [
    { label: 'Airing Today', value: 'airing_today' },
    { label: 'On The Air', value: 'on_the_air' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Popular', value: 'popular' },
  ];

  return (
    <VStack space="md">
      <SortDropDown onValueChange={handleSelectChange} options={sortingOptions} />

      {loading ? (
        <Text>Loading TV shows...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : tvShows && tvShows.length > 0 ? (
        <VStack space="md">
          {tvShows.map((tvShow) => (
            <Card key={tvShow.id} object={tvShow} navigation={navigation} />
          ))}
        </VStack>
      ) : (
        <Text>No TV shows found.</Text>
      )}
    </VStack>
  );
};

export default TvListAndSorting;
