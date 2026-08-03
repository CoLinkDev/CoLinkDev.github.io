export default {
  meta: {
    title: "CoLink • 連接你的所有設備，無縫協作",
    description: "CoLink 是一款跨平台設備互聯工具，支援剪貼簿同步、極速檔案傳輸、遠端終端與設備控制、CastBoard 狀態螢幕及端到端安全加密。"
  },
  hero: {
    eyebrow: "連接你的所有設備，無縫協作。",
    title: "CoLink",
    start: "開始",
    download: "下載",
    exploreProtocol: "檢視協定文件"
  },
  nav: {
    features: "核心功能",
    castboard: "CastBoard",
    security: "安全",
    download: "下載",
    github: "GitHub",
    toggleMenu: "切換選單"
  },
  features: {
    badge: "核心功能",
    heading: "跨平台無縫協同，連接你的所有設備",
    desc: "CoLink 是一款開源設備互聯工具。將剪貼簿同步、檔案傳輸、遠端存取與硬體監控整合於同一套連接中。無論設備處於同一區域網路還是透過網際網路連接，都能安全高效地協作。",
    card1Title: "剪貼簿無縫同步",
    card1Desc: "在一台設備上複製，在另一台設備上直接貼上。支援純文字、富文字與圖片。背景自動同步，無需手動干預。",
    card2Title: "區域網路極速直連",
    card2Desc: "同一區域網路設備透過 mDNS 自動發現，建立 WebSocket P2P 直連，傳輸速度僅受物理頻寬限制，檔案無大小限制。",
    card3Title: "檔案與文字片段傳輸",
    card3Desc: "在已配對設備間輕鬆傳送檔案與即時筆記。沒有區域網路環境時自動透過雲端中繼（單檔案最大支援 10 MB）。",
    card4Title: "遠端檔案存取",
    card4Desc: "瀏覽已連接設備的檔案系統，並將遠端檔案拉取到本地，無需額外軟體，隨時取用另一台設備上的檔案。",
    card5Title: "遠端終端與設備控制",
    card5Desc: "在手機端即可直接開啟已連接電腦的 Shell 互動終端；並能遠端控制電源狀態（關機/重啟）、系統音量與媒體播放。",
    card6Title: "遠端攝影機畫面",
    card6Desc: "即時檢視與調取已連接設備的攝影機畫面，便於遠端狀態確認與現場環境監測。",
    card7Title: "端到端加密與零持久化",
    card7Desc: "基於 Ed25519 金鑰對身份標識與 SHA-256 配對碼；會話採用 X25519 + AES-256-GCM / ChaCha20-Poly1305 加密，伺服器端零訊息留存。",
    card8Title: "CastBoard 狀態螢幕",
    card8Desc: "將閒置手機或平板變身即時狀態螢幕——同步顯示電腦當前播放的音樂、專輯封面與毫秒級歌詞，或即時監控 CPU、記憶體、網路等硬體指標。",
    card9Title: "自託管伺服器端",
    card9Desc: "透過 Docker Compose 一鍵部署自己的 CoLink 伺服器端，資料完全自控，不依賴任何第三方服務。"
  },
  castboard: {
    badge: "特色功能",
    heading: "CastBoard — 讓閒置設備變身穩定狀態螢幕",
    switchHint: "點擊圖片切換",
    videoDemo: "影片演示",
    items: [
      {
        title: "毫秒級同步歌詞螢幕",
        desc: "支援網易雲音樂、QQ音樂、搜狗音樂、Spotify，大螢幕優雅呈現同步滾動歌詞。",
        alt: "CastBoard 毫秒級同步歌詞螢幕",
        ariaLabel: "1/3 毫秒級同步歌詞螢幕"
      },
      {
        title: "當前播放與專輯藝術",
        desc: "動態擷取播放器專輯封面、曲目歌手資訊與精確進度，化身桌面音樂中心。",
        alt: "CastBoard 當前播放與專輯藝術",
        ariaLabel: "2/3 當前播放與專輯藝術"
      },
      {
        title: "系統硬體指標即時監控",
        desc: "低延遲重新整理 CPU、記憶體、網路 IO 等核心參數，隨時掌握電腦運行狀態。",
        alt: "CastBoard 系統硬體指標即時監控",
        ariaLabel: "3/3 系統硬體指標即時監控"
      }
    ]
  },
  security: {
    badge: "安全保障",
    heading: "嚴苛的端到端安全，100% 資料自控",
    desc: "CoLink 在設計之初便將安全與隱私放在首位。區域網路優先傳輸，雲端零持久化，確保你的私密資料絕不外洩。",
    spec1Title: "Ed25519 密碼學身份",
    spec1Desc: "每台設備獨享 Ed25519 金鑰對作為不可偽造的身份標識，支援線上安全輪換。",
    spec2Title: "SHA-256 六位配對碼",
    spec2Desc: "首次區域網路配對使用 SHA-256 派生的 6 位驗證碼四步雙向握手，徹底杜絕中間人攻擊（MITM）。",
    spec3Title: "X25519 + AEAD 高強加密",
    spec3Desc: "區域網路訊息基於 X25519 ECDH 協商會話金鑰，結合 AES-256-GCM 或 ChaCha20-Poly1305 進行端到端加密。",
    spec4Title: "JWT 短生命週期與輪換",
    spec4Desc: "Access Token 有效期 15 分鐘；Refresh Token 單次使用後立即輪換，舊 Token 標記吊銷以防重放攻擊。",
    spec5Title: "雲端零持久化",
    spec5Desc: "伺服器端僅保留必需的設備與帳戶元資料，絕不上報或存儲任何剪貼簿、檔案與訊息內容。"
  },
  download: {
    badge: "下載體驗",
    heading: "下載用戶端和部署伺服器端",
    desc: "CoLink 完全免費且開源。直接從 GitHub Releases 獲取最新發布的安裝包，或部署 Docker 自託管伺服器端。",
    winTitle: "Windows 用戶端",
    winDesc: "支援 Windows 10 及以上系統。",
    winBtn: "下載 Windows 版",
    androidTitle: "Android 用戶端",
    androidDesc: "支援 Android 8.0+。",
    androidBtn: "下載 Android 版",
    linuxTitle: "Linux 用戶端",
    linuxDesc: "支援主流 Linux 發行版。",
    linuxBtn: "下載 Linux 版",
    dockerTitle: "Docker 自託管伺服器端",
    dockerDesc: "支援透過 Docker Compose 一鍵部署 CoLink 伺服器端。",
    dockerBtn: "檢視 Docker 倉庫",
    macTitle: "macOS & iOS 用戶端",
    macDesc: "macOS 開發中 · iOS 計劃中。",
    macBtn: "即將推出"
  },
  footer: {
    slogan: "連接你的所有設備，無縫協作。",
    appsTitle: "應用與組件",
    docsTitle: "文件與資源",
    docProtocolRepo: "協定文件倉庫",
    docProtocolOnline: "協定文件 （線上託管）",
    docDockerGuide: "Docker 自託管指南",
    docAssets: "資產",
    docLicense: "AGPL-3.0 許可證",
    copyright: "CoLinkDev Team. 基於 AGPL-3.0 許可證開源。"
  },
  modal: {
    closeAria: "關閉"
  }
};
