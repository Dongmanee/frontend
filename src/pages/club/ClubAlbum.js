import { BiSolidCopy } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import sample from "../../images/example.png";
import { flexCenter, fullSize, positionCenter } from "../../styles/global.style";

export default function ClubAlbum() {
  const location = useLocation();
  const isClubhome = location.pathname == "/club";

  return (
    <ClubAlbumLayout $isClubhome={isClubhome}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, idx) => {
        if (isClubhome && idx > 8) return;
        return (
          <ImageBox key={idx} $isClubhome={isClubhome}>
            <img src={sample} />
            <div>
              <BiSolidCopy />
            </div>
          </ImageBox>
        );
      })}
    </ClubAlbumLayout>
  );
}

const ClubAlbumLayout = styled.div`
  width: ${(props) => (props.$isClubhome ? "90vw" : "100vw")};
  border-radius: ${(props) => props.$isClubhome && "20px"};
  display: grid;
  grid-row-gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  margin-left: ${(props) => (props.$isClubhome ? "0" : "-21px !important")};
  margin: 0 auto;
  margin-top: ${(props) => (props.$isClubhome ? "20px" : "0")};
  box-sizing: border-box;
  overflow: hidden;
`;

const ImageBox = styled.div`
  width: ${(props) => (props.$isClubhome ? "30vw" : "33vw")};
  height: ${(props) => (props.$isClubhome ? "30vw" : "33vw")};
  ${flexCenter};
  position: relative;

  & > img {
    ${fullSize};
    ${positionCenter};
    margin: auto;
    transform: translate(50, 50);
    object-fit: cover;
  }

  & > div {
    position: absolute;
    top: 8px;
    right: 8px;

    color: white;
  }
`;
