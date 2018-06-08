import React, {Component} from 'react';
import {connect} from 'react-redux';


class ShowCounter extends Component {
    render() {
        return (
            <div>{this.props.counter}</div>
        );
    }
}

function mapStateToProps(state) {
    return ({counter: state.counter});
}

export default connect(mapStateToProps)(ShowCounter);