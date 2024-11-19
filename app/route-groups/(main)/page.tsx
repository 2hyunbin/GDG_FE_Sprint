import { ExternalLink } from "@/ui/external-link";

export default function Page() {
  return (
    <div className="prose-sm prose max-w-none space-y-6">
      <h1 className="text-xl font-bold">라우팅 그룹</h1>
      <ul>
        <li>라우팅 그룹 설명</li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts">
          문서
        </ExternalLink>
      </div>
    </div>
  );
}
