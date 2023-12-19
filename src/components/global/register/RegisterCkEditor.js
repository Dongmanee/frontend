import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import RegisterLabel from "./RegisterLabel";
import styled from "styled-components";
import { useController } from "react-hook-form";

export default function RegisterCkEditor({ name, control, label }) {
  const { field } = useController({ name: name, control: control });
  const { onChange: handlePostBodyChange } = field;

  return (
    <RegisterCkEditorLayout className="App">
      <RegisterLabel label={label} />
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          //   console.log(data);
        }}
        onBlur={(event, editor) => {
          const data = editor.getData();
          handlePostBodyChange(data);
        }}
      />
    </RegisterCkEditorLayout>
  );
}

const RegisterCkEditorLayout = styled.div`
  .ck-editor__editable {
    min-height: 30rem;
    padding: 0.5rem 1rem;
  }
`;
