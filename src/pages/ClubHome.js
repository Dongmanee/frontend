import { Outlet } from 'react-router-dom';
import PageSelector from '../components/global/PageSelector';
import Layout from '../layouts/Layout';

const ClubHome = () => {
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

  return (
    <Layout headerLeft="prev" headerCenter="Import" headerRight="edit">
      <PageSelector pages={pages} />
      <Outlet />
    </Layout>
  );
};

export default ClubHome;
