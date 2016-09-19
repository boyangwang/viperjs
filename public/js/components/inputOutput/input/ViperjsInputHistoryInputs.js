import React from 'react';
import { connect } from 'react-redux';

class ViperjsInputHistoryInputs extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-input-history-inputs',
                style: {
                    display: this.props.isShowHistoryInputs ? 'block' : 'none',
                },
            },
            JSON.stringify(this.props.historyInputs, null, 2)
        );
    }
}
ViperjsInputHistoryInputs.propTypes = {
    historyInputs: React.PropTypes.arrayOf(React.PropTypes.object),
    isShowHistoryInputs: React.PropTypes.bool,
};
const mapStateToProps = (state) => {
    return {
        historyInputs: state.historyInputs,
        isShowHistoryInputs: state.isShowHistoryInputs,
    };
};

export default connect(mapStateToProps)(ViperjsInputHistoryInputs);
