import React, { useState, useEffect } from 'react';
import { Text, VStack } from '@gluestack-ui/themed';
import Card from './Card'; 
import { getMovies } from './api';
import SortDropDown from './SortDropDown';

const MovieListWithSorting = ({ navigation }) => {
  const [sortBy, setSortBy] = useState('popular');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const fetchedMovies = await getMovies(sortBy);
        setMovies(fetchedMovies.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError(error.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [sortBy]);

  const handleSelectChange = (selectedValue) => {
    setSortBy(selectedValue);
  };

  const sortingOptions = [
    { label: 'Popular', value: 'popular' },
    { label: 'Now Playing', value: 'now_playing' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];

  return (
    <VStack space="md">
      <SortDropDown onValueChange={handleSelectChange} options={sortingOptions} />

      
      {loading ? (
        <Text>Loading movies...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : movies && movies.length > 0 ? (
        <VStack space="md">
          {movies.map((movie) => (
            <Card key={movie.id} object={movie} navigation={navigation} />
          ))}
        </VStack>
      ) : (
        <Text>No movies found.</Text>
      )}
    </VStack>
  );
};

export default MovieListWithSorting;
