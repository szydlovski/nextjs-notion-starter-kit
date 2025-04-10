import { type GetStaticProps } from "next";

import { NotionPage } from "@/components/NotionPage";
import { domain, isDev } from "@/lib/config";
import { getSiteMap } from "@/lib/get-site-map";
import { resolveNotionPage } from "@/lib/resolve-notion-page";
import { type PageProps, type Params } from "@/lib/types";

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context,
) => {
  const rawPageId = context.params.pageId as string;

  const props = await resolveNotionPage(domain, rawPageId);

  return { props, revalidate: 10 };
};

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const siteMap = await getSiteMap();

  const staticPaths = {
    paths: Object.keys(siteMap.canonicalPageMap).map((pageId) => ({
      params: {
        pageId,
      },
    })),
    fallback: true,
  };
  return staticPaths;
}

export default function NotionDomainDynamicPage(props) {
  return <NotionPage {...props} />;
}
