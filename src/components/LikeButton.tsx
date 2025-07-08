"use client";

import { animate } from "animejs";
import { Heart } from "lucide-react";
import { useRef, useState } from "react";

interface LikeButtonProps {
  initialLikes?: number;
  size?: "sm" | "md" | "lg";
}

export const LikeButton = ({
  initialLikes = 0,
  size = "md",
}: LikeButtonProps) => {
  const [likes, setLikes] = useState(initialLikes);
  const iconRef = useRef<SVGSVGElement>(null);

  const handleClick = () => {
    setLikes((prev) => prev + 1);

    if (iconRef.current) {
      animate(iconRef.current, {
        scale: [1, 1.5, 1],
        duration: 500,
        easing: "easeInOutBack",
      });
    }
  };

  const sizeClass = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  }[size];

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center gap-2 group select-none active:scale-95 transition"
    >
      <Heart
        ref={iconRef}
        className={`text-red-500 ${sizeClass}`}
        fill={likes > (initialLikes ?? 0) ? "currentColor" : "none"}
      />
      <span className="text-xl font-medium text-white">{likes}</span>
    </button>
  );
};
