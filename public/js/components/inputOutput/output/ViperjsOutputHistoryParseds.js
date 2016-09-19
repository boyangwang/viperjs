import React from 'react';
import { connect } from 'react-redux';

class ViperjsOutputHistoryParseds extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-output-history-parseds',
                style: {
                    display: this.props.isShowHistoryParseds ? 'block' : 'none',
                },
            },
            JSON.stringify(this.props.historyParseds, null, 2)
        );
    }
}
ViperjsOutputHistoryParseds.propTypes = {
    historyParseds: React.PropTypes.arrayOf(React.PropTypes.object),
    isShowHistoryParseds: React.PropTypes.bool,
};
const mapStateToProps = (state) => {
    return {
        historyParseds: state.historyParseds,
        isShowHistoryParseds: state.isShowHistoryParseds,
    };
};

export default connect(mapStateToProps)(ViperjsOutputHistoryParseds);
