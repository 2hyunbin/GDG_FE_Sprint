import React from "react";
import clsx from "clsx";

const Label = ({
  children,
  animateRendering,
  color,
}: {
  children: React.ReactNode;
  animateRendering?: boolean;
  color?: "default" | "pink" | "blue" | "violet" | "cyan" | "orange";
}) => {
  return (
    <div
      className={clsx("rounded-full px-1.5 shadow-[0_0_1px_1px_gray]", {
        "bg-gray-100 text-gray-600": color === "default",
        "bg-vercel-pink text-white": color === "pink",
        "bg-vercel-blue text-white": color === "blue",
        "bg-vercel-cyan text-white": color === "cyan",
        "bg-vercel-violet text-violet-100": color === "violet",
        "bg-vercel-orange text-white": color === "orange",
        "animate-[highlight_1s_ease-in-out_1]": animateRendering,
      })}
    >
      {children}
    </div>
  );
};

export const Boundary = ({
  children,
  labels = ["children"],
  size = "default",
  color = "default",
  animateRendering = true,
}: {
  children: React.ReactNode;
  labels?: string[];
  size?: "small" | "default";
  animateRendering?: boolean;
  color?: "default" | "pink" | "blue" | "violet" | "cyan" | "orange";
}) => {
  return (
    <div
      className={clsx("relative rounded-lg border border-dashed", {
        "p-3 lg:p-5": size === "small",
        "p-3 lg:p-5": size === "small",
        "p-3 lg:p-5": size === "small",
        "p-3 lg:p-5": size === "small",
        "p-3 lg:p-5": size === "small",
        "p-3 lg:p-5": size === "small",
      })}
    ></div>
  );
};
