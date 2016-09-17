'use strict';
const React = require('react');
const ReactRedux = require('react-redux');

class ViperjsOutputParseButton extends React.Component {
    render() {
        return React.createElement(
            'button', {
                className: 'viperjs-input-parse-button',
                onClick: () => {
                    this.props.dispatch({
                        type: 'parse',
                    });
                },
            },
            'Parse');
    }
}
ViperjsOutputParseButton.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
};
module.exports = ReactRedux.connect()(ViperjsOutputParseButton);
