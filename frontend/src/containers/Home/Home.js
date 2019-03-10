import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from '../../components/Login/Login';
import Register from '../Register/Register';

class TwitterHelpDeskMain extends Component {
    state = {
        auth : true
    }

    render(){
        return (
            <div>
                <Route path="/" exact component={Login}/>
                <Route path="/user/registration" exact component={Register} />
            </div>
        )
    }
}

export default TwitterHelpDeskMain;
