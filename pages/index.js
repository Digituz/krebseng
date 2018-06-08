import styled from 'styled-components';
import React from 'react';
import Header from '../components/header';
import Content from '../components/content';
import buildings from '../data/buildings';

const Buildings = styled(Content)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  
  > div {
    display: inline-block;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 5px;
    
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
    }
  }
  
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  
  @media (min-width: 501px) and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

function index() {
  return (
    <div>
      <Header />
      <Buildings>
        {
          buildings.map(building => (
            <div>
              <img src={building.image} alt=""/>
              <h2>{building.title}</h2>
            </div>
          ))
        }
      </Buildings>
    </div>
  );
}

export default index;
