import { useState } from "react";
import { BsFillCursorFill } from "react-icons/bs";
import styled from "styled-components";
import CustomInput from "../../global/CustomInputs";

export default function ClubPostsDetailsCommentInput() {
  const [enteredComment, setEnteredComment] = useState("");

  const handleCommentRegister = () => {};

  return (
    <ClubPostsDetailsCommentInputLayout>
      <CustomInput
        placeholder={"댓글 작성..."}
        width={"85%"}
        value={enteredComment}
        onChange={(e) => setEnteredComment(e.target.value)}
      />
      <div onClick={handleCommentRegister}>
        <BsFillCursorFill size={20} />
      </div>
    </ClubPostsDetailsCommentInputLayout>
  );
}

const ClubPostsDetailsCommentInputLayout = styled.div`
  width: 100%;
  position: fixed;
  bottom: 20px;
  right: 0;
  left: 15px;

  div {
    position: absolute;
    right: 50px;
    top: 8px;
  }
`;
