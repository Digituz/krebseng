import {withRouter} from 'next/router'
import styled from 'styled-components';

const A = styled.a`
  text-decoration: none;
  -webkit-tap-highlight-color: #ccc;
  
  :focus, :active {
    color: #ccc;
  }
`;

const Link = ({children, router, href}) => {
  const style = {
    textDecoration: 'none',
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <A href={href} onClick={handleClick} style={style}>
      {children}
    </A>
  );
};

export default withRouter(Link);
