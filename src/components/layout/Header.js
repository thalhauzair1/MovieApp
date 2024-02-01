import { Box, StatusBar, Text } from '@gluestack-ui/themed';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = () => {
    return (
        <SafeAreaView >
            <StatusBar backgroundColor='#2c3e50' />
            <Box
                bg='#2c3e50'
                alignItems='center'
                justifyContent='center'
                safeAreaTop={true}
            >
                <Text color='white' fontSize={20} fontWeight='bold'>
                    Movies App
                </Text>
            </Box>

        </SafeAreaView>
    )
}
export default Header