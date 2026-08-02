export default {
  meta: {
    title: "CoLink • Verbinde alle deine Geräte für nahtlose Zusammenarbeit",
    description: "CoLink ist ein plattformübergreifendes Gerätetool mit Zwischenablage-Synchronisierung, schnellem Dateitransfer, Remote-Terminal, CastBoard-Statusbildschirm und Ende-zu-Ende-Verschlüsselung."
  },
  hero: {
    eyebrow: "VERBINDE ALLE DEINE GERÄTE FÜR NAHTLOSE ZUSAMMENARBEIT.",
    title: "CoLink",
    start: "Starten",
    download: "Herunterladen",
    exploreProtocol: "Protokoll-Dokumentation ansehen"
  },
  nav: {
    features: "Funktionen",
    castboard: "CastBoard",
    security: "Sicherheit",
    download: "Herunterladen",
    github: "GitHub"
  },
  features: {
    badge: "Kernfunktionen",
    heading: "Nahtlose plattformübergreifende Zusammenarbeit für alle deine Geräte",
    desc: "CoLink ist ein Open-Source-Geräteverbindungstool. Es vereint Zwischenablagesynchronisation, Dateitransfer, Fernzugriff und Hardware-Überwachung in einer einzigen Verbindung.",
    card1Title: "Nahtlose Zwischenablage-Synchronisation",
    card1Desc: "Auf einem Gerät kopieren und direkt auf einem anderen einfügen. Unterstützt Klartext, Formattext und Bilder. Automatische Synchronisation im Hintergrund.",
    card2Title: "Highspeed-LAN-Direktverbindung (P2P)",
    card2Desc: "Geräte im selben LAN werden über mDNS automatisch erkannt und stellen eine direkte WebSocket P2P-Verbindung her. Geschwindigkeit nur durch Bandbreite begrenzt, keine Dateigrößenbeschränkungen.",
    card3Title: "Datei- & Text-Snippet-Übertragung",
    card3Desc: "Einfaches Senden von Dateien und Notizen zwischen gekoppelten Geräten. Automatisches Relay über die Cloud, wenn kein LAN verfügbar ist (bis zu 10 MB pro Datei).",
    card4Title: "Remote-Dateizugriff",
    card4Desc: "Durchsuche das Dateisystem verbundener Geräte und lade entfernte Dateien lokal herunter – ohne zusätzliche Software.",
    card5Title: "Remote-Terminal & Gerätesteuerung",
    card5Desc: "Öffne interaktive Shell-Terminals verbundener Computer direkt auf deinem Smartphone; steuere Energieoptionen (Herunterfahren/Neustart), Lautstärke und Medienwiedergabe aus der Ferne.",
    card6Title: "Remote-Kamera-Feed",
    card6Desc: "Betrachte den Live-Kamera-Feed verbundener Geräte in Echtzeit zur Remote-Statusüberprüfung und Umgebungsüberwachung.",
    card7Title: "Ende-zu-Ende-Verschlüsselung & Null-Speicherung",
    card7Desc: "Ed25519-Schlüsselpaar-Identitäten & SHA-256-Kopplungscodes. Sitzungen nutzen X25519 + AES-256-GCM / ChaCha20-Poly1305 Verschlüsselung ohne serverseitige Nachrichtenspeicherung.",
    card8Title: "CastBoard Statusbildschirm",
    card8Desc: "Verwandle ungenutzte Smartphones oder Tablets in einen Statusbildschirm – mit Anzeige der aktuellen Musik, Albumcover und synchronisierten Songtexten oder Überwachung von CPU, Speicher und Netzwerk.",
    card9Title: "Self-Hosted Server",
    card9Desc: "Richte deinen eigenen CoLink-Server per Docker Compose ein – mit voller Datenkontrolle und ohne Abhängigkeiten von Drittanbietern."
  },
  castboard: {
    badge: "Exklusives Feature",
    heading: "CastBoard — Verwandle ungenutzte Geräte in ein festes Status-Display",
    switchHint: "Klicke auf das Bild zum Wechseln",
    videoDemo: "Video-Demo",
    items: [
      {
        title: "Synchronisierter Songtext-Bildschirm",
        desc: "Unterstützt NetEase Cloud Music, QQ Music, Sogou Music und Spotify – mit eleganter Anzeige von scrollenden Songtexten auf großen Bildschirmen.",
        alt: "CastBoard Synchronisierter Songtext-Bildschirm",
        ariaLabel: "1/3 Songtext-Bildschirm"
      },
      {
        title: "Aktuelle Wiedergabe & Album-Cover",
        desc: "Liest dynamisch Albumcover, Interpret und genauen Fortschritt aus und verwandelt dein Gerät in eine Desktop-Musikzentrale.",
        alt: "CastBoard Aktuelle Wiedergabe",
        ariaLabel: "2/3 Aktuelle Wiedergabe"
      },
      {
        title: "Echtzeit-Hardwareüberwachung",
        desc: "Aktualisiert Kernparameter wie CPU, Arbeitsspeicher und Netzwerk-IO mit geringer Latenz zur Überwachung deines PCs.",
        alt: "CastBoard Echtzeit-Hardwareüberwachung",
        ariaLabel: "3/3 Hardwareüberwachung"
      }
    ]
  },
  security: {
    badge: "Sicherheit",
    heading: "Strenge Ende-zu-Ende-Sicherheit mit 100 % Datenkontrolle",
    desc: "CoLink stellt Sicherheit und Datenschutz von Anfang an an erste Stelle. LAN-bevorzugte Übertragung und Null-Speicherung in der Cloud garantieren vollkommenen Datenschutz.",
    spec1Title: "Ed25519 Kryptographische Identität",
    spec1Desc: "Jedes Gerät besitzt ein einzigartiges Ed25519-Schlüsselpaar als fälschungssichere Identität mit Unterstützung für Online-Schlüsselrotation.",
    spec2Title: "SHA-256 6-stelliger Kopplungscode",
    spec2Desc: "Die erste LAN-Kopplung nutzt einen von SHA-256 abgeleiteten 6-stelligen Code mit 4-Wege-Handshake gegen Man-in-the-Middle-Angriffe (MITM).",
    spec3Title: "X25519 + AEAD Starke Verschlüsselung",
    spec3Desc: "LAN-Nachrichten handeln Sitzungsschlüssel über X25519 ECDH aus und nutzen AES-256-GCM oder ChaCha20-Poly1305 für Ende-zu-Ende-Verschlüsselung.",
    spec4Title: "Kurzlebiges JWT & Schlüsselrotation",
    spec4Desc: "Access Tokens sind 15 Minuten gültig; Refresh Tokens rotieren nach einmaliger Nutzung, alte Tokens werden zur Abwehr von Replay-Angriffen widerrufen.",
    spec5Title: "Null Cloud-Speicherung",
    spec5Desc: "Der Server speichert nur notwendige Geräte- und Kontometadaten – Zwischenablage-, Datei- und Nachrichteninhalte werden niemals gespeichert."
  },
  download: {
    badge: "Download",
    heading: "Clients herunterladen und Server bereitstellen",
    desc: "CoLink ist vollkommen kostenlos und Open Source. Lade die neuesten Pakete direkt von GitHub Releases herunter oder erstelle einen eigenen Docker-Server.",
    winTitle: "Windows-Client",
    winDesc: "Unterstützt Windows 10 und neuer.",
    winBtn: "Windows-Version herunterladen",
    androidTitle: "Android-Client",
    androidDesc: "Unterstützt Android 8.0+.",
    androidBtn: "Android-Version herunterladen",
    linuxTitle: "Linux-Client",
    linuxDesc: "Unterstützt gängige Linux-Distributionen.",
    linuxBtn: "Linux-Version herunterladen",
    dockerTitle: "Docker Self-Hosted Server",
    dockerDesc: "Bereitstellung des CoLink-Servers mit einem Befehl per Docker Compose.",
    dockerBtn: "Docker-Repository ansehen",
    macTitle: "macOS & iOS Clients",
    macDesc: "macOS in Entwicklung · iOS geplant.",
    macBtn: "Demnächst verfügbar"
  },
  footer: {
    slogan: "Verbinde alle deine Geräte für nahtlose Zusammenarbeit.",
    appsTitle: "Apps & Komponenten",
    docsTitle: "Dokumente & Ressourcen",
    docProtocolRepo: "Protokoll-Repository",
    docProtocolOnline: "Protokoll-Dokumentation (Online)",
    docDockerGuide: "Docker Self-Hosting Anleitung",
    docAssets: "Assets",
    docLicense: "AGPL-3.0 Lizenz",
    copyright: "CoLinkDev Team. Veröffentlicht unter der AGPL-3.0-Lizenz."
  },
  modal: {
    closeAria: "Schließen"
  }
};
