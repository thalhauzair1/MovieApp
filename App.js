import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';

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
