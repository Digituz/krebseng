import RestFlexClient from '@digituz/rest-flex-client';
import {withRouter} from 'next/router'
import styled from 'styled-components';
import Content from '../components/content';
import Description from '../components/description';
import Footer from '../components/footer';
import Header from '../components/header';
import Menu from '../components/menu';

const DescriptiveMemoLink = styled.a`
  color: dodgerblue;
`;

const BuildingContents = styled(Content)`
  padding-top: 0;
`;

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

const Building = (props) => {
  const { building } = props;
  const bucketName = 'krebseng';
  const endpoint = 'nyc3.digitaloceanspaces.com';

  const descriptiveMemorialAvailable = building.descriptiveMemorial && building.descriptiveMemorial.length > 0;

  const descriptiveMemorialUrl = descriptiveMemorialAvailable ?
    `https://${bucketName}.${endpoint}/${building.descriptiveMemorial[0].spacesName}` :
    '';

  let pictures = [];
  if (building.mainPicture && building.mainPicture.length > 0) pictures.push(building.mainPicture[0]);
  if (building.pictures && building.pictures.length > 0) pictures = pictures.concat(building.pictures);

  return (
    <div>
      <Header />
      <Menu />
      <Description>
        <h1>{building.title}</h1>
        <p>{building.address}</p>
      </Description>
      <BuildingContents>
        {
          descriptiveMemorialAvailable &&
          <p>
            <DescriptiveMemoLink href={descriptiveMemorialUrl} target="_blank">
              Clique aqui para baixar o memorial descritivo.
            </DescriptiveMemoLink>
          </p>
        }
        <h2>Fotos</h2>
        {
          pictures.length === 0 && <p>Por enquanto não há fotos publicadas.</p>
        }
        {
          pictures && pictures.length > 0 &&
          <Carousel>
            {
              pictures.map((picture, idx) => {
                const url = `https://${bucketName}.${endpoint}/${picture.spacesName}`;
                return <img key={idx} src={url} />;
              })
            }
          </Carousel>
        }
      </BuildingContents>
      <Footer />
    </div>
  );
};

Building.getInitialProps = async function(context) {
  const client = new RestFlexClient('https://krebseng.now.sh/buildings');
  const { path } = context.query;
  const res = await client.find({ path });
  const buildings = await res.json();

  return {
    building: buildings[0],
  }
};

export default withRouter(Building);
