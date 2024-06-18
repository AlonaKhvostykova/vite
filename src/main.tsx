import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
// import store from './redux/store.ts'
import { storeRTK } from './redux_rtk/storeRTK.ts'
import {HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={storeRTK}>
      <HashRouter>
        <App />
        </HashRouter>
    </Provider>
  </React.StrictMode>,
)
