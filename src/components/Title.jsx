import React from "react";

const Title = (props) => {
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: "25px",
        fontWeight: "bold",
        color: "green",
        marginBottom: "10px",
        border: "1px solid gray",
        borderRadius: "5px",
        padding: "10px",
        boxShadow: "10px 10px 1px 1px rgba(0, 0, 0, 0.4)",
      }}
    >
      {props.title}
    </div>
  );
};

export default Title;
