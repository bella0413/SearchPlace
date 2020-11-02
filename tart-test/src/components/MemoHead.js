import React from 'react';
import styled from 'styled-components';

const MemoHeadBlock = styled.div`
  padding-top: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 2rem;
    color: #343a40;
  }

`;

function MemoHead() {
  return (
    <MemoHeadBlock>
      <h1>Memo</h1>
    </MemoHeadBlock>
  );
}

export default MemoHead;