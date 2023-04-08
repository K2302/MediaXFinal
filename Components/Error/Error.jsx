import React from "react";

//INTERNAL IMPORT
import Style from "./Error.module.css";

const Error = ({ error }) => {
  return (
    <div
      className={Style.Errro_Container}
      style={{ opacity: `${error ? "1" : "0"}` }}
    >
      <div className={Style.Error}>{error}</div>
    </div>
  );
};

export default Error;
