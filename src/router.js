import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/header/index'

import Pages from './pages/catalog/index'
import Cart from './pages/cart/index'


import FeatherIcon from 'react-native-vector-icons/Feather'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
            headerShown:true,
            headerStyle:{ backgroundColor: '#1C1C1C',}                     
            }}
    initialRouteName='Catalog'
      >
        <Stack.Screen name="Catalog" 
                      component={Pages}
                      options={{
                        headerShown:true,
                        headerTransparent:true,
                        headerTitleAlign:"center",
                        headerTitle:()=><Header/>
                      }} />

      <Stack.Screen name="Cart" 
          component={Cart}
          options={
            {
              headerTransparent:true,
              headerTitle:()=><Header/>,
              headerBackTitleVisible:false,
              headerTransparent: true,
              headerTitleContainerStyle:{ marginLeft:20},
              headerBackImage:()=>(<FeatherIcon name='skip-back' size={24}  />),
              headerTintColor:"#ffff"
          } }
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;