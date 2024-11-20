import { Metadata } from "next";
import { ReactNode } from "react";
import { getTopCategories } from "@/data/category";
import { TabGroup } from "@/ui/tab-group";
import { ClickCounter } from "@/ui/click-counter";

export const metadata: Metadata = {
  title: "레벨업 Next.js: 로딩 UI",
};

export default async function Layout({ children }: { children: ReactNode }) {
  const categories = await getTopCategories();

  return (
    <div className="space-y-9 flex flex-col justify-between">
      <TabGroup
        path="/loading"
        items={[
          { text: "홈" },
          ...categories.map((x) => ({
            text: x.name,
            slug: x.slug,
          })),
        ]}
      />

      <div className="self-start">
        <ClickCounter />
      </div>

      <div>{children}</div>
    </div>
  );
}
