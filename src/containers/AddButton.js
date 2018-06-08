import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import add from '../actions/index';

class AddButton extends Component {
    render() {
        return (
            <button onClick={() => this.props.add(this.props.counter + 1)}>+1</button>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({add: add}, dispatch);
}

function mapStateToProps(state) {
    return ({counter: state.counter});
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);