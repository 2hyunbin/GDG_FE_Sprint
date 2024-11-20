import { getTopCategories } from "@/data/category";
import { Boundary } from "@/ui/boundary";
import { TabGroup } from "@/ui/tab-group";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const topCategories = getTopCategories();

  return (
    <Boundary labels={["shop layout"]} color="cyan" animateRendering={false}>
      <div className="space-y-9">
        <div className="flex justify-between flex-col">
          <TabGroup
            path="/route-groups"
            items={[
              { text: "Home" },
              ...topCategories.map((category) => ({
                text: category.name,
                slug: category.slug,
              })),
              { text: "장바구니", slug: "cart" },
              { text: "후기", slug: "review" },
            ]}
          />
        </div>

        <div>{children}</div>
      </div>
    </Boundary>
  );
}
