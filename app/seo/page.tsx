import { HeaderPage } from "@/components/HeaderPage";
import { seoApi } from "@/utils/seo-api";
import { delay } from "@/utils/delay";

const fetchData = async () => {
  await delay(20);
  return seoApi;
};

/**
 * Se mantiene SSG porque no se usa nada de las siguientes condiciones que lo vuelve en SSR:
 * - APIs de next como (cookies(), header(), useRouter())
 * - O defined explicitamente `export const dynamic = "force-dynamic";`
 */
export default async function SSGServerComponentDefaultSeoPage() {
  const list = await fetchData();

  console.log("[SSGServerComponentDefaultSeo] Init");

  return (
    <div>
      <HeaderPage
        title="SEO - SSG(Default)"
        body={
          <>
            Use SSG with Server Component by default, the{" "}
            <code>pre-rendering</code> is generated in the <code>build</code>{" "}
            time.
          </>
        }
        items={[
          "SSG (Default)",
          "Server Component",
          "20 seconds, in the fetching the data",
          "Content generation in build time",
          "It should be fast",
        ]}
      />

      {list.map(({ front, back }) => (
        <details name={front} key={front}>
          <summary className="py-3">{front}</summary>
          <article>
            <p dangerouslySetInnerHTML={{ __html: back }} />
          </article>
          <hr />
        </details>
      ))}
    </div>
  );
}
