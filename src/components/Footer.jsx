import styled from 'styled-components';
import { useCountries } from '../context/CountriesContext';
import Button from './Button';
import Timer from './Timer';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
`;

function Footer() {
  const { questions, index, answer, dispatch } = useCountries();
  const hasAnswered = answer !== null;
  return (
    <StyledFooter>
      <Timer />
      {index !== questions.length - 1 && hasAnswered && (
        <Button onClick={() => dispatch({ type: 'quiz/nextQuestion' })}>
          Next
        </Button>
      )}
      {index === questions.length - 1 && hasAnswered && (
        <Button onClick={() => dispatch({ type: 'quiz/finished' })}>
          Check results
        </Button>
      )}
    </StyledFooter>
  );
}

export default Footer;
