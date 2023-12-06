import ClubUserList from "../components/club/ClubUserList";
import ClubPost from "../components/club/posts/ClubPost";
import computer from "../images/club-category/computer.png";
import total from "../images/club-category/total.png";
import angel from "../images/club-category/angel.png";
import festival from "../images/club-category/festival.png";
import heart from "../images/club-category/heart.png";
import museum from "../images/club-category/museum.png";
import sports from "../images/club-category/sports.png";
import ClubAlbum from "../pages/club/ClubAlbum";
import ClubSchedule from "../pages/club/ClubSchedule";

export const university_list = [
  { universityId: "univ1", universityName: "한밭대학교" },
  { universityId: "univ2", universityName: "충남대학교" },
  { universityId: "univ3", universityName: "목원대학교" },
  { universityId: "univ4", universityName: "한남대학교" },
];

export const temp_total_posts = [
  {
    clubId: "a213asd",
    categoryId: "공지",
    date: "2023.03.11",
    postId: "sdf234234",
    postTitle: "어제 우리 동아리 첫 회식!!!",
    postBody: "어제 회식을 했다 너무너무 맛있다최고최고 짱짱짱 맛있었다",
    writerId: "847237489",
    likesNum: 20,
    commentNum: 20,
  },
  {
    clubId: "b123432",
    categoryId: "공지",
    date: "2023.03.11",
    postId: "sdf234234",
    postTitle: "어제 우리 동아리 첫 회식!!!",
    postBody: "어제 회식을 했다 너무너무 맛있다최고최고 짱짱짱 맛있었다",
    writerId: "847237489",
    likesNum: 20,
    commentNum: 20,
  },
  {
    clubId: "a213asd",
    categoryId: "공지",
    date: "2023.03.11",
    postId: "sdf234234",
    postTitle: "어제 우리 동아리 첫 회식!!!",
    postBody: "어제 회식을 했다 너무너무 맛있다최고최고 짱짱짱 맛있었다",
    writerId: "847237489",
    likesNum: 20,
    commentNum: 20,
  },
  {
    clubId: "a213asd",
    categoryId: "공지",
    date: "2023.03.11",
    postId: "sdf234234",
    postTitle: "어제 우리 동아리 첫 회식!!!",
    postBody: "어제 회식을 했다 너무너무 맛있다최고최고 짱짱짱 맛있었다",
    writerId: "847237489",
    likesNum: 20,
    commentNum: 20,
  },
];

export const temp_clubs = [
  {
    clubId: "adfads",
    clubName: "Import",
    clubDescription: "카페에서 다같이 코딩해요",
    clubMainImageURL: "",
    clubBackgroundImageURL: "",
    cluAddress: "",
    clubSubCategory: "코딩",
    personnel: 35,
  },
  {
    clubId: "adfads",
    clubName: "Import",
    clubDescription: "카페에서 다같이 코딩해요",
    clubMainImageURL: "",
    clubBackgroundImageURL: "",
    cluAddress: "",
    clubSubCategory: "코딩",
    personnel: 35,
  },
  {
    clubId: "adfads",
    clubName: "Import",
    clubDescription: "카페에서 다같이 코딩해요",
    clubMainImageURL: "",
    clubBackgroundImageURL: "",
    cluAddress: "",
    clubSubCategory: "코딩",
    personnel: 35,
  },
  {
    clubId: "adfads",
    clubName: "Import",
    clubDescription: "카페에서 다같이 코딩해요",
    clubMainImageURL: "",
    clubBackgroundImageURL: "",
    cluAddress: "",
    clubSubCategory: "코딩",
    personnel: 35,
  },
];

export const temp_clubs_catgory = [
  { name: "전체", img: total, categoryId: "" },
  { name: "체육", img: sports, categoryId: "afsd" },
  { name: "공연", img: festival, categoryId: "12d312" },
  { name: "봉사", img: heart, categoryId: "1223f312" },
  { name: "종교", img: angel, categoryId: "wqed3" },
  { name: "전시교양", img: museum, categoryId: "asdf3" },
  { name: "전시교양", img: museum, categoryId: "asdf3" },
  { name: "전시교양", img: museum, categoryId: "asdf3" },
  { name: "전시교양", img: museum, categoryId: "asdf3" },
];

export const temp_club_pageselector = [
  {
    name: "홈",
    src: "/club/:id/home",
  },
  {
    name: "게시판",
    src: "/club/:id/posts",
  },
  {
    name: "일정",
    src: "/club/:id/schedule",
  },
  {
    name: "사진첩",
    src: "/club/:id/album",
  },
];

export const temp_user_pageselector = [
  // user정보를 redux로 상태관리 해야할 듯!
  {
    name: "가입 동아리",
    src: "/user/home",
  },
  {
    name: "작성한 글",
    src: "/user/posts",
  },
  {
    name: "작성한 댓글",
    src: "/user/comments",
  },
];

export const temp_club_users = [
  {
    name: "정준형",
    intro: "안녕하세요!~",
    position: "회장",
    id: 3434,
  },
  {
    name: "정준형",
    intro: "안녕하세요!~",
    position: "임원",
    id: 5555,
  },
  {
    name: "정준형",
    intro: "안녕하세요!~",
    position: "임원",
    id: 1111,
  },
  {
    name: "정준형",
    intro: "안녕하세요!~",
  },
  {
    name: "정준형",
    intro: "안녕하세요!~",
  },
  {
    name: "정준형",
    intro: "안녕하세요!~",
  },
];

