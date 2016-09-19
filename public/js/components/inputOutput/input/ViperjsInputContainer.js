import React from 'react';
import ViperjsInputEditor from './ViperjsInputEditor.js';
import ViperjsInputTokenizeButton from './ViperjsInputTokenizeButton.js';
import ViperjsInputToggleHistoryInputsButton from './ViperjsInputToggleHistoryInputsButton.js';
import ViperjsInputHistoryInputs from './ViperjsInputHistoryInputs.js';

class ViperjsInput extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-input-container',
            },
            React.createElement(ViperjsInputEditor),
            React.createElement(
                'div', {
                    style: {
                        width: '100%',
                        position: 'relative',
                    },
                },
                React.createElement(ViperjsInputTokenizeButton),
                React.createElement('div', { className: 'bar' }),
                React.createElement('circle', { className: 'circle' }),
                React.createElement(ViperjsInputToggleHistoryInputsButton)
            ),
            React.createElement(ViperjsInputHistoryInputs)
        );
    }
}

export default ViperjsInput;
