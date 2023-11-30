import * as yup from "yup";

export const signupSchema = yup.object({
  email: yup
    .string()
    .required("이메일 인증을 해주세요")
    .email("옳지 않은 이메일 형식입니다"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,12}$/,
      "8~12자로 영문, 숫자, 특수문자를 한개 이상 포함해주세요"
    )
    .required("8~12자의 영문, 숫자, 특수문자로 입력해주세요"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
  name: yup.string().required("이름을 입력해주세요"),
  birthDate: yup
    .date()
    .typeError("생년월일을 선택해주세요")
    .max(new Date().toISOString().slice(0, 10), "옳지 않은 날짜입니다")
    .required("생년월일을 선택해주세요"),
  department: yup.string().required("학과를 입력해주세요"),
  studentId: yup.string().required("학번을 입력해주세요"),
  phoneNum: yup
    .string()
    .required("핸드폰 번호를 입력해주세요")
    .matches(/^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/, "숫자만 입력해주세요."),
});

export const kakaoSignupSchema = yup.object({
  name: yup.string().required("이름을 입력해주세요"),
  birthDate: yup
    .date()
    .typeError("생년월일을 선택해주세요")
    .max(new Date().toISOString().slice(0, 10), "옳지 않은 날짜입니다")
    .required("생년월일을 선택해주세요"),
  department: yup.string().required("학과를 입력해주세요"),
  studentId: yup.string().required("학번을 입력해주세요"),
  phoneNum: yup
    .string()
    .required("핸드폰 번호를 입력해주세요")
    .matches(/^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/, "숫자만 입력해주세요."),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해주세요")
    .email("옳지 않은 이메일 형식입니다"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,12}$/,
      "8~12자로 영문, 숫자, 특수문자를 한개 이상 포함해주세요"
    )
    .required("8~12자의 영문, 숫자, 특수문자로 입력해주세요"),
});

export const emailSchema = yup
  .string()
  .required("이메일을 입력해주세요")
  .matches(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
    "이메일 형식이 올바르지 않습니다"
  );
