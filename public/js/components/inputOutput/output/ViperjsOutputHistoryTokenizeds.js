import React from 'react';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(ViperjsOutputHistoryTokenizeds);
