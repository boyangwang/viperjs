import React from 'react';
import { connect } from 'react-redux';

class ViperjsInputToggleHistoryTokenizedsButton extends React.Component {
    render() {
        return React.createElement(
            'button', {
                className: 'viperjs-input-toggle-history-tokenizeds-button right button',
                onClick: () => {
                    this.props.dispatch({
                        type: 'toggleHistoryTokenizeds',
                    });
                },
            },
            `${this.props.isShowHistoryTokenizeds ? 'Hide' : 'Show'} History Tokenizeds`
        );
    }
}
ViperjsInputToggleHistoryTokenizedsButton.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    isShowHistoryTokenizeds: React.PropTypes.bool,
};
const mapStateToProps = (state) => {
    return {
        isShowHistoryTokenizeds: state.isShowHistoryTokenizeds,
    };
};

export default connect(mapStateToProps)(ViperjsInputToggleHistoryTokenizedsButton);
