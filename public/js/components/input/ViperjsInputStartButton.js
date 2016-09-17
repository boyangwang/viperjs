'use strict';
const React = require('react');
const ReactRedux = require('react-redux');

class ViperjsInputStartButton extends React.Component {
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
ViperjsInputStartButton.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
};
module.exports = ReactRedux.connect()(ViperjsInputStartButton);
