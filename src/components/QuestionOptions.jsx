import styled from 'styled-components';
import Option from './Option';

const StyledQuestionOptions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  width: 100%;
  height: 20rem;
`;

function QuestionOptions() {
  return (
    <StyledQuestionOptions>
      <Option type="correct">Ukraine</Option>
      <Option type="wrong">Poland</Option>
      <Option type="disabled">Australia</Option>
      <Option>Unated Kingdom</Option>
    </StyledQuestionOptions>
  );
}

export default QuestionOptions;
