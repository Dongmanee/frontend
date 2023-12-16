import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import RegisterLabel from "./RegisterLabel";
import styled from "styled-components";

export default function RegisterCkEditor({ label }) {
  return (
    <RegisterCkEditorLayout className="App">
      <RegisterLabel label={label} />
      <CKEditor
        editor={ClassicEditor}
        config={{
          placeholder: "내용을 입력하세요.",
        }}
        onChange={(event, editor) => {
          //   console.log(event);
          console.log(editor.getData());
        }}
      />
    </RegisterCkEditorLayout>
  );
}

const RegisterCkEditorLayout = styled.div`
  .ck-editor__editable {
    min-height: 30rem;
  }
`;
