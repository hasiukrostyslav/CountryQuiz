import styled, { css } from 'styled-components';

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 60rem;
  border-radius: 3rem;
  margin: 0 auto;

  ${(props) =>
    props.type === 'error' &&
    css`
      border: 3px solid var(--color-grey-700);
      padding: 1.4rem 2.4rem;
    `}

  ${(props) =>
    props.type === 'score' &&
    css`
      background-color: var(--color-blue-500);
      padding: 1.6rem 2.4rem;
    `}
`;

export default TextContainer;
