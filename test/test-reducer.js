import { expect } from 'chai';
import { reducer, initialState } from '../public/js/reducers/ViperjsReducer.js';

describe('State reducer', () => {
    let state;
    beforeEach(() => {
        state = initialState;
    });
    it('should start with initialState', () => {
        expect(state).deep.equal(initialState);
    });
    it('should ignore unknown action type', () => {
        const newState = reducer(state, { type: 'xxx', value: 'xxx' });
        expect(newState).equal(state);
    });
    it('should handle toggleHistoryInputs', () => {
        const newState = reducer(state, { type: 'toggleHistoryInputs'});
        state.isShowHistoryInputs = true;
        expect(newState).deep.equal(state);
    });
    it('should handle toggleHistoryTokenizeds', () => {
        const newState = reducer(state, { type: 'toggleHistoryTokenizeds'});
        state.isShowHistoryTokenizeds = true;
        expect(newState).deep.equal(state);
    });
    it('should handle toggleHistoryParseds', () => {
        const newState = reducer(state, { type: 'toggleHistoryParseds'});
        state.isShowHistoryParseds = true;
        expect(newState).deep.equal(state);
    });
});

