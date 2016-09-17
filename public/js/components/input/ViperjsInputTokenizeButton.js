'use strict';
const React = require('react');
const ReactRedux = require('react-redux');

class ViperjsInputTokenizeButton extends React.Component {
    render() {
        return React.createElement(
            'button', {
                className: 'viperjs-input-start-button',
                onClick: () => {
                    this.props.dispatch({
                        type: 'start',
                    });
                },
            },
            'Start');
    }
}
ViperjsInputTokenizeButton.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
};
module.exports = ReactRedux.connect()(ViperjsInputTokenizeButton);
