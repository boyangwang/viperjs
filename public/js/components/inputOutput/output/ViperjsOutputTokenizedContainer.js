import React from 'react';
import ViperjsOutputCurrentTokenized from './ViperjsOutputCurrentTokenized.js';
import ViperjsOutputHistoryTokenizeds from './ViperjsOutputHistoryTokenizeds.js';
import ViperjsOutputParseButton from './ViperjsOutputParseButton.js';

class ViperjsOutputTokenizedContainer extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-output-tokenized-container',
            },
            React.createElement(ViperjsOutputCurrentTokenized),
            React.createElement(ViperjsOutputParseButton),
            React.createElement(ViperjsOutputHistoryTokenizeds)
        );
    }
}

export default ViperjsOutputTokenizedContainer;
