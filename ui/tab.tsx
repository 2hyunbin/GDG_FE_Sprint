"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { Item } from "@/ui/tab-group";

export const Tab = ({
  path,
  parallelRoutesKey,
  item,
}: {
  path: string;
  parallelRoutesKey?: string;
  item: Item;
}) => {
  let segment = useSelectedLayoutSegment(parallelRoutesKey);

  const regex = /^\(.*\)$/;

  if (segment && regex.test(segment)) {
    segment = null;
  }

  const href = item.slug ? path + "/" + item.slug : path;
  const isActive =
    // Example Home pages ex. /layout
    (!item.slug && segment === null) ||
    segment === item.segment ||
    // Nested pages ex. /layouts/electronics
    segment === item.slug;

  return (
    <Link
      href={href}
      className={clsx("rounded-lg px-3 py-1 text-sm font-medium", {
        "bg-gray-50 text-gray-400 hover:bg-gray-500 hover:text-white":
          !isActive,
        "bg-vercel-blue text-gray-800": isActive,
      })}
    >
      {item.text}
    </Link>
  );
};
