import React, { Component } from 'react';
import {
    Grid, 
    Form, 
    Segment, 
    Button, 
    Header, 
    Message, 
    Icon
} from 'semantic-ui-react';
import { Link } from 'react-router-dom'; 

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };
    
    render() {
        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" icon color="purple" textAlign="center">
                        <Icon name="puzzle piece" color="purple"/>
                        Register to chat!
                    </Header>
                    <Form siez="large">
                        <Segment stacked>
                            <Form.Input 
                                fluid name="username" 
                                icon="user" 
                                iconPosition="left"
                                placeholder="UserName"
                                onChange={this.handleChange}
                                type="text"
                            />
                            <Form.Input 
                                fluid name="email" 
                                icon="mail" 
                                iconPosition="left"
                                placeholder="Email Address"
                                onChange={this.handleChange}
                                type="email"
                            />
                            <Form.Input 
                                fluid name="password" 
                                icon="lock" 
                                iconPosition="left"
                                placeholder="Password"
                                onChange={this.handleChange}
                                type="password"
                            />
                            <Form.Input 
                                fluid name="passwordConfirmation" 
                                icon="lock" 
                                iconPosition="left"
                                placeholder="Confirm Password"
                                onChange={this.handleChange}
                                type="password"
                            />
                            <Button color="purple" fluid size="large">Submit</Button>
                        </Segment>
                    </Form>
                    <Message>Already a user? <Link to='/login'>Login</Link></Message>
                </Grid.Column> 
            </Grid>
        );
    }
};

export default Register;