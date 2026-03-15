import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  interactive?: boolean;
  size?: "sm" | "md" | "lg";
  onChange?: (rating: number) => void;
}

export function StarRating({
  rating,
  interactive = false,
  size = "md",
  onChange,
}: StarRatingProps) {
  const sizeClass =
    size === "sm" ? "w-3 h-3" : size === "lg" ? "w-6 h-6" : "w-4 h-4";

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => interactive && onChange?.(s)}
          className={`${interactive ? "cursor-pointer hover:scale-110 transition-transform" : "cursor-default"}`}
        >
          <Star
            className={`${sizeClass} ${s <= Math.round(rating) ? "star-filled fill-current" : "star-empty"}`}
          />
        </button>
      ))}
    </div>
  );
}
