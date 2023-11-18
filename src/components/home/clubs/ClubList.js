import styled from "styled-components";
import ClubCard from "./ClubCard";

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
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;
