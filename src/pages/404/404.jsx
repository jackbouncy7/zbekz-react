// 1. React Imports
import React from "react";
import { Link } from "react-router-dom";

// 2. Media Imports, styles
import imgerr from "@images/404.svg";

const NotFoundError = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img className="error__img" width={400} src={imgerr} alt="404 image" />
      <h3 className="title__error ">Not found</h3>
      <Link to={"/"}>Go home</Link>
    </div>
  );
};

export default NotFoundError;
