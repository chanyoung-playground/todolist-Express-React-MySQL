import styled from 'styled-components';

export const Button = styled.button`
  font-weight: bold;
  color: #fff;
  background-color: #3399ff;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    background-color: #237fdf;
  }

  &:disabled {
    background: #ccc;
    cursor: no-drop;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 10%;
  padding: 0 32px;
`;
