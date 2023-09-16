import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 5rem;
      letter-spacing: 0.6rem;
      font-weight: 600;
      color: var(--color-grey-300);
    `}
  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 3rem;
      letter-spacing: 0.2rem;
      font-weight: 700;
    `}

  ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 2rem;
      letter-spacing: 0.1rem;
      font-weight: 500;
    `}
`;

export default Heading;
