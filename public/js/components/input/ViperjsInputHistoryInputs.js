'use strict';
const React = require('react');
const ReactRedux = require('react-redux');

class ViperjsInputHistoryInputs extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-input-history-inputs',
            },
            JSON.stringify(this.props.historyInputs, null, 2)
        );
    }
}
ViperjsInputHistoryInputs.propTypes = {
    historyInputs: React.PropTypes.arrayOf(React.PropTypes.string),
};
const mapStateToProps = (state) => {
    return {
        historyInputs: state.historyInputs,
    };
};
module.exports = ReactRedux.connect(mapStateToProps)(ViperjsInputHistoryInputs);
