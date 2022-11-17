import { object, string } from "yup";

const commentValidationSchema = object().shape({
  content: string()
    .required("Bạn nghĩ thế nào về bài viết")
    .max(
      1000,
      "Bạn chỉ được nhập dưới 1000 từ"
    ),
});

export default commentValidationSchema;