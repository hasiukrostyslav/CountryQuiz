import styled, { css } from 'styled-components';

const Option = styled.button`
  border-radius: 3rem;
  padding: 1.6rem 2.4rem;
  color: var(--color-grey-900);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 1 49%;

  ${(props) =>
    props.type === 'default' &&
    css`
      background-color: var(--color-amber-500);
      border: 2px solid var(--color-amber-500);
      cursor: pointer;
      transition: all 0.5s;

      &:hover {
        background-color: var(--color-blue-500);
        border: 2px solid var(--color-blue-500);
      }
    `}

  ${(props) =>
    props.type === 'correct' &&
    css`
      background-color: var(--color-green-500);
      border: 2px solid var(--color-green-500);
    `}

  ${(props) =>
    props.type === 'wrong' &&
    css`
      background-color: var(--color-red-500);
      border: 2px solid var(--color-red-500);
      color: var(--color-grey-100);
    `}

  ${(props) =>
    props.type === 'disabled' &&
    css`
      background-color: var(--color-grey-900);
      border: 2px solid var(--color-grey-600);
      color: var(--color-grey-600);
    `}
`;

Option.defaultProps = {
  type: 'default',
};

export default Option;
