import { HeaderPage } from "@/components/HeaderPage";
import { seoApi } from "@/utils/seo-api";
import { delay } from "@/utils/delay";
import { randomBetween } from "@/utils/random";

const fetchData = async () => {
  await delay(30);
  const max = seoApi.length;
  const randomIndex = randomBetween(0, max - 1);

  return [...seoApi.slice(0, randomIndex)];
};

/**
 * 3. Opcional: Añadir revalidación (ISR) para actualizar el contenido cacheado
 * Esto hace que incluso las páginas estáticas se actualicen cada X segundos
 */
export const revalidate = 432000; // 2days: Re-generar en caché cada hora si hay visitas

export default async function ISRServerComponentMicroservicesPage() {
  const list = await fetchData();

  const localDate = new Date();
  const hour = localDate.getHours();
  const minute = localDate.getMinutes();

  console.log(
    `[ISRServerComponentMicroservicesPage][$${hour}:${minute}] Init, total de list(${list.length})`,
  );

  return (
    <div>
      <HeaderPage
        title={`Microservices - ISR - Totals records(${list.length}) [${hour}:${minute}]`}
        body={
          <>
            Implementar ISR con una actualizacion de cada{" "}
            <code>600 segundos (10m)</code>
          </>
        }
        items={[
          "ISR (Incremental Static Regeneration)",
          "Server Component",
          "30 seconds , in the fetching the data",
          "Content generation in build time y en el server en demanda cada 10m",
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
