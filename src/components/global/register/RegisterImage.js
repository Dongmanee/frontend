import styled from "styled-components";
import RegisterLabel from "./RegisterLabel";
import { RiImageAddLine } from "react-icons/ri";
import { flexCenter, flexColumn } from "../../../styles/global.style";
import RegisterErrorMsg from "./RegisterErrorMsg";
import { MdEdit } from "react-icons/md";
import { FaCamera } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import example from "../../../images/example.png";

export default function RegisterImage({
  label,
  errorMsg,
  register,
  name,
  watch,
  isBackgroundImage,
}) {
  const [imagePreview, setImagePreview] = useState("");
  const photoInput = useRef();
  const image = watch(name);
  const { ref, ...rest } = register(name);

  const onClickImageInput = () => {
    photoInput.current.click();
  };

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(example);
    }
  }, [image]);

  return (
    <RegisterImageLayout>
      <RegisterLabel id={name} label={label} isRequired={true} />
      <RegisterInputBox>
        <RegisteredImage
          $isBackgroundImage={isBackgroundImage}
          src={imagePreview ? imagePreview : example}
        />
        <RegisterImageButton
          $isBackgroundImage={isBackgroundImage}
          onClick={onClickImageInput}
        >
          <FaCamera />
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
  position: relative;
`;

const RegisteredImage = styled.img`
  width: ${(props) => (props.$isBackgroundImage ? "100%" : "7rem")};
  height: ${(props) => (props.$isBackgroundImage ? "8rem" : "7rem")};
  border-radius: ${(props) => (props.$isBackgroundImage ? "1rem" : "50%")};
  object-fit: cover;
`;

const RegisterImageButton = styled.div`
  ${flexCenter}
  padding: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.gray.xxs};
  border: none;
  position: absolute;
  bottom: ${(props) => (props.$isBackgroundImage ? "0.5rem" : "0")};
  left: ${(props) => (props.$isBackgroundImage ? "auto" : "5.5rem")};
  right: ${(props) => (props.$isBackgroundImage ? "0.5rem" : "auto")};
`;
