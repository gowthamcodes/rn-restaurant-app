import React from 'react';
import { LogBox } from 'react-native';
import { store, persistor } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Navigators from './src/navigators';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigators />
      </PersistGate>
    </Provider>
  );
}

LogBox.ignoreAllLogs();

export default App;
