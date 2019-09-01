import React, { Component } from 'react'
import { Button, Card, CardItem, Input } from './common';

export default
class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };

    render = () => (
        <Card>
            <CardItem>
                <Input
                    placeholder='user@gmail.com'
                    label='Email'
                    value={ this.state.email }
                    onChangeText={(email) => this.setState({ email })}
                />
            </CardItem>
            <CardItem>
            <Input
                    placeholder='password'
                    label='Password'
                    value={ this.state.password }
                    onChangeText={(password) => this.setState({ password })}
                    type='password'
                />
            </CardItem>
            <CardItem>
                <Button>Login</Button>
            </CardItem>
        </Card>
    );
}
