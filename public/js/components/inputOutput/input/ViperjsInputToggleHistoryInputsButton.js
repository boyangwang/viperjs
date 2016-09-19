import React from 'react';
import { connect } from 'react-redux';

class ViperjsInputToggleHistoryInputsButton extends React.Component {
    render() {
        return React.createElement(
            'button', {
                className: 'viperjs-input-toggle-history-inputs-button right button',
                onClick: () => {
                    this.props.dispatch({
                        type: 'toggleHistoryInputs',
                    });
                },
            },
            `${this.props.isShowHistoryInputs ? 'Hide' : 'Show'} History Inputs`
        );
    }
}
ViperjsInputToggleHistoryInputsButton.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    isShowHistoryInputs: React.PropTypes.bool,
};
const mapStateToProps = (state) => {
    return {
        isShowHistoryInputs: state.isShowHistoryInputs,
    };
};

export default connect(mapStateToProps)(ViperjsInputToggleHistoryInputsButton);
