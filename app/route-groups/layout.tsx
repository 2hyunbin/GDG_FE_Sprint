import { Metadata } from "next";
import { getTopCategories } from "@/data/category";
import { TabGroup } from "@/ui/tab-group";
import { ClickCounter } from "@/ui/click-counter";

export const metadata: Metadata = {
  title: "라우팅 그룹",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const topCategories = getTopCategories();

  return (
    <div className="space-y-9">
      <div className="flex flex-col justify-between space-y-6">
        <TabGroup
          path="/route-groups"
          items={[
            { text: "홈" },
            ...topCategories.map((x) => ({ text: x.name, slug: x.slug })),
          ]}
        />

        <div className="self-start">
          <ClickCounter />
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}
