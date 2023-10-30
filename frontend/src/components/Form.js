import React from "react";

export const Form = ({ children, submit, error, className, id }) => {
  const submitForm = (e) => {
    e.preventDefault();
    const inputs = Array.from(e.target.querySelectorAll("input"));

    let object = {};
    inputs.forEach((e) => {
      object[e.name] = e.value;
    });

    submit(object);
  };

  return (
    <form className={className} onSubmit={submitForm} id={id}>
      <div className="messages">{error && error}</div>
      {children}
      <button type="submit">Submit</button>
    </form>
  );
};
