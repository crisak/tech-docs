import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export default async function ServerCachePage() {
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
      <h1>Server Cache</h1>
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
