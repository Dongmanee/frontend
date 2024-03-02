import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { flexJCenter } from "../../../assets/styles/global.style";

export default function ManageApplicationButton() {
  const navigate = useNavigate();

  const onClickManageApplication = () => {
    navigate("management");
  };

  return (
    <ManageApplicationButtonLayout onClick={onClickManageApplication}>
      지원서 관리
      <IoIosArrowForward />
    </ManageApplicationButtonLayout>
  );
}

const ManageApplicationButtonLayout = styled.div`
  ${flexJCenter}
  gap: 0.1rem;
  align-self: end;
  font-size: ${(props) => props.theme.sizes.sm};
  font-weight: ${(props) => props.theme.weights.lg};
`;
