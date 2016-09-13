'use strict';
require('../css/fonts.css');
const React = require('react');
const ReactDOM = require('react-dom');
const ViperjsApp = require('./ViperjsApp.react.js');

ReactDOM.render(React.createElement(ViperjsApp, null), document.getElementById('viperjs-app'));
