import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './components/Form';
import Forms from './components/Forms';
import Landing from './layout/Landing';

import './App.css';

const App =() => {
  return(
  <Router>
    <Fragment>
    <section className="container">
    <Switch>
       <Route exact path='/' component={Landing} />
       <Route exact path='/user-form' component={Form} />
       <Route exact path='/user-form/success' component={Forms} />
      </Switch>
    </section>
    </Fragment>
  </Router>
  );
};

export default App;
