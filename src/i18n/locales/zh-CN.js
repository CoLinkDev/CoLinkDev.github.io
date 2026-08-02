export default {
  meta: {
    title: "CoLink • 连接你的所有设备，无缝协作",
    description: "CoLink 是一款跨平台设备互联工具，支持剪贴板同步、极速文件传输、远程终端与设备控制、CastBoard 状态屏及端到端安全加密。"
  },
  hero: {
    eyebrow: "连接你的所有设备，无缝协作。",
    title: "CoLink",
    start: "开始",
    download: "下载",
    exploreProtocol: "查看协议文档"
  },
  nav: {
    features: "核心功能",
    castboard: "CastBoard",
    security: "安全",
    download: "下载",
    github: "GitHub"
  },
  features: {
    badge: "核心功能",
    heading: "跨平台无缝协同，连接你的所有设备",
    desc: "CoLink 是一款开源设备互联工具。将剪贴板同步、文件传输、远程访问与硬件监控整合于同一套连接中。无论设备处于同一局域网还是通过互联网连接，都能安全高效地协作。",
    card1Title: "剪贴板无缝同步",
    card1Desc: "在一台设备上复制，在另一台设备上直接粘贴。支持纯文本、富文本和图片。后台自动同步，无需手动干预。",
    card2Title: "局域网极速直连",
    card2Desc: "同一局域网设备通过 mDNS 自动发现，建立 WebSocket P2P 直连，传输速度仅受物理带宽限制，文件无大小限制。",
    card3Title: "文件与文本片段传输",
    card3Desc: "在已配对设备间轻松发送文件与即时笔记。没有局域网环境时自动通过云端中继（单文件最大支持 10 MB）。",
    card4Title: "远程文件访问",
    card4Desc: "浏览已连接设备的文件系统，并将远端文件拉取到本地，无需额外软件，随时取用另一台设备上的文件。",
    card5Title: "远程终端与设备控制",
    card5Desc: "在手机端即可直接打开已连接电脑的 Shell 交互终端；并能远程控制电源状态（关机/重启）、系统音量与媒体播放。",
    card6Title: "远程摄像头画面",
    card6Desc: "实时查看与调取已连接设备的摄像头画面，便于远程状态确认与现场环境监测。",
    card7Title: "端到端加密与零持久化",
    card7Desc: "基于 Ed25519 密钥对身份标识与 SHA-256 配对码；会话采用 X25519 + AES-256-GCM / ChaCha20-Poly1305 加密，服务端零消息留存。",
    card8Title: "CastBoard 状态屏",
    card8Desc: "将闲置手机或平板变身实时状态屏——同步显示电脑当前播放的音乐、专辑封面与毫秒级歌词，或实时监控 CPU、内存、网络等硬件指标。",
    card9Title: "自托管服务端",
    card9Desc: "通过 Docker Compose 一键部署自己的 CoLink 服务端，数据完全自控，不依赖任何第三方服务。"
  },
  castboard: {
    badge: "特色功能",
    heading: "CastBoard — 让闲置设备变身稳定状态屏",
    switchHint: "点击图片切换",
    videoDemo: "视频演示",
    items: [
      {
        title: "毫秒级同步歌词屏",
        desc: "支持网易云音乐、QQ音乐、搜狗音乐、Spotify，大屏优雅呈现同步滚动歌词。",
        alt: "CastBoard 毫秒级同步歌词屏",
        ariaLabel: "1/3 毫秒级同步歌词屏"
      },
      {
        title: "当前播放与专辑艺术",
        desc: "动态提取播放器专辑封面、曲目歌手信息与精确进度，化身桌面音乐中心。",
        alt: "CastBoard 当前播放与专辑艺术",
        ariaLabel: "2/3 当前播放与专辑艺术"
      },
      {
        title: "系统硬件指标实时监控",
        desc: "低延迟刷新 CPU、内存、网络 IO 等核心参数，随时掌握电脑运行状态。",
        alt: "CastBoard 系统硬件指标实时监控",
        ariaLabel: "3/3 系统硬件指标实时监控"
      }
    ]
  },
  security: {
    badge: "安全保障",
    heading: "严苛的端到端安全，100% 数据自控",
    desc: "CoLink 在设计之初便将安全与隐私放在首位。局域网优先传输，云端零持久化，确保你的私密数据绝不外泄。",
    spec1Title: "Ed25519 密码学身份",
    spec1Desc: "每台设备独享 Ed25519 密钥对作为不可伪造的身份标识，支持在线安全轮换。",
    spec2Title: "SHA-256 六位配对码",
    spec2Desc: "首次局域网配对使用 SHA-256 派生的 6 位验证码四步双向握手，彻底杜绝中间人攻击（MITM）。",
    spec3Title: "X25519 + AEAD 高强加密",
    spec3Desc: "局域网消息基于 X25519 ECDH 协商会话密钥，结合 AES-256-GCM 或 ChaCha20-Poly1305 进行端到端加密。",
    spec4Title: "JWT 短生命周期与轮换",
    spec4Desc: "Access Token 有效期 15 分钟；Refresh Token 单次使用后立即轮换，旧 Token 标记吊销以防重放攻击。",
    spec5Title: "云端零持久化",
    spec5Desc: "服务端仅保留必需的设备与账户元数据，绝不上报或存储任何剪贴板、文件与消息内容。"
  },
  download: {
    badge: "下载体验",
    heading: "下载客户端和部署服务端",
    desc: "CoLink 完全免费且开源。直接从 GitHub Releases 获取最新发布的安装包，或部署 Docker 自托管服务端。",
    winTitle: "Windows 客户端",
    winDesc: "支持 Windows 10 及以上系统。",
    winBtn: "下载 Windows 版",
    androidTitle: "Android 客户端",
    androidDesc: "支持 Android 8.0+。",
    androidBtn: "下载 Android 版",
    linuxTitle: "Linux 客户端",
    linuxDesc: "支持主流 Linux 发行版。",
    linuxBtn: "下载 Linux 版",
    dockerTitle: "Docker 自托管服务端",
    dockerDesc: "支持通过 Docker Compose 一键部署 CoLink 服务端。",
    dockerBtn: "查看 Docker 仓库",
    macTitle: "macOS & iOS 客户端",
    macDesc: "macOS 开发中 · iOS 计划中。",
    macBtn: "即将推出"
  },
  footer: {
    slogan: "连接你的所有设备，无缝协作。",
    appsTitle: "应用与组件",
    docsTitle: "文档与资源",
    docProtocolRepo: "协议文档仓库",
    docProtocolOnline: "协议文档 （在线托管）",
    docDockerGuide: "Docker 自托管指南",
    docAssets: "资产",
    docLicense: "AGPL-3.0 许可证",
    copyright: "CoLinkDev Team. 基于 AGPL-3.0 许可证开源。"
  },
  modal: {
    closeAria: "关闭"
  }
};
