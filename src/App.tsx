import * as React from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import Home from './pages/home';
export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Router>
        <div className="App">
          <Link to="/">Home</Link>
          <hr />
          <Route path="/" exact component={Home}></Route>
        </div>
      </Router>
    );
  }
}
