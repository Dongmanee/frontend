import styled from "styled-components";
import ClubPost from "../../components/club/posts/ClubPost";
import ClubPostsCategory from "../../components/club/posts/ClubPostsCategory";
import PenIcon from "../../components/global/PenIcon";
import { flexColumn } from "../../styles/global.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { temp_club_posts, temp_total_posts } from "../../consts/tempData";

export default function ClubPosts() {
  const [postsCategory, setPostsCategory] = useState("전체");
  const navigate = useNavigate();

  const handleCategory = (tag) => {
    setPostsCategory(tag);
  };

  const onAddPosts = () => {
    navigate(`add`);
  };

  return (
    <ClubPostsLayout>
      <ClubPostsCategory currentTag={postsCategory} onHandle={handleCategory} />

      <ClubPostsCol>
        {temp_club_posts.map((post, idx) => (
          <ClubPost idx={idx} post={post} />
        ))}
      </ClubPostsCol>

      <PenIcon onClick={onAddPosts} />
    </ClubPostsLayout>
  );
}

const ClubPostsLayout = styled.div`
  ${flexColumn};
`;

const ClubPostsCol = styled.div`
  ${flexColumn};
  margin-top: 20px;
  gap: 40px;
`;
