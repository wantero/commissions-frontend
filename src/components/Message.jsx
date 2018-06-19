import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Message extends Component {

    renderMessages() {
        console.log('renderMessages: ')
        const messages = this.props.messages || []        
        console.log(messages)
        return messages.map((message, index) => (
            <div key={index} className={message.type}>
                <button type="button" className="close" data-dismiss="alert">&times;</button>
                {message.message}
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