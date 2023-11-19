import styled from "styled-components";
import CustomInput from "../CustomInputs";
import SmallTagBox from "../SmallTagBox";
import RegisterErrorMsg from "./RegisterErrorMsg";
import RegisterLabel from "./RegisterLabel";
import { useCallback, useState, useEffect } from "react";

export default function RegisterTag({ label, isRequired, errorMsg }) {
  const [hashtag, setHashtag] = useState("");
  const [hashArr, setHashArr] = useState([]);

  useEffect(() => {
    window.addEventListener("keyup", onKeyUp);
  }, []);

  const onChangeHashtag = (e) => {
    setHashtag(e.target.value);
  };

  const onKeyUp = useCallback(
    (e) => {
      const $HashWrapOuter = document.querySelector(".HashWrapOuter");
      const $HashWrapInner = document.createElement("div");
      $HashWrapInner.className = "HashWrapInner";
      $HashWrapInner.addEventListener("click", () => {
        $HashWrapOuter?.removeChild($HashWrapInner);
        setHashArr(hashArr.filter((hashtag) => hashtag));
      });
      if (e.keyCode === 13 && e.target.value.trim() !== "") {
        $HashWrapInner.innerHTML = "#" + e.target.value;
        $HashWrapOuter?.appendChild($HashWrapInner);
        setHashArr((hashArr) => [...hashArr, hashtag]);
        setHashtag("");
      }
    },
    [hashtag, hashArr]
  );

  return (
    <div>
      <RegisterLabel id="tag" label={label} isRequired={isRequired} />
      <RegisterTagBox className="HashWrap">
        <CustomInput
          className="HashInput"
          id="tag"
          radius="0.7rem"
          height="2.5rem"
          value={hashtag}
          onChange={onChangeHashtag}
          onKeyUp={onkeyup}
          placeholder="작성 후 엔터를 누르면 자동 입력됩니다."
        />
        <RegisteredTagBox className="HashWrapOuter"></RegisteredTagBox>
      </RegisterTagBox>
      {errorMsg && <RegisterErrorMsg errorMsg={errorMsg} />}
    </div>
  );
}

const RegisterTagBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RegisteredTagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  & > div {
    background-color: ${(props) => props.theme.colors.gray.xxs};
    color: ${(props) => props.theme.colors.gray.md};
    font-size: 11px;
    padding: 10px;
    border-radius: 15px;
    font-weight: 700;
  }
`;
