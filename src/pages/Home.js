import Header from "../components/global/Header";
import Navbar from "../components/global/Navbar";
import HomeClubList from "../components/home/HomeClubList";
import HomeLayout from "../layouts/HomeLayout";

export default function Home() {
  return (
    <HomeLayout headerLeft="logo" headerRight="setting" currentPage="home">
      <HomeClubList />
    </HomeLayout>
  );
}
