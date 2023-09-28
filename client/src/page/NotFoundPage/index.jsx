import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

function NotFoundPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/signin');
    }, 2000);
  }, []);

  return <S.NotFoundWrapper>해당 페이지를 찾을 수 없습니다.</S.NotFoundWrapper>;
}

export default NotFoundPage;
