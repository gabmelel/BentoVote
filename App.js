import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Projetos from './src/screens/listaProjetos'
import onBoarding from './src/screens/onBoarding'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='onBoarding'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='onBoarding' component={onBoarding}/>
          <Stack.Screen name='listaProjetos' component={Projetos}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

