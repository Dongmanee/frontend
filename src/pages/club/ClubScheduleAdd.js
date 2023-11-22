import RegisterInput from "../../components/global/register/RegisterInput";
import { temp_club_schedule_add } from "../../consts/tempData";
import Layout from "../../layouts/Layout";
import { ContentCol } from "./ClubPostsEdit";

export default function ClubScheduleAdd() {
  return (
    <Layout headerLeft={"exit"} headerCenter={"일정추가"} headerRight={"check"}>
      {temp_club_schedule_add.map((item, idx) => (
        <ContentCol key={idx}>
          <RegisterInput inputHeight={"3.5rem"} label={item.name} />
        </ContentCol>
      ))}
    </Layout>
  );
}
