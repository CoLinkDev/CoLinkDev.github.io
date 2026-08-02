export default {
  meta: {
    title: "CoLink • すべてのデバイスをつなぎ、シームレスに連携",
    description: "CoLink は、クリップボード同期、高速ファイル転送、リモートターミナル＆デバイス制御、CastBoard ステータス画面、エンドツーエンド暗号化をサポートするクロスプラットフォームのデバイス連携ツールです。"
  },
  hero: {
    eyebrow: "すべてのデバイスをつなぎ、シームレスに連携。",
    title: "CoLink",
    start: "スタート",
    download: "ダウンロード",
    exploreProtocol: "プロトコルドキュメントを見る"
  },
  nav: {
    features: "機能",
    castboard: "CastBoard",
    security: "セキュリティ",
    download: "ダウンロード",
    github: "GitHub"
  },
  features: {
    badge: "核心機能",
    heading: "クロスプラットフォームでシームレスな連携、すべてのデバイスを接続",
    desc: "CoLink はオープンソースのデバイス連携ツールです。クリップボード同期、ファイル転送、リモートアクセス、ハードウェア監視を 1 つの接続に統合します。同一 LAN 内でもインターネット経由でも、安全かつ効率的に連携できます。",
    card1Title: "シームレスなクリップボード同期",
    card1Desc: "1 つのデバイスでコピーし、別のデバイスで直接貼り付け。プレーンテキスト、リッチテキスト、画像に対応。バックグラウンドで自動同期されます。",
    card2Title: "LAN 内高速 P2P 直結",
    card2Desc: "同じ LAN 内のデバイスは mDNS で自動検出され、WebSocket P2P 直結を確立。転送速度は物理帯域のみに制限され、ファイルサイズ上限はありません。",
    card3Title: "ファイル＆テキストスニペット転送",
    card3Desc: "ペアリング済みデバイス間でファイルやインスタントメモを簡単に送信。LAN 環境がない場合はクラウド経由で自動リレー（1ファイル最大 10 MB）。",
    card4Title: "リモートファイルアクセス",
    card4Desc: "接続済みデバイスのファイルシステムを閲覧し、リモートファイルをローカルに取得。追加ソフトウェアなしでいつでもアクセス可能。",
    card5Title: "リモートターミナルとデバイス制御",
    card5Desc: "スマートフォンから接続済み PC の Shell 対話型ターミナルを直接起動。電源状態（シャットダウン/再起動）、音量、メディア再生もリモート制御。",
    card6Title: "リモートカメラ映像",
    card6Desc: "接続済みデバイスのカメラ映像をリアルタイムで確認・取得し、遠隔状態確認や環境モニタリングに活用。",
    card7Title: "エンドツーエンド暗号化＆ゼロ保存",
    card7Desc: "Ed25519 鍵ペアによる ID 識別と SHA-256 ペアリングコード。セッションは X25519 + AES-256-GCM / ChaCha20-Poly1305 で暗号化、サーバー上にメッセージは一切残りません。",
    card8Title: "CastBoard ステータス画面",
    card8Desc: "使っていないスマホやタブレットをリアルタイムステータス画面に変換——再生中の音楽・ジャケット写真・同期歌詞を表示したり、CPU、メモリ、ネットワークなどのハードウェア指標をリアルタイム監視。",
    card9Title: "セルフホスト用サーバー",
    card9Desc: "Docker Compose を使用して自前の CoLink サーバーをワンクリックで構築。データは完全自己管理で、外部サービスに依存しません。"
  },
  castboard: {
    badge: "特徴的機能",
    heading: "CastBoard — 放置デバイスを安定したステータス表示に変える",
    switchHint: "画像をクリックして切り替え",
    videoDemo: "動画デモ",
    items: [
      {
        title: "ミリ秒単位の同期歌詞画面",
        desc: "NetEase Cloud Music、QQ Music、Sogou Music、Spotify に対応。大画面にスクロール歌詞を美しく表示。",
        alt: "CastBoard 同期歌詞画面",
        ariaLabel: "1/3 同期歌詞画面"
      },
      {
        title: "現在再生中とアルバムアート",
        desc: "プレイヤーのジャケット写真、曲名、アーティスト情報、正確な進行状況を動的に取得し、デスクトップの音楽センターに。",
        alt: "CastBoard 現在再生中とアルバムアート",
        ariaLabel: "2/3 現在再生中とアルバムアート"
      },
      {
        title: "システムハードウェア指標のリアルタイム監視",
        desc: "CPU、メモリ、ネットワーク IO などの主要パラメータを低遅延で更新し、PC の動作状態を常時把握。",
        alt: "CastBoard リアルタイムハードウェア監視",
        ariaLabel: "3/3 リアルタイムハードウェア監視"
      }
    ]
  },
  security: {
    badge: "セキュリティ",
    heading: "厳格なエンドツーエンドセキュリティと 100% のデータ自主管理",
    desc: "CoLink は設計当初からセキュリティとプライバシーを最優先しています。LAN 優先転送、クラウドゼロ保存で私的データの漏洩を防ぎます。",
    spec1Title: "Ed25519 暗号化アイデンティティ",
    spec1Desc: "各デバイスが固有の Ed25519 鍵ペアを偽造不可能な ID として保持し、オンラインで安全にローテーション可能。",
    spec2Title: "SHA-256 6桁ペアリングコード",
    spec2Desc: "最初の LAN ペアリングでは SHA-256 由来の 6 桁検証コードによる 4 ステップ相互ハンドシェイクを行い、中間者攻撃（MITM）を完全に排除。",
    spec3Title: "X25519 + AEAD 高強度暗号化",
    spec3Desc: "LAN メッセージは X25519 ECDH でセッション鍵をネゴシエーションし、AES-256-GCM または ChaCha20-Poly1305 でエンドツーエンド暗号化。",
    spec4Title: "短寿命 JWT ＆ ローテーション",
    spec4Desc: "Access Token の有効期限は 15 分。Refresh Token は 1 回使用後に即時ローテーションされ、旧 Token は失効処理されます。",
    spec5Title: "クラウドゼロ保存",
    spec5Desc: "サーバーは必要最低限のデバイス・アカウントメタデータのみを保持し、クリップボード、ファイル、メッセージの内容は一切報告・保存しません。"
  },
  download: {
    badge: "ダウンロード",
    heading: "クライアントのダウンロードとサーバーのデプロイ",
    desc: "CoLink は完全に無料かつオープンソースです。GitHub Releases から最新のインストーラーを取得するか、Docker セルフホストサーバーをデプロイしてください。",
    winTitle: "Windows クライアント",
    winDesc: "Windows 10 以上をサポート。",
    winBtn: "Windows 版をダウンロード",
    androidTitle: "Android クライアント",
    androidDesc: "Android 8.0+ をサポート。",
    androidBtn: "Android 版をダウンロード",
    linuxTitle: "Linux クライアント",
    linuxDesc: "主要な Linux ディストリビューションをサポート。",
    linuxBtn: "Linux 版をダウンロード",
    dockerTitle: "Docker セルフホストサーバー",
    dockerDesc: "Docker Compose で CoLink サーバーを 1 コマンドでデプロイ。",
    dockerBtn: "Docker リポジトリを見る",
    macTitle: "macOS & iOS クライアント",
    macDesc: "macOS 開発中 · iOS 計画中。",
    macBtn: "まもなく公開"
  },
  footer: {
    slogan: "すべてのデバイスをつなぎ、シームレスに連携します。",
    appsTitle: "アプリとコンポーネント",
    docsTitle: "ドキュメントとリソース",
    docProtocolRepo: "プロトコルドキュメントリポジトリ",
    docProtocolOnline: "プロトコルドキュメント（オンライン）",
    docDockerGuide: "Docker セルフホストガイド",
    docAssets: "アセット",
    docLicense: "AGPL-3.0 ライセンス",
    copyright: "CoLinkDev Team. AGPL-3.0 ライセンスのもとで公開。"
  },
  modal: {
    closeAria: "閉じる"
  }
};
