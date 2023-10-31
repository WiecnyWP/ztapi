import React from "react";
import { convertBase64 } from "../utils/base64Converter";

export const Form = ({
  children,
  submit,
  error,
  className,
  id,
  finished,
  onFinished,
  fileName,
  selectName,
}) => {
  const submitForm = async (e) => {
    e.preventDefault();
    const inputs = Array.from(e.target.querySelectorAll("input"));

    let object = {};
    inputs.forEach((e) => {
      object[e.name] = e.value;
    });

    if (fileName) {
      const fileInput = e.target.querySelector(`input[name=${fileName}]`);
      const base64 = await convertBase64(fileInput?.files[0]);
      object[fileName] = base64.split(",")[1];
      const file = fileInput.files[0];

      if (file) {
        const fileName = file.name;
        const fileExtension = fileName.split(".").pop();
        object.fileExtension = fileExtension;
      } else {
        console.error(
          "Nie można odczytać rozszerzenia pliku, ponieważ nie wybrano pliku."
        );
      }
    }

    if (selectName) {
      const select = e.target.querySelector("select");
      object[selectName] = JSON.parse(select.value);
    }

    submit(object);
  };

  return (
    <form className={className} onSubmit={submitForm} id={id}>
      <div className="messages">{error && error}</div>
      {finished ? (
        <>
          <h2>Success</h2>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onFinished();
            }}
          >
            submit again
          </button>
        </>
      ) : (
        <>
          {children}
          <button type="submit">Submit</button>
        </>
      )}
    </form>
  );
};
