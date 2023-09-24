import styled from 'styled-components';

import { useCountries } from '../context/CountriesContext';
import TopBar from './TopBar';
import QuestionOptions from './QuestionOptions';
import Footer from './Footer';

const StyledMainScreen = styled.div`
  width: 60rem;
  margin: 0 auto;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const ImgFlag = styled.img`
  width: 25rem;
  height: 15rem;
`;

function MainScreen() {
  const { questions, index } = useCountries();
  return (
    <StyledMainScreen>
      <TopBar />
      <QuestionContainer>
        <ImgFlag alt="Country Flag" src={questions.at(index).countryFlag} />
        <QuestionOptions />
      </QuestionContainer>
      <Footer />
    </StyledMainScreen>
  );
}

export default MainScreen;
