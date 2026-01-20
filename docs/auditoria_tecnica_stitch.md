# 🔍 Auditoría Técnica - Diseños Stitch

**Fecha**: 19 enero 2026  
**Alcance**: 7 módulos en `/Designs/`

---

## 📊 Resumen Ejecutivo

| Módulo | Páginas/Vistas | Componentes | Tipos TS | Estado |
|--------|----------------|-------------|----------|--------|
| **stride-chile-pages** | 8 | 2 | - | ✅ Más completo |
| **stride-chile-store** | 4 | 3 | ✅ | ✅ Funcional |
| **stride-chile-admin-panel** | 7 | 1 | - | ✅ Dashboard completo |
| **stride-chile-inscripción** | 4 | 2 | ✅ | ✅ Flujo multi-step |
| **stride-chile-profile** | 6 | 6 | ✅ | ✅ Panel usuario |
| **stride-chile-experiences** | 5 | 6 | ✅ | ✅ Hub experiencias |
| **stride-monitor-panel** | 3 | 1 | ✅ | ✅ Panel monitores |

### Stack Tecnológico Común
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite (configurado pero usando CDN)
- **Estilos**: TailwindCSS vía CDN (NO instalado localmente)
- **Routing**: react-router-dom v7 con HashRouter
- **Iconos**: Material Symbols Outlined
- **Fuentes**: Plus Jakarta Sans, Satisfy (script), Noto Sans

---

## 1️⃣ ESTRUCTURA Y CALIDAD

### ✅ Aspectos Positivos

1. **Código TypeScript bien tipado**
   - Interfaces definidas para Event, Product, Runner, etc.
   - Enums para estados de vista (ViewState)
   - Props tipados en componentes

2. **Arquitectura consistente**
   ```
   Cada módulo sigue:
   ├── App.tsx          (Router + Layout principal)
   ├── components/      (Componentes reutilizables)
   ├── pages/ o views/  (Vistas por ruta)
   ├── types.ts         (Interfaces TypeScript)
   └── index.html       (Config Tailwind + imports)
   ```

3. **Estilos coherentes**
   - Paleta de colores consistente: `#e92063` (primary), `#00BCD4` (secondary)
   - Border radius redondeados (`rounded-2xl`, `rounded-3xl`)
   - Dark mode como default (`class="dark"`)

4. **Patrones de navegación modernos**
   - HashRouter para SPA
   - ScrollToTop en navegación
   - Rutas protegidas con Navigate

### ⚠️ Problemas Identificados

1. **Tailwind via CDN (NO production-ready)**
   ```html
   <!-- Cada index.html repite esto -->
   <script src="https://cdn.tailwindcss.com"></script>
   <script>tailwind.config = {...}</script>
   ```
   - ❌ Sin minificación
   - ❌ Sin purge de CSS
   - ❌ Configuración duplicada 7 veces
   - ❌ Dependencia de CDN externo

2. **Configuración Tailwind inconsistente**
   | Módulo | primary | secondary | background-dark |
   |--------|---------|-----------|-----------------|
   | pages | #e92063 | #00BCD4 | #121212 |
   | admin | #e92063 | #06b6d4 | #181113 |
   | store | #e92063 | #00BCD4 | (variable) |
   
   *Hay variaciones sutiles que causan inconsistencia visual*

3. **Componentes duplicados con implementaciones diferentes**
   - `Navigation.tsx` (pages) ≠ `Navbar.tsx` (store)
   - `Footer.tsx` existe en 3 módulos con código diferente
   - `Layout.tsx` en 4 módulos con estructuras distintas

4. **Clases Tailwind inline extensas**
   ```tsx
   // Ejemplo real del código:
   className="min-w-[320px] md:min-w-[380px] snap-center group"
   className="bg-surface-dark rounded-3xl overflow-hidden shadow-xl..."
   ```
   - Difícil de mantener
   - Sin abstracción en componentes reutilizables

