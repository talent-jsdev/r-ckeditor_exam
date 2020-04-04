import React from "react";
import "./App.css";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import CKEditor from "ckeditor4-react";

function App() {
  return (
    <div className="App">
      <h2>Using CKEditor 4, 5 in React</h2>
      {/* <CKEditor
        data={description}
        config={{
          toolbar: [
            ["Bold", "Italic", "Underline"],
            ["NumberedList", "BulletedList"],
            ["Link"]
          ],
          removeButtons: "Subscript,Superscript",
          removePlugins: "elementspath",
          resize_enabled: false
        }}
        onChange={e => setDescription(e.editor.getData())}
      /> */}
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        config={{
          toolbar: ["Bold", "Italic", "Underline"],
          removeButtons: "Subscript,Superscript"
        }}
        onInit={editor => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
}

export default App;
