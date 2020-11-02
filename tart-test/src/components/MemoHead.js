import React from 'react';
import styled from 'styled-components';
import { useMemoState } from '../MemoContext';

const MemoHeadBlock = styled.div`
  padding-top: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 0.2rem solid #cfe0e8;
  h1 {
    margin: 0;
    font-size: 2rem;
    color: #343a40;
  }

`;

function MemoHead() {
    const memos = useMemoState();
    console.log(memos);
  return (
    <MemoHeadBlock>
      <h1>Memo</h1>
    </MemoHeadBlock>
  );
}

export default MemoHead;