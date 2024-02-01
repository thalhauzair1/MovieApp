import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './src/components/Form';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
// import Header from './src/components/layout/Header';
// import Navigation from './src/components/Navigation';
// import ListMovies from './src/components/Home';
import AppStack from './src/components/stacks/AppStack';

const  App = () => {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}> 
      {/* <Header /> */}
      <AppStack />
      <StatusBar style="auto" />

      {/* <Home /> */}
      </GluestackUIProvider>
    </SafeAreaProvider>

  )
}

export default App
