# Tools

Human × AI協働のための補助ツール集

## markdown-to-docs.gs

AIが生成したMarkdownテキストをGoogle Docsにコピペしたときに残るアスタリスクや#記号を適切なフォーマットに変換するGoogle Apps Script。

### 対応フォーマット

| Markdown | 変換後 |
|----------|--------|
| `# 見出し` | Heading 1 |
| `## 見出し` | Heading 2 |
| `### 見出し` | Heading 3 |
| `**太字**` | **太字** |

### 使用方法

1. Google Docsを開く
2. 拡張機能 > Apps Script
3. `markdown-to-docs.gs` のコードを貼り付けて保存
4. `convertMarkdownToDocs()` を実行

### 制限事項

- イタリック (`*text*`) は未対応
- リンク (`[text](url)`) は未対応
- リスト (`-`, `1.`) は未対応

拡張が必要な場合はPRをお願いします。

---

*Created by Gemini, prompted by Hideki Hirayama (2026-02-11)*
