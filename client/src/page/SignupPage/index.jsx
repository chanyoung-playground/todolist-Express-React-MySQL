import React from 'react';
import SignForm from '../../components/SignForm';
import { Wrapper } from '../../styles/common';

function SignupPage() {
  return (
    <Wrapper>
      <SignForm signin={false} />
    </Wrapper>
  );
}

export default SignupPage;
