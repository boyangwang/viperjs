import React from 'react';
import { connect } from 'react-redux';

class ViperjsOutputParseButton extends React.Component {
    render() {
        return React.createElement(
            'button', {
                className: 'viperjs-output-parse-button left button',
                onClick: () => {
                    this.props.dispatch({
                        type: 'parse',
                    });
                },
            },
            'Parse');
    }
}
ViperjsOutputParseButton.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
};

export default connect()(ViperjsOutputParseButton);
