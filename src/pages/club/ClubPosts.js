import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import ClubPost from "../../components/club/posts/ClubPost";
import ClubPostsCategory from "../../components/club/posts/ClubPostsCategory";
import PenIcon from "../../components/global/PenIcon";
import { temp_club_posts } from "../../consts/tempData";
import { flexColumn } from "../../assets/styles/global.style";

export default function ClubPosts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [postsCategory, setPostsCategory] = useState(
    searchParams.get("category")
  );

  const navigate = useNavigate();

  const handleCategory = (query) => {
    query == null
      ? searchParams.delete("category")
      : searchParams.set("category", query);
    setSearchParams(searchParams);
    setPostsCategory(query);
  };

  const onAddPosts = () => {
    navigate(`add`);
  };

  useEffect(() => {
    //Todo. 카테고리 바뀔 때마다 posts 데이터 받기
  }, [postsCategory]);

  return (
    <ClubPostsLayout>
      <ClubPostsCategory
        currentTag={postsCategory}
        onHandle={handleCategory}
        height={"8vh"}
      />

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
  gap: 30px;
`;
