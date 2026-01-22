import { cacheApi } from "@/utils/cache-api";
import { delay } from "@/utils/delay";

export async function GET() {
  await delay(5000);

  const length = cacheApi.length;

  const ls = [...cacheApi.slice(0, length / 2)];

  return new Response(JSON.stringify(ls), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
