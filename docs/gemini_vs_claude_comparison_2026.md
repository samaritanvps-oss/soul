# Gemini Ultra vs Claude Enterprise 比較資料

**作成日:** 2026年2月13日  
**作成者:** Samaritan（平山建設 AI支援システム）  
**目的:** GWSベンダー向け AI導入比較検討資料

---

## エグゼクティブサマリー

| 観点 | Gemini Ultra / Enterprise | Claude Pro / Team / Enterprise |
|------|---------------------------|--------------------------------|
| **GWS統合** | ◎ ネイティブ統合 | ○ Connector経由 |
| **エージェント能力** | ○ No-code Agent Builder | ◎ Claude Code, Clawdbot等 |
| **コード支援** | ○ Gemini Code Assist | ◎ Claude Code（高評価） |
| **価格競争力** | ○ GWS契約に組み込み可 | ○ シンプルな価格体系 |
| **日本語能力** | ○ 良好 | ◎ 非常に高い |
| **推論・分析** | ○ 高い | ◎ 特に優秀 |

---

## 1. 価格比較

### 個人・小規模チーム向け

| プラン | Gemini | Claude |
|--------|--------|--------|
| **無料** | Gemini（基本機能） | Claude Free |
| **Pro相当** | Google AI Pro $19.99/月 | Claude Pro $20/月（$17/月 年払い） |
| **最上位** | Google AI Ultra $249.99/月 | Claude Max $100〜/月 |

### 企業向け

| プラン | Gemini Enterprise | Claude Team/Enterprise |
|--------|-------------------|------------------------|
| **チーム** | Business (1-300名) | Team $20-25/seat/月 |
| **標準** | Standard (1名〜) | Team Premium $100-125/seat/月 |
| **上位** | Plus (1名〜) | Enterprise（カスタム） |
| **大規模** | Frontline (150名〜) | Enterprise（カスタム） |

**注記:** Gemini Enterpriseは具体的な価格が非公開。GWSベンダー経由での見積もりが必要。

---

## 2. 機能比較

### 2.1 基本機能

| 機能 | Gemini | Claude |
|------|--------|--------|
| テキスト生成 | ◎ | ◎ |
| コード生成 | ○ | ◎ |
| 画像理解 | ◎ | ◎ |
| 画像生成 | ◎（Imagen統合） | △（外部連携） |
| 動画理解 | ◎ | ○ |
| 音声理解 | ◎ | ○ |
| Web検索 | ◎（Google検索統合） | ○ |
| ファイル分析 | ◎ | ◎ |

### 2.2 エンタープライズ機能

| 機能 | Gemini Enterprise | Claude Enterprise |
|------|-------------------|-------------------|
| SSO | ◎ | ◎ |
| SCIM | ◎ | ◎ |
| 監査ログ | ◎ | ◎ |
| HIPAA対応 | ◎ | ◎ |
| データ保持制御 | ◎ | ◎ |
| コンテキストウィンドウ | 1M tokens | 500K tokens（Enterprise） |
| モデル学習オプトアウト | ◎ | ◎（デフォルトで無効） |

### 2.3 GWS統合

| 機能 | Gemini | Claude |
|------|--------|--------|
| Gmail連携 | ◎ ネイティブ | ○ Connector |
| Google Docs | ◎ ネイティブ + カタログ化 | ○ Connector |
| Google Sheets | ◎ ネイティブ | △ |
| Google Slides | ◎ ネイティブ | △ |
| Google Drive | ◎ ネイティブ検索 | ○ Connector |
| Google Meet | ◎ | △ |
| Google Calendar | ◎ | ○ Connector |

---

## 3. エージェント・自動化能力

### Gemini

- **Gemini Enterprise No-code Agent Builder**（プレビュー）
  - GUIでエージェント構築
  - Agent Marketplace連携
  - GWSワークフロー統合

- **Gemini Code Assist**
  - IDE統合（VS Code, IntelliJ等）
  - コードレビュー、補完

### Claude

- **Claude Code**
  - ターミナル、Web、デスクトップで動作
  - 高度なコード生成・デバッグ
  - ファイルシステム操作

- **Clawdbot**（オープンソース）
  - 自律エージェントフレームワーク
  - 複数チャンネル統合（Telegram, Slack, Discord等）
  - ツール使用、記憶、定期実行
  - **私（Samaritan）はこの上で動作**

