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
  watch,
}) {
  const [imagePreview, setImagePreview] = useState("");
  const photoInput = useRef();
  const image = watch(name);
  const { ref, ...rest } = register(name);

  const onClickImageInput = () => {
    photoInput.current.click();
  };

  useEffect(() => {
    console.log(image);
    if (image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [image]);

  return (
    <RegisterImageLayout>
      <RegisterLabel id={name} label={label} isRequired={true} />
      <RegisterInputBox>
        <RegisteredImage src={imagePreview ? imagePreview : example} />
        <RegisterImageButton>
          <input
            {...rest}
            name={name}
            ref={(e) => {
              ref(e);
              photoInput.current = e;
            }}
            id={name}
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            style={{ display: "none" }}
          />
          <div onClick={onClickImageInput}>
            <MdEdit />
          </div>
        </RegisterImageButton>
      </RegisterInputBox>
      {errorMsg && <RegisterErrorMsg errorMsg={errorMsg} />}
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
  margin-top: 0.3rem;
`;

const RegisteredImage = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  object-fit: cover;
`;

const RegisterImageButton = styled.div`
  position: relative;
  div {
    ${flexCenter}
    padding: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.gray.xxs};
    border: none;
    font-family: "Noto Sans KR", sans-serif;
    position: absolute;
    left: -2.5rem;
    top: 1.5rem;
  }
`;
