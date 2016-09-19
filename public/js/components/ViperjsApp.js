import React from 'react';
import ViperjsNavbar from './ViperjsNavbar.js';
import ViperjsInputOutput from './inputOutput/ViperjsInputOutput.js';

class ViperjsApp extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-app',
            },
            React.createElement(ViperjsNavbar),
            React.createElement(ViperjsInputOutput)
        );
    }
}

export default ViperjsApp;
