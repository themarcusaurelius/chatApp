import React from 'react';
import { Grid, Header, Icon, Dropdown } from 'semantic-ui-react';

class UserPanel extends React.Component {
    dropdownOptions = () => [
        {
            key: "user",
            text: <span>Signed is as <strong>User</strong></span>,
            disabled: true
        },
        {
            key: "avatar",
            text: <span>Change Avatar</span>
        },
        {
            key: "signout",
            text: <span>Sign Out</span>
        }
    ]
       
            

    render() {
        return (
            <Grid stle={{ background: "#4c3c4c" }}>
                <Grid.Column>
                    <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
                        <Header inverted floated="left" as="h3">
                            <Icon name="comment alternate outline"/>
                            <Header.Content>Chat</Header.Content>
                        </Header>
                    </Grid.Row>

                    <Header style={{ padding: '0.25em'}} as="h4" inverted>
                        <Dropdown trigger={<span>User</span>} options={this.dropdownOptions()} />
                    </Header>
                </Grid.Column>
            </Grid>
        );
    }
}

export default UserPanel;