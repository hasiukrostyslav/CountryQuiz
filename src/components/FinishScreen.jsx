import styled, { css } from 'styled-components';

import { useCountries } from '../context/CountriesContext';
import Button from './Button';
import TextContainer from './TextContainer';

const StyledFinishScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 60rem;
  margin: 0 auto;
`;

const Text = styled.p`
  ${(props) =>
    props.color === 'dark' &&
    css`
      font-size: 1.8rem;
      color: var(--color-grey-900);
      font-weight: 500;
    `}
  ${(props) =>
    props.color === 'light' &&
    css`
      color: var(--color-grey-400);
    `}
`;

Text.defaultProps = {
  color: 'light',
};

const AlignButton = styled(Button)`
  align-self: flex-end;
  margin-top: 3rem;
`;

function FinishScreen() {
  const { questions, correctAnswers, bestResult, dispatch } = useCountries();

  return (
    <StyledFinishScreen>
      <TextContainer type="score">
        <Text color="dark">
          You have {correctAnswers} correct answers from {questions.length}{' '}
          questions (
          {Number.parseInt((correctAnswers * 100) / questions.length)}
          %)
        </Text>
      </TextContainer>
      <Text>(Best result: {bestResult} correct answer)</Text>
      <AlignButton onClick={() => dispatch({ type: 'quiz/restart' })}>
        Restart quiz
      </AlignButton>
    </StyledFinishScreen>
  );
}

export default FinishScreen;
