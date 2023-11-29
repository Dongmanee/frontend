import styled from "styled-components";
import example from "../../images/example.png";

export default function ProfileAndName({ img, name, isIcon, onClick }) {
  return (
    <ProfileAndNameLayout onClick={onClick} $isIcon={isIcon}>
      <img src={img} />
      <div>{name}</div>
    </ProfileAndNameLayout>
  );
}

ProfileAndName.defaultProps = {
  img: example,
};

const ProfileAndNameLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  div {
    font-size: 11px;
  }
`;
