// import { exampleApi } from '../apis/example';
import React, { useEffect } from 'react';
import styled from 'styled-components';

export const Example = () => {
  useEffect(() => {
    // exampleApi();
  }, []);

  return (
    <div>
      <Ex>example</Ex>
    </div>
  );
};

const Ex = styled.h1`
  color: ${(props) => props.theme.colors.success}; // --systeamcolor-success 색 사용(마지막 단어를 소문자로)
  font: ${(props) => props.theme.fonts.button1_a}; // button1_a 사용
`;
