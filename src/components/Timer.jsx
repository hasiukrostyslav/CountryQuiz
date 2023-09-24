import { useEffect } from 'react';

import { useCountries } from '../context/CountriesContext';

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

  return <div>{secondsRemaining}</div>;
}

export default Timer;
