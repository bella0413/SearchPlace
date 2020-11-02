import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialMemo = [
  {
    id: 1,
    text: '건대 맛집 : 감성 타코',
  },
  {
    id: 2,
    text: '건대 명소 : 건국대 일감호',
  },
  {
    id: 3,
    text: '구리 맛집 : 기꾸 초밥',
  },
  {
    id: 4,
    text: '을지로 술집 : 감각의 제국..???ㅋㅋㅋ',
  }
];

function memoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.memo);
    // case 'TOGGLE':
    //   return state.map(memo =>
    //     memo.id === action.id ? { ...memo} : memo
    //   );
    case 'REMOVE':
      return state.filter(memo => memo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const MemoStateContext = createContext();
const MemoDispatchContext = createContext();
const MemoNextIdContext = createContext();

export function MemoProvider({ children }) {
  const [state, dispatch] = useReducer(memoReducer, initialMemo);
  const nextId = useRef(5);

  return (
    <MemoStateContext.Provider value={state}>
      <MemoDispatchContext.Provider value={dispatch}>
      <MemoNextIdContext.Provider value={nextId}>
      {children}
      </MemoNextIdContext.Provider>    
      </MemoDispatchContext.Provider>
    </MemoStateContext.Provider>
  );
}

// 이렇게 커스텀 Hook을 만들면 좀 더 간편하다
// 커스텀 Hook 만들 때 이렇게 에러 처리해주면 나중에 더 금방 문제점 발견 가능
export function useMemoState() {
    const context = useContext(MemoStateContext);
    if (!context) {
      throw new Error('Cannot find MemoProvider');
    }
    return context;
}
  
export function useMemoDispatch() {
    const context = useContext(MemoDispatchContext);
    if (!context) {
      throw new Error('Cannot find MemoProvider');
    }
    return context;
}

export function useMemoNextId() {
    const context = useContext(MemoNextIdContext);
    if (!context) {
      throw new Error('Cannot find MemoProvider');
    }
    return context;
}  