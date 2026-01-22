```ts
// Opción 1: AUTO (por defecto)
export const dynamic = 'auto'; // o simplemente no declarar nada
// Next.js decide: SSG si puede, SSR si detecta APIs dinámicos

// Opción 2: FUERZA ESTÁTICO
export const dynamic = 'force-static'; 
// Siempre SSG, error si usas APIs dinámicos ()

// Opción 3: FUERZA DINÁMICO
export const dynamic = 'force-dynamic';
// Siempre SSR, incluso sin APIs dinámicos, this APIS transform to SSR automacly (cookies(), headers(), useSearchParams())

// Opción 4: ERROR SI ES DINÁMICO
export const dynamic = 'error';
// SSG, pero lanza error si detecta algo dinámico (útil para debugging)
```
