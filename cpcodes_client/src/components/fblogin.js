import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

export default class Fblogin extends Component {

    state={
        isLoggedIn: false,
        userId: '',
        name: '',
        lName: '',
        email: ''
    }

    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userId: response.userID,
            name: response.first_name,
            lName: response.last_name,
            email: response.email
        });
    }

    componentClicked = () => {console.log("clicked")};

    render() {

        let fbContent;
        if(this.state.isLoggedIn){

            fbContent = (
                <div> 
                    <p>{this.state.userId}</p>
                    <p>{this.state.name}</p>
                    <p>{this.state.lName}</p>
                    <p>{this.state.email}</p>
                </div>
            );

        } else {
            fbContent = (<FacebookLogin 
                appId = "263657304347893"
                autoLoad={true}
                fields = "first_name, last_name, email"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                />);
        }

        return (
            <div>

                {fbContent}                

            </div>
        );
    }
}