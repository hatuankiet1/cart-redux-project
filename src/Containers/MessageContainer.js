import React, { Component } from 'react';
import Message from './../Components/Message';
import {connect} from 'react-redux';

class MessageContainer extends Component {
    render() {
        return (
            <Message thaydoimessag = { this.props.message} />
        )
    };
}

const mapStateToProps = state =>{
    return {
        message : state.message,
    }

}


export default connect(mapStateToProps,null)(MessageContainer);