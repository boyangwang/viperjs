import React from 'react';
import ViperjsInput from './input/ViperjsInputContainer.js';
import ViperjsOutputTokenizedContainer from './output/ViperjsOutputTokenizedContainer.js';
import ViperjsOutputParsedContainer from './output/ViperjsOutputParsedContainer.js';

class ViperjsInputOutput extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-input-output',
                style: {
                    marginTop: '4.5em',
                },
            },
            React.createElement(ViperjsInput),
            React.createElement(ViperjsOutputTokenizedContainer),
            React.createElement(ViperjsOutputParsedContainer)
        );
    }
}

export default ViperjsInputOutput;
