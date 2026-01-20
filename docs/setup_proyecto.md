# 🏗️ Setup del Proyecto - Stride Social Run SPA

## 📁 Árbol de Directorios Definitivo

```
stride-app/
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── logo-stride.svg
│       ├── events/
│       └── products/
│
├── src/
│   ├── components/
│   │   ├── common/              # Componentes base reutilizables
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   └── index.ts         # Re-exports
│   │   │
│   │   ├── layout/              # Componentes de estructura
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── events/              # Componentes de eventos
│   │   │   ├── EventCard.tsx
│   │   │   ├── EventList.tsx
│   │   │   ├── EventDetail.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── products/            # Componentes de tienda
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── CartDrawer.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── forms/               # Componentes de formularios
│   │       ├── RegistrationForm.tsx
│   │       ├── ContactForm.tsx
│   │       ├── CheckoutForm.tsx
│   │       └── index.ts
│   │
│   ├── layouts/                 # Layouts por sección
│   │   ├── PublicLayout.tsx     # Navbar + Content + Footer
│   │   ├── StoreLayout.tsx      # Navbar con carrito + Content + Footer
│   │   ├── DashboardLayout.tsx  # Sidebar + Content (admin/profile)
│   │   ├── MinimalLayout.tsx    # Solo Content (auth/monitor)
│   │   └── index.ts
│   │
│   ├── features/                # Por dominio de negocio
│   │   ├── landing/             # Páginas públicas principales
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── Alliances.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── events/              # Eventos y experiencias
│   │   │   ├── EventsHub.tsx
│   │   │   ├── SocialRun.tsx
│   │   │   ├── SocialGirl.tsx
│   │   │   ├── BrunchYoga.tsx
│   │   │   ├── Benefit.tsx
│   │   │   ├── Inscription/
│   │   │   │   ├── LevelSelection.tsx
│   │   │   │   ├── RegistrationStep.tsx
│   │   │   │   ├── ConfirmationStep.tsx
│   │   │   │   └── Success.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── store/               # Tienda
│   │   │   ├── Catalog.tsx
│   │   │   ├── ProductDetail.tsx
│   │   │   ├── Checkout.tsx
│   │   │   ├── OrderConfirmation.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── auth/                # Autenticación
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── ForgotPassword.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── profile/             # Perfil de usuario
│   │   │   ├── Dashboard.tsx
│   │   │   ├── MyEvents.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── EditProfile.tsx
│   │   │   ├── ManageRegistrations.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── admin/               # Panel de administración
│   │   │   ├── Dashboard.tsx
│   │   │   ├── EventList.tsx
│   │   │   ├── CreateEvent.tsx
│   │   │   ├── Users.tsx
│   │   │   ├── Sales.tsx
│   │   │   ├── Inventory.tsx
│   │   │   ├── Settings.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── monitor/             # Panel de monitores
│   │       ├── Dashboard.tsx
│   │       ├── SessionReport.tsx
│   │       ├── Profile.tsx
│   │       └── index.ts
│   │
│   ├── contexts/                # Estado global
│   │   ├── AuthContext.tsx
│   │   ├── CartContext.tsx
│   │   ├── ThemeContext.tsx
│   │   └── index.ts
│   │
│   ├── services/                # Conexión con API
│   │   ├── api.ts               # Cliente HTTP base
│   │   ├── events.service.ts    # CRUD eventos
│   │   ├── products.service.ts  # CRUD productos
│   │   ├── users.service.ts     # Usuarios
│   │   ├── auth.service.ts      # Autenticación
│   │   └── index.ts
│   │
│   ├── mocks/                   # Datos mockeados
│   │   ├── events.mock.ts
│   │   ├── products.mock.ts
│   │   ├── users.mock.ts
│   │   └── index.ts
│   │
│   ├── types/                   # Interfaces TypeScript
│   │   ├── event.types.ts
│   │   ├── product.types.ts
│   │   ├── user.types.ts
│   │   ├── order.types.ts
│   │   └── index.ts
│   │
│   ├── hooks/                   # Custom hooks
│   │   ├── useAuth.ts
│   │   ├── useCart.ts
│   │   ├── useEvents.ts
│   │   └── index.ts
│   │
│   ├── utils/                   # Funciones utilitarias
│   │   ├── formatters.ts        # Formatear fechas, precios
│   │   ├── validators.ts        # Validaciones
│   │   └── index.ts
│   │
│   ├── styles/
│   │   └── globals.css          # Tailwind imports + custom styles
│   │
│   ├── App.tsx                  # Router principal
│   ├── main.tsx                 # Entry point
│   └── vite-env.d.ts
│
├── .env                         # Variables de entorno
├── .env.example                 # Plantilla de variables
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js           # Config unificada
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🚀 Comandos de Inicialización

### Paso 1: Crear proyecto Vite
```bash
cd "c:/Users/lucas/OneDrive/Escritorio/PaginaStride/StrideSocialRun"

