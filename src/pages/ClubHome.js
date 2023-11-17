import ClubInfo from '../components/club/ClubInfo';
import ClubJoinButton from '../components/club/ClubJoinButton';
import ClubPost from '../components/club/ClubPost';
import Clubpage from '../components/club/Clubpage';
import PageSelector from '../components/global/PageSelector';
import Layout from '../layouts/Layout';

const ClubHome = () => {
  return (
    <Layout headerLeft="prev" headerCenter="Import" headerRight="edit">
      <PageSelector pages={pages} />
      <ClubInfo />

      {clubpages.map((item, idx) => (
        <Clubpage key={idx} title={item.title}>
          {item.item}
        </Clubpage>
      ))}

      <ClubJoinButton deadline="11 / 3 오후 3:00" />
    </Layout>
  );
};

export default ClubHome;

const clubpages = [
  {
    title: '공지사항',
    item: <ClubPost />,
  },
  {
    title: '일정',
  },
  {
    title: '사진첩',
  },
  {
    title: '모임 멤버',
  },
];

const pages = [
  {
    name: '홈',
    src: '/club',
  },
  {
    name: '게시판',
    src: '/club/posts',
  },
  {
    name: '일정',
    src: '/club/schedule',
  },
  {
    name: '사진첩',
    src: '/club/album',
  },
];
