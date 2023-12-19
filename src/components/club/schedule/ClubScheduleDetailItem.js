import styled from "styled-components";

export default function ClubScheduleDetailItem({
  itemTitle,
  itemBody,
  isDetail,
  children,
}) {
  return (
    <ClubScheduleDetailItemLayout $isDetail={isDetail}>
      <DetailItemTitleBox>{itemTitle}</DetailItemTitleBox>
      <DetailItemBodyBox>{children ? children : itemBody}</DetailItemBodyBox>
    </ClubScheduleDetailItemLayout>
  );
}

const ClubScheduleDetailItemLayout = styled.div`
  display: flex;
  gap: ${(props) => (props.$isDetail ? "20px" : "10px")};
  font-size: ${(props) =>
    props.$isDetail ? props.theme.sizes.md : props.theme.sizes.xs};
`;

const DetailItemTitleBox = styled.div`
  flex-shrink: 0;
  color: ${(props) => props.theme.colors.gray.md};
`;

const DetailItemBodyBox = styled.div``;
