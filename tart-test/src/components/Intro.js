import React,{useState} from 'react';
import { Button } from 'reactstrap';


const Intro = () =>{
  const [message, setMessage] = useState('');
  const onClickInfo = () => setMessage('기억하고 싶은 장소를 검색하고 저장하세요');
  const onClickReview = () => setMessage('리액트 처음 해봐서 어려운데 신기하고 재밌다');
  
    return(
    <div>
    <Button outline color="info" onClick={onClickInfo}>서비스 소개</Button>
    <Button outline color="info" onClick={onClickReview}>후기</Button>
    <p>{message}</p>
    </div>
  );
}

export default Intro;