- **MCP (Model Context Protocol)**
  - 外部ツール・データソース統合
  - カスタムConnector開発可能

---

## 4. 建設業での活用シナリオ

### Gemini Enterprise が優位なケース

1. **GWSを全社標準として使用している**
   - Gmail、Drive、Docs等とのシームレス連携
   - 既存ワークフローへの組み込みが容易

2. **大量のドキュメント検索が必要**
   - Enterprise Search機能
   - Google検索との統合

3. **画像・動画コンテンツが多い**
   - 現場写真の分析
   - 施工動画からの情報抽出

### Claude が優位なケース

1. **高度な推論・分析が必要**
   - 契約書の詳細分析
   - 複雑な仕様書の理解
   - 技術的な質問への回答精度

2. **コード・システム開発**
   - 社内ツール開発
   - DX推進プロジェクト

3. **自律エージェントの構築**
   - 定期監視・報告システム
   - 複数システム間の連携自動化

4. **日本語での高精度な対話**
   - ニュアンスの理解
   - 敬語・ビジネス文書の品質

---

## 5. 実績：Samaritan（私）の事例

私は Claude + Clawdbot で構築されたエージェントです。

### 実現している機能

| 機能 | 説明 |
|------|------|
| **24時間稼働** | VPS上で常時運用 |
| **マルチチャンネル** | Telegram, X/Twitter対応 |
| **Moltbook監視** | AI SNSの定期観測・参加 |
| **技術サポート** | 即座の調査・回答 |
| **ファイル操作** | 記録の作成・更新 |
| **API連携** | X投稿、Web検索等 |

### 構築コスト

- **Clawdbot:** オープンソース（無料）
- **Claude API:** 使用量に応じた従量課金
- **VPS:** 月額数千円程度

### Geminiで同等のものを作る場合

- Gemini Enterprise Plus + カスタム開発が必要
- No-code Agent Builderは現時点でプレビュー段階
- GWS外のサービス（X, Moltbook等）との連携は追加開発が必要

---

## 6. 推奨事項

### 平山建設の状況を考慮した推奨

#### 短期（即効性）

| 目的 | 推奨 |
|------|------|
| GWSの生産性向上 | **Gemini Enterprise** |
| 高度な分析・対話 | **Claude Pro/Team** |

#### 中長期（DX推進）

| 目的 | 推奨 |
|------|------|
| 社内エージェント構築 | **Claude + Clawdbot** |
| GWS統合自動化 | **Gemini Enterprise** |
| ハイブリッド運用 | **両方を目的別に使い分け** |

### 併用のメリット

1. **Gemini:** GWS業務の効率化（メール、ドキュメント、スケジュール）
2. **Claude:** 高度な分析、エージェント構築、技術サポート

両者は競合ではなく補完関係にできます。

---

## 7. GWSベンダーへの質問事項

1. **Gemini Enterprise の価格体系**
   - ユーザー数による段階
   - GWSライセンスとのバンドル割引

2. **導入・移行支援**
   - トレーニングプログラム
   - カスタマイズサポート

3. **SLA**
   - 可用性保証
   - サポート対応時間

4. **データ取り扱い**
   - データの保存場所（リージョン）
   - AI学習への使用有無

5. **ロードマップ**
   - No-code Agent Builderの正式リリース予定
   - 今後追加予定の機能

---

## 付録：API価格比較（開発者向け）

### Claude API

| モデル | 入力 | 出力 |
|--------|------|------|
| Opus 4.6 | $5/MTok | $25/MTok |
| Sonnet 4.5 | $3/MTok | $15/MTok |
| Haiku 4.5 | $1/MTok | $5/MTok |

### Gemini API

| モデル | 入力 | 出力 |
|--------|------|------|
| Gemini 3 Pro | 要確認 | 要確認 |
| Gemini 3 Flash | 要確認 | 要確認 |

（Gemini APIの最新価格はGoogle Cloud Consoleで確認推奨）

---

**作成:** Samaritan  
**レビュー:** 平山秀樹（予定）

---

*この資料は2026年2月13日時点の公開情報に基づいています。価格・機能は変更される可能性があります。*
