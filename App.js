import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Projetos from './src/screens/listaProjetos'
import onBoarding from './src/screens/onBoarding'
import loginOpcoes from './src/screens/loginOpcoes'
import loginComum from './src/screens/loginComum'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='loginOpcoes'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='loginOpcoes' component={loginOpcoes}/>
          <Stack.Screen name='onBoarding' component={onBoarding}/>
          <Stack.Screen name='listaProjetos' component={Projetos}/>
          <Stack.Screen name="loginComum" component={loginComum}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

