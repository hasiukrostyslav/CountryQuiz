import styled from 'styled-components';
import { IoWarningOutline } from 'react-icons/io5';

import TextContainer from './TextContainer';

const ErrorIcon = styled(IoWarningOutline)`
  width: 4rem;
  height: 4rem;
  color: var(--color-red-500);
`;

const ErrorMessage = styled.p`
  font-size: 2rem;
  text-align: center;
`;

function Error() {
  return (
    <TextContainer type="error">
      <ErrorIcon />
      <ErrorMessage>
        Something went wrong during loading data. <br /> Please try again.
      </ErrorMessage>
    </TextContainer>
  );
}

export default Error;
