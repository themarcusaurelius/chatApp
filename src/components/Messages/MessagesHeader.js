import React from 'react';
import { Header, Segment, Input, Icon } from 'semantic-ui-react';

class MessagesHeader extends React.Component {
    render() {
        return (
            <Segment clearing>
                {/* Channel Title */}
                <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0}}>
                    <span>
                        Channel
                        <Icon name={"star outline"} color="black" />
                        <Header.Subheader>2 users</Header.Subheader>
                    </span>
                </Header>

                {/* Channel Search Input */}
                <Header floated="right">
                    <Input
                        size="mini"
                        icon="search"
                        name="searchTerm"
                        placeholder="Search Messages"
                    />
                </Header>    
            </Segment>
        );
    }
};

export default MessagesHeader;