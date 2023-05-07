import styled from 'styled-components';

export const Footer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.default};
  min-height: 100px;
  margin-top: auto;
  color: ${({ theme }) => theme.colors.primary.contrastText};
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const CopyrightInfo = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
`;
