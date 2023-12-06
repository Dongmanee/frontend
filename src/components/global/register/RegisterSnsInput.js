import styled from "styled-components";
import RegisterLabel from "./RegisterLabel";
import instagramIcon from "../../../images/sns_icons/instagramIcon.png";
import naverBandIcon from "../../../images/sns_icons/naverBandIcon.png";
import naverBlogIcon from "../../../images/sns_icons/naverBlogIcon.png";
import CustomInput from "../CustomInputs";
import { flexColumn, flexICenter } from "../../../styles/global.style";

const club_sns_input = [
  {
    img: instagramIcon,
    name: "clubInstagramURL",
    placeholder: "인스타그램 주소",
  },
  {
    img: naverBandIcon,
    name: "clubnaverBandURL",
    placeholder: "네이버 밴드 주소",
  },
  {
    img: naverBlogIcon,
    name: "clubnaverBlogURL",
    placeholder: "네이버 블로그 주소",
  },
];

export default function RegisterSnsInput({ label, register }) {
  return (
    <RegisterSnsInputLayout>
      <RegisterLabel label={label} />
      {club_sns_input.map((sns, idx) => (
        <SnsInputRow key={idx}>
          <img src={sns.img} />
          <CustomInput
            name={sns.name}
            register={register}
            radius="0.7rem"
            placeholder={sns.placeholder || ""}
          />
        </SnsInputRow>
      ))}
    </RegisterSnsInputLayout>
  );
}

const RegisterSnsInputLayout = styled.div`
  ${flexColumn}
  gap: 0.7rem;
`;
const SnsInputRow = styled.div`
  ${flexICenter}
  gap: 0.5rem;
  img {
    width: 2rem;
  }
  input {
    width: 100%;
    height: 2.5rem;
  }
`;
