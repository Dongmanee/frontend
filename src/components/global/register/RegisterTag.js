import { useController } from "react-hook-form";
import styled from "styled-components";
import { flexICenter } from "../../../styles/global.style";
import RegisterErrorMsg from "./RegisterErrorMsg";
import RegisterLabel from "./RegisterLabel";

export default function RegisterTag({
  name,
  control,
  label,
  isRequired,
  errorMsg,
}) {
  const {
    field: { value, onChange },
  } = useController({
    name: name,
    control: control,
    defaultValue: [],
  });

  const MAX_TAG_NUM = 2;

  const handleKeyDown = (e) => {
    if (e.key != "Enter") return;
    const newTag = e.target.value;
    if (!newTag.trim()) return;
    onChange([...value, newTag]);
    e.target.value = "";
  };

  const removeTag = (tagIdx) => {
    onChange(value.filter((tag, idx) => idx != tagIdx));
  };

  return (
    <div>
      <RegisterLabel id="tag" label={label} isRequired={isRequired} />
      <TagInputContainer>
        {value.map((tag, idx) => (
          <TagItem key={idx}>
            <span className="text">{tag}</span>
            <span className="close" onClick={() => removeTag(idx)}>
              &times;
            </span>
          </TagItem>
        ))}
        {value.length <= MAX_TAG_NUM && (
          <TagInput
            onKeyDown={handleKeyDown}
            placeholder={
              value.length == 0 ? "엔터를 입력하여 태그를 등록해주세요" : ""
            }
          />
        )}
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
  width: 10px;
  flex-grow: 1;
  padding: 0.5em 0;
  background-color: ${(props) => props.theme.colors.gray.xxs};
  border: none;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
`;
