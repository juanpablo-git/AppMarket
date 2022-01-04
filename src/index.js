/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, Text, View} from 'react-native'
import Routers from './router'
import {Provider} from 'react-redux'
import store from './store/index'


const App = () =>  {
  return (
   
    <>
    <Provider store={store}>
      <StatusBar barStyle='light-content' backgroundColor="#312e28" />
      <Routers/>
   </Provider>
   </>


    
  );
};


export default App;
