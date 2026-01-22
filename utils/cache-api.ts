export const cacheApi = [
  {
    front: "¿Qué es un Cache Hit?",
    back: "<b>Respuesta:</b> Ocurre cuando el dato solicitado SÍ está en caché y se puede devolver inmediatamente.<br><br><b>Ejemplo:</b> Pides <code>user:123</code>, Redis lo tiene → respuesta en 0.5ms",
    tags: ["metricas", "entrevista"],
  },
  {
    front: "¿Qué es un Cache Miss?",
    back: "<b>Respuesta:</b> Ocurre cuando el dato solicitado NO está en caché y debes consultar la base de datos.<br><br><b>Ejemplo:</b> Pides <code>user:456</code>, Redis no lo tiene → debes ir a la BD (50-100ms)",
    tags: ["metricas", "entrevista"],
  },
  {
    front: "¿Qué es el Hit Rate y cuál es un valor saludable?",
    back: "<b>Respuesta:</b> Porcentaje de requests servidos desde caché vs total de requests.<br><br><b>Fórmula:</b> <code>(Cache Hits / Total Requests) × 100</code><br><br><b>Valor saludable:</b> > 85%<br><br><b>Ejemplo:</b> 8,500 hits de 10,000 requests = 85% hit rate",
    tags: ["metricas", "performance", "entrevista"],
  },
  {
    front: "¿Qué son Keyspace Hits y Keyspace Misses en Redis?",
    back: "<b>Respuesta:</b> Contadores internos de Redis que registran el total acumulado de cache hits y cache misses desde que el servidor inició.<br><br><b>Cómo verlos:</b> <code>INFO stats</code><br><br><b>Ejemplo de output:</b><br><code>keyspace_hits: 8500</code><br><code>keyspace_misses: 1500</code>",
    tags: ["redis", "metricas", "monitoreo"],
  },
  {
    front: "¿Qué es una Eviction Policy en caché?",
    back: "<b>Respuesta:</b> Política que define qué datos eliminar cuando la caché está llena y necesita espacio.<br><br><b>Políticas comunes:</b><ul><li><b>LRU (Least Recently Used):</b> elimina los menos usados recientemente</li><li><b>LFU (Least Frequently Used):</b> elimina los menos usados en frecuencia</li><li><b>TTL:</b> elimina los que están por expirar</li><li><b>Random:</b> elimina aleatoriamente</li></ul>",
    tags: ["redis", "configuracion", "entrevista"],
  },
  {
    front:
      "¿Cuál es la diferencia entre Consistencia Fuerte y Consistencia Eventual?",
    back: "<b>Consistencia Fuerte:</b> Después de una escritura, todas las lecturas devuelven el valor actualizado inmediatamente. Mayor latencia.<br><br><b>Consistencia Eventual:</b> Después de una escritura, las lecturas eventualmente devolverán el valor actualizado (puede haber delay). Mejor performance.<br><br><b>Ejemplo:</b><ul><li>Saldo bancario → consistencia fuerte</li><li>Contador de likes → consistencia eventual</li></ul>",
    tags: ["arquitectura", "consistencia", "trade-off", "entrevista"],
  },
  {
    front: "¿Cuál es la diferencia entre Invalidar y Actualizar caché?",
    back: "<b>Invalidar:</b> Borras el dato de caché. La próxima lectura irá a la BD y cacheará el dato fresco.<br><code>redis.del('user:123')</code><br><br><b>Actualizar:</b> Reemplazas el dato en caché con el nuevo valor directamente.<br><code>redis.set('user:123', newData)</code><br><br><b>¿Cuál usar?</b> Invalidar es más seguro. Si actualizas caché y la BD falla, tienes datos inconsistentes.",
    tags: ["patrones", "entrevista"],
  },
  {
    front: "¿Qué significa 'Flush a base de datos' en el contexto de caché?",
    back: "<b>Respuesta:</b> Proceso de sincronizar datos desde la caché hacia la base de datos.<br><br><b>Contexto:</b> En patrones como Write-Behind, los datos se escriben primero en caché y después se 'flushean' (envían) a la BD de forma asíncrona.<br><br><b>Ejemplo:</b> Acumulas 100 escrituras en caché y haces flush a BD cada 5 segundos en batch.",
    tags: ["write-behind", "sincronizacion"],
  },
  {
    front: "¿Qué es Redis Server vs Redis Client?",
    back: "<b>Redis Server:</b> El proceso/servicio que corre en un servidor y almacena los datos en memoria. Escucha conexiones en el puerto 6379.<br><br><b>Redis Client:</b> La librería o aplicación que se conecta al servidor Redis para leer/escribir datos.<br><br><b>Ejemplo:</b><ul><li>Server: <code>redis-server</code> corriendo en AWS</li><li>Client: <code>const client = redis.createClient()</code> en tu app Node.js</li></ul>",
    tags: ["redis", "arquitectura", "fundamentos"],
  },
  {
    front: "¿Qué es redis-cli y para qué se usa?",
    back: "<b>Respuesta:</b> Es la interfaz de línea de comandos oficial de Redis para interactuar directamente con el servidor.<br><br><b>Usos comunes:</b><ul><li>Debugging: ver qué datos hay en caché</li><li>Monitoreo: <code>INFO stats</code></li><li>Operaciones manuales: <code>GET</code>, <code>SET</code>, <code>DEL</code></li></ul><br><b>Ejemplo:</b><br><code>$ redis-cli<br>127.0.0.1:6379> GET user:123</code>",
    tags: ["redis", "herramientas", "debugging"],
  },
  {
    front: "¿Qué información devuelve el comando INFO en Redis?",
    back: "<b>Respuesta:</b> Devuelve estadísticas completas del servidor Redis.<br><br><b>Secciones útiles:</b><ul><li><code>INFO stats</code> → hits, misses, conexiones</li><li><code>INFO memory</code> → uso de RAM</li><li><code>INFO replication</code> → estado de réplicas</li><li><code>INFO clients</code> → clientes conectados</li></ul><br><b>Uso:</b> <code>redis-cli INFO stats</code>",
    tags: ["redis", "monitoreo", "comandos"],
  },
  {
    front: "¿Qué es el Keyspace en Redis?",
    back: "<b>Respuesta:</b> Es el conjunto de todas las keys almacenadas en una base de datos de Redis.<br><br><b>Detalle:</b> Redis soporta 16 bases de datos (0-15) por defecto. Cada una tiene su propio keyspace.<br><br><b>Ver keyspace:</b> <code>INFO keyspace</code><br><br><b>Output ejemplo:</b><br><code>db0:keys=1500,expires=300</code><br>(1500 keys, 300 con TTL configurado)",
    tags: ["redis", "fundamentos", "arquitectura"],
  },
  {
    front: "¿Qué significa que Redis es un 'In-Memory Data Store'?",
    back: "<b>Respuesta:</b> Redis almacena TODOS los datos en memoria RAM, no en disco.<br><br><b>Ventaja:</b> Lecturas/escrituras extremadamente rápidas (microsegundos vs milisegundos de disco).<br><br><b>Desventaja:</b> Si el servidor se apaga sin persistencia configurada, pierdes los datos.<br><br><b>Solución:</b> Redis ofrece persistencia opcional (RDB snapshots, AOF logs).",
    tags: ["redis", "fundamentos", "arquitectura"],
  },
  {
    front:
      "¿Cuál es la diferencia entre Redis Administrado y Redis Autogestionado?",
    back: "<b>Redis Administrado (Managed):</b><ul><li>Proveedor se encarga de mantenimiento, backups, failover</li><li>Ejemplos: AWS ElastiCache, Heroku Redis, Redis Cloud</li><li>Más caro, menos control, menos trabajo</li></ul><br><b>Redis Autogestionado:</b><ul><li>Tú instalas y mantienes Redis en tus servidores</li><li>Más barato, control total, más trabajo de ops</li></ul>",
    tags: ["redis", "infraestructura", "devops"],
  },
  {
    front: "¿Qué es Failover en el contexto de caché/Redis?",
    back: "<b>Respuesta:</b> Proceso automático de cambiar a un servidor de respaldo cuando el servidor principal falla.<br><br><b>En Redis:</b> Si el nodo master cae, una réplica se promueve automáticamente a master.<br><br><b>Herramienta:</b> Redis Sentinel gestiona failover automático.<br><br><b>Tiempo típico:</b> 10-30 segundos de interrupción.",
    tags: ["redis", "alta-disponibilidad", "infraestructura"],
  },
  {
    front: "¿Qué es Replicación en Redis?",
    back: "<b>Respuesta:</b> Proceso de copiar datos del servidor master a uno o más servidores réplica (slaves).<br><br><b>Beneficios:</b><ul><li>Alta disponibilidad (si master cae, réplica toma el control)</li><li>Escalar lecturas (réplicas pueden servir reads)</li></ul><br><b>Configuración:</b> <code>REPLICAOF master_ip master_port</code>",
    tags: ["redis", "alta-disponibilidad", "escalabilidad"],
  },
  {
    front: "¿Qué es Sharding en Redis?",
    back: "<b>Respuesta:</b> Técnica de dividir los datos entre múltiples instancias de Redis para escalar horizontalmente.<br><br><b>Cómo funciona:</b> Las keys se distribuyen entre nodos usando un algoritmo de hash.<br><br><b>Ejemplo:</b> Keys A-M van al nodo 1, keys N-Z van al nodo 2.<br><br><b>Herramienta:</b> Redis Cluster maneja sharding automáticamente.",
    tags: ["redis", "escalabilidad", "arquitectura"],
  },
  {
    front: "¿Cuál es el trade-off entre Consistencia y Performance en caché?",
    back: "<b>Respuesta:</b> A mayor consistencia, menor performance (y viceversa).<br><br><b>Alta consistencia:</b><ul><li>Write-Through, Versioning</li><li>Más lento, datos siempre correctos</li></ul><br><b>Alta performance:</b><ul><li>Write-Behind, TTL largo</li><li>Más rápido, posibles datos desactualizados</li></ul><br><b>Regla:</b> Elige según criticidad del dato. Saldo bancario → consistencia. Likes → performance.",
    tags: ["arquitectura", "trade-off", "entrevista"],
  },
  {
    front: "¿Qué es TTL (Time To Live) en caché?",
    back: "<b>Respuesta:</b> Tiempo en segundos que un dato permanece válido en caché antes de expirar automáticamente.<br><br><b>Comando Redis:</b> <code>SETEX key 300 value</code> (expira en 5 min)<br><br><b>Ver TTL restante:</b> <code>TTL key</code><br><br><b>Valores típicos:</b><ul><li>Config sistema: 1-24 horas</li><li>Productos: 5-15 min</li><li>Stock: 30-60 seg</li></ul>",
    tags: ["invalidacion", "redis", "entrevista"],
  },
  {
    front: "¿Qué es el patrón Cache-Aside y cuándo usarlo?",
    back: "<b>Respuesta:</b> Patrón donde TU APLICACIÓN controla manualmente la caché.<br><br><b>Flujo lectura:</b><ol><li>App pregunta a caché</li><li>Si miss → consulta BD</li><li>Guarda en caché</li><li>Devuelve dato</li></ol><br><b>Flujo escritura:</b> Escribe en BD → Invalida caché<br><br><b>Cuándo usarlo:</b> Es el patrón por defecto. Simple y con control total.",
    tags: ["patrones", "entrevista"],
  },
  {
    front: "¿Qué es el patrón Write-Through y cuándo usarlo?",
    back: "<b>Respuesta:</b> Patrón donde las escrituras van a caché Y base de datos simultáneamente (sync).<br><br><b>Flujo:</b> App → Caché escribe en BD → BD confirma → Caché confirma a App<br><br><b>Ventaja:</b> Caché siempre consistente con BD<br><br><b>Desventaja:</b> Escrituras más lentas<br><br><b>Cuándo usarlo:</b> Datos críticos donde consistencia importa más que velocidad (ej: carrito de compras)",
    tags: ["patrones", "entrevista"],
  },
  {
    front: "¿Qué es el patrón Write-Behind y cuándo usarlo?",
    back: "<b>Respuesta:</b> Patrón donde escribes en caché, confirmas inmediatamente, y la BD se actualiza después (async).<br><br><b>Flujo:</b> App → Caché (confirma rápido) → BD se actualiza en background<br><br><b>Ventaja:</b> Escrituras ultra-rápidas<br><br><b>Desventaja:</b> Riesgo de pérdida de datos si caché cae<br><br><b>Cuándo usarlo:</b> Alta frecuencia de escrituras, datos no críticos (ej: analytics, contadores)",
    tags: ["patrones", "entrevista"],
  },
  {
    front: "¿Qué es Event-Driven Invalidation y cuándo usarla?",
    back: "<b>Respuesta:</b> Estrategia donde un evento notifica a los servicios cuando un dato cambió para que invaliden su caché.<br><br><b>Flujo:</b> Servicio A actualiza BD → Publica evento en Message Broker → Servicios suscritos invalidan caché<br><br><b>Ventaja:</b> Invalidación en milisegundos<br><br><b>Cuándo usarla:</b> Arquitectura de microservicios, sistemas distribuidos<br><br><b>Herramientas:</b> Kafka, RabbitMQ, Redis Pub/Sub",
    tags: ["invalidacion", "microservicios", "entrevista"],
  },
  {
    front: "¿Qué es Cache Stampede y cómo solucionarlo?",
    back: "<b>Problema:</b> Cuando un dato popular expira y miles de requests simultáneos generan cache miss, todos consultan la BD al mismo tiempo.<br><br><b>Resultado:</b> BD sobrecargada o caída<br><br><b>Soluciones:</b><ul><li><b>Locking:</b> Solo 1 request consulta BD, los demás esperan</li><li><b>Early Expiration:</b> Refrescar antes de que expire</li><li><b>Probabilistic Refresh:</b> Refrescar aleatoriamente</li></ul>",
    tags: ["problemas", "entrevista"],
  },
  {
    front: "¿Qué es Cache Warming y cuándo usarlo?",
    back: "<b>Respuesta:</b> Proceso de pre-cargar datos populares en caché ANTES de recibir tráfico.<br><br><b>Cuándo usarlo:</b> Después de deploy con caché vacía (Cold Start)<br><br><b>Ejemplo:</b><br><code>// Antes de iniciar servidor<br>await loadTop100Products();<br>await loadSystemConfig();<br>startServer();</code><br><br><b>Beneficio:</b> Evita que los primeros usuarios experimenten cache misses masivos.",
    tags: ["deployment", "entrevista"],
  },
  {
    front: "¿Cuáles son los 4 niveles de caché en una aplicación web?",
    back: "<b>Niveles (de más rápido a más lento):</b><ol><li><b>Browser Cache:</b> Assets estáticos (JS, CSS). 0ms</li><li><b>CDN Cache:</b> Distribuido geográficamente. 10-50ms</li><li><b>Application Cache:</b> Redis/Memcached. 0.5-5ms</li><li><b>Database Cache:</b> Query cache interno de BD. 5-20ms</li></ol><br><b>Origen (BD/API):</b> 20-500ms",
    tags: ["arquitectura", "web", "entrevista"],
  },
  {
    front: "¿Cuál es la convención de nombres para cache keys en Redis?",
    back: "<b>Formato:</b> <code>entidad:identificador:subcampo</code><br><br><b>Ejemplos:</b><ul><li><code>user:123</code> → Usuario completo</li><li><code>user:123:profile</code> → Solo perfil</li><li><code>product:456:stock</code> → Solo stock</li><li><code>session:abc-def</code> → Sesión</li></ul><br><b>Beneficios:</b> Legibilidad, invalidación por patrón, debugging fácil",
    tags: ["redis", "buenas-practicas", "convenciones"],
  },
  {
    front: "¿Cuáles son los comandos esenciales de Redis para caché?",
    back: "<b>Comandos básicos:</b><ul><li><code>SET key value</code> → Guardar</li><li><code>SETEX key ttl value</code> → Guardar con TTL</li><li><code>GET key</code> → Leer</li><li><code>DEL key</code> → Eliminar</li><li><code>EXISTS key</code> → Verificar existencia</li><li><code>TTL key</code> → Ver tiempo restante</li><li><code>SETNX key value</code> → Set if Not eXists (para locks)</li></ul>",
    tags: ["redis", "comandos", "entrevista"],
  },
  {
    front: "¿Cómo implementarías caché para un carrito de compras?",
    back: "<b>Patrón recomendado:</b> Write-Through<br><br><b>Razón:</b> El carrito necesita alta consistencia. El usuario espera ver sus cambios inmediatamente.<br><br><b>Flujo:</b><ul><li>Agregar producto → Escribir en caché Y BD (sync)</li><li>Leer carrito → Leer de caché (siempre actualizada)</li></ul><br><b>TTL:</b> 30 minutos (liberar memoria en carritos abandonados)",
    tags: ["caso-de-uso", "entrevista"],
  },
  {
    front: "¿Qué estrategia de caché usarías para stock de productos?",
    back: "<b>Estrategia combinada:</b><ol><li><b>Event-Driven (principal):</b> Cuando stock cambia, emitir evento para invalidar caché</li><li><b>TTL corto (fallback):</b> 30-60 segundos</li><li><b>Versioning (checkout):</b> Verificar versión antes de confirmar compra</li></ol><br><b>Razón:</b> Stock es crítico. No puedes vender algo que no existe.",
    tags: ["caso-de-uso", "entrevista"],
  },
  {
    front: "¿Cuál es la diferencia entre Read-Through y Cache-Aside?",
    back: "<b>Cache-Aside:</b><ul><li>Tu app habla con caché Y con BD</li><li>Tu código decide cuándo cachear</li><li>Más control, más código</li></ul><br><b>Read-Through:</b><ul><li>Tu app SOLO habla con caché</li><li>La caché consulta BD automáticamente si hay miss</li><li>Menos código, menos control</li></ul>",
    tags: ["patrones", "entrevista"],
  },
  {
    front: "¿Qué es Versioning en caché y cuándo usarlo?",
    back: "<b>Respuesta:</b> Estrategia donde cada dato tiene un número de versión. Antes de usar el dato cacheado, verificas si tu versión coincide con la actual.<br><br><b>Flujo:</b> Leer caché → Verificar versión en BD → Si no coincide, refrescar<br><br><b>Cuándo usarlo:</b> Datos ultra-críticos donde no puedes tolerar inconsistencia (pagos, stock en checkout)<br><br><b>Requiere:</b> Columna 'version' en tus tablas",
    tags: ["invalidacion", "entrevista"],
  },
];
