import styled from 'styled-components';
import Heading from './Heading';
import Button from './Button';

const StyledStartScreen = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

function StartScreen() {
  return (
    <StyledStartScreen>
      <Heading as="h2">Welcome to The World Flags Quiz!</Heading>
      <Heading as="h3">30 questions to test your flags knowledge</Heading>
      <Button>Let&apos;s start</Button>
    </StyledStartScreen>
  );
}

export default StartScreen;
