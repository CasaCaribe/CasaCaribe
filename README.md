# Casa Caribe

Casa Caribe es un monorepo que contiene tanto una aplicación móvil Android como una aplicación web en Next.js.

## Estructura del Proyecto

```
CasaCaribe/
├── android/          # Aplicación móvil Android
│   ├── app/
│   ├── gradle/
│   └── ...
│
├── web/              # Aplicación web Next.js
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── package.json
│   ├── next.config.js
│   └── ...
│
└── README.md
```

## Aplicación Android

La aplicación Android se encuentra en el directorio `/android`. Está construida con Gradle y Android Studio.

### Comenzar con Android

```bash
cd android
# Construir y ejecutar la aplicación Android
./gradlew build
```

Para más detalles, consulta [android/README.md](./android/README.md)

## Aplicación Web

La aplicación web es un proyecto Next.js ubicado en el directorio `/web`.

### Comenzar con Web

```bash
cd web
npm install
npm run dev
```

La aplicación web se ejecutará en [http://localhost:3000](http://localhost:3000)

Para más detalles, consulta [web/README.md](./web/README.md)

## Despliegue

- **Aplicación Web**: Desplegada en [casacaribe.vercel.app](https://casacaribe.vercel.app) mediante Vercel
- **Aplicación Android**: Distribuida a través de Google Play Store (cuando esté lista)

## Desarrollo

Cuando trabajes en este monorepo:

1. Asegúrate de estar en el directorio correcto (`/android` o `/web`) antes de ejecutar comandos
2. Cada parte tiene sus propias dependencias y configuración
3. Los commits deben hacer referencia a qué parte(s) afectan (por ejemplo, "feat(web):", "fix(android):")

## Contribuir

Por favor, sigue los estándares de codificación de cada plataforma:
- **Android**: Sigue las mejores prácticas de desarrollo Android
- **Web**: Sigue las mejores prácticas de React/Next.js

---

Hecho con ❤️ por el equipo de Casa Caribe
