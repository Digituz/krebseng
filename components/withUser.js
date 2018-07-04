import Auth0Web from 'auth0-web';

const auth0Client = new Auth0Web({
  domain: 'digituz-corp.auth0.com',
  audience: 'https://buildings.krebseng.com.br',
  clientID: '5gE2aHDLEvYW06AuTrjIiBzTLrBGcFPs',
  redirectUri: `http://localhost:3000/callback`,
  responseType: 'token id_token',
  scope: 'openid profile'
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
