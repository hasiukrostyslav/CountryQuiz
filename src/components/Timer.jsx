import styled from 'styled-components';
import { useCountries } from '../context/CountriesContext';

const StyledTimer = styled.div``;

function Timer() {
  const { secondsRemaining } = useCountries();
  return <StyledTimer>{secondsRemaining}</StyledTimer>;
}

export default Timer;
