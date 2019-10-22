import styled from 'styled-components';
import {getImage} from '../data/buildings';

const BuildingCardContainer = styled.div`
  display: inline-block;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 10px;
  
  h2 {
    font-size: 16px;
    margin: 15px;
    font-weight: normal;
    text-align: center;
  }
  
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;


export default function(props) {
  const {building} = props;
  const bucketName = 'digituz';
  const endpoint = 'nyc3.digitaloceanspaces.com';
  const folderAvailable = building.mainPicture && building.mainPicture.length > 0;

  const folderUrl = folderAvailable ?
    `https://${bucketName}.${endpoint}/${building.mainPicture[0].spacesName}` :
    '/static/images/building-icon.png';
  return (
    <BuildingCardContainer>
      <img src={folderUrl} alt={building.title} />
      <h2>{props.building.title}</h2>
    </BuildingCardContainer>
  );
}
