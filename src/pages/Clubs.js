import styled from "styled-components";
import CustomInput from "../components/global/CustomInputs";
import ClubCategory from "../components/home/clubs/ClubCategoryList";
import ClubList from "../components/home/clubs/ClubList";
import { temp_clubs } from "../consts/tempData";
import Layout from "../layouts/Layout";
import { flexCenter, flexColumn } from "../styles/global.style";
import RegisterButton from "../components/global/register/RegisterButton";
import RegisterClubButton from "../components/home/clubs/RegisterClubButton";
import usePrevPage from "../hooks/usePrevPage";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function Clubs() {
  const { onPrevPage } = usePrevPage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState("");

  const onChangeSearchKeyword = (e) => {
    const currentCategory = searchParams.get("category");
    const enteredKeyword = e.currentTarget.value;

    setSearchKeyword(enteredKeyword);

    if (enteredKeyword == "") {
      searchParams.delete("keyword");
      setSearchParams(searchParams);
    } else {
      setSearchParams(
        currentCategory != null
          ? { category: currentCategory, keyword: enteredKeyword }
          : { keyword: enteredKeyword }
      );
    }
  };

  const setKeywordReset = () => {
    setSearchKeyword("");
  };

  return (
    <Layout headerLeft="prev" onClickLeft={onPrevPage}>
      <HomeTotalClubsLayout>
        <ClubCategory setKeywordReset={setKeywordReset} />
        <CustomInput
          placeholder="동아리를 검색하세요"
          margin="1.8rem 1rem"
          border="0.05rem solid"
          value={searchKeyword}
          onChange={onChangeSearchKeyword}
        />
        <ClubList clubs={temp_clubs} />
      </HomeTotalClubsLayout>
      <RegisterClubButton />
    </Layout>
  );
}

const HomeTotalClubsLayout = styled.div`
  ${flexColumn};
  margin-bottom: 6vh;
`;
