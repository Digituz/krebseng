import * as Components from '@digituz/react-components';
import {withRouter} from 'next/router';
import Building from '../../entities/Building';
import withPanelTemplate from '../../components/withPanelTemplate';
import withUser from '../../components/withUser';

const Buildings = (props) => {
  const tableColumns = ['title'];
  Building.url = 'http://localhost:3000/buildings';

  return (
    <Components.RestFlexRoute
      auth0Config={props.auth0Client.getProperties()}
      model={Building}
      tableColumns={tableColumns}
      showList={!props.buildingId}
      pushUrl={props.router.push}
    />
  );
};

Buildings.getInitialProps = async function(context) {
  const { path } = context.query;

  return {
    buildingId: path,
  }
};

export default withRouter(withUser(withPanelTemplate(Buildings)));
