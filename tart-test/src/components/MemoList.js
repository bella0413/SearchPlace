import React from 'react';
import styled from 'styled-components';
import MemoItem from './MemoItem';

const MemoListBlock = styled.div`
  flex: 1;
  padding: 1rem 2rem;
  padding-bottom: 3rem;
  overflow-y: auto;
`;

function MemoList() {
  return <MemoListBlock>
      <MemoItem text="전수연 짱짱~~~"></MemoItem>
  </MemoListBlock>;
}

export default MemoList;