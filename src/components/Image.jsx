import React from "react";

const Image = (props) => {
  return (
    <div>
      <img
        style={{
          border: "2px solid gray",
          borderRadius: "5px",
          height: "40vh",
        }}
        src={props.url}
        alt=""
      />
    </div>
  );
};

export default Image;
