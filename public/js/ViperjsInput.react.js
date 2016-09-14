'use strict';
const React = require('react');
const ReactRedux = require('react-redux');

class ViperjsInput extends React.Component {
    render() {
        return React.createElement(
            'textarea', {
                onChange: (e) => {
                    this.props.dispatch({
                        type: 'input',
                        value: e.target.value,
                    });
                },
            });
    }
}
ViperjsInput.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
};
module.exports = ReactRedux.connect()(ViperjsInput);
