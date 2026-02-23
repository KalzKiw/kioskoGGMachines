# GG Machines Kiosk

Aplicación de kiosko táctil para tienda de informática con React, TypeScript y Tailwind CSS.

## 🚀 Características

- ✅ **Sin scroll vertical** - Diseño optimizado para pantallas verticales 1080x1920
- ✅ **Navegación por estado** - Sin React Router, cambios de vista fluidos
- ✅ **Botones táctiles gigantes** - Mínimo 96px de altura para ergonomía táctil
- ✅ **Tema oscuro premium** - Colores neón/gaming con fondos oscuros
- ✅ **TypeScript estricto** - Tipado completo para mayor confiabilidad

## 📦 Instalación

```bash
npm install
```

## 🏃 Ejecutar en Desarrollo

```bash
npm run dev
```

## 🏗️ Construir para Producción

```bash
npm run build
```

## 📁 Estructura del Proyecto

```
src/
├── App.tsx           # Gestor de estado y layout principal
├── HomeView.tsx      # Pantalla de inicio con menú principal
├── CatalogView.tsx   # Vista de catálogo con categorías
├── MiniPcView.tsx    # Vista con iframe a landing de Mini PCs
├── main.tsx          # Punto de entrada de React
└── index.css         # Estilos globales con Tailwind
```

## 🎯 Vistas Disponibles

1. **HOME** - Menú principal con 3 opciones
2. **CATALOG** - Grid 2x2 con categorías de productos
3. **MINI_PCS** - Iframe de landing externa
4. **PIXIE** - Asistente virtual (próximamente)

## 🎨 Paleta de Colores

- Fondo principal: `bg-gray-950`
- Tarjetas: `bg-gray-900` / `bg-gray-800`
- Acentos: Gradientes neón (blue, cyan, green, yellow, orange, pink, purple)

## 🖱️ Navegación

- Botón "Volver al Menú" siempre visible (excepto en HOME)
- Z-index alto (50) para estar sobre iframes
- Ubicado en esquina inferior izquierda
