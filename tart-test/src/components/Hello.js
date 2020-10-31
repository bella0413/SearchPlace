import React,{useState} from 'react';

// function Hello() {
const Hello = () =>{
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하쇼');
  const onClickLeave = () => setMessage('안녕히 가쇼');
  
    return(
    <div>
    <button onClick={onClickEnter}>입장</button>
    <button onClick={onClickLeave}>퇴장</button>
    <h1>{message}</h1>
    안녕하세요 function 입니다
    </div>
  );
}

export default Hello;