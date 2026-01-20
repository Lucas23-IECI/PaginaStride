# Arquitectura de Eventos Dinámicos - Stride Social Run

## 🎯 Pregunta: ¿Debería cambiar la página cuando se selecciona un evento?

**Respuesta corta: ¡SÍ!** Esto crea una experiencia más inmersiva y profesional.

---

## 📊 Opciones de Implementación

### Opción 1: Single Page Application (SPA) - ⭐ RECOMENDADA

**Cómo funciona:**
- Una sola página que cambia dinámicamente
- Al hacer clic en un evento, el contenido se actualiza sin recargar
- Transiciones suaves y animadas

**Ventajas:**
- ✅ Experiencia fluida y moderna
- ✅ Rápida (no recarga completa)
- ✅ Fácil de mantener
- ✅ Ideal para Stride (pocos tipos de eventos)

**Estructura:**
```
index.html (página principal)
├── Hero dinámico (cambia según evento seleccionado)
├── Sección de eventos (grid con todos los eventos)
├── Detalle del evento (se muestra al seleccionar)
└── Footer
```

---

### Opción 2: Páginas Separadas por Evento

**Cómo funciona:**
- Cada evento tiene su propia página HTML
- URLs como: `/evento/social-run-5k`, `/evento/social-girl`

**Ventajas:**
- ✅ Mejor SEO (cada evento tiene su URL)
- ✅ Se puede compartir link directo al evento

**Desventajas:**
- ❌ Más archivos que mantener
- ❌ Experiencia menos fluida

---

### Opción 3: Modal/Popup de Evento - ⭐ TAMBIÉN BUENA

**Cómo funciona:**
- La página principal muestra todos los eventos
- Al hacer clic, aparece un modal con los detalles completos

**Ventajas:**
- ✅ No pierde el contexto de la página
- ✅ Fácil de implementar
- ✅ Muy visual y moderno

---

## 🏆 MI RECOMENDACIÓN: Híbrido (SPA + Hero Dinámico)

### Flujo de Usuario Propuesto:

```
1. Usuario llega a la página
   └── Ve el Hero con el PRÓXIMO evento destacado

2. Hace scroll hacia abajo
   └── Ve grid de todos los eventos (próximos y pasados)

3. Hace clic en un evento del grid
   └── El Hero cambia dinámicamente al evento seleccionado
   └── Scroll automático hacia arriba
   └── Se muestra botón "Inscribirse" prominente

4. Opcionalmente: Puede ver detalles en modal
   └── Mapa ampliado, galería de fotos, descripción completa
```

### Implementación Técnica:

```javascript
// Estructura de datos de eventos
const eventos = [
  {
    id: 'social-run-enero',
    tipo: 'social-run',
    nombre: 'Social Run 5K',
    fecha: '2026-01-25',
    hora: '09:00',
    ubicacion: 'Parque Ecuador',
    coordenadas: { lat: -36.8270, lng: -73.0503 },
    descripcion: 'Corre y socializa con la comunidad',
    imagen: '/images/eventos/social-run-enero.jpg',
    colorTema: '#E91E63', // Magenta para Social Run
    inscripcionUrl: 'https://wa.me/...'
  },
  {
    id: 'social-girl-febrero',
    tipo: 'social-girl',
    nombre: 'Social Girl',
    fecha: '2026-02-08',
    hora: '10:00',
    ubicacion: 'Parque Bicentenario',
    extras: ['5K', 'Yoga', 'Brunch', 'Regalos'],
    colorTema: '#EC407A', // Rosa más claro para Social Girl
    // ...
  }
];

// Función para cambiar el Hero dinámicamente
function mostrarEvento(eventoId) {
  const evento = eventos.find(e => e.id === eventoId);
  
  // Animación de salida
  heroSection.classList.add('fade-out');
  
  setTimeout(() => {
    // Actualizar contenido
    heroTitulo.textContent = evento.nombre;
    heroFecha.textContent = formatearFecha(evento.fecha);
    heroImagen.src = evento.imagen;
    
    // Cambiar colores del tema según tipo de evento
    document.documentElement.style.setProperty('--evento-color', evento.colorTema);
    
    // Animación de entrada
    heroSection.classList.remove('fade-out');
    heroSection.classList.add('fade-in');
    
    // Scroll suave hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 300);
}
```

---

## 🎨 Diferenciación Visual por Tipo de Evento

| Tipo de Evento | Color Principal | Icono | Elementos Especiales |
|----------------|-----------------|-------|---------------------|
| **Social Run 5K** | Magenta (#E91E63) | 🏃 | Patrón flechas cyan |
| **Social Girl** | Rosa claro (#EC407A) | 👩 | Elementos florales/suaves |
| **Run Brunch & Yoga** | Cyan (#00BCD4) | 🧘 | Gradiente rosa→cyan |
| **Evento Benéfico** | Amarillo (#FFC107) | 💛 | Logo del partner (TECHO) |
| **AfterCoffee** | Marrón/Dorado (#8D6E63) | ☕ | Iconos de café |

---

## 📱 Comportamiento en Móvil

1. **Grid de eventos**: 1 columna, tarjetas grandes
2. **Al tocar evento**: Expande in-place o abre modal
3. **Botón flotante**: "Ver próximo evento" siempre visible
4. **Swipe**: Deslizar entre eventos en el Hero

---

## 🗂️ Estructura de Archivos Propuesta

```
StrideSocialRun/
├── index.html              # Página principal
├── css/
│   ├── main.css            # Estilos globales + variables
│   ├── eventos.css         # Estilos específicos de eventos
│   └── componentes.css     # Tarjetas, modales, botones
├── js/
│   ├── app.js              # Lógica principal
│   ├── eventos.js          # Gestión de eventos
│   ├── animaciones.js      # Transiciones y efectos
│   └── data/
│       └── eventos.json    # Datos de eventos (o fetch de API)
├── images/
│   ├── eventos/            # Fotos de cada evento
│   ├── logos/              # Logo Stride + partners
│   └── iconos/             # Iconos del sitio
├── docs/
│   ├── stride_analysis.md  # Análisis de marca
│   └── arquitectura.md     # Este documento
└── README.md
```

---

## ✅ Siguiente Paso

¿Quieres que implemente esta arquitectura? Puedo:

1. **Crear la estructura base** con el sistema de eventos dinámicos
2. **Usar la PlantillaCompleta** como base y adaptarla
3. **Empezar desde cero** con diseño optimizado para Stride

¿Cuál prefieres?
