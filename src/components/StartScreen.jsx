import styled from 'styled-components';
import Heading from './Heading';
import Button from './Button';
import { useCountries } from '../context/CountriesContext';

const StyledStartScreen = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

function StartScreen() {
  const { dispatch } = useCountries();
  return (
    <StyledStartScreen>
      <Heading as="h2">Welcome to The World Flags Quiz!</Heading>
      <Heading as="h3">30 questions to test your flags knowledge</Heading>
      <Button onClick={() => dispatch({ type: 'quiz/start' })}>
        Let&apos;s start
      </Button>
    </StyledStartScreen>
  );
}

export default StartScreen;
