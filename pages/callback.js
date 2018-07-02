import {withRouter} from 'next/router';
import styledComponents from 'styled-components';
import React, {Component} from 'react';
import withUser from '../components/withUser';

const CallbackContainer = styledComponents.div`
  width: 100%;
  height: 100%;
  text-align: center;
  grid-column-end: span 12;
  
  > span {
    font-size: 50px;
    position: relative;
    top: -50px;
    animation: ease-in-out infinite alternate;
    animation-name: run;
    animation-duration: 1.2s;
  }
  
  @keyframes run {
    0% {
      left: -90px;
      color: #eee;
    }
  
    50% {
      color: #666;
    }
  
    100% {
      left: 90px;
      color: #eee;
    }
  }
`;

class Callback extends Component {
  render() {
    return (
      <CallbackContainer>
        <h2>Loading Profile</h2>
        <span>.</span>
      </CallbackContainer>
    );
  }

  async componentDidMount() {
    await this.props.auth0Client.parseHash();
    this.props.router.push('/panel');
  }
}

export default withRouter(withUser(Callback));
