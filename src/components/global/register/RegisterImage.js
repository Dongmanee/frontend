import styled from "styled-components";
import RegisterLabel from "./RegisterLabel";
import { RiImageAddLine } from "react-icons/ri";
import { flexCenter } from "../../../styles/global.style";

export default function RegisterImage() {
  return (
    <RegisterImageLayout>
      <RegisterLabel label="이미지를 등록해주세요" isRequired={true} />
      <RegisterImageButton>
        <RiImageAddLine size={28} />
      </RegisterImageButton>
    </RegisterImageLayout>
  );
}

const RegisterImageLayout = styled.div``;

const RegisterImageButton = styled.div`
  width: 7rem;
  height: 7rem;
  ${flexCenter}
  border: 3px dotted  ${(props) => props.theme.colors.gray.xs};
  border-radius: 1rem;
  /* background-color: ${(props) => props.theme.colors.gray.xxs}; */
  color: ${(props) => props.theme.colors.gray.xs};
`;
