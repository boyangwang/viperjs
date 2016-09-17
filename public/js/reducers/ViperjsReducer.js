'use strict';
const esprima = require('esprima');
const viperjsUtil = require('../viperjs-util.js');

module.exports.initialState = {
    historyInputs: [],
    currentInput: '',
    historyTokenizeds: [],
    historyParseds: [],
};
const actionReducers = {};
let nextId = 0;
module.exports.reducer = (oldState, action) => {
    if (Object.keys(actionReducers).includes(action.type)) {
        return actionReducers[action.type](oldState, action, Object.assign({}, oldState))
            || oldState;
    }
    return oldState;
};
actionReducers.input = (oldState, action, newState) => {
    const input = action.value;
    if (input && oldState.currentInput !== input) {
        newState.currentInput = input;
        return newState;
    }
};
actionReducers.tokenize = (oldState, action, newState) => {
    const lastHistoryInput = viperjsUtil.peek(oldState.historyInputs);
    if (!lastHistoryInput ||
        lastHistoryInput.value !== oldState.currentInput) {
        const currentId = nextId++;
        newState.historyInputs = [...oldState.historyInputs,
            { id: currentId, value: oldState.currentInput }];
        const currentInputObj = { id: currentId };
        newState.historyTokenizeds = [...oldState.historyTokenizeds,
            currentInputObj];
        try {
            currentInputObj.value =
                esprima.tokenize(oldState.currentInput);
        } catch (e) {
            currentInputObj.value = e;
        }
        return newState;
    }
};
actionReducers.parse = (oldState, action, newState) => {
    const lastTokenized = viperjsUtil.peek(oldState.historyTokenizeds);
    if (!lastTokenized) {
        return;
    }
    if (!viperjsUtil.peek(oldState.historyParseds) ||
        viperjsUtil.peek(oldState.historyParseds).id !== lastTokenized.id) {
        const currentParsedObj = { id: lastTokenized.id };
        newState.historyParseds = [...oldState.historyParseds, currentParsedObj];
        try {
            currentParsedObj.value =
                esprima.parse(oldState.historyInputs.find(
                    elem => elem.id === lastTokenized.id).value);
        } catch (e) {
            currentParsedObj.value = e;
        }
        return newState;
    }
};
