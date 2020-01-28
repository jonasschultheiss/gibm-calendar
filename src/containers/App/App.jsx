import React, { Component } from 'react';
import Background from '../../components/Background';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      something: 1,
    };
  }

  render() {
    const { something } = this.state;
    return (
      <Background>
        <p>some content {something}</p>
      </Background>
    );
  }
}
