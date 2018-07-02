import * as Components from '@digituz/react-components';
import Building from '../../entities/Building';
import withPanelTemplate from '../../components/withPanelTemplate';
import withUser from '../../components/withUser';

function buildings(props) {
  const tableColumns = ['buildingName'];
  return (
    <Components.RestFlexRoute
      auth0Config={props.auth0Client.getProperties()}
      model={Building}
      tableColumns={tableColumns}
    />
  );
}

export default withUser(withPanelTemplate(buildings));
