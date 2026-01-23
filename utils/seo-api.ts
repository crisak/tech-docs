export const seoApi = [
  {
    front: "¿Qué son los Core Web Vitals y por qué importan para SEO?",
    back: "<b>Respuesta:</b> Son métricas de experiencia de usuario que Google usa como factor de ranking SEO desde 2021.<br><br><b>Las 3 métricas principales:</b><ul><li><b>LCP</b> (Largest Contentful Paint): Carga del contenido principal</li><li><b>INP</b> (Interaction to Next Paint): Interactividad</li><li><b>CLS</b> (Cumulative Layout Shift): Estabilidad visual</li></ul><b>Impacto:</b> 53% de usuarios abandonan si tarda más de 3 segundos. 1 segundo de mejora en LCP = +8% en conversiones.",
    tags: ["seo", "core-web-vitals", "seo", "performance"],
  },
  {
    front:
      "¿Qué es TTFB (Time To First Byte) y cuáles son sus valores objetivo?",
    back: "<b>Respuesta:</b> Tiempo desde que el usuario solicita la página hasta que recibe el primer byte de respuesta del servidor.<br><br><b>Valores objetivo:</b><ul><li>✅ Bueno: < 200ms</li><li>⚠️ Mejorable: 200-500ms</li><li>❌ Malo: > 500ms</li></ul><b>Cómo mejorarlo:</b><ul><li>CDN para servir contenido más cerca del usuario</li><li>Caché de servidor (Redis, Memcached)</li><li>Optimizar queries de base de datos</li><li>SSG/ISR en lugar de SSR cuando sea posible</li></ul>",
    tags: ["seo", "ttfb", "performance", "seo"],
  },
  {
    front: "¿Qué es FCP (First Contentful Paint) y cómo impacta CSR vs SSR?",
    back: "<b>Respuesta:</b> Tiempo hasta que el usuario ve cualquier contenido (texto, imagen, SVG).<br><br><b>Valores objetivo:</b><ul><li>✅ Bueno: < 1.8s</li><li>⚠️ Mejorable: 1.8-3s</li><li>❌ Malo: > 3s</li></ul><b>Impacto CSR vs SSR:</b><br><code>CSR: ~2500ms FCP</code> (Descarga HTML → Descarga JS → Ejecuta → Render)<br><code>SSR: ~800ms FCP</code> (HTML listo → Muestra)<br><br>SSR mejora significativamente FCP porque el HTML ya viene renderizado desde el servidor.",
    tags: ["seo", "fcp", "csr", "ssr", "performance"],
  },
  {
    front: "¿Qué es LCP (Largest Contentful Paint) y cómo optimizarlo?",
    back: '<b>Respuesta:</b> Tiempo hasta que el elemento más grande del viewport es visible (imagen hero, título principal, video).<br><br><b>Valores objetivo:</b><ul><li>✅ Bueno: < 2.5s</li><li>⚠️ Mejorable: 2.5-4s</li><li>❌ Malo: > 4s</li></ul><b>Elementos que cuentan:</b> img, imágenes de fondo CSS, video (poster), bloques de texto grandes.<br><br><b>Optimización:</b><br><code>&lt;img src="hero.webp" loading="eager" fetchpriority="high" width="1200" height="600"&gt;</code><br><br>NO usar lazy loading en el elemento LCP.',
    tags: ["seo", "lcp", "core-web-vitals", "optimizacion"],
  },
  {
    front: "¿Qué es INP (Interaction to Next Paint) y cómo mejorarlo?",
    back: "<b>Respuesta:</b> Mide la latencia de TODAS las interacciones del usuario durante la visita, reportando el peor caso (percentil 98). Reemplazó a FID en marzo 2024.<br><br><b>Valores objetivo:</b><ul><li>✅ Bueno: < 200ms</li><li>⚠️ Mejorable: 200-500ms</li><li>❌ Malo: > 500ms</li></ul><b>Causas de mal INP:</b><ul><li>JavaScript bloqueando el main thread</li><li>Event handlers pesados</li><li>Hidratación lenta</li></ul><b>Solución:</b> Usar <code>setTimeout</code> para dividir trabajo o Web Workers para cálculos pesados.",
    tags: ["seo", "inp", "core-web-vitals", "interactividad"],
  },
  {
    front:
      "¿Qué es CLS (Cumulative Layout Shift) y cuáles son sus causas comunes?",
    back: '<b>Respuesta:</b> Mide cuánto "saltan" los elementos de la página inesperadamente.<br><br><b>Valores objetivo:</b><ul><li>✅ Bueno: < 0.1</li><li>⚠️ Mejorable: 0.1-0.25</li><li>❌ Malo: > 0.25</li></ul><b>Causas comunes:</b><ul><li>Imágenes sin dimensiones definidas</li><li>Anuncios/embeds que cargan tarde</li><li>Fuentes web (FOUT/FOIT)</li><li>Contenido inyectado dinámicamente arriba del fold</li></ul><b>Solución:</b> Definir width/height en imágenes, usar <code>aspect-ratio</code> en CSS, reservar espacio para ads con <code>min-height</code>.',
    tags: ["seo", "cls", "core-web-vitals", "layout-shift"],
  },
  {
    front:
      "¿Qué es TTI (Time To Interactive) y por qué causa frustración en el usuario?",
    back: '<b>Respuesta:</b> Tiempo hasta que la página es completamente interactiva (todo responde, JavaScript ejecutado, hidratación completa).<br><br><b>El "gap de frustración":</b><br>Entre FCP/LCP y TTI existe un período donde el usuario VE el contenido pero NO puede interactuar. Este gap es especialmente problemático en SSR/SSG debido a la hidratación.<br><br><b>Ejemplo:</b><br><code>FCP: 500ms → LCP: 1000ms → TTI: 2000ms</code><br><br>Durante 1000-1500ms el usuario ve botones que no funcionan.<br><br><b>Solución:</b> Hydration selectiva con React 18 + Suspense.',
    tags: ["seo", "tti", "hidratacion", "user-experience"],
  },
  {
    front: "¿Cómo medir Core Web Vitals en producción con JavaScript?",
    back: "<b>Respuesta:</b> Usando la librería <code>web-vitals</code> de Google:<br><br><code>import { onCLS, onINP, onLCP, onFCP, onTTFB } from 'web-vitals';</code><br><br><code>function enviarAAnalytics(metric) {<br>&nbsp;&nbsp;gtag('event', metric.name, {<br>&nbsp;&nbsp;&nbsp;&nbsp;value: Math.round(metric.value),<br>&nbsp;&nbsp;&nbsp;&nbsp;metric_id: metric.id,<br>&nbsp;&nbsp;});<br>}</code><br><br><code>onCLS(enviarAAnalytics);<br>onINP(enviarAAnalytics);<br>onLCP(enviarAAnalytics);</code><br><br><b>En desarrollo:</b> Chrome DevTools → Performance tab o PerformanceObserver API.",
    tags: ["seo", "web-vitals", "monitoring", "javascript"],
  },
  {
    front:
      "¿Cómo impactan las estrategias de renderizado (CSR, SSR, SSG, ISR) en las métricas?",
    back: '<b>Comparativa:</b><br><br><b>TTFB:</b> CSR ✅ | SSR ⚠️ | SSG ✅ | ISR ✅<br><b>FCP:</b> CSR ❌ | SSR ✅ | SSG ✅ | ISR ✅<br><b>LCP:</b> CSR ❌ | SSR ✅ | SSG ✅ | ISR ✅<br><b>INP:</b> CSR ✅ | SSR ⚠️ | SSG ⚠️ | ISR ⚠️<br><b>CLS:</b> CSR ⚠️ | SSR ✅ | SSG ✅ | ISR ✅<br><br><b>Insight clave:</b> SSR/SSG mejoran FCP y LCP, pero crean un "gap" de hidratación donde el usuario ve contenido pero no puede interactuar. Hydration selectiva reduce este gap.',
    tags: ["seo", "csr", "ssr", "ssg", "isr", "renderizado"],
  },
  {
    front: "¿Cómo evitar layout shift (CLS) en imágenes?",
    back: '<b>Problema:</b> Imágenes sin dimensiones causan que el contenido "salte" cuando cargan.<br><br><b>Solución 1 - Dimensiones explícitas:</b><br><code>&lt;img src="/producto.jpg" width="400" height="300"&gt;</code><br><br><b>Solución 2 - CSS aspect-ratio:</b><br><code>.imagen-producto {<br>&nbsp;&nbsp;aspect-ratio: 4 / 3;<br>&nbsp;&nbsp;width: 100%;<br>&nbsp;&nbsp;object-fit: cover;<br>}</code><br><br><b>Para fuentes web:</b><br><code>@font-face {<br>&nbsp;&nbsp;font-family: \'MiFuente\';<br>&nbsp;&nbsp;font-display: swap;<br>}</code>',
    tags: ["seo", "cls", "imagenes", "css", "optimizacion"],
  },
  {
    front: "¿Cómo mejorar INP cuando un event handler es pesado?",
    back: "<b>Problema:</b> JavaScript bloquea el main thread durante operaciones pesadas.<br><br><b>Solución 1 - setTimeout para dividir trabajo:</b><br><code>button.addEventListener('click', () => {<br>&nbsp;&nbsp;mostrarSpinner(); // Feedback inmediato<br>&nbsp;&nbsp;setTimeout(() => {<br>&nbsp;&nbsp;&nbsp;&nbsp;const resultado = procesarDatos(datos);<br>&nbsp;&nbsp;&nbsp;&nbsp;mostrarResultado(resultado);<br>&nbsp;&nbsp;}, 0);<br>});</code><br><br><b>Solución 2 - Web Workers:</b><br><code>const worker = new Worker('/calculos.js');<br>button.addEventListener('click', () => {<br>&nbsp;&nbsp;mostrarSpinner();<br>&nbsp;&nbsp;worker.postMessage(datos);<br>});<br>worker.onmessage = (e) => mostrarResultado(e.data);</code>",
    tags: ["seo", "inp", "javascript", "web-workers", "optimizacion"],
  },
  {
    front: "¿Qué atributos HTML usar para optimizar la imagen LCP?",
    back: '<b>Respuesta:</b> Para la imagen principal (LCP element), usar:<br><br><code>&lt;img<br>&nbsp;&nbsp;src="/hero.webp"<br>&nbsp;&nbsp;alt="Hero"<br>&nbsp;&nbsp;loading="eager"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// NO lazy para LCP<br>&nbsp;&nbsp;fetchpriority="high"&nbsp;&nbsp;// Prioridad alta<br>&nbsp;&nbsp;decoding="async"<br>&nbsp;&nbsp;width="1200"<br>&nbsp;&nbsp;height="600"<br>&gt;</code><br><br><b>Para imágenes debajo del fold:</b><br><code>loading="lazy"</code> y <code>fetchpriority="low"</code><br><br><b>Formato recomendado:</b> WebP para mejor compresión.',
    tags: ["seo", "lcp", "imagenes", "html", "fetchpriority"],
  },
  {
    front:
      "¿Cómo responderías en una entrevista: 'Mejora la performance de nuestra página de producto'?",
    back: "<b>Respuesta modelo:</b><br><br>\"Primero mediría las Core Web Vitals actuales con Lighthouse y web-vitals en producción.<br><br><b>Para LCP:</b> Aseguraría que la imagen principal tenga <code>fetchpriority='high'</code> y dimensiones explícitas.<br><br><b>Para CLS:</b> Reservaría espacio para elementos dinámicos como reviews o anuncios.<br><br><b>Para INP:</b> Implementaría hydration selectiva con Suspense para que el botón de compra sea interactivo antes que los comentarios.<br><br>Usaría SSR para el contenido principal con ISR para secciones cacheables como 'productos relacionados'.\"",
    tags: ["seo", "respuesta-modelo", "performance", "optimizacion"],
  },
  {
    front: "¿Cuál es la diferencia entre FID e INP?",
    back: "<b>FID (First Input Delay):</b> Medía solo la latencia de la PRIMERA interacción del usuario.<br><br><b>INP (Interaction to Next Paint):</b> Mide la latencia de TODAS las interacciones durante la visita, reportando el percentil 98 (peor caso).<br><br><b>Cambio:</b> INP reemplazó oficialmente a FID en marzo 2024.<br><br><b>Por qué importa:</b> INP es más representativo de la experiencia real del usuario porque captura problemas de interactividad que ocurren en cualquier momento de la visita, no solo al inicio.",
    tags: ["seo", "fid", "inp", "core-web-vitals"],
  },
  {
    front: "¿Qué es FOUT/FOIT y cómo afecta al CLS?",
    back: "<b>FOUT (Flash of Unstyled Text):</b> El texto se muestra con fuente de respaldo y luego \"salta\" cuando carga la fuente web.<br><br><b>FOIT (Flash of Invisible Text):</b> El texto es invisible hasta que carga la fuente web.<br><br><b>Ambos causan CLS</b> porque el texto cambia de tamaño o aparece repentinamente.<br><br><b>Solución:</b><br><code>@font-face {<br>&nbsp;&nbsp;font-family: 'MiFuente';<br>&nbsp;&nbsp;src: url('/fuente.woff2') format('woff2');<br>&nbsp;&nbsp;font-display: swap;<br>}</code><br><br><code>font-display: swap</code> muestra fallback inmediatamente y cambia suavemente.",
    tags: ["seo", "fout", "foit", "cls", "fuentes"],
  },
];
