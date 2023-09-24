import styled from 'styled-components';

import Logo from './Logo';
import Heading from './Heading';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 4rem 0 6rem;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Heading as="h1">World Flags Quiz</Heading>
    </StyledHeader>
  );
}

export default Header;
