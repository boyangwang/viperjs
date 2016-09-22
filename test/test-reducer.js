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
        const expectedNewState = Object.assign({}, state, {isShowHistoryInputs: true});
        const newState = reducer(state, { type: 'toggleHistoryInputs'});
        expect(newState).deep.equal(expectedNewState);
    });
    it('should handle toggleHistoryTokenizeds', () => {
        const expectedNewState = Object.assign({}, state, {isShowHistoryTokenizeds: true});
        const newState = reducer(state, { type: 'toggleHistoryTokenizeds'});
        expect(newState).deep.equal(expectedNewState);
    });
    it('should handle toggleHistoryParseds', () => {
        const expectedNewState = Object.assign({}, state, {isShowHistoryParseds: true});
        const newState = reducer(state, { type: 'toggleHistoryParseds'});
        expect(newState).deep.equal(expectedNewState);
    });
});

