export default {
  meta: {
    title: "CoLink • Connect all your devices for seamless collaboration",
    description: "CoLink is a cross-platform device connectivity tool supporting clipboard sync, fast file transfer, remote terminal & device control, CastBoard status screen, and end-to-end security encryption."
  },
  hero: {
    eyebrow: "CONNECT ALL YOUR DEVICES FOR SEAMLESS COLLABORATION.",
    title: "CoLink",
    start: "Start",
    download: "Download",
    exploreProtocol: "View Protocol Docs"
  },
  nav: {
    features: "Features",
    castboard: "CastBoard",
    security: "Security",
    download: "Download",
    github: "GitHub",
    toggleMenu: "Toggle menu"
  },
  features: {
    badge: "Core Capabilities",
    heading: "Cross-platform seamless collaboration, connecting all your devices",
    desc: "CoLink is an open-source device connectivity tool. Integrate clipboard sync, file transfer, remote access, and hardware monitoring into a single connection. Collaborate securely and efficiently whether on the same LAN or over the internet.",
    card1Title: "Seamless Clipboard Sync",
    card1Desc: "Copy on one device and paste directly on another. Supports plain text, rich text, and images. Automatic background sync with zero manual effort.",
    card2Title: "High-speed LAN Direct P2P",
    card2Desc: "Devices on the same LAN automatically discover via mDNS and establish direct WebSocket P2P connections. Speeds are limited only by physical bandwidth, with no file size limits.",
    card3Title: "File & Text Snippet Transfer",
    card3Desc: "Easily send files and instant notes between paired devices. Automatically relays via cloud when LAN is unavailable (up to 10 MB per file).",
    card4Title: "Remote File Access",
    card4Desc: "Browse the file system of connected devices and pull remote files locally without extra software. Access files on another device anytime.",
    card5Title: "Remote Terminal & Device Control",
    card5Desc: "Open interactive Shell terminals of connected computers directly from your phone; control power states (shutdown/reboot), volume, and media playback remotely.",
    card6Title: "Remote Camera Feed",
    card6Desc: "View and stream camera feeds from connected devices in real time for remote status verification and environment monitoring.",
    card7Title: "End-to-End Encryption & Zero Persistence",
    card7Desc: "Ed25519 keypair identities & SHA-256 pairing codes. Sessions use X25519 + AES-256-GCM / ChaCha20-Poly1305 encryption with zero server-side message retention.",
    card8Title: "CastBoard Status Screen",
    card8Desc: "Turn spare phones or tablets into live status screens—displaying currently playing music, album art, and synchronized lyrics, or monitoring CPU, memory, and network metrics.",
    card9Title: "Self-Hosted Server",
    card9Desc: "Deploy your own CoLink server via Docker Compose with full data control and zero third-party dependencies."
  },
  castboard: {
    badge: "Exclusive Feature",
    heading: "CastBoard — Turn idle devices into a dedicated status screen",
    switchHint: "Click image to switch",
    videoDemo: "Video Demo",
    items: [
      {
        title: "Millisecond-Level Synced Lyrics Screen",
        desc: "Supports NetEase Cloud Music, QQ Music, Sogou Music, and Spotify, elegantly displaying synchronized scrolling lyrics on large screens.",
        alt: "CastBoard Synced Lyrics Screen",
        ariaLabel: "1/3 Synced Lyrics Screen"
      },
      {
        title: "Now Playing & Album Art",
        desc: "Dynamically extracts album cover, track artist info, and precise playback progress, turning your device into a desktop music center.",
        alt: "CastBoard Now Playing & Album Art",
        ariaLabel: "2/3 Now Playing & Album Art"
      },
      {
        title: "Real-Time System Hardware Monitoring",
        desc: "Low-latency refresh of core parameters like CPU, memory, and network IO to monitor PC status at a glance.",
        alt: "CastBoard Real-Time Hardware Monitoring",
        ariaLabel: "3/3 Hardware Monitoring"
      }
    ]
  },
  security: {
    badge: "Security",
    heading: "Rigorous End-to-End Security with 100% Data Control",
    desc: "CoLink prioritizes security and privacy from day one. LAN-first transmission and zero cloud persistence guarantee your private data never leaks.",
    spec1Title: "Ed25519 Cryptographic Identity",
    spec1Desc: "Each device possesses a unique Ed25519 keypair as an unforgeable identity identifier with online key rotation support.",
    spec2Title: "SHA-256 6-Digit Pairing Code",
    spec2Desc: "Initial LAN pairing uses a SHA-256 derived 6-digit verification code with 4-step mutual handshake to eliminate MITM attacks.",
    spec3Title: "X25519 + AEAD High Security Encryption",
    spec3Desc: "LAN messages negotiate session keys via X25519 ECDH and employ AES-256-GCM or ChaCha20-Poly1305 for end-to-end encryption.",
    spec4Title: "Short-Lived JWT & Key Rotation",
    spec4Desc: "Access Token is valid for 15 minutes; Refresh Token rotates immediately after single use, with old tokens revoked against replay attacks.",
    spec5Title: "Zero Server-Side Persistence",
    spec5Desc: "The server retains only necessary device and account metadata, never reporting or storing any clipboard, file, or message content."
  },
  download: {
    badge: "Download",
    heading: "Download Clients and Deploy Server",
    desc: "CoLink is completely free and open source. Get the latest release packages directly from GitHub Releases, or deploy a self-hosted Docker server.",
    winTitle: "Windows Client",
    winDesc: "Supports Windows 10 and above.",
    winBtn: "Download for Windows",
    androidTitle: "Android Client",
    androidDesc: "Supports Android 8.0+.",
    androidBtn: "Download for Android",
    linuxTitle: "Linux Client",
    linuxDesc: "Supports major Linux distributions.",
    linuxBtn: "Download for Linux",
    dockerTitle: "Docker Self-Hosted Server",
    dockerDesc: "Deploy CoLink server with one command via Docker Compose.",
    dockerBtn: "View Docker Repository",
    macTitle: "macOS & iOS Clients",
    macDesc: "macOS under development · iOS planned.",
    macBtn: "Coming Soon"
  },
  footer: {
    slogan: "Connect all your devices for seamless collaboration.",
    appsTitle: "Apps & Components",
    docsTitle: "Docs & Resources",
    docProtocolRepo: "Protocol Docs Repo",
    docProtocolOnline: "Protocol Docs (Online)",
    docDockerGuide: "Docker Self-Hosting Guide",
    docAssets: "Assets",
    docLicense: "AGPL-3.0 License",
    copyright: "CoLinkDev Team. Released under the AGPL-3.0 License."
  },
  modal: {
    closeAria: "Close"
  }
};
