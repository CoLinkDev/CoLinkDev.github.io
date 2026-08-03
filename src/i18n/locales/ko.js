export default {
  meta: {
    title: "CoLink • 모든 기기를 연결하여 완벽한 협업",
    description: "CoLink는 클립보드 동기화, 초고속 파일 전송, 원격 터미널 및 기기 제어, CastBoard 상태 화면 및 엔드투엔드 보안 암호화를 지원하는 크로스 플랫폼 기기 연동 도구입니다."
  },
  hero: {
    eyebrow: "모든 기기를 연결하여 완벽한 협업.",
    title: "CoLink",
    start: "시작하기",
    download: "다운로드",
    exploreProtocol: "프로토콜 문서 보기"
  },
  nav: {
    features: "핵심 기능",
    castboard: "CastBoard",
    security: "보안",
    download: "다운로드",
    github: "GitHub",
    toggleMenu: "메뉴 전환"
  },
  features: {
    badge: "핵심 기능",
    heading: "크로스 플랫폼 원활한 협업, 모든 기기 연결",
    desc: "CoLink는 오픈 소스 기기 연동 도구입니다. 클립보드 동기화, 파일 전송, 원격 액세스 및 하드웨어 모니터링을 단일 연결로 통합합니다. 동일한 LAN이든 인터넷 연결이든 안전하고 효율적으로 협업할 수 있습니다.",
    card1Title: "매끄러운 클립보드 동기화",
    card1Desc: "한 기기에서 복사하고 다른 기기에서 바로 붙여넣기. 일반 텍스트, 서식 있는 텍스트 및 이미지 지원. 백그라운드 자동 동기화.",
    card2Title: "초고속 LAN P2P 직련",
    card2Desc: "동일한 LAN 상의 기기는 mDNS를 통해 자동 발견되며 WebSocket P2P 직련을 생성합니다. 전송 속도는 물리적 대역폭으로만 제한되며 파일 크기 제한이 없습니다.",
    card3Title: "파일 및 텍스트 조각 전송",
    card3Desc: "페어링된 기기 간에 파일과 즉석 메모를 쉽게 전송. LAN 환경이 아닐 때 클라우드 중계를 통해 자동 전달 (파일당 최대 10MB).",
    card4Title: "원격 파일 액세스",
    card4Desc: "연결된 기기의 파일 시스템을 탐색하고 원격 파일을 로컬로 가져오기. 추가 소프트웨어 없이언제든지 파일에 접근 가능.",
    card5Title: "원격 터미널 및 기기 제어",
    card5Desc: "모바일에서 연결된 PC의 셸 대화형 터미널을 직접 열고, 전원 상태 (종료/재부팅), 볼륨 및 미디어 재생을 원격으로 제어.",
    card6Title: "원격 카메라 피드",
    card6Desc: "연결된 기기의 카메라 영상을 실시간으로 확인 및 불러와 원격 상태 확인 및 환경 모니터링에 활용.",
    card7Title: "엔드투엔드 암호화 및 제로 저장",
    card7Desc: "Ed25519 키 쌍 식별자 및 SHA-256 페어링 코드 기반. 세션은 X25519 + AES-256-GCM / ChaCha20-Poly1305로 암호화되며 서버에는 메시지가 보존되지 않습니다.",
    card8Title: "CastBoard 상태 화면",
    card8Desc: "사용하지 않는 스마트폰이나 태블릿을 실시간 상태 화면으로 변환—현재 재생 중인 음악, 앨범 아트 및 동기화된 가사를 표시하거나 CPU, 메모리, 네트워크 하드웨어 지표 모니터링.",
    card9Title: "자체 호스팅 서버",
    card9Desc: "Docker Compose를 통해 자신만의 CoLink 서버를 한 번의 클릭으로 배포. 데이터 완벽 자체 제어, 제3자 서비스 비의존."
  },
  castboard: {
    badge: "특화 기능",
    heading: "CastBoard — 사용하지 않는 기기를 전용 상태 디스플레이로 변환",
    switchHint: "이미지를 클릭하여 전환",
    videoDemo: "비디오 데모",
    items: [
      {
        title: "밀리초 단위 동기화 가사 화면",
        desc: "NetEase Cloud Music, QQ Music, Sogou Music, Spotify 지원. 대형 화면에 스크롤 가사를 우아하게 표시.",
        alt: "CastBoard 동기화 가사 화면",
        ariaLabel: "1/3 동기화 가사 화면"
      },
      {
        title: "현재 재생 중 & 앨범 아트",
        desc: "플레이어의 앨범 커버, 곡/아티스트 정보 및 정확한 진행 상황을 동적으로 추출하여 데스크톱 음악 센터로 활용.",
        alt: "CastBoard 현재 재생 중 & 앨범 아트",
        ariaLabel: "2/3 현재 재생 중 & 앨범 아트"
      },
      {
        title: "실시간 시스템 하드웨어 지표 모니터링",
        desc: "CPU, 메모리, 네트워크 IO 등 핵심 파라미터를 저지연으로 새로고침하여 PC 작동 상태를 한눈에 파악.",
        alt: "CastBoard 실시간 하드웨어 모니터링",
        ariaLabel: "3/3 실시간 하드웨어 모니터링"
      }
    ]
  },
  security: {
    badge: "보안",
    heading: "철저한 엔드투엔드 보안과 100% 데이터 제어",
    desc: "CoLink는 설계 단계부터 보안과 개인정보 보호를 최우선으로 생각합니다. LAN 우선 전송 및 클라우드 제로 저장으로 개인 데이터 유출을 방지합니다.",
    spec1Title: "Ed25519 암호화 신원",
    spec1Desc: "각 기기는 고유한 Ed25519 키 쌍을 위조 불가능한 신원 식별자로 가지며 온라인으로 안전하게 교체 가능.",
    spec2Title: "SHA-256 6자리 페어링 코드",
    spec2Desc: "최초 LAN 페어링은 SHA-256 기반 6자리 인증 코드를 사용한 4단계 상호 핸드셰이크로 중간자 공격 (MITM)을 완벽 차단.",
    spec3Title: "X25519 + AEAD 고강도 암호화",
    spec3Desc: "LAN 메시지는 X25519 ECDH로 세션 키를 협상하고 AES-256-GCM 또는 ChaCha20-Poly1305를 사용하여 엔드투엔드 암호화.",
    spec4Title: "단기 유효 JWT 및 로테이션",
    spec4Desc: "Access Token 유효기간 15분. Refresh Token은 1회 사용 후 즉시 로테이션되며 이전 토큰은 폐기 처리.",
    spec5Title: "클라우드 제로 저장",
    spec5Desc: "서버는 필수 기기 및 계정 메타데이터만 보관하며, 클립보드, 파일, 메시지 내용을 절대로 보고하거나 저장하지 않습니다."
  },
  download: {
    badge: "다운로드",
    heading: "클라이언트 다운로드 및 서버 배포",
    desc: "CoLink는 완전히 무료이며 오픈 소스입니다. GitHub Releases에서 최신 설치 패키지를 다운로드하거나 Docker 자체 호스팅 서버를 배포하세요.",
    winTitle: "Windows 클라이언트",
    winDesc: "Windows 10 이상 지원.",
    winBtn: "Windows 버전 다운로드",
    androidTitle: "Android 클라이언트",
    androidDesc: "Android 8.0+ 지원.",
    androidBtn: "Android 버전 다운로드",
    linuxTitle: "Linux 클라이언트",
    linuxDesc: "주요 Linux 배포판 지원.",
    linuxBtn: "Linux 버전 다운로드",
    dockerTitle: "Docker 자체 호스팅 서버",
    dockerDesc: "Docker Compose를 통해 명령 한 번으로 CoLink 서버 배포.",
    dockerBtn: "Docker 저장소 보기",
    macTitle: "macOS & iOS 클라이언트",
    macDesc: "macOS 개발 중 · iOS 계획 중.",
    macBtn: "출시 예정"
  },
  footer: {
    slogan: "모든 기기를 연결하여 완벽하게 협업하세요.",
    appsTitle: "앱 및 구성 요소",
    docsTitle: "문서 및 리소스",
    docProtocolRepo: "프로토콜 문서 저장소",
    docProtocolOnline: "프로토콜 문서 (온라인)",
    docDockerGuide: "Docker 자체 호스팅 가이드",
    docAssets: "에셋",
    docLicense: "AGPL-3.0 라이선스",
    copyright: "CoLinkDev Team. AGPL-3.0 라이선스로 공개됨."
  },
  modal: {
    closeAria: "닫기"
  }
};
