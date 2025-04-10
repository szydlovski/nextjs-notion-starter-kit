import { NotionPage } from "@/components/NotionPage";
import { domain } from "@/lib/config";
import { resolveNotionPage } from "@/lib/resolve-notion-page";

export const getStaticProps = async () => {
  const props = await resolveNotionPage(domain);

  return { props, revalidate: 10 };
};

export default function NotionDomainPage(props) {
  return <NotionPage {...props} />;
}
