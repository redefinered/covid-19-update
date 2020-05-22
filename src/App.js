import React from 'react';
import RootComponent from 'screens/root.component';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <RootComponent />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
