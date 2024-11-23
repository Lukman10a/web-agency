import React from "react";

import { HighlightedText } from "@/components/ui/animated/highlight-text";
import { TextLoop } from "@/components/ui/animated/text-loop";

import HighlightDemo from "@/components/demo/highligh-text-demo";
import ParallaxDemo from "@/components/demo/parallax-demo";

const Demo = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-4">
        Welcome to <HighlightedText>Text Highlight</HighlightedText> and{" "}
        <HighlightedText highlightColor="#4CAF50">Parallax</HighlightedText>{" "}
        Demo
      </h1>
      <h2 className="text-4xl font-bold text-center my-4">
        Transforming Tomorrow with: <br />
        <TextLoop>
          <span>Cloud Consulting</span>
          <span>IDAM Expertise</span>
          <span>Generative AI Innovations</span>
        </TextLoop>
      </h2>

      <HighlightDemo />
      <ParallaxDemo />
    </div>
  );
};

export default Demo;
