import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {minus} from '../actions/index';

class MinusButton extends Component {
    render() {
        return (
            <button onClick={() => this.props.minus(this.props.counter - 1)}>-1</button>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({minus: minus}, dispatch);
}

function mapStateToProps(state) {
    return ({counter: state.counter});
}

export default connect(mapStateToProps, mapDispatchToProps)(MinusButton);