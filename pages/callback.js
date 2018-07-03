import {withRouter} from 'next/router';
import React, {Component} from 'react';
import Loading from '../components/loading';
import withUser from '../components/withUser';

class Callback extends Component {
  render() {
    return (
      <Loading message="Loading Profile" />
    );
  }

  async componentDidMount() {
    await this.props.auth0Client.parseHash();
    this.props.router.push('/panel');
  }
}

export default withRouter(withUser(Callback));
