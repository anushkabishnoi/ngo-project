import React from "react";

const Heading = ({ subtitle, title, content }) => {
  return (
    <>
      <div id="heading">
        <h3>{subtitle} </h3>
        <h1>{title} </h1>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Heading;
