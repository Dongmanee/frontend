import styled from "styled-components";
import { FaStarOfLife } from "react-icons/fa6";

export default function RegisterLabel({ label, isRequired, id }) {
  return (
    <RegisterLabelLayout>
      <label htmlFor={id}>{label}</label>
      {isRequired && <FaStarOfLife size={8} color="red" />}
    </RegisterLabelLayout>
  );
}

const RegisterLabelLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: ${(props) => props.theme.colors.gray.xs};
  margin-bottom: 0.5rem;
`;
