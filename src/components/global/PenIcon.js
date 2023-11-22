import { FaPen } from "react-icons/fa";
import styled from "styled-components";
import { AddButtonLayout } from "../club/schedule/AddButton";

export default function PenIcon({ onClick }) {
  return (
    <PenIconLayout onClick={onClick}>
      <FaPen size={20} />
    </PenIconLayout>
  );
}

const PenIconLayout = styled(AddButtonLayout)``;
