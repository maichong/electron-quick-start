import React, { Component } from 'react';

interface Props {
}

interface State {
}

export default class Logo extends Component<Props, State> {
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
      <div className="logo">
        郑州脉冲软件科技有限公司
      </div>
    );
  }
}
