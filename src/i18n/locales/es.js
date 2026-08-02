export default {
  meta: {
    title: "CoLink • Conecta todos tus dispositivos para una colaboración fluida",
    description: "CoLink es una herramienta de interconexión entre dispositivos con sincronización de portapapeles, transferencia rápida de archivos, terminal remota, pantalla de estado CastBoard y encriptación de extremo a extremo."
  },
  hero: {
    eyebrow: "CONECTA TODOS TUS DISPOSITIVOS PARA UNA COLABORACIÓN FLUIDA.",
    title: "CoLink",
    start: "Iniciar",
    download: "Descargar",
    exploreProtocol: "Ver documentación del protocolo"
  },
  nav: {
    features: "Funciones",
    castboard: "CastBoard",
    security: "Seguridad",
    download: "Descargas",
    github: "GitHub"
  },
  features: {
    badge: "Capacidades Principales",
    heading: "Colaboración multiplataforma sin interrupciones, conecta todos tus dispositivos",
    desc: "CoLink es una herramienta de conexión de dispositivos de código abierto. Integra sincronización de portapapeles, transferencia de archivos, acceso remoto y monitoreo en una sola conexión.",
    card1Title: "Sincronización fluida del portapapeles",
    card1Desc: "Copia en un dispositivo y pega directamente en otro. Soporta texto plano, texto enriquecido e imágenes. Sincronización automática en segundo plano.",
    card2Title: "Conexión directa P2P en red local",
    card2Desc: "Los dispositivos en la misma LAN se descubren automáticamente vía mDNS y establecen conexión directa P2P por WebSocket. Velocidad limitada solo por tu ancho de banda.",
    card3Title: "Transferencia de archivos y notas",
    card3Desc: "Envía archivos y notas al instante entre dispositivos emparejados. Retransmisión automática en la nube cuando la LAN no está disponible (hasta 10 MB por archivo).",
    card4Title: "Acceso remoto a archivos",
    card4Desc: "Explora el sistema de archivos de los dispositivos conectados y descarga archivos remotos localmente sin software adicional.",
    card5Title: "Terminal remota y control de dispositivos",
    card5Desc: "Abre terminales interactivas Shell de ordenadores conectados directamente desde tu teléfono; controla encendido/reinico, volumen y reproducción de medios.",
    card6Title: "Transmisión de cámara remota",
    card6Desc: "Visualiza la cámara de los dispositivos conectados en tiempo real para verificación de estado y monitoreo remoto.",
    card7Title: "Encriptación de extremo a extremo y cero persistencia",
    card7Desc: "Identidades con pares de claves Ed25519 y códigos de emparejamiento SHA-256. Sesiones encriptadas con X25519 + AES-256-GCM / ChaCha20-Poly1305 sin retención de mensajes en el servidor.",
    card8Title: "Pantalla de estado CastBoard",
    card8Desc: "Convierte teléfonos o tabletas en uso en pantallas de estado en tiempo real—mostrando música, portadas de álbumes y letras sincronizadas, o monitoreando CPU, memoria y red.",
    card9Title: "Servidor autohospedado",
    card9Desc: "Despliega tu propio servidor CoLink con Docker Compose con control total de tus datos y sin dependencias de terceros."
  },
  castboard: {
    badge: "Función Exclusiva",
    heading: "CastBoard — Convierte dispositivos sin usar en una pantalla de estado dedicada",
    switchHint: "Haz clic en la imagen para cambiar",
    videoDemo: "Demostración en video",
    items: [
      {
        title: "Pantalla de letras sincronizadas al milisegundo",
        desc: "Compatible con NetEase Cloud Music, QQ Music, Sogou Music y Spotify, mostrando letras desplazables en pantallas grandes.",
        alt: "Pantalla de letras sincronizadas CastBoard",
        ariaLabel: "1/3 Pantalla de letras sincronizadas"
      },
      {
        title: "Reproducción actual y portada de álbum",
        desc: "Extrae de forma dinámica la portada del álbum, artista y progreso preciso para convertir tu dispositivo en un centro de música.",
        alt: "Reproducción actual y portada CastBoard",
        ariaLabel: "2/3 Reproducción actual y portada"
      },
      {
        title: "Monitoreo de hardware del sistema en tiempo real",
        desc: "Actualización de baja latencia de parámetros clave como CPU, memoria e E/S de red para conocer el estado del ordenador.",
        alt: "Monitoreo de hardware CastBoard",
        ariaLabel: "3/3 Monitoreo de hardware"
      }
    ]
  },
  security: {
    badge: "Seguridad",
    heading: "Seguridad estricta de extremo a extremo con 100% de control sobre tus datos",
    desc: "CoLink prioriza la seguridad y la privacidad desde el primer día. Transmisión preferente por LAN y cero almacenamiento en la nube garantizan la privacidad de tus datos.",
    spec1Title: "Identidad criptográfica Ed25519",
    spec1Desc: "Cada dispositivo cuenta con un par de claves Ed25519 único como identidad infalsificable con soporte de rotación de claves en línea.",
    spec2Title: "Código de emparejamiento SHA-256 de 6 dígitos",
    spec2Desc: "El emparejamiento inicial en LAN utiliza un código derivado de SHA-256 con un intercambio de 4 pasos para evitar ataques MITM.",
    spec3Title: "Encriptación de alta seguridad X25519 + AEAD",
    spec3Desc: "Los mensajes en LAN negocian claves vía X25519 ECDH y utilizan AES-256-GCM o ChaCha20-Poly1305 para encriptación de extremo a extremo.",
    spec4Title: "JWT de corta duración y rotación de claves",
    spec4Desc: "El Token de Acceso es válido por 15 minutos; el Token de Refresco se rota tras un único uso y los antiguos se revocan.",
    spec5Title: "Cero persistencia en la nube",
    spec5Desc: "El servidor solo conserva los metadatos necesarios de dispositivos y cuentas; nunca guarda ni reporta contenidos de portapapeles, archivos o mensajes."
  },
  download: {
    badge: "Descargas",
    heading: "Descarga de clientes y despliegue del servidor",
    desc: "CoLink es completamente gratuito y de código abierto. Obtén las últimas versiones directamente desde GitHub Releases o despliega tu servidor Docker.",
    winTitle: "Cliente para Windows",
    winDesc: "Compatible con Windows 10 y superior.",
    winBtn: "Descargar para Windows",
    androidTitle: "Cliente para Android",
    androidDesc: "Compatible con Android 8.0+.",
    androidBtn: "Descargar para Android",
    linuxTitle: "Cliente para Linux",
    linuxDesc: "Compatible con las principales distribuciones de Linux.",
    linuxBtn: "Descargar para Linux",
    dockerTitle: "Servidor autohospedado en Docker",
    dockerDesc: "Despliega el servidor CoLink en un solo comando mediante Docker Compose.",
    dockerBtn: "Ver repositorio Docker",
    macTitle: "Clientes para macOS e iOS",
    macDesc: "macOS en desarrollo · iOS planificado.",
    macBtn: "Próximamente"
  },
  footer: {
    slogan: "Conecta todos tus dispositivos para una colaboración fluida.",
    appsTitle: "Aplicaciones y componentes",
    docsTitle: "Documentos y recursos",
    docProtocolRepo: "Repositorio del protocolo",
    docProtocolOnline: "Documentación del protocolo (En línea)",
    docDockerGuide: "Guía de autohospedaje con Docker",
    docAssets: "Recursos gráficos",
    docLicense: "Licencia AGPL-3.0",
    copyright: "CoLinkDev Team. Publicado bajo la Licencia AGPL-3.0."
  },
  modal: {
    closeAria: "Cerrar"
  }
};
