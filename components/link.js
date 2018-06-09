import {withRouter} from 'next/router'

const Link = ({children, router, href}) => {
  const style = {
    textDecoration: 'none',
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
};

export default withRouter(Link);
