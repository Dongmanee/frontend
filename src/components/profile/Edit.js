import { FaCamera } from "react-icons/fa";
import styled from "styled-components";
import example from "../../images/example.png";
import Layout from "../../layouts/Layout";
import { flexColumn } from "../../styles/global.style";
import usePrevPage from "../../hooks/usePrevPage";

export default function UserProfileEdit() {
  const { onPrevPage } = usePrevPage();
  return (
    <Layout headerLeft={"prev"} onClickLeft={onPrevPage}>
      <UserProfileEditLayout>
        <UserImgBox>
          <img src={example} />
          <div>
            <FaCamera size={25} />
          </div>
        </UserImgBox>

        <UserDetailsCol>
          <DetailRow>
            <div>이름</div>
            <div>정준형</div>
          </DetailRow>

          <DetailRow>
            <div>이메일</div>
            <div>wjd@naver.com</div>
          </DetailRow>

          <DetailCol>
            <div>자기소개</div>
            <textarea placeholder="안녕하세요~!" />
          </DetailCol>

          <button>완료</button>
        </UserDetailsCol>
      </UserProfileEditLayout>
    </Layout>
  );
}

const UserProfileEditLayout = styled.div`
  width: 100%;
  height: 70vh;
  ${flexColumn};
  justify-content: center;
  align-items: center;
  gap: 70px;
`;

const UserImgBox = styled.div`
  position: relative;

  img {
    width: 120px;
    height: 120px;
    border-radius: 60px;
  }

  div {
    padding: 5px;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: white;
  }
`;

const UserDetailsCol = styled.div`
  ${flexColumn};
  align-items: center;
  width: 80%;

  gap: 30px;

  button {
    width: 60px;
    height: 35px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.dark.md};
    color: white;
    align-self: flex-end;
  }
`;

const DetailRow = styled.div`
  display: flex;
  width: 100%;

  div:first-child {
    width: 30%;
  }
`;

const DetailCol = styled.div`
  ${flexColumn};
  width: 100%;
  gap: 15px;

  textarea {
    min-height: 150px;
    border: 1px solid lightgray;
    border-radius: 10px;
    resize: none;
    box-sizing: border-box;
    padding: 20px;
  }
`;
