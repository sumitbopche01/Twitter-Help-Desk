import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link} from 'react-router-dom';

import classes from './Register.module.css';

class Register extends Component {
    state = {
        firstName:'',
        lastName:'',
        userName: '',
        password: ''
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    onSubmit = () => {
        let data = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            userName: this.state.userName,
            password: this.state.password
        }

        let req = {
        url: "http://localhost:4356/api/v1/user/registration",
        method: "POST",
        data:data
        }
        axios(req).then((response) => {
            console.log("response from the backend -- ", response);
        })
        .catch((error) => {
            console.log("Error while authenticating", error);
        })
    }

    render(){
        return (
            <div className = {classes.form}>
                <div className = {classes.login_box}>
                    <h1>Sign up Here</h1>
                    <form>
                        <p>First Name</p>
                        <input
                            type="text"
                            name="firstName"
                            placeholder='Enter first name eg. Sumit'
                            value={this.state.firstName}
                            onChange = { e => this.change(e) } />
                        <p>Last Name</p>
                        <input
                            type="text"
                            name="lastName"
                            placeholder='Enter last name eg. Bopche'
                            value={this.state.lastName}
                            onChange = { e => this.change(e) } />
                                
                        <p>User Name</p>
                        <input 
                            type="text" 
                            name="userName" 
                            placeholder="Enter Username (emailid, mobile no etc.)"
                            value = {this.state.userName}
                            onChange = { e => this.change(e) } />
                        <p>Password</p>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter Password"
                            value = {this.state.password} 
                            onChange ={ e => this.change(e) }/>
                        <input 
                            type="submit" 
                            name="submit" 
                            value="Sign Up" 
                            onClick = { () => this.onSubmit() }/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
