import * as Components from '@digituz/react-components';
import React, {Component} from 'react';
import config from '../config';
import Building from '../entities/Building';
import Loading from '../components/loading';

function withPanelTemplate(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        checkingSession: !this.props.auth0Client.isAuthenticated(),
      };
    }

    static getInitialProps(context) {
      if (WrappedComponent.getInitialProps) {
        return WrappedComponent.getInitialProps(context);
      }
      return {};
    }

    async componentDidMount() {
      if (this.props.auth0Client.isAuthenticated()) {
        return this.setState({
          checkingSession: false,
        });
      }

      await this.props.auth0Client.checkSession();
      this.setState({
        checkingSession: false,
      });
    }

    go(url) {
      this.props.router.push(url);
    }

    signIn() {
      this.props.auth0Client.signIn();
    }

    signOut() {
      this.props.auth0Client.signOut(config.domain);
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
          { title: 'Empreendimentos', color: '#66ad66', onClick: () => { guardedRoute('/panel/buildings') } },
        ]
      }];

      Building.url = config.domain;

      if (this.state.checkingSession) return <Loading message="Checking Session" />;

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
            <WrappedComponent {...this.props} />
          </Components.PanelBody>
          <Components.NotificationContainer />
        </Components.Panel>
      );
    }
  }
}

export default withPanelTemplate;
