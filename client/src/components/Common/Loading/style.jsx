import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerIcon = styled(FaSpinner)`
  animation: ${spinAnimation} 1s linear infinite;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 36px;
  color: #333;
  background-color: #f5f5f5;
`;
