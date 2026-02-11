/**
 * Markdown to Google Docs Converter
 * 
 * AIが生成したMarkdownテキストをGoogle Docsにコピペしたときに
 * 残るアスタリスクや#記号を適切なフォーマットに変換するスクリプト
 * 
 * 使用方法:
 * 1. Google Docsを開く
 * 2. 拡張機能 > Apps Script
 * 3. このコードを貼り付けて保存
 * 4. convertMarkdownToDocs() を実行
 * 
 * 対応フォーマット:
 * - 見出し: #, ##, ### → Heading 1, 2, 3
 * - 太字: **text** → bold text
 * 
 * Created by: Gemini (prompted by Hideki Hirayama)
 * Date: 2026-02-11
 */

function convertMarkdownToDocs() {
  var body = DocumentApp.getActiveDocument().getBody();

  // ---------------------------------------------
  // 1. 見出しの処理 (#, ##, ###)
  // ---------------------------------------------
  var pars = body.getParagraphs();

  // 段落をひとつずつチェック
  pars.forEach(function(p) {
    var text = p.getText();

    // 行頭が "#" で始まり、その後にスペースがあるかチェック
    var match = text.match(/^(#+)\s/);
    if (match) {
      var hashes = match[1];   // "#" の部分を取得
      var level = hashes.length; // # の個数

      // スタイルの適用
      switch (level) {
        case 1:
          p.setHeading(DocumentApp.ParagraphHeading.HEADING1);
          break;
        case 2:
          p.setHeading(DocumentApp.ParagraphHeading.HEADING2);
          break;
        case 3:
          p.setHeading(DocumentApp.ParagraphHeading.HEADING3);
          break;
        // 必要に応じて case 4, 5... を追加可能
      }

      // 先頭の "# " を削除
      // マッチした文字数分（#の数 + スペース1つ）を削除
      p.editAsText().deleteText(0, level);
    }
  });

  // ---------------------------------------------
  // 2. 太字の処理 (**)
  // ---------------------------------------------
  var searchPattern = "\\*\\*(.*?)\\*\\*";
  var found = body.findText(searchPattern);

  while (found) {
    var elem = found.getElement().asText();
    var start = found.getStartOffset();
    var end = found.getEndOffsetInclusive();

    // 中身をボールド化
    if (start + 2 <= end - 2) {
      elem.setBold(start + 2, end - 2, true);
    }

    // "**" を削除
    elem.deleteText(end - 1, end);     // 後ろ
    elem.deleteText(start, start + 1); // 前

    // 再検索
    found = body.findText(searchPattern, found);
  }
}
