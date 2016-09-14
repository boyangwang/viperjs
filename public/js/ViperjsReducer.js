'use strict';

const initialState = {
    inputs: []
};
let ViperjsReducer = module.exports = (state, action) => {
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
};
