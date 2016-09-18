'use strict';
const React = require('react');
const ReactRedux = require('react-redux');
const Ace = require('brace');
require('brace/mode/javascript');
require('brace/theme/monokai');

class ViperjsInputEditor extends React.Component {
    componentDidMount() {
        this.aceEditor = Ace.edit(document.querySelector('.viperjs-input-editor'));
        this.aceEditor.setTheme('ace/theme/monokai');
        this.aceEditor.getSession().setMode('ace/mode/javascript');
        this.aceEditor.on('change', () => {
            this.props.dispatch({
                type: 'input',
                value: this.aceEditor.getValue(),
            });
        });
    }
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-input-editor',
                style: {
                    width: '100%',
                    minHeight: '200px',
                },
            }
        );
    }
}
ViperjsInputEditor.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
};
module.exports = ReactRedux.connect()(ViperjsInputEditor);
