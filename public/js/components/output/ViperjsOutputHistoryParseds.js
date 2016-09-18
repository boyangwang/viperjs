'use strict';
const React = require('react');
const ReactRedux = require('react-redux');

class ViperjsOutputHistoryParseds extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-output-history-parseds',
            },
            JSON.stringify(this.props.historyParseds, null, 2)
        );
    }
}
ViperjsOutputHistoryParseds.propTypes = {
    historyParseds: React.PropTypes.arrayOf(React.PropTypes.object),
};
const mapStateToProps = (state) => {
    return {
        historyParseds: state.historyParseds,
    };
};
module.exports = ReactRedux.connect(mapStateToProps)(ViperjsOutputHistoryParseds);
