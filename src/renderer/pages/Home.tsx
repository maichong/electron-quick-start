import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StoreState } from '../redux';
import Logo from '../components/Logo';

interface Props {
}

interface State {
}

class Home extends Component<Props, State> {
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
      <div className="home-page">
        <Logo />
        <div>electron-quick-start</div>
      </div>
    );
  }
}

export default connect(
  ({ startup }: StoreState) => ({ startup }),
  (dispatch) => bindActionCreators({
  }, dispatch)
)(Home);
