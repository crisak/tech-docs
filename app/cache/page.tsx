export const dynamic = "force-dynamic";

export default async function ServerCachePage() {
  const data = (await fetch("/api/cache").then((d) => d.json())) as {
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
