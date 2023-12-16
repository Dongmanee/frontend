import React from "react";
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
          toolbar: [
            "heading",
            "|",
            "fontFamily",
            "fontSize",
            "|",
            "bold",
            "italic",
            "link",
            // "bulletedList",
            // "numberedList",
            "|",
            "blockQuote",
          ],
          heading: {
            options: [
              {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
              },
              {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
              },
              {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
              },
            ],
          },
          fontFamily: {
            options: [
              "default",
              "Ubuntu, Arial, sans-serif",
              "Ubuntu Mono, Courier New, Courier, monospace",
            ],
          },
          fontSize: {
            options: [9, 11, 13, "default", 17, 19, 21],
          },
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
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
