import React from 'react';
import styled from 'styled-components';

const Category = () => {
  return (
    <SelectCategory>
      #사회
    </SelectCategory>
  );
};

export default Category;

// Styled Components
const SelectCategory = styled.button`
  background-color: lightgray;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 16px;
  cursor: pointer;
  color: #333;

  &:hover {
    background-color: gray;
    color: white;
  }

  &:active {
    background-color: darkgray;
  }
`;
