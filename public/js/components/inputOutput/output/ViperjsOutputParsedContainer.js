import React from 'react';
import ViperjsOutputCurrentParsed from './ViperjsOutputCurrentParsed.js';
import ViperjsOutputHistoryParseds from './ViperjsOutputHistoryParseds.js';
import ViperjsInputToggleHistoryParsedsButton from './ViperjsInputToggleHistoryParsedsButton.js';

class ViperjsOutputParsedContainer extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-output-parsed-container',
            },
            React.createElement(ViperjsOutputCurrentParsed),
            React.createElement(
                'div', {
                    style: {
                        width: '100%',
                    },
                },
                React.createElement(ViperjsInputToggleHistoryParsedsButton)
            ),
            React.createElement(ViperjsOutputHistoryParseds)
        );
    }
}

export default ViperjsOutputParsedContainer;
