import Header from "../components/global/Header";
import Navbar from "../components/global/Navbar";
import HomeLayout from "../layouts/HomeLayout";

export default function Home() {
  return (
    <HomeLayout headerLeft="logo" headerRight="setting" currentPage="home">
      <div>홈 내용</div>
    </HomeLayout>
  );
}
