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
    src: "/club/home",
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
    src: "/club/posts",
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
    src: "/club/album",
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
    src: "/club/setting/applications",
  },
  {
    name: "문의내역",
    src: "/club/setting/inquiries",
  },
  {
    name: "멤버관리",
    src: "/club/setting/members",
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
