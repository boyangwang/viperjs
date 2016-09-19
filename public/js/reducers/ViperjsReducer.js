import esprima from 'esprima';
import viperjsUtil from '../viperjs-util.js';

const initialState = {
    historyInputs: [],
    currentInput: '',
    historyTokenizeds: [],
    historyParseds: [],
    isShowHistoryInputs: false,
    isShowHistoryTokenizeds: false,
};
const actionReducers = {};
let nextId = 0;
function reducer(oldState, action) {
    if (Object.keys(actionReducers).includes(action.type)) {
        return actionReducers[action.type](oldState, action, Object.assign({}, oldState))
            || oldState;
    }
    return oldState;
}
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
actionReducers.toggleHistoryInputs = (oldState, action, newState) => {
    newState.isShowHistoryInputs = !oldState.isShowHistoryInputs;
    return newState;
};
actionReducers.toggleHistoryTokenizeds = (oldState, action, newState) => {
    newState.isShowHistoryTokenizeds = !oldState.isShowHistoryTokenizeds;
    return newState;
};

export { reducer, initialState };
