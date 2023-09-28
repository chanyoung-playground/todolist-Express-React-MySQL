import React, { useState } from 'react';
import * as S from './style';
import { AiOutlineLogin } from 'react-icons/ai';
import { Button } from '../../styles/common';
import { useValidateInput } from '../../hooks/useValidteInput';
import { signupUser, signinUser } from '../../apis/auth';

import { useRedirect } from '../../hooks/useRedirect';

function SignForm({ signin }) {
  const validateInput = useValidateInput();
  const redirect = useRedirect();

  const [userInput, setUserInput] = useState({ email: '', password: '' });
  const [isValidInput, setIsValidInput] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    // console.log(e.target);
    const { id, value } = e.target;
    setUserInput({
      ...userInput,
      [id]: value,
    });

    setIsValidInput(validateInput(id, value, isValidInput));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = signin
      ? await signinUser(userInput)
      : await signupUser(userInput);
    redirect(res);
  };

  return (
    <form onSubmit={handleSubmit}>
      <S.IconWrapper>
        <AiOutlineLogin />
        <S.SigninText>{signin ? 'Sign in' : 'Sign up'}</S.SigninText>
      </S.IconWrapper>
      <S.InputArea>
        <S.Label htmlFor='email'>이메일</S.Label>
        <S.Input
          id='email'
          onChange={handleChange}
          value={userInput.email}
          data-testid='email-input'
        />
        {!isValidInput.email && (
          <S.ErrorMessage>이메일에 @을 포함하세요</S.ErrorMessage>
        )}
      </S.InputArea>
      <S.InputArea>
        <S.Label htmlFor='password'>비밀번호</S.Label>
        <S.Input
          id='password'
          type='password'
          onChange={handleChange}
          value={userInput.password}
          data-testid='password-input'
        />
        {!isValidInput.password && (
          <S.ErrorMessage>비밀번호를 8자리 이상 입력하세요</S.ErrorMessage>
        )}
      </S.InputArea>
      <S.ButtonWrapper>
        {signin ? (
          <S.NavigateButton to='/signup'>회원가입 하러가기</S.NavigateButton>
        ) : (
          <S.NavigateButton to='/signin'>로그인 하러가기</S.NavigateButton>
        )}
        <Button
          type='submit'
          disabled={!isValidInput.email || !isValidInput.password}
          data-testid={signin ? 'signin-button' : 'signup-button'}>
          {signin ? '로그인' : '회원가입'}
        </Button>
      </S.ButtonWrapper>
    </form>
  );
}

export default SignForm;
