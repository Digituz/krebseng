import styled from 'styled-components';

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
  return (
    <BuildingCardContainer>
      <img src={props.building.image} alt={props.building.title} />
      <h2>{props.building.title}</h2>
    </BuildingCardContainer>
  );
}
