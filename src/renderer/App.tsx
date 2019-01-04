import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StoreState } from './redux';
import Home from './pages/Home';

interface Props {
}

interface State {
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State): Partial<State> | null {
    return null;
  }

  componentDidMount() {
    // ...
  }

  componentDidUpdate() {
    // ...
  }

  componentWillUnmount() {
    // ...
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route component={Home} exact path="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(
  ({ startup }: StoreState) => ({ startup }),
  (dispatch) => bindActionCreators({
  }, dispatch)
)(App);
