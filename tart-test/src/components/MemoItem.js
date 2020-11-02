import React from 'react';
import styled, { css } from 'styled-components';
import { MdDelete } from 'react-icons/md';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const MemoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;


const Text = styled.div`
  flex: 1;
  font-size: 1.2rem;
  color: #495057;
`;

function MemoItem({ id, text }) {
  return (
    <MemoItemBlock>
      <Text>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </MemoItemBlock>
  );
}

export default MemoItem;