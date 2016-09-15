'use strict';
const esprima = require('esprima');

module.exports.initialState = {
    historyInputs: [],
    currentInput: '',
};
module.exports.reducer = (oldState, action) => {
    const newState = Object.assign({}, oldState);
    if (action.type === 'input') {
        const input = action.value;
        if (input && oldState.currentInput !== input) {
            newState.currentInput = input;
            return newState;
        }
    } else if (action.type === 'start') {
        if (oldState.historyInputs[oldState.historyInputs.length - 1] !== oldState.currentInput) {
            newState.historyInputs = [...oldState.historyInputs, oldState.currentInput];
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
