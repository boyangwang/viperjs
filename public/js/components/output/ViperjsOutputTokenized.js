'use strict';
const React = require('react');
const ReactRedux = require('react-redux');

class ViperjsOutputTokenized extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-output-tokenized',
            },
            JSON.stringify(this.props.outputTokenized, null, 2)
        );
    }
}
ViperjsOutputTokenized.propTypes = {
    outputTokenized: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.object,
    ]),
};
const mapStateToProps = (state) => {
    return {
        outputTokenized: state.outputTokenized,
    };
};
module.exports = ReactRedux.connect(mapStateToProps)(ViperjsOutputTokenized);
