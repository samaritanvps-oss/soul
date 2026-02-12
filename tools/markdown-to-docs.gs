/**
 * Markdown → Google Docs 統合変換スクリプト
 * 
 * 機能:
 * - 見出し変換（# ## ###）
 * - 太字変換（**text**）
 * - テーブル変換（| col | col |）
 * 
 * 使い方:
 * 1. Google Docsで「拡張機能」→「Apps Script」
 * 2. このコードを貼り付けて保存
 * 3. ドキュメントをリロード
 * 4. メニュー「Markdown変換」から実行
 */

// === テーブル変換 ===
function convertSelectedTable() {
  var doc = DocumentApp.getActiveDocument();
  var selection = doc.getSelection();
  
  if (!selection) {
    DocumentApp.getUi().alert('テーブル部分を選択してから実行してください。');
    return;
  }
  
  var elements = selection.getRangeElements();
  var tableText = '';
  var paragraphsToRemove = [];
  
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i].getElement();
    if (el.getType() === DocumentApp.ElementType.PARAGRAPH) {
      tableText += el.asText().getText() + '\n';
      paragraphsToRemove.push(el);
    } else if (el.getType() === DocumentApp.ElementType.TEXT) {
      tableText += el.asText().getText() + '\n';
      paragraphsToRemove.push(el.getParent());
    }
  }
  
  var rows = tableText.trim().split('\n');
  var tableData = [];
  
  for (var j = 0; j < rows.length; j++) {
    var row = rows[j];
    if (row.indexOf('|') === -1) continue;
    if (/^[\|\s\-:]+$/.test(row)) continue;
    
    var parts = row.split('|');
    var cells = [];
    for (var k = 1; k < parts.length - 1; k++) {
      cells.push(parts[k].trim());
    }
    
    var allEmpty = true;
    for (var m = 0; m < cells.length; m++) {
      if (!/^[\-:]*$/.test(cells[m])) {
        allEmpty = false;
        break;
      }
    }
    if (allEmpty) continue;
    
    if (cells.length > 0) {
      tableData.push(cells);
    }
  }
  
  if (tableData.length === 0) {
    DocumentApp.getUi().alert('有効なテーブルが見つかりませんでした。');
    return;
  }
  
  var numCols = 0;
  for (var n = 0; n < tableData.length; n++) {
    if (tableData[n].length > numCols) numCols = tableData[n].length;
  }
  
  for (var p = 0; p < tableData.length; p++) {
    while (tableData[p].length < numCols) {
      tableData[p].push('');
    }
  }
  
  var body = doc.getBody();
  var firstPara = paragraphsToRemove[0];
  var insertIndex = body.getChildIndex(firstPara);
  
  var table = body.insertTable(insertIndex, tableData);
  
  var headerRow = table.getRow(0);
  for (var q = 0; q < headerRow.getNumCells(); q++) {
    headerRow.getCell(q).editAsText().setBold(true);
  }
  
  for (var r = paragraphsToRemove.length - 1; r >= 0; r--) {
    try {
      body.removeChild(paragraphsToRemove[r]);
    } catch (e) {}
  }
  
  DocumentApp.getUi().alert('テーブルを変換しました！');
}

// === 書式変換（太字・見出し） ===
function convertMarkdownFormatting() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var paragraphs = body.getParagraphs();
  var convertedCount = 0;
  
  for (var i = 0; i < paragraphs.length; i++) {
    var para = paragraphs[i];
    var text = para.getText();
    
    // 見出し変換
    var headingMatch = text.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      var level = headingMatch[1].length;
      var content = headingMatch[2];
      para.setText(content);
      
      if (level === 1) {
        para.setHeading(DocumentApp.ParagraphHeading.HEADING1);
      } else if (level === 2) {
        para.setHeading(DocumentApp.ParagraphHeading.HEADING2);
      } else {
        para.setHeading(DocumentApp.ParagraphHeading.HEADING3);
      }
      convertedCount++;
      continue;
    }
    
    // 太字変換
    var boldRegex = /\*\*([^*]+)\*\*/;
    var match;
    while ((match = boldRegex.exec(para.getText())) !== null) {
      var startIdx = match.index;
      var innerText = match[1];
      var currentText = para.getText();
      var newText = currentText.substring(0, startIdx) + innerText + currentText.substring(startIdx + match[0].length);
      para.setText(newText);
      para.editAsText().setBold(startIdx, startIdx + innerText.length - 1, true);
      convertedCount++;
    }
  }
  
  DocumentApp.getUi().alert(convertedCount + ' 箇所を変換しました！');
}

// === メニュー追加 ===
function onOpen() {
  DocumentApp.getUi()
    .createMenu('Markdown変換')
    .addItem('書式を変換（太字・見出し）', 'convertMarkdownFormatting')
    .addItem('選択範囲をテーブルに変換', 'convertSelectedTable')
    .addToUi();
}
