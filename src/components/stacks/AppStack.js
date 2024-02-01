import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../Screens/IndexScreen";
import ShowScreen from "../Screens/ShowScreen"

const Stack = createNativeStackNavigator()

const AppStack = () =>(
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
        name='Index'
        component={IndexScreen}
        options={{
            title: "Movies App",
            headerStyle:{
                backgroundColor:'#2c3e50'
            },
            headerTitleStyle:{
                color: '#fff'
            },
            headerTitleAlign: 'center'
        }} />
        <Stack.Screen 
        name='Back To List'
        component={ShowScreen}/>
        
    </Stack.Navigator>
</NavigationContainer>
)

export default AppStack