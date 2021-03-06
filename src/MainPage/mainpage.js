import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/homepage';
import Notifications from '../Notifications/notifications';
import Messages from '../Messages/messages';
import Login from '../Login/login';
import Registration from '../Registration/registration';

const mainpage = () => (
    <div>
    <Switch>
      <Route exact path='/' component={Registration}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/homepage' component={HomePage}/>
      <Route path='/notifications' component={Notifications}/>
      <Route path='/messages' component={Messages}/>
    </Switch>
    </div>
)

export default mainpage;