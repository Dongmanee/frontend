import { BiSolidCopy } from "react-icons/bi";
import styled from "styled-components";
import sample from "../../images/example.png";
import {
  flexCenter,
  fullSize,
  positionCenter,
} from "../../styles/global.style";
import useCheckPath from "../../hooks/useCheckPath";
import { temp_club_album } from "../../consts/tempData";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ClubAlbum() {
  const { isCheckedPath } = useCheckPath("album");
  const { clubId } = useParams();
  const navigate = useNavigate();
  const [albumItems, setAlbumItems] = useState();

  const handleAlbumImageClick = (postId) => {
    navigate(`/club/${clubId}/posts/${postId}`);
  };

  useEffect(() => {
    const temp_data = temp_club_album;
    setAlbumItems(temp_data);
  });

  return (
    <ClubAlbumLayout $isClubhome={isCheckedPath}>
      {albumItems &&
        albumItems.map((item, idx) => (
          <ImageBox
            key={idx}
            $isClubhome={isCheckedPath}
            onClick={() => handleAlbumImageClick(item.albumPostId)}
          >
            <img src={item.albumImgSrc} />
            {item.isMany && (
              <div>
                <BiSolidCopy />
              </div>
            )}
          </ImageBox>
        ))}
    </ClubAlbumLayout>
  );
}

const ClubAlbumLayout = styled.div`
  width: ${(props) => (props.$isClubhome ? "90vw" : "100vw")};
  border-radius: ${(props) => props.$isClubhome && "20px"};
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  margin-left: ${(props) => (props.$isClubhome ? "0" : "-5vw !important")};
  margin: 0;
  margin-top: ${(props) => (props.$isClubhome ? "20px" : "0")};
  box-sizing: border-box;
  overflow: hidden;
`;

const ImageBox = styled.div`
  width: ${(props) => (props.$isClubhome ? "30vw" : "33.3vw")};
  height: ${(props) => (props.$isClubhome ? "30vw" : "33.3vw")};
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
