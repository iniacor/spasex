import React from 'react';
import * as Styled from './DotWrapper.styled';
import { ActiveDot } from '@components/atoms/ActiveDot/ActiveDot';
import { Circle } from '@components/atoms/Circle/Circle';

export const DotWrapper = () => {
  return (
    <Styled.DotWrapper>
      <ActiveDot />
      <Circle />
      <Circle />
    </Styled.DotWrapper>
  );
};
