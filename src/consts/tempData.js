import { FcAndroidOs, FcBusinessman, FcPrivacy, FcRules } from "react-icons/fc";
import ClubUserList from "../components/club/ClubUserList";
import ClubPost from "../components/club/posts/ClubPost";
import angel from "../images/club-category/angel.png";
import festival from "../images/club-category/festival.png";
import heart from "../images/club-category/heart.png";
import museum from "../images/club-category/museum.png";
import sports from "../images/club-category/sports.png";
import total from "../images/club-category/total.png";
import sample from "../images/sample.png";
import ClubAlbum from "../pages/club/ClubAlbum";
import ClubSchedule from "../pages/club/ClubSchedule";
export const university_list = [
  { universityId: "univ1", universityName: "한밭대학교" },
  { universityId: "univ2", universityName: "충남대학교" },
  { universityId: "univ3", universityName: "목원대학교" },
  { universityId: "univ4", universityName: "한남대학교" },
];

export const temp_club_post = {
  postCategoryName: "공지",
  postId: "post111",
  postTitle: "어제 우리 동아리 첫 회식!!!",
  postDate: "2023.03.11",
  postBody: "어제 회식을 했다 너무너무 맛있다최고최고 짱짱짱 맛있었다",
  postWriter: {
    userId: "user111",
    userName: "김민지",
    userImage: sample,
  },
  postCommentNum: 20,
  postLikesNum: 20,
  isLike: true,
};

export const temp_club_post_comments = [
  {
    commentWriter: {
      userId: "user222",
      userName: "이장훈",
      userImage: sample,
    },
    commentDate: "2023.02.01",
    commentBody: "참 즐겁다",
  },
  {
    commentWriter: {
      userId: "user222",
      userName: "이장훈",
      userImage: sample,
    },
    commentDate: "2023.02.01",
    commentBody: "참 즐겁다",
  },
  {
    commentWriter: {
      userId: "user222",
      userName: "이장훈",
      userImage: sample,
    },
    commentDate: "2023.02.01",
    commentBody: "참 즐겁다",
  },
  {
    commentWriter: {
      userId: "user222",
      userName: "이장훈",
      userImage: sample,
    },
    commentDate: "2023.02.01",
    commentBody: "참 즐겁다",
  },
  {
    commentWriter: {
      userId: "user222",
      userName: "이장훈",
      userImage: sample,
    },
    commentDate: "2023.02.01",
    commentBody: "참 즐겁다",
  },
];

export const temp_club_posts = [
  {
    postCategoryName: "공지",
    postId: "post111",
    postTitle: "어제 우리 동아리 첫 회식!!!",
    postDate: "2023.03.11",
    postBody: "어제 회식을 했다 너무너무 맛있다최고최고 짱짱짱 맛있었다",
    postWriter: {
      writerId: "user111",
      writerName: "김민지",
      writerImage: sample,
    },
    postCommentNum: 20,
    postLikesNum: 20,
    isLike: true,
  },
  {
    postCategoryName: "공지",
    postId: "post111",
    postTitle: "어제 우리 동아리 첫 회식!!!",
    postDate: "2023.03.11",
    postBody: "어제 회식을 했다 너무너무 맛있다최고최고 짱짱짱 맛있었다",
    postWriter: {
      writerId: "user111",
      writerName: "강민지",
      writerImage: sample,
    },
    postCommentNum: 20,
    postLikesNum: 20,
    isLike: true,
  },
  {
    postCategoryName: "공지",
    postId: "post111",
    postTitle: "어제 우리 동아리 첫 회식!!!",
    postDate: "2023.03.11",
    postBody: "어제 회식을 했다 너무너무 맛있다최고최고 짱짱짱 맛있었다",
    postWriter: {
      writerId: "user111",
      writerName: "김민지",
      writerImage: sample,
    },
    postCommentNum: 20,
    postLikesNum: 20,
    isLike: true,
  },
];

