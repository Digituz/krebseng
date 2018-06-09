import styled from 'styled-components';
import Content from '../components/content';
import Header from '../components/header';

const Carousel = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
    border: 1px solid #ddd;
    box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 10px;
  }
`;

export default function() {
  return (
    <div>
      <Header />
      <Content>
        <Carousel>
          <img src="http://www.krebseng.com.br/painel/include/arquivos/10/fotos/20110111175854.jpg"/>
          <img src="http://www.krebseng.com.br/painel/include/arquivos/10/fotos/20110111175907.jpg"/>
          <img src="http://www.krebseng.com.br/painel/include/arquivos/10/fotos/20110111175912.jpg"/>
          <img src="http://www.krebseng.com.br/painel/include/arquivos/10/fotos/20110111175915.jpg"/>
          <img src="http://www.krebseng.com.br/painel/include/arquivos/10/fotos/20110120120116.jpg"/>
        </Carousel>
      </Content>
    </div>

  );
}
