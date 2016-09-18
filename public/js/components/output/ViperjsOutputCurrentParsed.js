'use strict';
const React = require('react');
const ReactRedux = require('react-redux');
const viperjsUtil = require('../../viperjs-util.js');
const Ace = require('brace');
require('brace/mode/json');
require('brace/theme/monokai');

class ViperjsOutputCurrentParsed extends React.Component {
    componentDidMount() {
        this.aceEditor = Ace.edit(document.querySelector('.viperjs-output-current-parsed'));
        this.aceEditor.setTheme('ace/theme/monokai');
        this.aceEditor.setReadOnly(true);
        this.aceEditor.getSession().setMode('ace/mode/json');
    }
    componentDidUpdate() {
        this.aceEditor.setValue(JSON.stringify(
            viperjsUtil.peek(this.props.historyParseds), null, 2
        ) || '', 1);
    }
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-output-current-parsed',
                style: {
                    width: '100%',
                    minHeight: '400px',
                },
            }
        );
    }
}
ViperjsOutputCurrentParsed.propTypes = {
    historyParseds: React.PropTypes.arrayOf(React.PropTypes.object),
};
const mapStateToProps = (state) => {
    return {
        historyParseds: state.historyParseds,
    };
};
module.exports = ReactRedux.connect(mapStateToProps)(ViperjsOutputCurrentParsed);
