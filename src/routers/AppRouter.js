import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { About } from '../screens/About';
import { Contact } from '../screens/Contact';
import { Experience } from '../screens/Experience';
import { Home } from '../screens/Home';

export const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/experience" component={Experience} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </>
  );
};
