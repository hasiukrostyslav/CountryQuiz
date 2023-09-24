import styled from 'styled-components';

import { useCountries } from '../context/CountriesContext';

const StyledTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-grey-700);
`;

const QuestionText = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-400);
`;

const StatBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StatText = styled.p`
  font-size: 1.2rem;
`;

const Count = styled.span`
  font-weight: 500;
  color: var(--color-grey-300);
`;

function TopBar() {
  const { questions, index, correctAnswers } = useCountries();

  return (
    <StyledTopBar>
      <QuestionText>Which country&apos;s flag is this?</QuestionText>
      <StatBox>
        <StatText>
          <Count>{index + 1}</Count> of <Count>{questions.length}</Count>
        </StatText>
        <StatText>
          Correct answers: <Count>{correctAnswers}</Count>
        </StatText>
      </StatBox>
    </StyledTopBar>
  );
}

export default TopBar;
