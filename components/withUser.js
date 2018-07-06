import Auth0Web from 'auth0-web';
import config from '../config';

const auth0Client = new Auth0Web({
  domain: 'krebseng.auth0.com',
  audience: 'https://buildings.krebseng.com.br',
  clientID: 'pcjhQ2kzJzT5PwxbjIbe4GmgGSKxUjOG',
  redirectUri: `${config.domain}/callback`,
  responseType: 'token id_token',
  scope: 'openid profile get:buildings delete:buildings post:buildings put:buildings'
});

function withUser(WrappedComponent) {
  function wrappedWithUser(props) {
    return <WrappedComponent auth0Client={auth0Client} {...props} />;
  }

  wrappedWithUser.getInitialProps = async function(context) {
    if (WrappedComponent.getInitialProps) return WrappedComponent.getInitialProps(context);
    return {};
  };

  return wrappedWithUser;
}

export default withUser;
