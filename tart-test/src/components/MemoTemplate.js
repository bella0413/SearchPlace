import React from 'react';
import styled from 'styled-components';

const MemoTemplateBlock = styled.div`
  width: 26rem;
  height: 35rem;

  position: relative;
  background: #daebe8;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.04);
  
  display: flex;
  flex-direction: column;
`;

export default function MemoTemplate({ children }) {
  return <MemoTemplateBlock>{children}</MemoTemplateBlock>;
}

// export default MemoTemplate;