export const restApi = [
  {
    front: "¿Qué es REST y qué significa?",
    back: "<b>Respuesta:</b> REST (Representational State Transfer) es un <b>estilo arquitectónico</b> para diseñar servicios web, definido por Roy Fielding en el año 2000. NO es un protocolo, framework o biblioteca, sino un conjunto de restricciones/principios para diseñar sistemas distribuidos.<br><br><b>Ejemplo:</b> REST es como las reglas de gramática para que dos sistemas hablen entre sí a través de internet usando HTTP.",
    tags: ["rest", "conceptos-basicos"],
  },
  {
    front: "¿Por qué REST es tan usado en la industria?",
    back: "<b>Respuesta:</b> REST es usado por 7 razones principales:<br>1. <b>Escalabilidad</b> (stateless + HTTP)<br>2. <b>Independencia de plataforma</b><br>3. <b>Separación cliente-servidor</b><br>4. <b>Simplicidad y familiaridad</b> (usa HTTP estándar)<br>5. <b>Flexibilidad</b> (múltiples formatos: JSON, XML)<br>6. <b>Performance</b> (caching integrado)<br>7. <b>Ecosistema y adopción masiva</b> (83% de APIs públicas)<br><br><b>Ejemplo:</b> Netflix escala millones de requests porque cualquier servidor puede manejar cualquier petición (stateless).",
    tags: ["rest", "escalabilidad"],
  },
  {
    front: "¿Cuáles son los 6 principios fundamentales de REST?",
    back: "<b>Respuesta:</b> Los 6 principios son:<br>1. <b>Client-Server</b>: Separación de responsabilidades<br>2. <b>Stateless</b>: Sin estado en el servidor<br>3. <b>Cacheable</b>: Respuestas cacheables<br>4. <b>Uniform Interface</b>: Interfaz uniforme<br>5. <b>Layered System</b>: Sistema en capas<br>6. <b>Code on Demand</b>: Código ejecutable (opcional)<br><br><b>Ejemplo:</b> Para ser RESTful, una API debe cumplir con estos 6 principios arquitectónicos.",
    tags: ["rest", "arquitectura"],
  },
  {
    front: "¿Qué significa que REST sea Stateless y por qué es importante?",
    back: "<b>Respuesta:</b> <b>Stateless</b> significa que cada petición HTTP debe contener toda la información necesaria para procesarla. El servidor NO guarda sesiones entre requests.<br><br><b>Ventajas:</b><br>• Escalabilidad horizontal (cualquier servidor puede manejar cualquier petición)<br>• Simplicidad (no hay sincronización de estado)<br>• Confiabilidad (si un servidor falla, otro puede tomar su lugar)<br><br><b>Ejemplo:</b><br>❌ Stateful: servidor guarda sessionId=123<br>✅ Stateless: cada request incluye Authorization: Bearer abc123",
    tags: ["rest", "stateless", "escalabilidad"],
  },
  {
    front: "¿Cómo se mapean las operaciones CRUD a métodos HTTP en REST?",
    back: "<b>Respuesta:</b> El mapeo CRUD a HTTP es:<br>• <b>CREATE</b> → POST<br>• <b>READ</b> → GET<br>• <b>UPDATE</b> → PUT / PATCH<br>• <b>DELETE</b> → DELETE<br><br><b>Ejemplo:</b><br>POST /users → Crear usuario<br>GET /users/123 → Leer usuario<br>PUT /users/123 → Actualizar completo<br>PATCH /users/123 → Actualizar parcial<br>DELETE /users/123 → Eliminar usuario",
    tags: ["rest", "http-methods", "crud"],
  },
  {
    front: "¿Cuál es la diferencia entre PUT y PATCH?",
    back: "<b>Respuesta:</b><br>• <b>PUT</b>: Reemplaza TODO el recurso completo (idempotente)<br>• <b>PATCH</b>: Actualiza solo los campos enviados (no idempotente)<br><br><b>Ejemplo:</b><br>Usuario: {id: 123, name: 'Cristian', email: 'c@e.com', age: 28}<br><br>PUT /users/123 {name: 'Updated'}<br>→ Resultado: {id: 123, name: 'Updated', email: null, age: null} ⚠️<br><br>PATCH /users/123 {name: 'Updated'}<br>→ Resultado: {id: 123, name: 'Updated', email: 'c@e.com', age: 28} ✅",
    tags: ["rest", "http-methods"],
  },
  {
    front: "¿Qué significa que un método HTTP sea idempotente?",
    back: "<b>Respuesta:</b> <b>Idempotente</b> significa que llamar el método múltiples veces tiene el mismo efecto que llamarlo una vez.<br><br><b>Idempotentes:</b><br>✅ GET (leer varias veces = mismo resultado)<br>✅ PUT (actualizar varias veces = mismo estado final)<br>✅ DELETE (eliminar varias veces = recurso eliminado)<br><br><b>No idempotentes:</b><br>❌ POST (crear varias veces = múltiples recursos)<br>❌ PATCH (puede tener efectos diferentes)<br><br><b>Ejemplo:</b> DELETE /users/123 llamado 5 veces → el usuario sigue eliminado (idempotente).",
    tags: ["rest", "http-methods", "idempotencia"],
  },
  {
    front: "¿Cuál es la diferencia principal entre REST y SOAP?",
    back: "<b>Respuesta:</b><br><b>REST:</b><br>• Estilo arquitectónico (flexible)<br>• JSON, XML, otros formatos<br>• Simple, menos overhead<br>• Rápido, usa HTTP nativo<br>• APIs web modernas<br><br><b>SOAP:</b><br>• Protocolo estricto<br>• Solo XML<br>• Complejo (WSDL, envelopes)<br>• Lento, XML pesado<br>• Sistemas legacy, empresas<br><br><b>Ejemplo:</b><br>SOAP: &lt;soap:Envelope&gt;&lt;soap:Body&gt;...&lt;/soap:Body&gt;&lt;/soap:Envelope&gt;<br>REST: GET /users/123",
    tags: ["rest", "soap", "comparacion"],
  },
  {
    front: "¿Cómo funciona el caching en REST y por qué mejora el performance?",
    back: "<b>Respuesta:</b> REST integra <b>HTTP caching</b> de forma nativa usando headers como Cache-Control, ETag, Expires.<br><br><b>Ventajas:</b><br>• Reduce latencia (respuesta instantánea desde caché)<br>• Reduce carga en servidor<br>• Ahorra ancho de banda<br><br><b>Ejemplo:</b><br>Primera request: Servidor responde con Cache-Control: max-age=3600<br>Segunda request (dentro de 1 hora): Cliente usa caché local, NO llama al servidor<br><br>Impacto: Latencia 200ms → 0ms, Requests 10,000/min → 100/min",
    tags: ["rest", "caching", "performance"],
  },
  {
    front: "¿Qué es el principio Client-Server en REST y cuál es su ventaja?",
    back: "<b>Respuesta:</b> <b>Client-Server</b> es la separación clara de responsabilidades entre cliente (UI/UX) y servidor (lógica/datos).<br><br><b>Ventaja:</b> Ambos pueden evolucionar independientemente sin afectarse mutuamente.<br><br><b>Ejemplo:</b><br>• Facebook puede cambiar su interfaz web sin tocar el servidor<br>• Twitter puede migrar de MongoDB a PostgreSQL sin romper la app móvil<br>• Mercado Libre puede rediseñar el frontend sin modificar el backend",
    tags: ["rest", "arquitectura", "client-server"],
  },
  {
    front: "¿Qué significa Uniform Interface en REST?",
    back: "<b>Respuesta:</b> <b>Uniform Interface</b> significa que todos los recursos se acceden de la misma manera estándar. Tiene 4 sub-restricciones:<br><br>1. <b>Identificación de recursos</b>: URIs estándar (GET /users/123)<br>2. <b>Manipulación por representaciones</b>: Cliente recibe JSON/XML, no el objeto real<br>3. <b>Mensajes auto-descriptivos</b>: Incluyen headers necesarios<br>4. <b>HATEOAS</b>: Links para navegar la API<br><br><b>Ejemplo:</b><br>✅ GET /users/123, GET /products/456<br>❌ GET /getUserById?id=123, GET /fetchProduct.php",
    tags: ["rest", "uniform-interface"],
  },
  {
    front: "¿Qué es HATEOAS en REST?",
    back: '<b>Respuesta:</b> <b>HATEOAS</b> (Hypermedia as the Engine of Application State) significa que el servidor incluye links para navegar la API, haciendo que el cliente sepa qué acciones puede realizar.<br><br><b>Ejemplo:</b><br>{<br>  "id": 123,<br>  "name": "Cristian",<br>  "links": [<br>    { "rel": "self", "href": "/users/123" },<br>    { "rel": "orders", "href": "/users/123/orders" },<br>    { "rel": "edit", "href": "/users/123" }<br>  ]<br>}',
    tags: ["rest", "hateoas", "hypermedia"],
  },
  {
    front: "¿Qué es el principio Layered System en REST?",
    back: "<b>Respuesta:</b> <b>Layered System</b> permite que la arquitectura tenga múltiples capas (proxies, load balancers, caching, API gateways) entre cliente y servidor.<br><br><b>Ventajas:</b><br>• Escalabilidad<br>• Seguridad (cada capa agrega autenticación)<br>• Balanceo de carga<br>• El cliente NO sabe con cuántas capas está interactuando<br><br><b>Ejemplo:</b><br>Cliente → CDN → Load Balancer → API Gateway → Servidor → DB",
    tags: ["rest", "layered-system", "arquitectura"],
  },
  {
    front: "¿Por qué REST permite independencia de plataforma?",
    back: "<b>Respuesta:</b> REST usa <b>HTTP</b> (estándar universal) y puede devolver datos en cualquier formato (JSON, XML, etc.). Una sola API puede servir a múltiples clientes.<br><br><b>Ejemplo:</b><br>Una API REST de Google Maps funciona para:<br>• Web (React, Vue, Angular)<br>• Móvil (iOS Swift, Android Kotlin)<br>• Backend (Python, Java, Go, Node.js)<br>• IoT devices<br><br>Todos consumen la misma API porque todos hablan HTTP.",
    tags: ["rest", "independencia-plataforma"],
  },
  {
    front: "¿Cuáles son los HTTP Status Codes más importantes en REST?",
    back: "<b>Respuesta:</b><br><b>Success:</b><br>200 OK → GET, PUT, PATCH exitoso<br>201 Created → POST exitoso<br>204 No Content → DELETE exitoso<br><br><b>Client Errors:</b><br>400 Bad Request → Datos inválidos<br>401 Unauthorized → No autenticado<br>403 Forbidden → Sin permisos<br>404 Not Found → Recurso no existe<br>409 Conflict → Email duplicado<br><br><b>Server Errors:</b><br>500 Internal Server Error<br>503 Service Unavailable",
    tags: ["rest", "http-status-codes"],
  },
  {
    front: "¿Cómo REST permite escalabilidad horizontal?",
    back: "<b>Respuesta:</b> Al ser <b>stateless</b>, REST permite que cualquier servidor maneje cualquier petición sin necesidad de sincronizar estado.<br><br><b>Ventaja:</b> Puedes agregar servidores fácilmente (escalar horizontalmente) sin complejidad.<br><br><b>Ejemplo:</b><br>Stateful: 3 servidores deben sincronizar sesiones (COMPLEJO)<br>Stateless REST: 3 servidores sin estado, cualquiera puede responder (SIMPLE)<br><br>Amazon en Black Friday: agregar 100 servidores sin reconfiguración.",
    tags: ["rest", "escalabilidad", "stateless"],
  },
  {
    front: "¿Cuándo usar REST vs GraphQL?",
    back: "<b>Respuesta:</b><br><b>REST:</b><br>• APIs públicas<br>• Microservicios<br>• Mayoría de casos<br>• Caching nativo<br>• Simplicidad<br><br><b>GraphQL:</b><br>• Cliente necesita control total sobre datos<br>• Evitar overfetching/underfetching<br>• Aplicaciones como Facebook, GitHub<br>• Complejidad media-alta<br><br><b>Ejemplo:</b> API pública de pagos → REST. App con UI compleja que necesita datos específicos → GraphQL.",
    tags: ["rest", "graphql", "comparacion"],
  },
  {
    front: "¿Cómo diseñar correctamente endpoints REST para recursos anidados?",
    back: "<b>Respuesta:</b> Usar jerarquía de URIs para representar relaciones entre recursos.<br><br><b>Ejemplo correcto:</b><br>GET /users/456/orders → Órdenes del usuario 456<br>GET /users/456/orders/789 → Orden 789 del usuario 456<br>POST /posts/123/comments → Crear comentario en post 123<br><br><b>Ejemplo incorrecto:</b><br>❌ GET /getUserOrders?userId=456<br>❌ GET /fetchOrdersForUser/456<br>❌ GET /comments?postId=123",
    tags: ["rest", "api-design", "endpoints"],
  },
  {
    front: "¿Cómo usar query parameters correctamente en REST?",
    back: "<b>Respuesta:</b> Los <b>query parameters</b> se usan para filtros, paginación, ordenamiento, y búsqueda. NO para identificar recursos.<br><br><b>Ejemplo correcto:</b><br>✅ GET /users?role=admin&active=true&page=2&limit=10<br>✅ GET /products?category=tech&sort=price&order=desc<br><br><b>Ejemplo incorrecto:</b><br>❌ GET /users/filterByRole/admin<br>❌ GET /getActiveUsers<br>❌ GET /products?action=list",
    tags: ["rest", "query-parameters", "api-design"],
  },
  {
    front:
      "¿Qué errores comunes se deben evitar al hablar de REST en entrevistas?",
    back: "<b>Respuesta:</b><br>1. ❌ Confundir REST con HTTP → REST usa HTTP, pero es un estilo arquitectónico<br>2. ❌ Pensar que REST = CRUD → REST puede hacer más que CRUD<br>3. ❌ No mencionar Stateless → Es fundamental para escalabilidad<br>4. ❌ Ignorar la escalabilidad → Es la razón #1 de su popularidad<br>5. ❌ Comparaciones incorrectas → No decir 'REST es mejor en todo'<br><br><b>Consejo:</b> Enfatizar ESCALABILIDAD, STATELESS, INDEPENDENCIA DE PLATAFORMA.",
    tags: ["rest", "errores-comunes"],
  },
  {
    front: "¿Cuál es el ecosistema de herramientas REST en 2025?",
    back: "<b>Respuesta:</b> REST tiene un ecosistema masivo:<br><br><b>Frameworks:</b> Express, Django REST, Spring Boot<br><b>Herramientas:</b> Postman, Insomnia, Swagger<br><b>Librerías:</b> Axios, Fetch API, Retrofit<br><b>Documentación:</b> OpenAPI, Swagger UI<br><b>Seguridad:</b> OAuth2, JWT<br><b>Cloud:</b> AWS API Gateway, Azure API Management<br><br><b>Dato:</b> 83% de las APIs públicas son REST (ProgrammableWeb). GitHub, Twitter, Stripe, Google Maps usan REST.",
    tags: ["rest", "ecosistema", "herramientas"],
  },
  {
    front: "¿Cómo responder en 30 segundos: 'Por qué REST es tan usado'?",
    back: "<b>Respuesta corta:</b> REST combina <b>escalabilidad</b>, <b>simplicidad</b> y <b>flexibilidad</b>. Al ser <b>stateless</b>, permite escalar horizontalmente agregando servidores sin complejidad. Usa <b>HTTP estándar</b>, lo que lo hace familiar para cualquier desarrollador. Y ofrece <b>independencia de plataforma</b>: una sola API puede servir a web, móvil, IoT, cualquier cliente. Además, tiene <b>caching integrado</b> y un ecosistema masivo de herramientas y frameworks.",
    tags: ["rest", "respuesta-rapida"],
  },
  {
    front: "¿Qué es el versionado de APIs REST y por qué es importante?",
    back: "<b>Respuesta:</b> El versionado permite evolucionar la API sin romper clientes existentes.<br><br><b>Formas de versionar:</b><br>1. En la URI: /api/v1/users, /api/v2/users ✅ (más común)<br>2. En headers: Accept: application/vnd.api.v1+json<br>3. Query param: /users?version=1 (menos común)<br><br><b>Ejemplo:</b><br>GET /api/v1/users → Versión 1<br>GET /api/v2/users → Versión 2 (nueva estructura)<br><br>Clientes antiguos siguen usando v1, nuevos usan v2.",
    tags: ["rest", "versionado", "api-design"],
  },
  {
    front:
      "Diseña endpoints REST para un sistema de blog (posts, comentarios, categorías)",
    back: "<b>Respuesta:</b><br><b>Posts:</b><br>GET /api/v1/posts → Listar posts<br>GET /api/v1/posts/:id → Obtener post<br>POST /api/v1/posts → Crear post<br>PUT /api/v1/posts/:id → Actualizar completo<br>PATCH /api/v1/posts/:id → Actualizar parcial<br>DELETE /api/v1/posts/:id → Eliminar<br><br><b>Comentarios:</b><br>GET /api/v1/posts/:id/comments<br>POST /api/v1/posts/:id/comments<br>DELETE /api/v1/comments/:commentId<br><br><b>Categorías:</b><br>GET /api/v1/categories<br>GET /api/v1/categories/:id/posts<br><br><b>Filtros:</b><br>GET /api/v1/posts?category=tech&author=123&page=2",
    tags: ["rest", "api-design", "ejercicio"],
  },
];
