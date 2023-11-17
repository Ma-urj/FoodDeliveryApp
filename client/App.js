import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation';
import { Provider } from 'react-redux'
import store from './store';
import { LogBox } from "react-native"
LogBox.ignoreAllLogs(true)

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}


