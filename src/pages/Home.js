import Post from "../components/global/post/Post";
import HomeClubList from "../components/home/HomeClubList";
import HomeLayout from "../layouts/HomeLayout";

export default function Home() {
  return (
    <HomeLayout headerLeft="logo" headerRight="setting" currentPage="home">
      <HomeClubList />
      <Post />
    </HomeLayout>
  );
}
