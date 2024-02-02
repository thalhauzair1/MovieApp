import React, { useState } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import MovieListAndSorting from './MovieListAndSorting';
import TvListAndSorting from './TvShowListAndSorting';
import SearchPage from './SearchPage';

const Home = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'movies', title: 'Movies' },
    { key: 'search', title: 'Search Results' },
    { key: 'tvShows', title: 'TV Shows' },
  ]);

  const renderScene = SceneMap({
    movies: () => <MovieListAndSorting navigation={navigation} />,
    search: () => <SearchPage navigation={navigation}/>,
    tvShows: () => <TvListAndSorting navigation={navigation}/>,
  });

  const renderTabBar = (props) => (
    <TabBar
    activeColor='$rgb(63, 81, 181)'
      {...props}
      indicatorStyle={{ backgroundColor: 'blue' }}
      style={{ backgroundColor: 'white' }}
      labelStyle={{ color: 'black' }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
  );
};

export default Home;
