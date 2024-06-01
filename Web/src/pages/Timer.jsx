import React from 'react';
import { TimeCounter } from '../layouts/TimeCounter';
import styled from 'styled-components';

export const Timer = () => {
  return (
    <Background>
      <TimeCounter />
    </Background>
  );
};

const Background = styled.div`
  background-color: ${(props) => props.theme.colors.gray1};
  min-height: 100vh;
  padding: 0 16px 70px 16px;
`;
