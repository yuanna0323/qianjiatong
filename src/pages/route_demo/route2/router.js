import React from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import Home from './Home'
import Main from './../route1/Main'
import About from './../route1/about'
import Topic from './../route1/topic'
export default class IRouter extends React.Component {
    render() {
        return (
            <Router>
                 <Home>
                    <Route exact={true} path="/" component={Main}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topic}/>
                </Home>
            </Router>
               
        );
    }
}