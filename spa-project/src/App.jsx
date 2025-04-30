import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Resume} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;