import React from 'react';
import ViperjsInputEditor from './ViperjsInputEditor.js';
import ViperjsInputTokenizeButton from './ViperjsInputTokenizeButton.js';
import ViperjsInputHistoryInputs from './ViperjsInputHistoryInputs.js';

class ViperjsInput extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-input-container',
            },
            React.createElement(ViperjsInputEditor),
            React.createElement(ViperjsInputTokenizeButton),
            React.createElement(ViperjsInputHistoryInputs)
        );
    }
}

export default ViperjsInput;
