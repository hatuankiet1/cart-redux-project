import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <div>
                <h3>
                    <span className="badge amber darken-2">{this.props.thaydoimessag}</span>
                </h3>
            </div>
        )
    };
}

export default Message;