'use strict';
require('../css/fonts.css');
require('../css/viperjs-input-output.css');
require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');
const Redux = require('redux');
const ReactRedux = require('react-redux');
const ViperjsApp = require('./components/ViperjsApp.js');
const ViperjsReducer = require('./reducers/ViperjsReducer.js');

const ViperjsStore = Redux.createStore(ViperjsReducer.reducer, ViperjsReducer.initialState,
    window.devToolsExtension && window.devToolsExtension());
ReactDOM.render(React.createElement(ReactRedux.Provider, {
    store: ViperjsStore,
}, React.createElement(ViperjsApp)), document.getElementById('viperjs-wrapper'));
