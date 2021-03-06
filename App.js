import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './src/reducers';
import { Header } from './src/components/common';
import LibraryList from './src/components/LibraryList.js';

class App extends Component {

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex:1 }}>
          <Header headerText="Tech Stack"> </Header>
          <LibraryList />
        </View>
      </Provider>
      )
}


};

export default App;
