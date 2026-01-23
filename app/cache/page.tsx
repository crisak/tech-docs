import { headers } from "next/headers";

/**
 * La API "headers()" convierte automaticamente a SSR "force-dynamic"
 */
export const dynamic = "force-dynamic";

/**
 * Los server componenets automaticamente se crean como SSG
 */
export default async function SSRServerComponentCachePage() {
  /**
   * Al usar la API headers(), transforma de SSG -> SSR
   */
  const headersList = await headers();
  const host = headersList.get("host") || "localhost:3000";
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${host}`;

  console.log("[ServerCachePage] Request URL", `${baseUrl}/api/cache`);

  const data = (await fetch(`${baseUrl}/api/cache`).then((d) => d.json())) as {
    front: string;
    back: string;
  }[];

  console.log("[ServerCachePage] Request");

  return (
    <div>
      <h1>Server Cache - SSR</h1>
      <p>
        Al usar la API de Next.js <code>headers()</code> convierte el Server
        Component <code>SSG</code> a <code>SSR</code>
      </p>
      <hr />
      <section>
        <ul>
          <li>Server Component</li>
          <li>SSR - On Demand</li>
          <li>10 Senconds from server</li>
        </ul>
      </section>
      <hr />

      {data.map(({ front, back }) => (
        <details name={front} key={front}>
          <summary>{front}</summary>
          <article>
            <p dangerouslySetInnerHTML={{ __html: back }} />
          </article>
          <hr />
        </details>
      ))}
    </div>
  );
}
