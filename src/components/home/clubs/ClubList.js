import styled from "styled-components";
import ClubCard from "./ClubCard";
import { flexColumn } from "../../../styles/global.style";

export default function ClubList({ clubs }) {
  return (
    <ClubListLayout>
      {clubs.map((club, idx) => (
        <ClubCard club={club} key={idx} />
      ))}
    </ClubListLayout>
  );
}

const ClubListLayout = styled.div`
  ${flexColumn};
  gap: 1.8rem;
`;
