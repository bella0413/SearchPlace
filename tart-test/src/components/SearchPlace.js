import React, { useState } from "react";
import MapContainer from "./MapContainer";
import styled from 'styled-components';

const SearchButton =  styled.button`
background: #38d9a9;
&:hover {
  background: #63e6be;
}
&:active {
  background: #20c997;
}
cursor: pointer;
width: 5rem;
height: 3rem;
font-size: 1rem;
margin-left : 1rem;
color: white;
border-radius: 1rem;
border: none;
outline: none !important;
`;


const SearchPlace = () => {
  // const [<상태 값 저장 변수>, <상태 값 갱신 함수>] = useState(<상태 초기 값>);
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="  예시) ㅇㅇ시 맛집, ㅁㅁ 명소, 특정 주소 등"
          onChange={onChange}
          value={inputText}
          style={{
            width: '44rem',
            height: '3rem',
            border: '0.3rem solid #daebe8',
            borderRadius: '1rem',
        }}
        />
        <SearchButton type="submit">검색</SearchButton>
      </form>
      <MapContainer searchPlace={place} />
    </>
  );
};

export default SearchPlace;