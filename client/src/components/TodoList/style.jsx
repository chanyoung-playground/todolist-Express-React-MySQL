import styled from 'styled-components';

export const TodoContainer = styled.ul`
  height: 420px;
  margin-bottom: 36px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
