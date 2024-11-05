import { motion, useTransform, MotionValue } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  scrollYProgress: MotionValue<number>;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  index,
  scrollYProgress,
}: ServiceCardProps) {
  const y = useTransform(
    scrollYProgress,
    [index * 0.2, Math.min((index + 1) * 0.2, 0.95)],
    [100, 0],
  );

  const opacity = useTransform(
    scrollYProgress,
    [index * 0.2, Math.min((index + 1) * 0.2, 0.95)],
    [0.3, 1],
  );

  const scale = useTransform(
    scrollYProgress,
    [index * 0.2, Math.min((index + 1) * 0.2, 0.95)],
    [0.8, 1],
  );

  return (
    <motion.div
      style={{ y, opacity, scale }}
      className="sticky top-24 mb-4 w-full last:mb-0"
    >
      <div className="rounded-xl border border-gray-200 bg-white/90 p-8 shadow-xl backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/90">
        <div className="mb-4 flex items-center gap-4">
          <div className="rounded-lg bg-primary/10 p-3 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
