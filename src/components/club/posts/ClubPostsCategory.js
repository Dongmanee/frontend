import styled from "styled-components";
import { temp_club_posts_categories } from "../../../consts/tempData";
import { flexCenter } from "../../../assets/styles/global.style";
import SmallTagBox from "../../global/SmallTagBox";

export default function ClubPostsCategory({
  margin,
  height,
  currentTag,
  onHandle,
}) {
  const styles = { margin, height };
  return (
    <ClubPostsCategoryLayout {...styles}>
      {temp_club_posts_categories.map((item, idx) => {
        const isCurrentTag = currentTag == item.tagQuery;
        return (
          <SmallTagBox
            key={idx}
            onClick={() => onHandle(item.tagQuery)}
            bgColor={
              isCurrentTag ? (props) => props.theme.colors.dark.sm : null
            }
            size={item.size}
            padding={item.padding}
            tagName={item.tagName}
            color={isCurrentTag && "white"}
          />
        );
      })}
    </ClubPostsCategoryLayout>
  );
}

ClubPostsCategory.defaultProps = {
  margin: "0 auto",
  height: "auto ",
};

const ClubPostsCategoryLayout = styled.div`
  width: 70%;
  height: ${(props) => props.height};
  ${flexCenter};
  gap: 10px;
  margin: ${(props) => props.margin};
`;
