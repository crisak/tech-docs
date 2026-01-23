export default function LoadingPage() {
  const data = Array.from({ length: 25 }).fill("");

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

      {data.map((_, i) => (
        <details key={i}>
          <summary>
            <progress className="animate-pulse" />
          </summary>
          <article></article>
          <hr />
        </details>
      ))}
    </div>
  );
}
