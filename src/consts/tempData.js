import ClubUserList from "../components/club/ClubUserList";
import ClubPost from "../components/club/posts/ClubPost";
import computer from "../images/club-category/computer.png";
import total from "../images/club-category/total.png";
import ClubAlbum from "../pages/club/ClubAlbum";
import ClubSchedule from "../pages/club/ClubSchedule";

export const temp_total_posts = [
  {
    name: "Import",
    category: "공지",
    date: "2023.03.11",
    postTitle: "어제 우리 동아리 첫 회식!!!",
    postDetail: "어제 회식을 했다 너무너무 맛있다최고최고 짱짱짱 맛있었다",
    writerName: "정땡땡",
    likesNum: 20,
    commentNum: 20,
  },
  {
    name: "Import",
    category: "공지",
    date: "2023.03.11",
    postTitle: "어제 우리 동아리 첫 회식!!!",
    postDetail: "어제 회식을 했다 너무너무 맛있다최고최고 짱짱짱 맛있었다",
    writerName: "정땡땡",
    likesNum: 20,
    commentNum: 20,
  },
  {
    name: "Import",
    category: "공지",
    date: "2023.03.11",
    postTitle: "어제 우리 동아리 첫 회식!!!",
    postDetail: "어제 회식을 했다 너무너무 맛있다최고최고 짱짱짱 맛있었다",
    writerName: "정땡땡",
    likesNum: 20,
    commentNum: 20,
  },
  {
    name: "Import",
    category: "공지",
    date: "2023.03.11",
    postTitle: "어제 우리 동아리 첫 회식!!!",
    postDetail: "어제 회식을 했다 너무너무 맛있다최고최고 짱짱짱 맛있었다",
    writerName: "정땡땡",
    likesNum: 20,
    commentNum: 20,
  },
  {
    name: "Import",
    category: "공지",
    date: "2023.03.11",
    postTitle: "어제 우리 동아리 첫 회식!!!",
    postDetail: "어제 회식을 했다 너무너무 맛있다최고최고 짱짱짱 맛있었다",
    writerName: "정땡땡",
    likesNum: 20,
    commentNum: 20,
  },
  {
    name: "Import",
    category: "공지",
    date: "2023.03.11",
    postTitle: "어제 우리 동아리 첫 회식!!!",
    postDetail: "어제 회식을 했다 너무너무 맛있다최고최고 짱짱짱 맛있었다",
    writerName: "정땡땡",
    likesNum: 20,
    commentNum: 20,
  },
];

export const temp_clubs = [
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
];

export const temp_clubs_catgory = [
  { name: "전체", img: total },
  { name: "코딩", img: computer },
  { name: "코딩", img: computer },
  { name: "코딩", img: computer },
  { name: "코딩", img: computer },
  { name: "코딩", img: computer },
  { name: "코딩", img: computer },
  { name: "코딩", img: computer },
];

export const temp_club_pageselector = [
  {
    name: "홈",
    src: "/club",
  },
  {
    name: "게시판",
    src: "/club/posts",
  },
  {
    name: "일정",
    src: "/club/schedule",
  },
  {
    name: "사진첩",
    src: "/club/album",
  },
];

export const temp_club_users = [
  {
    name: "정준형",
    intro: "안녕하세요!~",
    position: "회장",
  },
  {
    name: "정준형",
    intro: "안녕하세요!~",
    position: "임원",
  },
  {
    name: "정준형",
    intro: "안녕하세요!~",
    position: "임원",
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
  },
  {
    title: "일정",
    item: <ClubSchedule />,
  },
  {
    title: "사진첩",
    item: <ClubAlbum />,
  },
  {
    title: "모임 멤버 (35)",
    item: <ClubUserList users={temp_club_users} />,
  },
];

export const temp_club_schedule_item_infos = [
  {
    info: "11/11일 (토) 오후 5:00",
  },
  {
    info: "[네이버 지도] 포쉬민 커피 대전 서구",
  },
  {
    info: "개인",
  },
  {
    pop: 5,
    totalPop: 20,
  },
];

export const temp_club_schedule_detail_item_infos = [
  {
    info: "11/11일 (토) 오후 5:00",
  },
  {
    info: "[네이버 지도] 포쉬민 커피 대전 서구",
  },
  {
    info: "개인",
  },
  {
    info: "커피 한잔 하면서 수다 예정",
  },
  {
    pop: 7,
    totalPop: 20,
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
    bgColor: (props) => props.theme.colors.dark.sm,
    size: "14px",
    padding: "12px",
    tagName: "전체",
    color: "white",
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
