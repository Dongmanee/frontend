import styled from "styled-components";
import RegisterLabel from "./RegisterLabel";
import { RiImageAddLine } from "react-icons/ri";
import { flexCenter } from "../../../styles/global.style";
import RegisterErrorMsg from "./RegisterErrorMsg";

export default function RegisterImage({ label, errorMsg }) {
  return (
    <RegisterImageLayout>
      <RegisterLabel label={label} isRequired={true} />
      <RegisterImageButton>
        <RiImageAddLine size={28} />
      </RegisterImageButton>
      {errorMsg && <RegisterErrorMsg errorMsg={errorMsg} />}
    </RegisterImageLayout>
  );
}

const RegisterImageLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const RegisterImageButton = styled.div`
  height: 10rem;
  ${flexCenter}
  border: 3px dotted  ${(props) => props.theme.colors.gray.xs};
  border-radius: 1rem;
  /* background-color: ${(props) => props.theme.colors.gray.xxs}; */
  color: ${(props) => props.theme.colors.gray.xs};
`;
