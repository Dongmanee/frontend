import styled from "styled-components";
import RegisterLabel from "./RegisterLabel";
import { RiImageAddLine } from "react-icons/ri";
import { flexCenter, flexColumn } from "../../../styles/global.style";
import RegisterErrorMsg from "./RegisterErrorMsg";
import { MdEdit } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import example from "../../../images/example.png";

export default function RegisterImage({
  label,
  errorMsg,
  register,
  name,
  image,
}) {
  const [imagePreview, setImagePreview] = useState("");
  const photoInput = useRef();

  const onClickImageInput = () => {
    photoInput.current.click();
  };

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [image]);

  return (
    <RegisterImageLayout>
      <RegisterLabel id="picture" label={label} isRequired={true} />
      <RegisterInputBox>
        <RegisteredImage src={imagePreview ? imagePreview : example} />
        <RegisterImageButton>
          <input
            id="picture"
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            ref={photoInput}
            style={{ display: "none" }}
          />
          <button onClick={onClickImageInput}>
            <MdEdit />
          </button>
        </RegisterImageButton>
      </RegisterInputBox>
      {/* {errorMsg && <RegisterErrorMsg errorMsg={errorMsg} />} */}
    </RegisterImageLayout>
  );
}

const RegisterImageLayout = styled.div`
  ${flexColumn}
`;

const RegisterInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.3rem 0;
`;

const RegisteredImage = styled.img`
  width: 7rem;
  border-radius: 50%;
`;

const RegisterImageButton = styled.div`
  position: relative;
  button {
    ${flexCenter}
    padding: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.gray.xs};
    border: none;
    font-family: "Noto Sans KR", sans-serif;
    position: absolute;
    left: -2.5rem;
    top: 1.5rem;
  }
`;
