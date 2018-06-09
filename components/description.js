import styled from 'styled-components';
import Content from './content';

const DescriptionContainer = Content.extend`
  grid-column-start: 1;
  grid-column-end: span 3;
  border: none;
  margin-top: -20px;
  margin-bottom: -20px;
  box-shadow: none;
  padding: 30px 30px 10px 30px;

  h1 {
    margin-bottom: 10px;
  }

  p {
    margin: 10px 0 16px 0;
  }
  
  @media (max-width: 500px) {
    div.description {
      grid-column-start: 1;
      grid-column-end: span 1;
    }
  }
  
  @media (min-width: 501px) and (max-width: 700px) {
    div.description {
      grid-column-start: 1;
      grid-column-end: span 2;
    }
  }
`;

export default function(props) {
  return (
    <DescriptionContainer>
      {props.children}
    </DescriptionContainer>
  );
}
