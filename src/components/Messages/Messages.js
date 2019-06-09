import React, { Fragment } from 'react';
import { Segment, Comment } from 'semantic-ui-react';
import MessagesHeader from './MessagesHeader';
import MessageForm from './MessageForm';

class Messages extends React.Component {
    render() {
        return (
            <Fragment>
                <MessagesHeader />

                <Segment>
                    <Comment.Group className="messages">

                    </Comment.Group>
                </Segment>

                <MessageForm />
            </Fragment>
        );
    }
};

export default Messages;