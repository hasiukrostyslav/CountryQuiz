import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--color-grey-700);
  padding: 1.2rem 2.4rem;
  border: 2px solid var(--color-grey-700);
  border-radius: 3rem;
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
  transition: all 0.5s;

  &:hover {
    background-color: var(--color-grey-900);
  }
`;

export default Button;
