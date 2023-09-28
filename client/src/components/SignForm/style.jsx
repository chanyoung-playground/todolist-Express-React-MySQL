import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const IconWrapper = styled.div`
  font-size: 32px;
  display: flex;
  margin-bottom: 32px;
  justify-content: center;
  align-items: center;
`;

export const SigninText = styled.div`
  margin-left: 8px;
`;

export const InputArea = styled.div`
  height: 72px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  width: 100%;
  font-size: 12px;
  margin: 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  font-size: 12px;
  color: #d9381e;
`;

export const NavigateButton = styled(Link)`
  &:hover {
    color: #3399ff;
    text-decoration: underline;
  }
`;
