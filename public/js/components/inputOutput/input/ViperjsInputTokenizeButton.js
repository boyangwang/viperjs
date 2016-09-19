import React from 'react';
import { connect } from 'react-redux';

class ViperjsInputTokenizeButton extends React.Component {
    render() {
        return React.createElement(
            'button', {
                className: 'viperjs-input-tokenize-button',
                onClick: () => {
                    this.props.dispatch({
                        type: 'tokenize',
                    });
                },
            },
            'Tokenize');
    }
}
ViperjsInputTokenizeButton.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
};

export default connect()(ViperjsInputTokenizeButton);
