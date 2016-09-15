'use strict';
require('../css/fonts.css');
const React = require('react');
const ReactDOM = require('react-dom');
const Redux = require('redux');
const ReactRedux = require('react-redux');
const ViperjsApp = require('./components/ViperjsApp.react.js');
const ViperjsReducer = require('./reducers/ViperjsReducer.js');

ReactDOM.render(React.createElement(ReactRedux.Provider, {
    store: Redux.createStore(ViperjsReducer),
}, React.createElement(ViperjsApp)), document.getElementById('viperjs-wrapper'));
