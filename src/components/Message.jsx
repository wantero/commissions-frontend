import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'

export class Message extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: true
        };

        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    renderMessages() {
        console.log('renderMessages: ')
        const messages = this.props.messages || []
        console.log(messages)
        return messages.map((message, index) => (
            <div key={index}>
                <Alert color={message.type} isOpen={this.state.visible} toggle={this.onDismiss}>
                    {message.message}
                </Alert>
            </div>
        ))
    }

    render() {
        return (
            <div>
                {this.renderMessages()}
            </div>
        )
    }
}

const mapStateToProps = state => ({ messages: state.vendor.messages })
export default connect(mapStateToProps)(Message)