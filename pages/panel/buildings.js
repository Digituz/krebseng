import * as Components from '@digituz/react-components';
import {withRouter} from 'next/router';
import config from '../../config';
import Building from '../../entities/Building';
import withPanelTemplate from '../../components/withPanelTemplate';
import withUser from '../../components/withUser';

const Buildings = (props) => {
  const tableColumns = ['title'];
  Building.url = `${config.domain}/buildings`;

  const navigate = (path, id) => {
    if (!id) return props.router.push(path);
    props.router.push(`${path}?id=${id}`, `${path}/${id}`);
  };

  return (
    <Components.RestFlexRoute
      accessToken={props.auth0Client.getAccessToken()}
      entityId={props.buildingId}
      goBack={props.router.back}
      model={Building}
      tableColumns={tableColumns}
      navigate={navigate}
    />
  );
};

Buildings.getInitialProps = async function(context) {
  const { id } = context.query;

  return {
    buildingId: id,
  }
};

export default withRouter(withUser(withPanelTemplate(Buildings)));
