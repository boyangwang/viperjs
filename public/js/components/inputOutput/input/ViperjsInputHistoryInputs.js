import React from 'react';
import { connect } from 'react-redux';

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
    historyInputs: React.PropTypes.arrayOf(React.PropTypes.object),
};
const mapStateToProps = (state) => {
    return {
        historyInputs: state.historyInputs,
    };
};

export default connect(mapStateToProps)(ViperjsInputHistoryInputs);
