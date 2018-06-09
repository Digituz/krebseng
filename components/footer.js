import styled from 'styled-components';
import Content from './content';

const FooterContainer = styled.section`
  background-color: #ddd;
  width: 100%;
`;

const Footer = Content.extend`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 15px 30px;
  margin-top: 20px;
  
  ul {
    list-style: none;
    padding-left: 5px;
    display: inline-block;
    
    li {
      line-height: 30px;
      
      img {
        margin-top: 30px;
        height: 30px;
      }
    }
    
    :last-child {
      text-align: right;
    }
  }
`;

export default function() {
  return (
    <FooterContainer>
      <Footer>
        <ul>
          <li>Início</li>
          <li>Empreendimentos</li>
          <li>Contato</li>
        </ul>
        <ul>
          <li>Rua Souza Lobo 666, Vila Jardim</li>
          <li>Porto Alegre/RS</li>
          <li>Fone: (51) 3334-9142</li>
          <li><img src="/static/logo-krebsebg.png" /></li>
        </ul>
      </Footer>
    </FooterContainer>
  )
}
