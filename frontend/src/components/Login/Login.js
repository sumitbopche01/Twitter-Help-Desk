import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link} from 'react-router-dom';

import classes from './Login.module.css';
import Register from '../../containers/Register/Register';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
    }
    
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    onSubmit = () => {
        let data = {
            userName: this.state.userName,
            password: this.state.password
        }

        let req = {
        url: "http://localhost:4356/api/v1/user/login",
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
            <div className = {classes.login_form}>
                <div className = {classes.login_box}>
                    <img src= "avatar.png" className = {classes.avatar} />
                    <h1>Login Here</h1>
                    <form>
                        <p>Username</p>
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
                            value="Login" 
                            onClick = { () => this.onSubmit() }/>
                        <Link to={{
                            pathname: '/user/registration'
                        }} exact>
                            <p>Sign Up</p>
                        </Link>
                        
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
