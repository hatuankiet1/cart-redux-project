import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import myReducers from './Reducers/index';


const store = createStore(myReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    ,
     
    document.getElementById('root'));


serviceWorker.unregister();
