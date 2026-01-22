import { delay } from "@/utils/delay";
import { cacheApi } from "@/utils/cache-api";

const getData = async () => {
  await delay(10000);
  return cacheApi;
};

export default async function ServerCachePage() {
  console.log("[ServerCachePage] run");
  const data = await getData();

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
