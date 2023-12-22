export const handleCategoryToEng = (kor) => {
  switch (kor) {
    case "전체":
      return null;
    case "공지사항":
      return "notice";
    case "자유":
      return "free";
    case "문의사항":
      return "inquiry";
  }
};

export const handleCategoryToKor = (eng) => {
  switch (eng) {
    case null:
      return "전체";
    case "notice":
      return "공지사항";
    case "free":
      return "자유";
    case "inquiry":
      return "문의사항";
  }
};
