import styled from 'styled-components';

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
  return (
    <StyledTopBar>
      <QuestionText>Which country&apos;s flag is this?</QuestionText>
      <StatBox>
        <StatText>
          <Count>4</Count> of <Count>30</Count>
        </StatText>
        <StatText>
          Correct answers: <Count>4</Count>
        </StatText>
      </StatBox>
    </StyledTopBar>
  );
}

export default TopBar;
