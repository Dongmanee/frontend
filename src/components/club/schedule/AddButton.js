import { TiPlus } from "react-icons/ti";
import styled from "styled-components";
import { flexCenter } from "../../../styles/global.style";

export default function AddButton({ onClick }) {
  return (
    <AddButtonLayout onClick={onClick}>
      <TiPlus size={30} />
    </AddButtonLayout>
  );
}

export const AddButtonLayout = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.gray.xxs};
  box-shadow: 1px 1px 10px rgb(0, 0, 0, 0.1);
  ${flexCenter};
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
  cursor: pointer;
`;
