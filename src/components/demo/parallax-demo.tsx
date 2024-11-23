import Image from "next/image";

import { HighlightedText } from "../ui/animated/highlight-text";
import { Parallax } from "../ui/animated/parallax";

export default function ParallaxDemo() {
  return (
    <main className="min-h-screen p-24 space-y-96">
      <Parallax className="h-96">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Vertical Parallax Section
          </h2>
          <p className="text-white">
            This entire section will move vertically with a parallax effect as
            you scroll.
          </p>
        </div>
      </Parallax>

      <p className="text-2xl">
        Scroll down to see the{" "}
        <HighlightedText highlightColor="#ff0000">
          highlight effect
        </HighlightedText>{" "}
        and{" "}
        <HighlightedText highlightColor="#4CAF50">
          parallax effects
        </HighlightedText>{" "}
        in action
      </p>

      <Parallax offset={100} direction="horizontal" className="h-96">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 p-8 rounded-lg shadow-lg w-full md:w-2/3 ml-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Right-to-Left Parallax
          </h2>
          <p className="text-white">
            This section slides in from the right as you scroll down.
          </p>
        </div>
      </Parallax>

      <Parallax offset={100} direction="horizontal" reverse className="h-96">
        <div className="bg-gradient-to-r from-yellow-500 to-red-500 p-8 rounded-lg shadow-lg w-full md:w-2/3">
          <h2 className="text-3xl font-bold text-white mb-4">
            Left-to-Right Parallax
          </h2>
          <p className="text-white">
            This section slides in from the left as you scroll down.
          </p>
        </div>
      </Parallax>

      <p className="text-2xl">
        This text will be{" "}
        <HighlightedText amount={0.8} delay={0.5}>
          highlighted
        </HighlightedText>{" "}
        when 80% is in view, with a 0.5s delay
      </p>

      <Parallax offset={100} direction="horizontal">
        <Image
          src="/assets/placeholder.png"
          width={400}
          height={400}
          alt="Placeholder"
          className="rounded-lg shadow-lg ml-auto bg-gray-100"
        />
      </Parallax>

      <Parallax offset={-50} className="h-96">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Reverse Vertical Parallax
          </h2>
          <p className="text-white">
            This section moves in the opposite vertical direction for variety.
          </p>
        </div>
      </Parallax>

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

      <Parallax offset={100} direction="horizontal" reverse className="h-96">
        <Image
          src="/assets/placeholder.png"
          width={400}
          height={600}
          alt="Another Placeholder"
          className="rounded-lg shadow-lg bg-gray-200"
        />
      </Parallax>

      <p className="text-2xl">
        This highlight will{" "}
        <HighlightedText once={false}>keep triggering</HighlightedText> on
        scroll
      </p>
    </main>
  );
}
