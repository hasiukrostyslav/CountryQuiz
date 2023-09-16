import styled from 'styled-components';

const StyledLogo = styled.img`
  width: 10rem;
  height: 10rem;
`;

function Logo() {
  return <StyledLogo src="../public/logo.png" alt="App logo" />;
}

export default Logo;
