import React, { memo } from 'react';
import styled from 'styled-components';
import MemoItem from './MemoItem';
import { useMemoState} from '../MemoContext';

const MemoListBlock = styled.div`
  flex: 1;
  padding: 1rem 2rem;
  padding-bottom: 3rem;
  overflow-y: auto;
`;

function MemoList() {

const memos = useMemoState();

  return (
  <MemoListBlock>
      {memos.map(memo => (
          <MemoItem
          key={memo.id}
          id={memo.id}
          text={memo.text}
          />
      ))}
  </MemoListBlock>
  );
}

export default MemoList;