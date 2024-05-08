import React from "react";
import Image from "./Image";
import Title from "./Title";
import Description from "./Description";

const SimpleCard2 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        height: "100%",
        padding: "20px",
        borderRadius: "10px",
        margin: "0 auto",
        marginBottom: "20px",
        border: "5px solid gray",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Image url="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1581527774i/41881472.jpg" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Title title=" Your Financial Decisions" />
        <Description description='"The Psychology of Money" by Morgan Housel explores the complex relationship between human behavior and financial decision-making. Through a series of captivating anecdotes and insightful analysis, Housel delves into the often irrational and unpredictable nature of how people approach money' />
      </div>
    </div>
  );
};

export default SimpleCard2;
