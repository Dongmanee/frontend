import styled from "styled-components";

export default function PostWriter({ writerimg, writerName }) {
  return (
    <PostWriterLayout>
      <img src={writerimg} />
      <div>{writerName}</div>
    </PostWriterLayout>
  );
}

const PostWriterLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  & > img {
    width: 21px;
    height: 21px;
    border-radius: 50%;
  }
  & > div {
    font-size: 13px;
  }
`;
