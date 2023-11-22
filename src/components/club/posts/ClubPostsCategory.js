import styled from "styled-components";
import { temp_club_posts_categories } from "../../../consts/tempData";
import { flexCenter } from "../../../styles/global.style";
import SmallTagBox from "../../global/SmallTagBox";

export default function ClubPostsCategory({ margin, currentTag, onHandle }) {
  const styles = { margin };
  return (
    <ClubPostsCategoryLayout {...styles}>
      {temp_club_posts_categories.map((item, idx) => {
        const isCurrentTag = currentTag == item.tagName;
        return (
          <SmallTagBox
            key={idx}
            onClick={() => onHandle(item.tagName)}
            bgColor={isCurrentTag ? (props) => props.theme.colors.dark.sm : null}
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
};

const ClubPostsCategoryLayout = styled.div`
  width: 70%;
  height: 8vh;
  ${flexCenter};
  gap: 10px;
  margin: ${(props) => props.margin};
`;
