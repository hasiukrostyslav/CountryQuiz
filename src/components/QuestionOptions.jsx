import styled from 'styled-components';
import { useCountries } from '../context/CountriesContext';
import Option from './Option';

const StyledQuestionOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  width: 100%;
  height: 20rem;
`;

function QuestionOptions() {
  const { questions, index, answer, dispatch, secondsRemaining } =
    useCountries();

  const currentQuestion = questions.at(index);
  const correctAnswer = currentQuestion.countryName;
  const hasAnswered = answer !== null;

  return (
    <StyledQuestionOptions>
      {currentQuestion.options.map((option) => (
        <Option
          onClick={() => dispatch({ type: 'quiz/newAnswer', payload: option })}
          key={option}
          disabled={hasAnswered}
          type={
            (option === answer && answer === correctAnswer) ||
            (option === correctAnswer && answer)
              ? 'correct'
              : option === answer && answer !== correctAnswer
              ? 'wrong'
              : !answer
              ? 'default'
              : 'disabled'
          }
        >
          {option.length > 30 ? `${option.slice(0, 29)}...` : option}
        </Option>
      ))}
    </StyledQuestionOptions>
  );
}

export default QuestionOptions;
