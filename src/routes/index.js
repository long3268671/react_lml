import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/home';
import Connect from '../pages/user/connect/Connect';
import List from '../pages/user/list/List';
import NotFind from '../pages/notFind/NotFind';

class Index extends React.Component{
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route path="/user/connect" component={ Connect }/>
                <Route path="/user/list" component={ List }/>
                <Route component={ NotFind }/>
            </Switch>
        );
    }
}

export default Index;
