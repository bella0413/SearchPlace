import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
        outline: none;
      }
      &:active {
        background: #fa5252;
        outline: none;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 2rem;
  padding-top: 2rem;
  padding-right: 2rem;
  padding-bottom: 4rem;
  
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 0.4rem;
  border-radius: 0.4rem;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 1rem;
  box-sizing: border-box;
`;

function MemoCreate() {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input autoFocus placeholder="저장할 장소를 입력하고 Enter를 누르세요" />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default MemoCreate;