5. **Import maps no estándar**
   ```html
   <script type="importmap">
   { "imports": { "react": "https://esm.sh/react@^19.2.3" }}
   </script>
   ```
   - Funciona en desarrollo pero no es build estándar

---

## 2️⃣ MODULARIDAD - Componentes a Estandarizar

### Componentes Compartibles Identificados

| Componente | Existe en | Acción Recomendada |
|------------|-----------|-------------------|
| **Navigation/Navbar** | pages, store, profile | Unificar en 1 versión adaptable |
| **Footer** | pages, store, inscripción | Crear Footer unificado |
| **Layout** | admin, inscripción, experiences, monitor | Layout con slots dinámicos |
| **Sidebar** | admin, profile | Sidebar configurable |
| **EventCard** | pages, experiences, inscripción | Componente único parametrizado |
| **ProductCard** | store | Extraer como componente |
| **Button** | todos | Sistema de botones unificado |
| **Input** | todos (formularios) | Input components library |

### Componentes Específicos por Módulo

```
🌐 PÚBLICO (stride-chile-pages)
├── Navigation (sticky, frosted glass)
├── Footer (newsletter, links, mapa)
├── HeroSection (dinámico por página)
├── EventCard (horizontal scroll)
└── ExperienceCard (grid 2x2)

🛒 TIENDA (stride-chile-store)  
├── Navbar (con carrito)
├── CartDrawer (slide-over)
├── ProductCard
├── CartContext (estado global)
└── CheckoutForm

👤 PERFIL (stride-chile-profile)
├── Sidebar (navegación lateral)
├── ProfileDashboard
├── MyEvents (historial)
├── Achievements (badges)
└── EditProfile (formulario)

📋 INSCRIPCIÓN (stride-chile-inscripción)
├── LevelSelection (cards de nivel)
├── RegistrationForm
├── SuccessView
└── EventHeader (info del evento)

🎛️ ADMIN (stride-chile-admin-panel)
├── Layout (sidebar + content)
├── Dashboard (stats + charts)
├── EventList (tabla CRUD)
├── CreateEvent (formulario)
├── Users/Sales/Inventory (tablas)
└── recharts (gráficos)

🎯 EXPERIENCIAS (stride-chile-experiences)
├── Hub (grid de experiencias)
├── SocialRun/SocialGirl/etc (detail pages)
└── ExperienceLayout

👁️ MONITOR (stride-monitor-panel)
├── Layout (minimal)
├── Dashboard (check-in list)
├── SessionReport
└── RunnerCard
```

---

## 3️⃣ OPCIONES DE UNIFICACIÓN

### Opción A: Monorepo con Workspaces ⭐ RECOMENDADA

```
StrideSocialRun/
├── packages/
│   ├── ui/              # Componentes compartidos
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── types/           # Tipos compartidos
│   │   ├── event.ts
│   │   ├── user.ts
│   │   └── product.ts
│   └── utils/           # Funciones compartidas
├── apps/
│   ├── web/             # Sitio público (pages + experiences)
│   ├── store/           # Tienda
│   ├── admin/           # Panel admin
│   ├── profile/         # Portal usuario
│   └── monitor/         # App monitores
├── package.json         # Workspace root
└── tailwind.config.js   # Config centralizada
```

**Ventajas:**
- ✅ Componentes compartidos
- ✅ Una sola config Tailwind
- ✅ Deploy independiente por app
- ✅ Desarrollo paralelo

**Desventajas:**
- ❌ Mayor complejidad inicial
- ❌ Requiere setup de workspaces

---

### Opción B: SPA Unificada con Lazy Loading

```
StrideSocialRun/
├── src/
│   ├── components/        # Todos los componentes
│   ├── layouts/
│   │   ├── PublicLayout.tsx
│   │   ├── AdminLayout.tsx
│   │   ├── ProfileLayout.tsx
│   │   └── MonitorLayout.tsx
│   ├── pages/
│   │   ├── public/        # Home, About, etc
│   │   ├── store/         # Tienda
│   │   ├── admin/         # Panel admin
│   │   ├── profile/       # Usuario
│   │   └── monitor/       # Monitores
│   ├── contexts/          # Estados globales
│   ├── types/
│   ├── App.tsx            # Router principal
│   └── main.tsx
├── tailwind.config.js
└── vite.config.ts
```

