'use strict';
const React = require('react');
const ReactRedux = require('react-redux');

class ViperjsOutputHistoryTokenizeds extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-output-history-tokenizeds',
            },
            JSON.stringify(this.props.historyTokenizeds, null, 2)
        );
    }
}
ViperjsOutputHistoryTokenizeds.propTypes = {
    historyTokenizeds: React.PropTypes.arrayOf(React.PropTypes.object),
};
const mapStateToProps = (state) => {
    return {
        historyTokenizeds: state.historyTokenizeds,
    };
};
module.exports = ReactRedux.connect(mapStateToProps)(ViperjsOutputHistoryTokenizeds);
