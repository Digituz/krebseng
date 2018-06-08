import styled from 'styled-components';

import Content from '../components/content';

const HeaderSection = styled.section`
  margin: 0 auto 0;
  height: 350px;
  background: url(/static/topo.jpg) repeat-x;
  
  h1 {
    margin: 0;
  }
  
  @media (max-width: 500px) {
    height: 150px;
  }
  
  @media (min-width: 501px) and (max-width: 700px) {
    height: 200px;
  }
`;

function Header() {
  return (
    <HeaderSection>
      <Content>
        <img src="/static/logo-krebsebg.png" alt="Krebs Engenharia Ltda"/>
      </Content>
    </HeaderSection>
  )
}

export default Header;
