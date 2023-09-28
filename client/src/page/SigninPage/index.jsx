import React from 'react';
import SignForm from '../../components/SignForm';
import { Wrapper } from '../../styles/common';

function SigninPage() {
  return (
    <Wrapper>
      <SignForm signin={true} />
    </Wrapper>
  );
}

export default SigninPage;
