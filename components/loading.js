import styledComponents from 'styled-components';
import React from 'react';

const LoadingContainer = styledComponents.div`
  width: 100%;
  height: 100%;
  text-align: center;
  grid-column-end: span 12;
  
  > span {
    font-size: 50px;
    position: relative;
    top: -50px;
    animation: ease-in-out infinite alternate;
    animation-name: run;
    animation-duration: 1.2s;
  }
  
  @keyframes run {
    0% {
      left: -90px;
      color: #eee;
    }
  
    50% {
      color: #666;
    }
  
    100% {
      left: 90px;
      color: #eee;
    }
  }
`;

export default function(props) {
  return (
    <LoadingContainer>
      <h2>{props.message}</h2>
      <span>.</span>
    </LoadingContainer>
  );
}
