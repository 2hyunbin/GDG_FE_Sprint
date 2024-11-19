import { getCategories, getCategory } from "@/data/category";
import { TabGroup } from "@/ui/tab-group";
import { ClickCounter } from "@/ui/click-counter";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { categorySlug: string };
}) {
  const category = getCategory(params.categorySlug);
  const items = getCategories(params.categorySlug);

  return (
    <div className="space-y-9">
      <div className="flex flex-col justify-between space-y-6">
        <TabGroup
          path={`/dynamic-routing/${category.slug}`}
          items={[
            { text: "전체" },
            ...items.map((x) => ({
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
    </div>
  );
}
