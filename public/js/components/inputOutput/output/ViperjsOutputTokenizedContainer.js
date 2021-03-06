import React from 'react';
import ViperjsOutputCurrentTokenized from './ViperjsOutputCurrentTokenized.js';
import ViperjsOutputHistoryTokenizeds from './ViperjsOutputHistoryTokenizeds.js';
import ViperjsOutputParseButton from './ViperjsOutputParseButton.js';
import ViperjsInputToggleHistoryTokenizedsButton from './ViperjsInputToggleHistoryTokenizedsButton.js';

class ViperjsOutputTokenizedContainer extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-output-tokenized-container',
            },
            React.createElement(ViperjsOutputCurrentTokenized),
            React.createElement(
                'div', {
                    style: {
                        width: '100%',
                        position: 'relative',
                    },
                },
                React.createElement(ViperjsOutputParseButton),
                React.createElement('div', { className: 'bar' }),
                React.createElement('circle', { className: 'circle' }),
                React.createElement(ViperjsInputToggleHistoryTokenizedsButton)
            ),
            React.createElement(ViperjsOutputHistoryTokenizeds)
        );
    }
}

export default ViperjsOutputTokenizedContainer;
