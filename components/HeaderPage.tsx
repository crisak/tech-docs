type HeaderPageProps = {
  title: string;
  body: string | React.ReactNode;
  items: string[];
};

const defaultProps = {
  title: "Server Cache - SSR",
  // body: 'Al usar la API de Next.js <code>headers()</code> convierte el Server Component <code>SSG</code> a <code>SSR</code> de manera forzada.',
  body: (
    <>
      Al usar la API de Next.js <code>headers()</code> convierte el Server
      Component <code>SSG</code> a <code>SSR</code> de manera forzada.
    </>
  ),
  items: ["Server Component", "SSR - On Demand", "10 Senconds from server"],
};

export function HeaderPage({
  title = defaultProps.title,
  body = defaultProps.body,
  items = defaultProps.items,
}: Partial<HeaderPageProps> = defaultProps) {
  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
      <hr />
      <section>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
      <hr />
    </>
  );
}
