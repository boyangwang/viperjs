'use strict';
const React = require('react');
const ReactRedux = require('react-redux');
const viperjsUtil = require('../../viperjs-util.js');

class ViperjsOutputParsed extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-output-parsed',
            },
            JSON.stringify(viperjsUtil.peek(
                this.props.historyParseds), null, 2),
            React.createElement('br'),
            React.createElement('br'),
            JSON.stringify(this.props.historyParseds, null, 2)
        );
    }
}
ViperjsOutputParsed.propTypes = {
    historyParseds: React.PropTypes.arrayOf(React.PropTypes.object),
};
const mapStateToProps = (state) => {
    return {
        historyParseds: state.historyParseds,
    };
};
module.exports = ReactRedux.connect(mapStateToProps)(ViperjsOutputParsed);
