export default function LoadingPage() {
  const data = Array.from({ length: 25 }).fill("");

  return (
    <div>
      <h1>Server Cache</h1>
      <strong>Flujo SSR Detallado (lo que realmente pasa)</strong>
      <code></code>
      <hr />

      {data.map((_, i) => (
        <details key={i}>
          <summary className="bg-neutral-800 animate-pulse">
            <span style={{ opacity: 0 }}>0</span>
          </summary>
          <article className="animate-pulse">
            <p>
              <span style={{ opacity: 0 }}>0</span>
            </p>
          </article>
        </details>
      ))}
    </div>
  );
}
