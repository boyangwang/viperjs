import React from 'react';
import { connect } from 'react-redux';

class ViperjsInputToggleHistoryParsedsButton extends React.Component {
    render() {
        return React.createElement(
            'button', {
                className: 'viperjs-input-toggle-history-parseds-button full button',
                onClick: () => {
                    this.props.dispatch({
                        type: 'toggleHistoryParseds',
                    });
                },
            },
            `${this.props.isShowHistoryParseds ? 'Hide' : 'Show'} Parseds`
        );
    }
}
ViperjsInputToggleHistoryParsedsButton.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    isShowHistoryParseds: React.PropTypes.bool,
};
const mapStateToProps = (state) => {
    return {
        isShowHistoryParseds: state.isShowHistoryParseds,
    };
};

export default connect(mapStateToProps)(ViperjsInputToggleHistoryParsedsButton);
