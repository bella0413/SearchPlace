import React, { useState } from "react";
import MapContainer from "./MapContainer";
import { Button } from 'reactstrap';
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
          placeholder="  예시) ㅇㅇ시 맛집"
          onChange={onChange}
          value={inputText}
          style={{
            width: '43rem',
            height: '3rem',
        }}
        />
        <button type="submit" style={{
            width: '5rem',
            height: '3rem',
            margin: '0 1rem',
        }}>검색</button>
      </form>
      <MapContainer searchPlace={place} />
    </>
  );
};

export default SearchPlace;