# Crear proyecto en carpeta 'app'
npm create vite@latest app -- --template react-ts

cd app
```

### Paso 2: Instalar dependencias
```bash
# Dependencias principales
npm install react-router-dom

# Tailwind CSS (local, NO CDN)
npm install -D tailwindcss postcss autoprefixer

# Inicializar Tailwind
npx tailwindcss init -p
```

### Paso 3: Configurar tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primarios
        primary: {
          DEFAULT: '#E91E63',
          hover: '#D81B60',
          light: '#F48FB1',
          dark: '#C2185B',
        },
        // Secundarios
        secondary: {
          DEFAULT: '#00BCD4',
          hover: '#00ACC1',
          light: '#80DEEA',
          dark: '#0097A7',
        },
        // Fondos
        background: {
          light: '#F8F6F6',
          dark: '#121212',
        },
        surface: {
          dark: '#1E1E1E',
          card: '#261C20',
          lighter: '#3D252E',
        },
        // Acentos
        accent: {
          gold: '#FFD700',
          purple: '#9C27B0',
          green: '#4CAF50',
        },
        // Texto
        text: {
          muted: '#B89DA6',
        }
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        script: ['Satisfy', 'cursive'],
        body: ['Noto Sans', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #E91E63 0%, #00BCD4 100%)',
        'gradient-dark': 'linear-gradient(180deg, #121212 0%, #1E1E1E 100%)',
      },
    },
  },
  plugins: [],
}
```

### Paso 4: Configurar globals.css
```css
/* src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Satisfy&family=Noto+Sans:wght@400;500;700&display=swap');

/* Material Symbols */
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@400,0&display=swap');

/* Base styles */
@layer base {
  html {
    @apply scroll-smooth;
  }
  
  body {
    @apply font-display bg-background-dark text-white antialiased;
  }
}

/* Custom utilities */
@layer utilities {
  .frosted-glass {
    @apply bg-background-dark/70 backdrop-blur-xl;
  }
  
  .text-gradient {
    @apply bg-gradient-primary bg-clip-text text-transparent;
  }
  
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}

/* Material Symbols config */
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
```

### Paso 5: Crear estructura de carpetas
```bash
# Ejecutar desde /app
mkdir -p src/components/{common,layout,events,products,forms}
mkdir -p src/layouts
mkdir -p src/features/{landing,events/Inscription,store,auth,profile,admin,monitor}
mkdir -p src/contexts
mkdir -p src/services
mkdir -p src/mocks
mkdir -p src/types
mkdir -p src/hooks
mkdir -p src/utils
mkdir -p src/styles
mkdir -p public/images/{events,products}
```

### Paso 6: Mover globals.css
```bash
# Crear el archivo
touch src/styles/globals.css

# Actualizar main.tsx para importar
# import './styles/globals.css'
```

---

## 📋 Checklist de Validación

Después de ejecutar los comandos, verificar:

- [ ] `npm run dev` inicia sin errores
- [ ] Tailwind compila correctamente (probar con `bg-primary`)
- [ ] Fuentes Google cargan (Plus Jakarta Sans)
- [ ] Material Symbols funcionan
- [ ] Estructura de carpetas creada
- [ ] Dark mode activo por defecto

---

## 🎨 Design System Tokens

```typescript
// src/types/design-system.ts

export const COLORS = {
  primary: '#E91E63',
  secondary: '#00BCD4',
  background: {
    light: '#F8F6F6',
    dark: '#121212',
  },
  surface: {
    dark: '#1E1E1E',
    card: '#261C20',
  },
} as const;

export const SPACING = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
} as const;

export const RADIUS = {
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  full: '9999px',
} as const;
```

---

## 🔜 Siguiente Paso

Una vez ejecutados estos comandos, procederemos a:
1. Crear componentes base (Button, Card, Input)
2. Crear Navbar y Footer unificados
3. Configurar React Router con layouts
