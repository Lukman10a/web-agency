"use client";

import React from "react";

import {
  highlightColors,
  HighlightedText,
} from "../ui/animated/highlight-text";

const HighlightDemo = () => {
  return (
    <div className="min-h-screen p-8 space-y-16 bg-white">
      {/* Basic Examples */}
      <section className="space-y-96">
        <h2 className="text-3xl font-bold">
          <HighlightedText
            highlightColor="red"
            highlightHeight="30%"
            highlightClassName="-z-1 opacity-10"
          >
            Highlight Animations
          </HighlightedText>
        </h2>

        <div className="text-2xl">
          <HighlightedText
            once={false}
            highlightColor={highlightColors.purple}
            amount={0.8}
            highlightHeight="10px"
            highlightClassName="-z-1 opacity-70"
          >
            This highlight repeats every time it comes into view
          </HighlightedText>
        </div>

        <p className="text-2xl">
          Scroll down to see the{" "}
          <HighlightedText highlightColor="#ff0000">
            highlight effect
          </HighlightedText>{" "}
          in action
        </p>
        <p className="text-2xl">
          This text will be{" "}
          <HighlightedText amount={0.8} delay={0.5}>
            highlighted
          </HighlightedText>{" "}
          when 80% is in view, with a 0.5s delay
        </p>
        <p className="text-2xl">
          You can customize the{" "}
          <HighlightedText className="text-blue-500" highlightHeight="2px">
            colors
          </HighlightedText>{" "}
          and{" "}
          <HighlightedText
            className="text-green-500"
            highlightClassName="bg-gradient-to-r from-green-400 to-blue-500"
          >
            styles
          </HighlightedText>
        </p>
        <p className="text-2xl">
          This highlight will{" "}
          <HighlightedText once={false}>keep triggering</HighlightedText> on
          scroll
        </p>

        <div className="space-y-4">
          {/* Different colors */}
          <p className="text-xl">
            <HighlightedText highlightColor={highlightColors.blue}>
              Smooth animations
            </HighlightedText>
          </p>

          {/* Sequence example */}
          <p className="text-lg space-x-2">
            <HighlightedText delay={0} highlightColor={highlightColors.green}>
              Words
            </HighlightedText>
            <HighlightedText delay={0.2} highlightColor={highlightColors.pink}>
              appear
            </HighlightedText>
            <HighlightedText
              delay={0.4}
              highlightColor={highlightColors.purple}
            >
              in sequence
            </HighlightedText>
          </p>
        </div>
      </section>

      {/* Longer text example */}
      <section className="max-w-2xl">
        <p className="text-lg leading-relaxed">
          Here&apos;s a longer piece of text where{" "}
          <HighlightedText highlightColor={highlightColors.yellow}>
            important phrases
          </HighlightedText>{" "}
          can be{" "}
          <HighlightedText delay={0.2} highlightColor={highlightColors.blue}>
            highlighted beautifully
          </HighlightedText>{" "}
          as you scroll.
        </p>
      </section>

      {/* Custom styling example */}
      <section>
        <h3 className="text-2xl">
          <HighlightedText
            highlightClassName="h-[0.6em] bottom-0"
            highlightColor={highlightColors.orange}
          >
            Custom highlight styles
          </HighlightedText>
        </h3>
      </section>
    </div>
  );
};

export default HighlightDemo;
