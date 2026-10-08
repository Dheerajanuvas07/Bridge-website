"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

// "user" makes Motion follow the OS reduced-motion setting.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
