import Post from '../components/global/post/Post';
import HomeClubList from '../components/home/HomeClubList';
import Layout from '../layouts/Layout';

export default function Home() {
  return (
    <Layout headerLeft="logo" headerRight="setting" isNavbar={true}>
      <HomeClubList />
      <Post />
    </Layout>
  );
}
