'use strict';
const React = require('react');
const ReactRedux = require('react-redux');
const viperjsUtil = require('../../viperjs-util.js');
const Ace = require('brace');
require('brace/mode/json');
require('brace/theme/monokai');

class ViperjsOutputCurrentTokenized extends React.Component {
    componentDidMount() {
        this.aceEditor = Ace.edit(document.querySelector('.viperjs-output-current-tokenized'));
        this.aceEditor.setTheme('ace/theme/monokai');
        this.aceEditor.setReadOnly(true);
        this.aceEditor.getSession().setMode('ace/mode/json');
    }
    componentDidUpdate() {
        this.aceEditor.setValue(JSON.stringify(
            viperjsUtil.peek(this.props.historyTokenizeds), null, 2
        ) || '', 1);
    }
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-output-current-tokenized',
                style: {
                    width: '100%',
                    minHeight: '200px',
                },
            }
        );
    }
}
ViperjsOutputCurrentTokenized.propTypes = {
    historyTokenizeds: React.PropTypes.arrayOf(React.PropTypes.object),
};
const mapStateToProps = (state) => {
    return {
        historyTokenizeds: state.historyTokenizeds,
    };
};
module.exports = ReactRedux.connect(mapStateToProps)(ViperjsOutputCurrentTokenized);
