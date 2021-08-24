import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import store from '@store/store'
import './index.scss'

const RootComponent = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(<RootComponent/>, document.getElementById('root'));
