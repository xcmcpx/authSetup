import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Resume from './resume';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import ShowTodoList from './showTodoList';


const Main = () => (
    <Switch>
        <Route exact path="/" component ={ LandingPage } />
        <Route path="/about" component ={ About } />
        <Route path="/contact" component ={ Contact } />
        <Route path="/projects" component ={ Projects } />
        <Route path="/resume" component ={ Resume } />
        <Route path="/todolist" component ={ ShowTodoList }/>
    </Switch>
)

export default Main;