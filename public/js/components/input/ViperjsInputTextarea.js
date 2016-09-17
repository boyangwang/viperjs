'use strict';
const React = require('react');
const ReactRedux = require('react-redux');

class ViperjsInputTextarea extends React.Component {
    render() {
        return React.createElement(
            'textarea', {
                className: 'viperjs-input-textarea',
                onChange: (e) => {
                    this.props.dispatch({
                        type: 'input',
                        value: e.target.value,
                    });
                },
            });
    }
}
ViperjsInputTextarea.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
};
module.exports = ReactRedux.connect()(ViperjsInputTextarea);
