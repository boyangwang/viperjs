'use strict';
const React = require('react');
const ReactRedux = require('react-redux');
const viperjsUtil = require('../../viperjs-util.js');

class ViperjsOutputTokenized extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-output-tokenized',
            },
            JSON.stringify(viperjsUtil.peek(
                this.props.historyTokenizeds), null, 2),
            React.createElement('br'),
            React.createElement('br'),
            JSON.stringify(this.props.historyTokenizeds, null, 2)
        );
    }
}
ViperjsOutputTokenized.propTypes = {
    historyTokenizeds: React.PropTypes.arrayOf(React.PropTypes.object),
};
const mapStateToProps = (state) => {
    return {
        historyTokenizeds: state.historyTokenizeds,
    };
};
module.exports = ReactRedux.connect(mapStateToProps)(ViperjsOutputTokenized);
