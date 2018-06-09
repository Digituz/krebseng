import styled from 'styled-components';
import Content from './content';
import Link from './link';

const Menu = styled.section`
  background-color: #222;
  color: #fff;
`;

const ContentMenu = Content.extend`
  padding: 10px 30px;
  line-height: 25px;
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      display: inline-block;
      margin: 0 30px 0 0;
      padding: 0;
    }
  }
`;

export default function() {
  return (
    <Menu>
      <ContentMenu>
        <ul>
          <li><Link href="/">Início</Link></li>
          <li><Link href="/building">Empreendimentos</Link></li>
          <li><Link href="/">Contato</Link></li>
        </ul>
      </ContentMenu>
    </Menu>
  );
}
