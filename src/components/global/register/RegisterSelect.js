import styled from "styled-components";
import { useController, Controller } from "react-hook-form";
import RegisterLabel from "./RegisterLabel";
import RegisterErrorMsg from "./RegisterErrorMsg";
import { university_list } from "../../../consts/tempData";

export default function RegisterSelect({
  name,
  control,
  label,
  isRequired,
  errorMsg,
}) {
  const { field } = useController({ name: name, control: control });
  const { value, onChange } = field;

  return (
    <RegisterSelectLayout>
      <RegisterLabel id={name} label={label} isRequired={isRequired} />
      <select value={value} onChange={onChange}>
        <option selected disabled hidden>
          ------선택--------
        </option>
        {university_list.map((univ, idx) => (
          <option key={idx} value={univ.universityId}>
            {univ.universityName}
          </option>
        ))}
        {errorMsg && <RegisterErrorMsg errorMsg={errorMsg} />}
      </select>
    </RegisterSelectLayout>
  );
}

const RegisterSelectLayout = styled.div`
  select {
    width: 100%;
    height: 2.5rem;
    border-radius: 0.7rem;
    background-color: ${(props) => props.theme.colors.gray.xxs};
    border: none;
    padding: 0.08rem 1rem;
  }

  option {
    border: none;
  }
`;
