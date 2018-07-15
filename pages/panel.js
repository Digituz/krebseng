import {withRouter} from 'next/router';
import React, {Component, Fragment} from 'react';
import * as Components from '@digituz/react-components';
import withPanelTemplate from '../components/withPanelTemplate';
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

  go(url) {
    this.props.router.push(url);
  }

  signIn() {
    this.props.auth0Client.signIn();
  }

  signOut() {
    this.props.auth0Client.signOut('http://localhost:3000');
  }

  render() {
    return (
      <Fragment>
        <Components.Card className="md-6 md-pad-3" title="Krebs Engenharia">
          <h2>Seja bem-vindo.</h2>
          <p>
            Este é o sistema de gerenciamento da Krebs Engenharia. Para utilizá-lo, você deve estar logado.
            Se você já estiver logado, utilize o menu vertical para ir para alguma seção.
          </p>
        </Components.Card>
      </Fragment>
    );
  }
}

export default withRouter(withUser(withPanelTemplate(Panel)));