export const temp_total_posts = [
  {
    club: {
      clubId: "club111",
      clubName: "Import",
    },
    postCategoryName: "공지",
    postId: "post111",
    postTitle: "어제 우리 동아리 첫 회식!!!",
    postDate: "2023.03.11",
    postBody: "어제 회식을 했다 너무너무 맛있다최고최고 짱짱짱 맛있었다",
    postWriter: {
      writerId: "user111",
      writerName: "김민지",
      writerImage: sample,
    },
    postCommentNum: 20,
    postLikesNum: 20,
    isLike: true,
  },
  {
    club: {
      clubId: "club111",
      clubName: "Import",
    },
    postCategoryName: "공지",
    postId: "post111",
    postTitle: "어제 우리 동아리 첫 회식!!!",
    postDate: "2023.03.11",
    postBody: "어제 회식을 했다 너무너무 맛있다최고최고 짱짱짱 맛있었다",
    postWriter: {
      writerId: "user111",
      writerName: "김민지",
      writerImage: sample,
    },
    postCommentNum: 20,
    postLikesNum: 20,
    isLike: true,
  },
  {
    club: {
      clubId: "club111",
      clubName: "Import",
    },
    postCategoryName: "공지",
    postId: "post111",
    postTitle: "어제 우리 동아리 첫 회식!!!",
    postDate: "2023.03.11",
    postBody: "어제 회식을 했다 너무너무 맛있다최고최고 짱짱짱 맛있었다",
    postWriter: {
      writerId: "user111",
      writerName: "김민지",
      writerImage: sample,
    },
    postCommentNum: 20,
    postLikesNum: 20,
    isLike: true,
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

export const temp_clubs_category = [
  { name: "전체", img: total, categoryId: "all" },
  { name: "체육", img: sports, categoryId: "health" },
  { name: "공연", img: festival, categoryId: "performance" },
  { name: "봉사", img: heart, categoryId: "service" },
  { name: "종교", img: angel, categoryId: "religion" },
  { name: "전시교양", img: museum, categoryId: "wartimeculture" },
  { name: "전시교양", img: museum, categoryId: "3" },
  { name: "전시교양", img: museum, categoryId: "1" },
  { name: "전시교양", img: museum, categoryId: "2" },
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

export const temp_friends = [
  {
    name: "김민지",
    intro: "아해어나",
    id: 12,
    isSended: true,
  },
  {
    name: "박하준",
    intro: "한밭대학교 여성",
    id: 12,
    isSended: false,
  },
  {
    name: "김민지",
    intro: "한밭대학교 여성",
    id: 12,
    isSended: true,
  },
  {
    name: "김민지",
    intro: "한밭대학교 여성",
    id: 12,
    isSended: false,
  },
];

export const temp_club_pages = [
  {
    ClubHomeCategoryName: "공지사항",
    item: <ClubPost post={temp_club_posts[0]} isClubHome={true} />,
    isMore: true,
    src: "posts?category=notice",
  },
  {
    ClubHomeCategoryName: "일정",
    isMore: true,
    item: <ClubSchedule />,
    src: "schedule",
  },
  {
    ClubHomeCategoryName: "사진첩",
    item: <ClubAlbum />,
    isMore: true,
    src: "album",
  },
  {
    ClubHomeCategoryName: "모임 멤버",
    clubMemberNum: 35,
    item: <ClubUserList users={temp_club_users} />,
  },
];

export const temp_club_schedule_item_infos = [
  {
    scheduleId: "schedule111",
    scheduleDate: "10월 10일 (토)",
    scheduleTime: "10시",
    scheduleName: "토요일 정기 모임",
    scheduleLocation: "[네이버 지도] 포쉬민 커피 대전 서구",
    schedulePrice: "개인",
    scheduleMaxParticipant: 20,
    scheduleParticipantsNum: 10,
    scheduleLeftDays: 10,
  },
  {
    scheduleId: "schedule111",
    scheduleDate: "10월 10일 (토)",
    scheduleTime: "10시",
    scheduleName: "토요일 정기 모임",
    scheduleLocation: "[네이버 지도] 포쉬민 커피 대전 서구",
    schedulePrice: "개인",
    scheduleMaxParticipant: 20,
    scheduleParticipantsNum: 10,
    scheduleLeftDays: 10,
  },
  {
    scheduleId: "schedule111",
    scheduleDate: "10월 10일 (토)",
    scheduleTime: "10시",
    scheduleName: "토요일 정기 모임",
    scheduleLocation: "[네이버 지도] 포쉬민 커피 대전 서구",
    schedulePrice: "개인",
    scheduleMaxParticipant: 20,
    scheduleParticipantsNum: 10,
    scheduleLeftDays: 10,
  },
];

export const temp_club_schedule_detail_item_infos = {
  scheduleId: "schedule111",
  scheduleDate: "10월 10일 (토)",
  scheduleTime: "10시",
  scheduleName: "토요일 정기 모임",
  scheduleDetail:
    "커피 한잔 하면서 수다나 떨어요~커피 한잔 하면서 수다나 떨어요~커피 한잔 하면서 수다나 떨어요~",
  scheduleLocation: "[네이버 지도] 포쉬민 커피 대전 서구",
  schedulePrice: "개인",
  scheduleMaxParticipant: 20,
  scheduleParticipantsNum: 10,
  scheduleLeftDays: 10,
};

export const temp_club_album = [
  {
    albumImgSrc: sample,
    albumPostId: "post111",
    isMany: true,
  },
  {
    albumImgSrc: sample,
    albumPostId: "post222",
    isMany: false,
  },
  {
    albumImgSrc: sample,
    albumPostId: "post111",
    isMany: true,
  },
  {
    albumImgSrc: sample,
    albumPostId: "post111",
    isMany: true,
  },
  {
    albumImgSrc: sample,
    albumPostId: "post111",
    isMany: false,
  },
  {
    albumImgSrc: sample,
    albumPostId: "post111",
    isMany: true,
  },
];

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
    tagQuery: null,
  },
  {
    size: "14px",
    padding: "12px",
    tagName: "공지사항",
    tagQuery: "notice",
  },
  {
    size: "14px",
    padding: "12px",
    tagName: "자유",
    tagQuery: "free",
  },
  {
    size: "14px",
    padding: "12px",
    tagName: "문의사항",
    tagQuery: "inquiry",
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
    label: "일정 이름",
    name: "scheduleName",
  },
  {
    label: "일정 위치",
    name: "scheduleLocation",
  },
  {
    label: "비용",
    name: "scheduleCost",
  },
  {
    label: "최대 인원 수",
    name: "scheduleMaxParticipant",
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
  {
    clubId: "1231231",
    clubName: "Import",
  },
  {
    clubId: "123vdasdf",
    clubName: "매치포인트",
  },
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

export const temp_club_home_info = {
  clubName: "Import",
  clubCategory: "체육",
  clubMainImage: sample,
  clubBackgroundImage: sample,
  clubTags: ["웹개발", "코딩"],
  clubIntro: "교내 유일 코딩 동아리입니다",
  clubSns: [
    {
      snsName: "instagram",
      snsUrl: "https://www.instagram.com/",
    },
    {
      snsName: "naverBlog",
      snsUrl: "https://section.blog.naver.com/BlogHome.naver",
    },
    {
      snsName: "naverBand",
      snsUrl: "https://band.us/ko",
    },
  ],
  isClubJoinAvailable: {
    joinPeriod: "2021년 11월 12일",
    isAvailable: true,
  },
};

export const temp_club_application_management = [
  { question: "코딩을 경험해본 적이 있으십니까?" },
  { question: "어느정도의 수준으로 경험해보셨습니까?" },
  { question: "동아리에서 어떤 경험을 하고 싶으십니까?" },
];

export const temp_user_profile = {
  name: "정준형",
  intro: "안녕하세요~!",
};

export const temp_chat_lists = [
  {
    user: {
      userName: "정준형",
      userId: 1,
    },
    userMessage: "모각코 ㄱ?",
    chatTime: "오후 3:03",
    isNewChat: true,
  },
  {
    user: {
      userName: "홍준형",
      userId: 2,
    },
    userMessage: "오키 오키",
    chatTime: "오후 2:03",
    isNewChat: false,
  },
  {
    user: {
      userName: "김준형",
      userId: 3,
    },
    userMessage: "배고프다~",
    chatTime: "오후 1:03",
    isNewChat: false,
  },
];

export const temp_setting_lists = [
  {
    icon: <FcRules size={25} />,
    name: "개인정보처리방침",
  },
  {
    icon: <FcPrivacy size={25} />,
    name: "이용약관",
  },
  {
    icon: <FcBusinessman size={25} />,
    name: "사업자등록정보",
  },
  {
    icon: <FcAndroidOs size={25} />,
    name: "개발자정보",
  },
];

export const temp_weeks = [
  {
    name: "Sun",
  },
  {
    name: "Mon",
  },
  {
    name: "Tue",
  },
  {
    name: "Wed",
  },
  {
    name: "Thu",
  },
  {
    name: "Fri",
  },
  {
    name: "Sat",
  },
];

export const temp_join_questions = [
  {
    questionId: "question111",
    question: "코딩을 해보신 적이 있으신가요?",
  },
  {
    questionId: "question222",
    question: "동아리 질문1.",
  },
  {
    questionId: "question333",
    question: "동아리 질문1.",
  },
];

export const temp_calender = [
  {
    calenderDate: "2024-01-18",
    calenderSchedule: [
      { clubName: "Import", color: "red" },
      { clubName: "Hearbeat", color: "pink" },
    ],
  },
  {
    calenderDate: "2024-01-10",
    calenderSchedule: [{ clubName: "Import", color: "orange" }],
  },
];

export const temp_calendar_detail = [
  {
    clubName: "Import",
    clubId: "club111",
    clubColor: "yellow",
    scheduleId: "123",
    scheduleName: "미니 회식",
    scheduleTime: "09:00:00",
  },
  {
    clubName: "Import",
    clubId: "club111",
    clubColor: "yellow",
    scheduleId: "123",
    scheduleName: "중간 회식",
    scheduleTime: "09:00:00",
  },
  {
    clubName: "Import",
    clubId: "club111",
    clubColor: "yellow",
    scheduleId: "123",
    scheduleName: "기말 회식",
    scheduleTime: "09:00:00",
  },
  {
    clubName: "Import",
    clubId: "club111",
    clubColor: "yellow",
    scheduleId: "123",
    scheduleName: "미니 회식",
    scheduleTime: "09:00:00",
  },
];
