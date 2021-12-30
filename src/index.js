/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, Text, View} from 'react-native'
import Catalog from './pages/catalog/index'
import Routers from './router'

import Cart from './pages/cart'


const App = () =>  {
  return (
   
    <>
  <StatusBar barStyle='light-content' backgroundColor="#312e28" />
   <Routers/>
 
  
   </>


    
  );
};


export default App;
