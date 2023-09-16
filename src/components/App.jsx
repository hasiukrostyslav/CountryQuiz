import GlobalStyles from '../styles/GlobalStyles';
import { useCountries } from '../context/CountriesContext';
import Container from './Container';
import Header from './Header';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import MainScreen from './MainScreen';
import FinishScreen from './FinishScreen';

function App() {
  const { status } = useCountries();
  return (
    <>
      <GlobalStyles />

      <Container>
        <Header />
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
        {status === 'active' && <MainScreen />}
        {status === 'finished' && <FinishScreen />}
      </Container>
    </>
  );
}

export default App;

