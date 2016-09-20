import React from 'react';
import { connect } from 'react-redux';
import Collapse from 'react-collapse';
import { presets } from 'react-motion';

class ViperjsInputHistoryInputs extends React.Component {
    render() {
        console.log('xxx render ViperjsInputHistoryInputs');
        console.log(this.props);
        return React.createElement(
            'div', {
                className: 'viperjs-input-history-inputs',
                style: {
                    display: this.props.isShowHistoryInputs ? 'block' : 'none',
                },
            },
            React.createElement(
                Collapse, {
                    style: {
                        backgroundColor: 'white',
                    },
                    springConfig: presets.stiff,
                    isOpened: this.props.isShowHistoryInputs,
                    children: [...this.props.historyInputs.map(input =>
                            React.createElement(
                                'div', {
                                    key: input.id,
                                },
                                React.createElement(
                                    'p', {
                                        onClick: () => {
                                            this.props.dispatch({
                                                type: 'toggleHistoryInputsRecord', value: input.id,
                                            });
                                        },
                                    },
                                    input.id
                                ),
                                React.createElement(Collapse, {
                                    springConfig: { stiffness: 300, damping: 40 },
                                    isOpened: input.isOpened || false,
                                    children: [
                                        React.createElement('div', { key: 'historyInput' },
                                            JSON.stringify(input, null, 2)),
                                    ],
                                })
                            )
                        ),
                    ],
                }
            )
        );
    }
}
ViperjsInputHistoryInputs.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
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
