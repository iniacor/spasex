import React, { ReactNode } from 'react';
import * as Styled from './Container.styled';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <Styled.ContainerWrapper>{children}</Styled.ContainerWrapper>;
};

export default Container;
