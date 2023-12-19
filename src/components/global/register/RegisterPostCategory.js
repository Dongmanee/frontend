import styled from "styled-components";
import RegisterLabel from "./RegisterLabel";
import ClubPostsCategory from "../../club/posts/ClubPostsCategory";
import RegisterErrorMsg from "./RegisterErrorMsg";
import { useController } from "react-hook-form";

export default function RegisterPostCategory({
  name,
  control,
  label,
  errorMsg,
}) {
  const { field } = useController({ name: name, control: control });
  const { value: currentTag, onChange: handleTagChange } = field;

  return (
    <RegisterPostCategoryLayout>
      <RegisterLabel label={label} />
      <ClubPostsCategory
        currentTag={currentTag}
        onHandle={handleTagChange}
        margin={"0"}
      />
      {errorMsg && <RegisterErrorMsg errorMsg={errorMsg} />}
    </RegisterPostCategoryLayout>
  );
}

const RegisterPostCategoryLayout = styled.div`
  & > div:first-child {
    margin-bottom: 0.7rem;
  }
`;