**Ventajas:**
- ✅ Un solo proyecto
- ✅ Más simple de mantener
- ✅ Code splitting con React.lazy()
- ✅ Un solo deploy

**Desventajas:**
- ❌ Bundle más grande (mitigable con lazy loading)
- ❌ Admin/Monitor expuesto (requiere auth)

---

### Opción C: Sitio Principal + Micro-frontends

```
Arquitectura:
┌─────────────────────────────────────────────┐
│            stride.cl (main shell)           │
├─────────────┬─────────────┬─────────────────┤
│ /           │ /tienda     │ /admin          │
│ (pages app) │ (store app) │ (admin app)     │
│             │             │                 │
│ /perfil     │ /monitor    │                 │
│ (profile)   │ (monitor)   │                 │
└─────────────┴─────────────┴─────────────────┘
```

**Ventajas:**
- ✅ Deploy independiente
- ✅ Equipos separados
- ✅ Tecnologías mixtas posibles

**Desventajas:**
- ❌ Más complejo
- ❌ Overhead para proyecto pequeño

---

## 🏆 RECOMENDACIÓN: Opción B (SPA Unificada)

**Razón**: Para el tamaño actual del proyecto y velocidad de desarrollo, una SPA unificada con lazy loading es la mejor opción.

### Estructura Propuesta Final

```
StrideSocialRun/
├── src/
│   ├── components/
│   │   ├── common/          # Button, Input, Card, Modal
│   │   ├── layout/          # Navigation, Footer, Sidebar
│   │   ├── events/          # EventCard, EventList, EventDetail
│   │   ├── products/        # ProductCard, CartDrawer
│   │   └── forms/           # RegistrationForm, ContactForm
│   │
│   ├── layouts/
│   │   ├── PublicLayout.tsx     # Nav + Footer (páginas públicas)
│   │   ├── StoreLayout.tsx      # Nav con carrito
│   │   ├── DashboardLayout.tsx  # Sidebar + Content (admin/profile)
│   │   └── MinimalLayout.tsx    # Solo content (monitor/auth)
│   │
│   ├── features/                # Por dominio
│   │   ├── landing/             # Home, About, Contact, FAQ
│   │   ├── events/              # Eventos, Experiencias
│   │   ├── store/               # Productos, Carrito, Checkout
│   │   ├── auth/                # Login, Register
│   │   ├── profile/             # Dashboard usuario
│   │   ├── admin/               # Panel administración
│   │   └── monitor/             # Panel monitores
│   │
│   ├── contexts/
│   │   ├── AuthContext.tsx
│   │   ├── CartContext.tsx
│   │   └── ThemeContext.tsx
│   │
│   ├── services/               # API calls
│   │   ├── api.ts
│   │   ├── events.ts
│   │   └── products.ts
│   │
│   ├── types/
│   │   ├── event.ts
│   │   ├── user.ts
│   │   ├── product.ts
│   │   └── index.ts
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── public/
├── tailwind.config.js          # Una sola config
├── vite.config.ts
└── package.json
```

---

## 4️⃣ BACKEND READINESS

### ✅ Lo que está listo

| Aspecto | Estado | Notas |
|---------|--------|-------|
| **Tipos TypeScript** | ✅ | Event, Product, User, Runner bien definidos |
| **Formularios** | ✅ | RegistrationForm, ContactForm, CheckoutForm con validación básica |
| **Estructura de datos** | ✅ | `data.ts` en store define estructura de productos |
| **CartContext** | ✅ | Estado global para carrito funcional |
| **Enums para estados** | ✅ | ViewState, tipos de eventos |

### ⚠️ Lo que falta para backend

