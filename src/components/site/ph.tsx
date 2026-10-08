import { isUnfilled, placeholders, type PlaceholderKey } from "@/content/placeholders";

/** Renders a placeholder value; highlighted while it is still unfilled. */
export function Ph({ k }: { k: PlaceholderKey }) {
  const value = placeholders[k];
  if (!isUnfilled(value)) return <>{value}</>;
  return <span className="placeholder">{value}</span>;
}
