import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SitePage } from "@/components/pages/site-page";
import { getAllPageRoutes, getPageByPath } from "@/content/pages";

type RouteProps = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return getAllPageRoutes()
    .filter((path) => path !== "/")
    .map((path) => ({ slug: path.slice(1).split("/") }));
}

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;
  const page = getPageByPath(path);

  return page
    ? {
        title: page.editorial
          ? { absolute: page.editorial.seoTitle }
          : page.seoTitle
            ? { absolute: page.seoTitle }
            : page.title,
        description:
          page.editorial?.metaDescription ?? page.metaDescription ?? page.intro,
      }
    : {};
}

export default async function ContentRoute({ params }: RouteProps) {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;
  const page = getPageByPath(path);

  if (!page) notFound();

  return <SitePage page={page} path={path} />;
}
