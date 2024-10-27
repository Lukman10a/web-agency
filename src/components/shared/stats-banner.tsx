"use client";

import { useEffect, useState } from "react";

const useAnimatedCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [end, duration]);

  return count;
};

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <span className="text-4xl font-bold mb-2">{value}</span>
    <span className="text-sm text-center">{label}</span>
  </div>
);

export default function AnimatedStatsBanner() {
  const yearsCount = useAnimatedCounter(7);
  const expertsCount = useAnimatedCounter(25);
  const coffeesCount = useAnimatedCounter(4000);
  const clustersCount = useAnimatedCounter(100);

  return (
    <div className="w-full bg-darkblue-900 text-white py-8 px-10">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8 font-sora">
        <StatItem value={`${yearsCount}yr.`} label="In the game" />
        <StatItem value={`${expertsCount}`} label="Cloud experts" />
        <StatItem value={`${coffeesCount}+`} label="coffees drank yearly" />
        <StatItem value={`${clustersCount}+`} label="Kubernetes clusters" />
      </div>
    </div>
  );
}
