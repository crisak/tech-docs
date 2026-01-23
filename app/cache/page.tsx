import { HeaderPage } from "@/components/HeaderPage";
import { headers } from "next/headers";

/**
 * La API "headers()" convierte automaticamente a SSR "force-dynamic"
 * This line is unnecessary
 * `export const dynamic = "force-dynamic";`
 */

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

  console.log(
    "[SSRServerComponentCachePage] Request URL",
    `${baseUrl}/api/cache`,
  );

  const data = (await fetch(`${baseUrl}/api/cache`).then((d) => d.json())) as {
    front: string;
    back: string;
  }[];

  console.log("[SSRServerComponentCachePage] Request");

  return (
    <div>
      <HeaderPage />

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
