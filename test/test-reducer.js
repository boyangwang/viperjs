'use strict';
const expect = require('chai').expect;
const reducer = require('../public/js/reducers/ViperjsReducer.js').reducer;
const initialState = require('../public/js/reducers/ViperjsReducer.js').initialState;

describe('State reducer', () => {
    let state;
    beforeEach(() => {
        state = initialState;
    });
    it('should start with initialState', () => {
        expect(state).deep.equal({
            historyInputs: [],
            currentInput: '',
            historyTokenizeds: [],
            historyParseds: [],
        });
    });
    it('should ignore unknown action type', () => {
        const newState = reducer(state, { type: 'xxx', value: 'xxx' });
        expect(newState).equal(state);
    });
});
