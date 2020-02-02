import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/HomePage';
import './App.css';

const Hats = () => (
  <h1>Hats Page</h1>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
