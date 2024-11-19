import { TabNavItem } from "@/ui/tab-nav-item";
import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabNavItem href="/">Back</TabNavItem>
      </div>

      <div>{children}</div>
    </div>
  );
}
