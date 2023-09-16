import styled from 'styled-components';
import Button from './Button';
import Timer from './Timer';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <Timer />
      <Button>Next</Button>
    </StyledFooter>
  );
}

export default Footer;