| Aspecto | Estado | Trabajo Necesario |
|---------|--------|-------------------|
| **API Service Layer** | ❌ | Crear `services/api.ts` con fetch/axios |
| **Autenticación** | ❌ | Implementar AuthContext + login flow |
| **Datos dinámicos** | ❌ | Reemplazar arrays hardcodeados por API calls |
| **Estado global** | ⚠️ | Solo CartContext existe, falta UserContext, EventsContext |
| **Manejo de errores** | ❌ | Loading states, error boundaries |
| **Validación forms** | ⚠️ | Básica con onSubmit, falta Zod/Yup |

### Puntos de Conexión con Backend

```typescript
// Endpoints necesarios según los diseños:

// Eventos
GET    /api/events              // Lista eventos
GET    /api/events/:id          // Detalle evento
POST   /api/events              // Crear evento (admin)
PUT    /api/events/:id          // Editar evento (admin)
DELETE /api/events/:id          // Eliminar evento (admin)

// Inscripciones
POST   /api/registrations       // Inscribirse a evento
GET    /api/registrations/me    // Mis inscripciones
DELETE /api/registrations/:id   // Cancelar inscripción

// Productos
GET    /api/products            // Lista productos
GET    /api/products/:id        // Detalle producto
POST   /api/orders              // Crear orden (checkout)
GET    /api/orders/me           // Mis órdenes

// Usuarios
POST   /api/auth/login          // Login
POST   /api/auth/register       // Registro
GET    /api/users/me            // Mi perfil
PUT    /api/users/me            // Actualizar perfil

// Admin
GET    /api/admin/stats         // Dashboard stats
GET    /api/admin/users         // Lista usuarios
GET    /api/admin/sales         // Ventas
```

---

## 5️⃣ PLAN DE IMPLEMENTACIÓN RÁPIDA

### Fase 1: Setup Base (1-2 horas)
1. Crear proyecto Vite + React + TypeScript
2. Instalar Tailwind (local, no CDN)
3. Configurar tailwind.config.js unificado
4. Setup de rutas con react-router-dom

### Fase 2: Componentes Core (2-3 horas)
1. Copiar y adaptar Navigation.tsx (páginas públicas)
2. Copiar y adaptar Footer.tsx
3. Crear sistema de Layout (Public, Dashboard, Store)
4. Crear componentes base (Button, Card, Input)

### Fase 3: Páginas Públicas (2-3 horas)
1. Copiar Home.tsx de stride-chile-pages
2. Copiar About, Contact, FAQ
3. Integrar experiences como secciones

### Fase 4: Tienda (2 horas)
1. Copiar CartContext
2. Copiar ProductCard, CartDrawer
3. Integrar flujo de checkout

### Fase 5: Inscripción + Perfil (2-3 horas)
1. Copiar flujo de inscripción
2. Copiar panel de perfil
3. Unificar layouts

### Fase 6: Admin + Monitor (2-3 horas)
1. Copiar Dashboard admin
2. Copiar panel de monitores
3. Proteger rutas

### Fase 7: Backend Connection (3-4 horas)
1. Crear services/api.ts
2. Reemplazar datos mock por API calls
3. Implementar AuthContext
4. Testing E2E

---

## ⏱️ Estimación Total

| Fase | Tiempo |
|------|--------|
| Setup Base | 1-2h |
| Componentes Core | 2-3h |
| Páginas Públicas | 2-3h |
| Tienda | 2h |
| Inscripción + Perfil | 2-3h |
| Admin + Monitor | 2-3h |
| Backend Connection | 3-4h |
| **TOTAL** | **14-20 horas** |

---

## 📋 Próximos Pasos Inmediatos

1. **Confirmar opción de unificación** (recomiendo Opción B)
2. **Definir prioridades** (¿qué módulos primero?)
3. **Crear proyecto base** con estructura unificada
4. **Migrar componentes** en orden de dependencia
5. **Conectar backend** existente o crear nuevo

¿Procedemos con la implementación?
