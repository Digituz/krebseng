import Link from 'next/link';
import styled from 'styled-components';
import React from 'react';
import Description from '../components/description';
import Footer from '../components/footer';
import Header from '../components/header';
import Menu from '../components/menu';
import Content from '../components/content';
import RestFlexClient from "@digituz/rest-flex-client/dist/RestFlexClient";

const MainFolder = styled(Content)`
  padding-top: 15px;

  p {
    color: #777;
    font-size: 13px;
    font-weight: 700;
    margin: 0;
  }
  
  p.address {
    font-size: 14px;
  }
  
  h2 {
    margin: 3px 0;
  }
  
  img {
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
    max-width: 100%;
  }
`;

function index(props) {
  const { building } = props;
  const bucketName = 'krebseng';
  const endpoint = 'nyc3.digitaloceanspaces.com';

  const folder = `https://${bucketName}.${endpoint}/${building.folder[0].spacesName}`;

  return (
    <div>
      <Header />
      <Menu />
      <Description>
        <h1>Krebs Engenharia</h1>
        <p>Seja bem-vindo ao site da Krebs Engenharia.</p>
      </Description>
      <MainFolder>
        <p>Último Lançamento</p>
        <Link as={`/empreendimentos/${building.path}`} href={`/building?path=${building.path}`}>
          <a>
            <img src={folder} alt={`Folder do empreendimento: ${building.title}`} />
          </a>
        </Link>
      </MainFolder>
      <Footer />
    </div>
  );
}


index.getInitialProps = async function(context) {
  const client = new RestFlexClient('https://krebseng.now.sh/buildings');
  const res = await client.find({ path: { $eq: 'villa-dei-fiori' } });
  const buildings = await res.json();

  return {
    building: buildings[0],
  }
};

export default index;
