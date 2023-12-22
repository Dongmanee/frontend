import styled from "styled-components";
import ClubPost from "../../components/club/posts/ClubPost";
import ClubPostsCategory from "../../components/club/posts/ClubPostsCategory";
import PenIcon from "../../components/global/PenIcon";
import { flexColumn } from "../../styles/global.style";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { temp_club_posts } from "../../consts/tempData";
import {
  handleCategoryToEng,
  handleCategoryToKor,
} from "../../utils/findCategory";

export default function ClubPosts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [postsCategory, setPostsCategory] = useState(
    handleCategoryToKor(searchParams.get("category"))
  );

  const navigate = useNavigate();

  const handleCategory = (tag) => {
    setPostsCategory(tag);

    const query = handleCategoryToEng(tag);
    query == null
      ? searchParams.delete("category")
      : searchParams.set("category", query);
    setSearchParams(searchParams);
  };

  const onAddPosts = () => {
    navigate(`add`);
  };

  useEffect(() => {
    console.log(postsCategory);
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