export const temp_club_pages = [
  {
    title: "공지사항",
    item: <ClubPost />,
    isMore: true,
    moreright: "0",
    moretop: "2.5vh",
    src: "/club/:id/posts",
  },
  {
    title: "일정",
    item: <ClubSchedule />,
  },
  {
    title: "사진첩",
    item: <ClubAlbum />,
    isMore: true,
    moreright: "0",
    moreleft: "0",
    morebottom: "-10px",
    src: "/club/:id/album",
  },
  {
    title: "모임 멤버 (35)",
    item: <ClubUserList users={temp_club_users} />,
  },
];

export const temp_club_schedule_item_infos = [
  {
    date: "11/11일 (토) 오후 5:00",
    location: "[네이버 지도] 포쉬민 커피 대전 서구",
    cost: "개인",
    pop: 7,
    totalPop: 20,
    id: 123,
  },
  {
    date: "11/11일 (토) 오후 5:00",
    location: "[네이버 지도] 포쉬민 커피 대전 서구",
    cost: "개인",
    pop: 7,
    totalPop: 20,
    id: 456,
  },
  {
    date: "11/11일 (토) 오후 5:00",
    location: "[네이버 지도] 포쉬민 커피 대전 서구",
    cost: "개인",
    pop: 7,
    totalPop: 20,
    id: 789,
  },
];

export const temp_club_schedule_detail_item_infos = {
  date: "11/11일 (토) 오후 5:00",
  location: "[네이버 지도] 포쉬민 커피 대전 서구",
  cost: "개인",
  detail: "커피 한잔 하면서 수다 예정",
  pop: 7,
  totalPop: 20,
};

export const temp_club_schedule_item_names = [
  {
    name: "일시",
  },
  {
    name: "위치",
  },
  {
    name: "비용",
  },
  {
    name: "참석",
  },
];

export const temp_club_schedule_detail_item_names = [
  {
    name: "일시",
  },
  {
    name: "위치",
  },
  {
    name: "비용",
  },
  {
    name: "내용",
  },
  {
    name: "참석",
  },
];

export const temp_club_posts_categories = [
  {
    size: "14px",
    padding: "12px",
    tagName: "전체",
  },
  {
    size: "14px",
    padding: "12px",
    tagName: "공지사항",
  },
  {
    size: "14px",
    padding: "12px",
    tagName: "자유",
  },
  {
    size: "14px",
    padding: "12px",
    tagName: "문의사항",
  },
];

export const temp_club_setting_page = [
  {
    name: "신청내역",
    src: "/club/:clubId/setting/applications",
  },
  {
    name: "문의내역",
    src: "/club/:clubId/setting/inquiries",
  },
  {
    name: "멤버관리",
    src: "/club/:clubId/setting/members",
  },
];

export const temp_applications_list = [
  {
    name: "김민지",
    major: "전자공학과",
    id: "20181233",
  },
  {
    name: "정민지",
    major: "컴퓨터공학과",
    id: "20181233",
  },
  {
    name: "장민지",
    major: "화학생명공학과",
    id: "20181233",
  },
  {
    name: "고민지",
    major: "전자공학과",
    id: "20181233",
  },
];

export const temp_inquiries = [
  {
    title: "일정에 대해 궁금한 점이 있어요~~~~",
    date: "2023.11.11",
    isConfirm: true,
  },
  {
    title: "일정에 대해 궁금한 점이 있어요",
    date: "2023.11.11",
    isConfirm: false,
  },
  {
    title: "일정에 대해 궁금한 점이 있어요!!!",
    date: "2023.11.11",
    isConfirm: true,
  },
  {
    title: "일정에 대해 궁금한 점이 있어요",
    date: "2023.11.11",
    isConfirm: false,
  },
];

export const temp_club_user = [
  {
    name: "김민지",
    role: "회장",
    studentId: "20210924",
    department: "컴퓨터공학과",
    registerDate: "19-1",
  },
  {
    name: "장민지",
    role: "임원",
    studentId: "20210924",
    department: "화학생명공학과",
    registerDate: "19-1",
  },
  {
    name: "정민지",
    role: "임원",
    studentId: "20210924",
    department: "건축학과",
    registerDate: "19-2",
  },
  {
    name: "김민지",
    role: "회장",
    studentId: "20210924",
    department: "수학과",
    registerDate: "19-1",
  },
  {
    name: "김민지",
    role: "회장",
    studentId: "20210924",
    department: "컴퓨터공학과",
    registerDate: "19-2",
  },
];

export const temp_club_schedule_add = [
  {
    name: "날짜와 시간을 입력해주세요",
  },
  {
    name: "일정 제목을 입력해주세요",
  },
  {
    name: "일정 위치를 입력해주세요",
  },
  {
    name: "일정 내용을 입력해주세요",
  },
  {
    name: "비용을 입력해주세요",
  },
  {
    name: "인원을 입력해주세요",
  },
];

export const temp_my_club = [
  {
    clubId: "1231231",
    clubName: "Import",
  },
  {
    clubId: "123vdasdf",
    clubName: "매치포인트",
  },
];

export const temp_club_setting_application_details = [
  {
    label: "이름",
    data: "김민지",
  },
  {
    label: "학번",
    data: "20231122",
  },
  {
    label: "학과",
    data: "컴퓨터공학과",
  },
  {
    label: "핸드폰 번호",
    data: "010-0000-2222",
  },
  {
    label: "동아리 질문1",
    data: "동아리 질문에 대한 답변1111",
  },
  {
    label: "동아리 질문2",
    data: "동아리 질문에 대한 답변2222",
  },
];
