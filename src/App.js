import React from 'react';
import {Layout} from "antd";
import { Route, Switch } from 'react-router-dom';
import SiderBar from "./components/layout/SiderBar";
import HeaderBar from "./components/layout/HeaderBar";
import Home from './pages/home/home';
import Connect from './pages/user/connect/Connect';
import List from './pages/user/list/List';
import NotFind from './pages/notFind/NotFind';
import './App.css'
class Index extends React.Component{
    render() {
        return (
            <Layout>
                <SiderBar></SiderBar>
                <Layout>
                    <HeaderBar></HeaderBar>
                    <div className="layout-content">
                        <Switch>
                            <Route exact path="/" component={ Home }/>
                            <Route path="/user/connect" component={ Connect }/>
                            <Route path="/user/list" component={ List }/>
                            <Route component={ NotFind }/>
                        </Switch>
                    </div>
                </Layout>
            </Layout>
        );
    }
}

export default Index;
