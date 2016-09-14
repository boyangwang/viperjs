'use strict';

const initialState = {
    inputs: [],
};
module.exports = (state, action) => {
    const oldState = state || initialState;
    const newState = Object.assign({}, oldState);
    switch (action.type) {
    case 'input':
        if (action.value && state.inputs.slice(-1)[0] !== action.value) {
            newState.inputs = [...state.inputs, action.value];
            return newState;
        }
    default:
    }
    return oldState;
};
