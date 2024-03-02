import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import styled from "styled-components";
import CustomInput from "../components/global/CustomInputs";
import ClubCategory from "../components/home/clubs/ClubCategoryList";
import ClubList from "../components/home/clubs/ClubList";
import RegisterClubButton from "../components/home/clubs/RegisterClubButton";
import { temp_clubs } from "../consts/tempData";
import usePrevPage from "../hooks/usePrevPage";
import Layout from "../components/layouts/Layout";
import { flexColumn } from "../assets/styles/global.style";
import { getCookie } from "../utils/cookies";

export default function Clubs() {
  const { state } = useLocation();
  const { onPrevPage } = usePrevPage();
  const { univId: isOtherUniv } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [otherUnivName, setOtheUnivName] = useState();
  const isLogin = getCookie("accessToken") != undefined;
  const navigate = useNavigate();

  const handleSearchKeywordChange = (e) => {
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

  const handleKeywordReset = () => {
    setSearchKeyword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleRegisterBtnClick = () => {
    navigate("register");
  };

  const handleHomeBtnClick = () => {
    navigate("/posts");
  };

  useEffect(() => {
    setOtheUnivName(state);
  }, []);

  return (
    <Layout
      headerLeft="prev"
      onClickLeft={onPrevPage}
      headerCenter={otherUnivName ? otherUnivName : ""}
      headerRight={isLogin ? (isOtherUniv ? "home" : "plus") : ""}
      onClickRight={
        isLogin
          ? isOtherUniv
            ? handleHomeBtnClick
            : handleRegisterBtnClick
          : undefined
      }
    >
      <HomeTotalClubsLayout>
        <ClubCategory setKeywordReset={handleKeywordReset} />
        <form onSubmit={handleSubmit}>
          <CustomInput
            placeholder="동아리를 검색하세요"
            margin="1.8rem 1rem"
            border="0.05rem solid"
            value={searchKeyword}
            onChange={handleSearchKeywordChange}
          />
        </form>
        <ClubList clubs={temp_clubs} />
      </HomeTotalClubsLayout>
      {/* {!isOtherUniv && <RegisterClubButton />} */}
    </Layout>
  );
}

const HomeTotalClubsLayout = styled.div`
  ${flexColumn};
  margin-bottom: 6vh;

  & > form {
    ${flexColumn};
  }
`;
