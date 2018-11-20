import React, { Component } from 'react';
import Fblogin from './fblogin';

class Login extends Component {


    render() {
        return (
            <div>
                <p> Authenticate with facebook </p>
                <Fblogin />
            </div>
        );

    }
}

export default Login;