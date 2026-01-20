# Stride Social Run

Plataforma web para la comunidad de running social de Concepción, Chile.

## 📁 Estructura del Proyecto

```
StrideSocialRun/
├── frontend/           # React + TypeScript + Vite + Tailwind
│   ├── src/
│   │   ├── components/ # Componentes reutilizables
│   │   ├── features/   # Páginas por dominio
│   │   ├── layouts/    # Layouts de la app
│   │   ├── contexts/   # Estado global (Auth, Cart)
│   │   ├── services/   # Llamadas a API
│   │   ├── mocks/      # Datos mockeados
│   │   ├── types/      # Interfaces TypeScript
│   │   ├── hooks/      # Custom hooks
│   │   └── styles/     # CSS global
│   └── package.json
│
├── backend/            # Node.js + Express (API REST)
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   └── package.json
│
├── Designs/            # Diseños Stitch (referencia)
└── docs/               # Documentación
```

## 🚀 Desarrollo

### Frontend
```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

### Backend
```bash
cd backend
npm install
npm run dev
# → http://localhost:3001
```

## 🎨 Design System

- **Primary**: #E91E63 (Magenta)
- **Secondary**: #00BCD4 (Cyan)
- **Background**: #121212 (Dark)
- **Fuentes**: Plus Jakarta Sans, Satisfy