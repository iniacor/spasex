import React from 'react';
import * as Styled from './SignInButton.styled';

const SignInButton = () => {
  return (
    <Styled.SignInButton onClick={() => console.log('i am sign in button')}>
      <Styled.ButtonText>sign in</Styled.ButtonText>
    </Styled.SignInButton>
  );
};
export default SignInButton;
