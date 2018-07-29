import RestFlexClient from '@digituz/rest-flex-client';
import {withRouter} from 'next/router'
import React, {Component} from 'react';
import styled from 'styled-components';
import Content from '../components/content';
import Description from '../components/description';
import Footer from '../components/footer';
import Header from '../components/header';
import Menu from '../components/menu';
import Modal from '../components/modal';

const DescriptiveMemoLink = styled.a`
  color: dodgerblue;
`;

const BuildingContents = styled(Content)`
  padding-top: 0;
`;

const GoogleMapsLink = styled.a`
  cursor: pointer;
  display: inline-grid;
  grid-template-columns: auto 1fr;
  margin-bottom: 10px;
`;

const AddressLabel = styled.label`
  margin-top: 5px;
  cursor: pointer;
`;

const MapsIcon = styled.img`
  width: 25px;
  margin-left: 5px;
  cursor: pointer;
`;

const ModalContents = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 50%;
    max-height: 95%;
  }
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
    cursor: pointer;
  }
`;

class Building extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      modalImageUrl: '',
    };

    this.closeModal = this.closeModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  static async getInitialProps({query}) {
    const client = new RestFlexClient('https://krebseng.now.sh/buildings');
    const { path } = query;
    const res = await client.find({ path });
    const buildings = await res.json();

    return {
      building: buildings[0],
    };
  }

  closeModal() {
    this.setState({
      showModal: false,
      modalImageUrl: '',
    });
  }

  showModal(url) {
    this.setState({
      showModal: true,
      modalImageUrl: url,
    });
  }

  render() {
    const { building } = this.props;
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
          <GoogleMapsLink target="_blank" href={`https://www.google.com/maps/place/${building.address},${building.neighborhood},Porto Alegre`}>
            <AddressLabel>{building.address} - {building.neighborhood}</AddressLabel>
            <MapsIcon className="maps-icon" src="/static/maps-red-icon.png" alt="Link para o Google Maps"/>
          </GoogleMapsLink>
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
                  return <img key={idx} src={url} onClick={() => (this.showModal(url))} />;
                })
              }
            </Carousel>
          }
        </BuildingContents>
        <Footer />
        {
          this.state.showModal &&
          <Modal>
            <ModalContents onClick={this.closeModal}>
              <img src={this.state.modalImageUrl} />
            </ModalContents>
          </Modal>
        }
      </div>
    );
  }
}

export default withRouter(Building);
