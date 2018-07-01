import Auth0Web from 'auth0-web';
import {withRouter} from 'next/router';
import Building from '../entities/Building';
import * as Components from '@digituz/react-components';

const Panel = (props) => {
  const auth0Client = new Auth0Web({
    domain: 'digituz-corp.auth0.com',
    audience: 'https://projects.digituz.com.br',
    clientID: '86fnC4Rb8NsAB4feVuAyS44WDRvB5KbP',
    redirectUri: `http://localhost:3000/callback`,
    responseType: 'token id_token',
    scope: 'openid profile'
  });

  const divStyle = {
    display: 'grid',
    gridTemplateColumns: '45px 1fr auto',
  };

  const guardedRoute = (url) => {
    if (auth0Client.isAuthenticated()) return this.go(url);
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
            <Components.If condition={!auth0Client.isAuthenticated()}>
              <Components.Button onClick={this.signIn} text="Sign In" />
            </Components.If>
            <Components.If condition={auth0Client.isAuthenticated()}>
              <Components.Button onClick={this.signOut} text="Sign Out" />
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
};

export default withRouter(Panel);
