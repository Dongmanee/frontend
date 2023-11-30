import styled from "styled-components";
import CustomInput from "../CustomInputs";
import SmallTagBox from "../SmallTagBox";
import RegisterErrorMsg from "./RegisterErrorMsg";
import RegisterLabel from "./RegisterLabel";
import { useCallback, useState, useEffect } from "react";
import { flexCenter, flexICenter } from "../../../styles/global.style";

export default function RegisterTag({ label, isRequired, errorMsg }) {
  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key != "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  };

  const removeTag = (tagIdx) => {
    setTags(tags.filter((tag, idx) => idx != tagIdx));
  };

  return (
    <div>
      <RegisterLabel id="tag" label={label} isRequired={isRequired} />
      <TagInputContainer>
        {tags.map((tag, idx) => (
          <TagItem key={idx}>
            <span className="text">{tag}</span>
            <span className="close" onClick={() => removeTag(idx)}>
              &times;
            </span>
          </TagItem>
        ))}
        <TagInput
          onKeyDown={handleKeyDown}
          placeholder={
            tags.length == 0 ? "엔터를 입력하여 태그를 등록해주세요" : ""
          }
        />
      </TagInputContainer>
      {errorMsg && <RegisterErrorMsg errorMsg={errorMsg} />}
    </div>
  );
}

const TagInputContainer = styled.div`
  ${flexICenter}
  flex-wrap: wrap;
  gap: 0.5em;
  background-color: ${(props) => props.theme.colors.gray.xxs};
  padding: 0.4rem 1rem;
  border-radius: 0.7rem;
`;

const TagItem = styled.div`
  display: inline-block;
  padding: 0.5em 0.75em;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.gray.xs};

  font-size: ${(props) => props.theme.sizes.xs};

  & > span:last-child {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(48, 48, 48);
    border-radius: 50%;
    margin-left: 0.3em;
    font-size: ${(props) => props.theme.sizes.xxs};
    color: #fff;
    cursor: pointer;
  }
`;

const TagInput = styled.input`
  flex-grow: 1;
  padding: 0.5em 0;
  background-color: ${(props) => props.theme.colors.gray.xxs};
  border: none;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
`;
