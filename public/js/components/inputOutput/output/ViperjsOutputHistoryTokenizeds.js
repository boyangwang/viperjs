import React from 'react';
import { connect } from 'react-redux';

class ViperjsOutputHistoryTokenizeds extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-output-history-tokenizeds',
                style: {
                    display: this.props.isShowHistoryTokenizeds ? 'block' : 'none',
                },
            },
            JSON.stringify(this.props.historyTokenizeds, null, 2)
        );
    }
}
ViperjsOutputHistoryTokenizeds.propTypes = {
    historyTokenizeds: React.PropTypes.arrayOf(React.PropTypes.object),
    isShowHistoryTokenizeds: React.PropTypes.bool,
};
const mapStateToProps = (state) => {
    return {
        historyTokenizeds: state.historyTokenizeds,
        isShowHistoryTokenizeds: state.isShowHistoryTokenizeds,
    };
};

export default connect(mapStateToProps)(ViperjsOutputHistoryTokenizeds);
