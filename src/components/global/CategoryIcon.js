import styled from "styled-components";

export default function CategoryIcon({ img, name, onClick, isSelected }) {
  return (
    <CategoryIconLayout onClick={onClick}>
      <IconBox $isSelected={isSelected}>
        <img src={img} />
      </IconBox>
      <div>{name}</div>
    </CategoryIconLayout>
  );
}

const CategoryIconLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  div {
    font-size: 11px;
  }
`;

const IconBox = styled.div`
  background-color: ${(props) =>
    props.$isSelected
      ? props.theme.colors.gray.xs
      : props.theme.colors.gray.xxs};
  padding: 0.6rem;
  border-radius: 50%;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
