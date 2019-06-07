import React, { Component } from 'react';
import firebase from '../../firebase';
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
        passwordConfirmation: '',
        errors: []
    }

    isFormValid = () => {
        let errors = []
        let error;

        if (this.isFormEmpty(this.state)) {
            error = { message: "Fill in all fields"};
            this.setState({ errors: errors.concat(error) });
            return false
        } else if (!this.isPasswordValid(this.state)) {
            error = { message: 'Password is invalid' }
            this.setState({ errors: errors.concat(error) });
            return false;
        } else {
            return true;
        }
    };

    isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
        return !username.length || !email.length || !password.length || !passwordConfirmation.length;
    };

    isPasswordValid = ({ password, passwordConfirmation }) => {
        if (password.length < 6 || passwordConfirmation.length < 6) {
            return false;
        } else if (password !== passwordConfirmation) {
            return false
        } else {
            return true;
        }
    };

    displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>);

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleSubmit = event => {
        if (this.isFormValid()) {

        }

        event.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(createdUser => {
                console.log(createdUser)
            })
            .catch(err => {
                console.log(err)
            })
    };
    
    render() {
        const { username, email, password, passwordConfirmation, errors } = this.state

        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" icon color="violet" textAlign="center">
                        <Icon name="puzzle piece" color="violet"/>
                        Register to chat!
                    </Header>
                    <Form size="large" onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            <Form.Input 
                                fluid name="username" 
                                icon="user" 
                                iconPosition="left"
                                placeholder="UserName"
                                onChange={this.handleChange}
                                value={username}
                                type="text"
                            />
                            <Form.Input 
                                fluid name="email" 
                                icon="mail" 
                                iconPosition="left"
                                placeholder="Email Address"
                                onChange={this.handleChange}
                                value={email}
                                type="email"
                            />
                            <Form.Input 
                                fluid name="password" 
                                icon="lock" 
                                iconPosition="left"
                                placeholder="Password"
                                onChange={this.handleChange}
                                value={password}
                                type="password"
                            />
                            <Form.Input 
                                fluid name="passwordConfirmation" 
                                icon="lock" 
                                iconPosition="left"
                                placeholder="Confirm Password"
                                onChange={this.handleChange}
                                value={passwordConfirmation}
                                type="password"
                            />
                            <Button color="violet" fluid size="large">Submit</Button>
                        </Segment>
                    </Form>
                    {errors.length > 0 && (
                        <Message error>
                            <h3>Error</h3>
                            {this.displayErrors(errors)}
                        </Message>
                    )}
                    <Message>Already a user? <Link to='/login'>Login</Link></Message>
                </Grid.Column> 
            </Grid>
        );
    }
};

export default Register;