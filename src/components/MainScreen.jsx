import styled from 'styled-components';
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
  border: 1px solid #fff;
`;

function MainScreen() {
  return (
    <StyledMainScreen>
      <TopBar />
      <QuestionContainer>
        <ImgFlag alt="Country Flag" src="" />
        <QuestionOptions />
      </QuestionContainer>
      <Footer />
    </StyledMainScreen>
  );
}

export default MainScreen;
