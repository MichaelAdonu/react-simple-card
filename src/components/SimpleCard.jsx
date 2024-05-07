import React, { Component } from "react";
import Image from "./Image";
import Title from "./Title";
import Description from "./Description";

export default class SimpleCard extends Component {
  render() {
    return (
      <div style={{ display: "flex", margin: "10px" }}>
        <div>
          <Image url="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1581527774i/41881472.jpg" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "20px",
            padding: "20px",
          }}
        >
          <Title title="Discover the Hidden Forces Shaping Your Financial Decisions" />
          <Description description='"The Psychology of Money" by Morgan Housel explores the complex relationship between human behavior and financial decision-making. Through a series of captivating anecdotes and insightful analysis, Housel delves into the often irrational and unpredictable nature of how people approach money.
           Drawing on research from psychology, economics, and behavioral finance, he highlights the various psychological biases and emotional triggers that influence our financial choices, from investing and saving to spending and risk-taking. With a keen eye for storytelling and a deep understanding of human nature, Housel challenges conventional wisdom and offers practical wisdom on how to navigate the psychological hurdles that can hinder financial success. Ultimately, "The Psychology of Money" is a thought-provoking exploration of the intersection between money and the human psyche, providing valuable lessons for individuals seeking to improve their financial well-being.' />
        </div>
      </div>
    );
  }
}
