import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Home from './Home';
import Showmen from './Showmen.js';
import About from './About';
import Discover from './Discover';


class Router extends React.Component {

    render(){
        return(
            <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/showmen" component={Showmen} />
                <Route exact path="/about" component={About} /> 
                <Route exact path="/discover" component={Discover} />
            </Switch>
            <Footer />
            </>
        )
    }
}
export default Router;