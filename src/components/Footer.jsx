import { useState } from 'react';
import styled from 'styled-components';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import { useCountries } from '../context/CountriesContext';
import Button from './Button';
import Timer from './Timer';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
  height: 5.5rem;
`;

function Footer() {
  const [key, setKey] = useState(0);
  const { questions, index, answer, dispatch } = useCountries();
  const hasAnswered = answer !== null;

  return (
    <StyledFooter>
      <CountdownCircleTimer
        isPlaying={!answer}
        duration={30}
        colors={['#28f619', '#e1fc0f', '#ef4e0e', '#ef0e0e']}
        colorsTime={[30, 20, 10, 0]}
        size={50}
        strokeWidth={6}
        trailColor="#4b5563"
        key={key}
      >
        {() => <Timer />}
      </CountdownCircleTimer>
      {index !== questions.length - 1 && hasAnswered && (
        <Button
          onClick={() => {
            setKey((prevKey) => prevKey + 1);
            dispatch({ type: 'quiz/nextQuestion' });
          }}
        >
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
