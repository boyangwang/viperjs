'use strict';
require('../css/fonts.css');
const React = require('react');
const ReactDOM = require('react-dom');
const Redux = require('redux');
const ReactRedux = require('react-redux');
const ViperjsApp = require('./ViperjsApp.react.js');

const initialState = {
    inputs: []
};
let ViperjsStore = Redux.createStore((state, action) => {
    state = state || initialState;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'input':
            if (action.value && state.inputs.slice(-1)[0] != action.value) {
                newState.inputs = [...state.inputs, action.value];
                return newState;
            }
    }
    return state;
});
ReactDOM.render(React.createElement(ReactRedux.Provider, {
    store: ViperjsStore
}, React.createElement(ViperjsApp)), document.getElementById('viperjs-wrapper'));
