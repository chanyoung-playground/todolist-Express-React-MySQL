import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const Header = styled.h1`
  font-size: 32px;
  font-weight: 600;
`;

export const InputArea = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  margin-right: 8px;
  height: 30px;

  &:focus {
    outline: none;
  }
`;
