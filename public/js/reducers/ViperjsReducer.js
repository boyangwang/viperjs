'use strict';
const esprima = require('esprima');

const initialState = {
    inputs: [],
    currentInput: '',
};
module.exports = (state, action) => {
    const oldState = state || initialState;
    const newState = Object.assign({}, oldState);
    if (action.type === 'input') {
        const input = action.value;
        if (input && oldState.currentInput !== input) {
            newState.currentInput = input;
            return newState;
        }
    } else if (action.type === 'start') {
        if (oldState.inputs[oldState.inputs.length - 1] !== oldState.currentInput) {
            newState.inputs = [...oldState.inputs, oldState.currentInput];
            try {
                newState.outputTokenized = esprima.tokenize(oldState.currentInput);
            } catch (e) {
                newState.outputTokenized = e;
            }
            try {
                newState.outputParsed = esprima.parse(oldState.currentInput);
            } catch (e) {
                newState.outputParsed = e;
            }
            return newState;
        }
    }
    return oldState;
};
