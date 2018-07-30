import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import NavigationContainer from './src/containers/navigation/NavigationContainer';
import store from './src/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('InstagramClone', () => App);