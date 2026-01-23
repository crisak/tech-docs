import { HeaderPage } from "@/components/HeaderPage";

export default function LoadingPage() {
  const data = Array.from({ length: 25 }).fill("");

  return (
    <div>
      <HeaderPage />
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
