import styled from 'styled-components';

const HeaderSection = styled.section`
  margin: 0 auto 0;
  height: 350px;
  background: url(/static/topo.jpg) repeat-x;
  
  h1 {
    margin: 0;
  }
`;

function Header() {
  return (
    <HeaderSection>
      <h1>Krebs Engenharia</h1>
    </HeaderSection>
  )
}

export default Header;
