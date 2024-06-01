import React, { useState } from 'react';
import styled from 'styled-components';

const Category = ({ string }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <SelectCategory onClick={handleClick} isClicked={isClicked}>
      #{string}
    </SelectCategory>
  );
};

export default Category;

// Styled Components
const SelectCategory = styled.button`
  background-color: ${({ theme, isClicked }) => (isClicked ? theme.colors.secondary1 : theme.colors.gray1)};
  border: none;
  color: ${({ theme, isClicked }) => (isClicked ? theme.colors.gray1 : theme.colors.gray3)};
  border-radius: 30px;
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary1};
    color: ${({ theme }) => theme.colors.gray1};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.secondary1};
  }
`;
