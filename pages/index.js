import styled from 'styled-components';
import React from 'react';
import Header from '../components/header';
import Content from '../components/content';
import buildings from '../data/buildings';

const Buildings = styled(Content)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  
  div.description {
    grid-column-start: 1;
    grid-column-end: span 3;
    border: none;
    margin-top: -20px;
    margin-bottom: -20px;
    box-shadow: none;
    
    h1 {
      margin-bottom: 10px;
    }
    
    p {
      margin: 10px 0 16px 0;
    }
  }
  
  > div {
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
  }
  
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    
    div.description {
      grid-column-start: 1;
      grid-column-end: span 1;
    }
  }
  
  @media (min-width: 501px) and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    
    div.description {
      grid-column-start: 1;
      grid-column-end: span 2;
    }
  }
`;

function index() {
  return (
    <div>
      <Header />
      <Buildings>
        <div className="description">
          <h1>Empreendimentos</h1>
          <p>Conheça os empreendimentos já entregues pela Krebs Engenharia.</p>
        </div>
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
