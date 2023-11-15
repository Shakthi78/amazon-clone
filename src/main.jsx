import React from 'react'
import ReactDOM from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import App from './App.jsx'
import './index.css'
import { store, persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
