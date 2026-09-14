import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Projetos from './src/screens/listaProjetos'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='listaProjetos'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='listaProjetos' component={Projetos}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

