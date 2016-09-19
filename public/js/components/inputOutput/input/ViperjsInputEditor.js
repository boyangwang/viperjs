import React from 'react';
import { connect } from 'react-redux';
import Ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

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
                    minHeight: '400px',
                },
            }
        );
    }
}
ViperjsInputEditor.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
};

export default connect()(ViperjsInputEditor);
