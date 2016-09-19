import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ViperjsApp from './components/ViperjsApp.js';
import { reducer, initialState } from './reducers/ViperjsReducer.js';
import '../css/main.css';

const ViperjsStore = createStore(reducer, initialState,
    window.devToolsExtension && window.devToolsExtension());
ReactDOM.render(React.createElement(Provider, {
    store: ViperjsStore,
}, React.createElement(ViperjsApp)), document.getElementById('viperjs-wrapper'));
