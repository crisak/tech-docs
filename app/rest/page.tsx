import { Filters } from "./components/Filters";
import { HeaderPage } from "@/components/HeaderPage";
import { delay } from "@/utils/delay";
import { restApi } from "@/utils/rest-api";
import { RestProvider } from "./components/RestProvider";
import { List } from "./components/List";

const fetchData = async () => {
  await delay(15);

  return restApi;
};

export default async function ServerComponentRestPage() {
  const list = await fetchData();
  return (
    <div>
      <HeaderPage
        title={`REST - SSR - Dynamic Filters`}
        body={
          <>
            Implementar ISR (para indexar los resultados de la API pero sin
            HTML) y implementar filtros en un client component
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

      <RestProvider>
        <Filters />
        <List list={list} />
      </RestProvider>
    </div>
  );
}
