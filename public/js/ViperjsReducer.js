'use strict';
const esprima = require('esprima');

const initialState = {
    inputs: [],
};
module.exports = (state, action) => {
    const oldState = state || initialState;
    const newState = Object.assign({}, oldState);
    if (action.type === 'input') {
        const input = action.value;
        if (input && state.inputs.slice(-1)[0] !== input) {
            newState.inputs = [...state.inputs, input];
            newState.outputTokenized = esprima.tokenize(input);
            newState.outputParsed = esprima.parse(input);
            return newState;
        }
    }
    return oldState;
};
