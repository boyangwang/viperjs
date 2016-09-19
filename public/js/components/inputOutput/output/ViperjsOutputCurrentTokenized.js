import 'brace/mode/json';
import 'brace/theme/monokai';
import React from 'react';
import { connect } from 'react-redux';
import Ace from 'brace';
import viperjsUtil from '../../../viperjs-util.js';

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
                    minHeight: '400px',
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

export default connect(mapStateToProps)(ViperjsOutputCurrentTokenized);
