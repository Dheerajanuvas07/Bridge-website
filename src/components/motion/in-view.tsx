"use client";
// Adapted from Motion Primitives InView (MIT, github.com/ibelick/motion-primitives).
// Changes: defaults to a short fade + 16px rise, plays once, takes a className,
// and marks itself data-motion so reduced-motion and no-JS readers see it at rest.
import { type ElementType, type ReactNode, useRef, useState } from "react";
import {
  motion,
  useInView,
  type Transition,
  type UseInViewOptions,
  type Variant,
} from "motion/react";

export type InViewProps = {
  children: ReactNode;
  variants?: { hidden: Variant; visible: Variant };
  transition?: Transition;
  viewOptions?: UseInViewOptions;
  as?: ElementType;
  className?: string;
  delay?: number;
};

const defaultVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function InView({
  children,
  variants = defaultVariants,
  transition,
  viewOptions = { once: true, margin: "0px 0px -10% 0px" },
  as = "div",
  className,
  delay = 0,
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);
  // Create the motion wrapper once; recreating it each render would remount children.
  const [MotionComponent] = useState(() => motion.create(as));

  return (
    <MotionComponent
      ref={ref}
      data-motion
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition ?? { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionComponent>
  );
}
