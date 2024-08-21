import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Toaster } from './components/ui/sonner.jsx';
import { Provider } from 'react-redux';
// import { UserProvider } from './components/shared/UserContext.js';
import store from './redux/store.js';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {/* <UserProvider> */}
        <App />
        {/* </UserProvider> */}

        <Toaster />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
