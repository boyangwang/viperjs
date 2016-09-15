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
            try {
                newState.outputTokenized = esprima.tokenize(input);
            } catch (e) {
                newState.outputTokenized = e;
            }
            try {
                newState.outputParsed = esprima.parse(input);
            } catch (e) {
                newState.outputParsed = e;
            }
            return newState;
        }
    }
    return oldState;
};
