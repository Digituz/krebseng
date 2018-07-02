import Auth0Web from 'auth0-web';
import {withRouter} from 'next/router';
import React, {Component} from 'react';
import Building from '../entities/Building';
import * as Components from '@digituz/react-components';
import withUser from '../components/withUser';

class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
    };

    props.auth0Client.subscribe((authenticated) => {
      this.setState({
        authenticated,
      });
    });
  }

  signIn() {
    this.props.auth0Client.signIn();
  }

  signOut() {
    this.props.auth0Client.signOut('http://localhost:3000');
  }

  render() {
    const divStyle = {
      display: 'grid',
      gridTemplateColumns: '45px 1fr auto',
    };

    const guardedRoute = (url) => {
      if (this.props.auth0Client.isAuthenticated()) return this.go(url);
      Components.NotificationManager.warning('Sign in first, please.');
    };

    const submenus = [{
      title: 'Menu',
      items: [
        { title: 'Painel', color: '#e6665b', onClick: () => { guardedRoute('/painel') } },
        { title: 'Empreendimentos', color: '#66ad66', onClick: () => { guardedRoute('/empreendimentos') } },
      ]
    }];

    Building.url = 'http://localhost:3000/';

    const routes = [
      { model: Building, tableColumns: ['startedAt', 'title', 'budget'], key: Building.path },
    ];

    return (
      <Components.Panel>
        <Components.PanelHeader>
          <div style={divStyle}>
            <Components.VerticalMenu submenus={submenus} />
            <h1 onClick={() => { this.go('/') }}>Krebs Eng</h1>
            <div className="horizontal-menu">
              <Components.If condition={!this.props.auth0Client.isAuthenticated()}>
                <Components.Button onClick={() => { this.signIn() }} text="Sign In" />
              </Components.If>
              <Components.If condition={this.props.auth0Client.isAuthenticated()}>
                <Components.Button onClick={() => { this.signOut() }} text="Sign Out" />
              </Components.If>
            </div>
          </div>
        </Components.PanelHeader>
        <Components.PanelBody>
          {/*{routes.map((route) => (*/}
          {/*<Components.RestFlexRoute {...route} auth0Config={auth0Client} />*/}
          {/*))}*/}
        </Components.PanelBody>
        <Components.NotificationContainer />
      </Components.Panel>
    );
  }
}

export default withRouter(withUser(Panel));
