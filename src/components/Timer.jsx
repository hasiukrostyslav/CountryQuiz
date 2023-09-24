import { useEffect } from 'react';
import styled from 'styled-components';
import { useCountries } from '../context/CountriesContext';

const StyledTimer = styled.div``;

function Timer() {
  const { answer, secondsRemaining, dispatch } = useCountries();

  useEffect(() => {
    const timer = setInterval(() => {
      if (secondsRemaining < 1) clearInterval(timer);
      dispatch({ type: 'quiz/timer' });
    }, 1000);

    if (answer) clearInterval(timer);

    return () => clearInterval(timer);
  }, [secondsRemaining, answer, dispatch]);

  return <StyledTimer>{secondsRemaining}</StyledTimer>;
}

export default Timer;
