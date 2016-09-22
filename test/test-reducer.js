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
    it('should handle toggleHistoryInputs: false -> true', () => {
        const expectedNewState = Object.assign({}, state, {isShowHistoryInputs: true});
        const newState = reducer(state, { type: 'toggleHistoryInputs'});
        expect(newState).deep.equal(expectedNewState);
    });
    it('should handle toggleHistoryInputs: true -> false', () => {
        const oldState = Object.assign({}, state, {isShowHistoryInputs: true});
        const expectedNewState = Object.assign({}, state, {isShowHistoryInputs: false});
        const newState = reducer(oldState, { type: 'toggleHistoryInputs'});
        expect(newState).deep.equal(expectedNewState);
    });
    it('should handle toggleHistoryTokenizeds: false -> true', () => {
        const expectedNewState = Object.assign({}, state, {isShowHistoryTokenizeds: true});
        const newState = reducer(state, { type: 'toggleHistoryTokenizeds'});
        expect(newState).deep.equal(expectedNewState);
    });
    it('should handle toggleHistoryTokenizeds: true -> false', () => {
        const oldState = Object.assign({}, state, {isShowHistoryTokenizeds: true});
        const expectedNewState = Object.assign({}, state, {isShowHistoryTokenizeds: false});
        const newState = reducer(oldState, { type: 'toggleHistoryTokenizeds'});
        expect(newState).deep.equal(expectedNewState);
    });
    it('should handle toggleHistoryParseds: false -> true', () => {
        const expectedNewState = Object.assign({}, state, {isShowHistoryParseds: true});
        const newState = reducer(state, { type: 'toggleHistoryParseds'});
        expect(newState).deep.equal(expectedNewState);
    });
    it('should handle toggleHistoryParseds: true -> false', () => {
        const oldState = Object.assign({}, state, {isShowHistoryParseds: true});
        const expectedNewState = Object.assign({}, state, {isShowHistoryParseds: false});
        const newState = reducer(oldState, { type: 'toggleHistoryParseds'});
        expect(newState).deep.equal(expectedNewState);
    });
});

