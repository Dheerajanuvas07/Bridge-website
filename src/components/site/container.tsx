import { cn } from "@/lib/utils";

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[var(--container-page)] px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

/** Small uppercase label above a section heading. */
export function Eyebrow({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("mb-5 text-small font-semibold tracking-[0.08em] text-accent uppercase", className)}
      {...props}
    />
  );
}
