import React from 'react';
import { Button, Wrapper } from '../../styles/common';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <S.Title>Lee Chan Young</S.Title>
      <S.ButtonWrapper>
        <Button onClick={() => navigate('signin')}>로그인</Button>
        <Button onClick={() => navigate('signup')}>회원가입</Button>
      </S.ButtonWrapper>
    </Wrapper>
  );
}

export default HomePage;
