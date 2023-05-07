import * as React from 'react';
import * as Styled from './BuyButton.styled';
import { ButtonText } from '../SignInButton/SignInButton.styled';

export default function BuyButton() {
  return (
    <Styled.BuyButton onClick={() => console.log('Clicked!')}>
      <ButtonText>buy</ButtonText>
    </Styled.BuyButton>
  );
}
