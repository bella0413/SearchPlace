import React, { useState } from "react";
import MapContainer from "./MapContainer";

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
          placeholder="Search Place..."
          onChange={onChange}
          value={inputText}
          style={{
            width: '800px',
            height: '50px',
            margin: '10px auto',
        }}
        />
        <button type="submit" style={{
            width: '80px',
            height: '56px',
            margin: '10px auto',
        }}>검색</button>
      </form>
      <MapContainer searchPlace={place} />
    </>
  );
};

export default SearchPlace;