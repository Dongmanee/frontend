import { FaPen } from "react-icons/fa";
import styled from "styled-components";
import { AddButtonLayout } from "../club/schedule/AddButton";

export default function PenIcon() {
  return (
    <PenIconLayout>
      <FaPen size={20} />
    </PenIconLayout>
  );
}

const PenIconLayout = styled(AddButtonLayout)``;
