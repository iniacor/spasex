import * as React from 'react';
import * as Styled from './ClearButton.styled';

type ClearButtonProps = {
  removeAllHandler?: () => void;
};

export default function ClearButton({ removeAllHandler }: ClearButtonProps) {
  return (
    <Styled.ClearAllButton onClick={removeAllHandler}>
      <Styled.ButtonText>clear all</Styled.ButtonText>
    </Styled.ClearAllButton>
  );
}
