/**
 * Reference Apps Script for Google Sheet form backend.
 * Paste into Extensions → Apps Script in your spreadsheet, then Deploy → Web App.
 * Access: Anyone | Execute as: Me
 *
 * Sheet tabs required: "Contact" and "Nominations"
 */

var SHEET_ID = 'YOUR_SPREADSHEET_ID';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getSheetByName(data.tab);
    if (!sheet) {
      return jsonOutput({ result: 'error', message: 'Tab not found: ' + data.tab });
    }
    sheet.appendRow(data.row);
    return jsonOutput({ result: 'success' });
  } catch (err) {
    return jsonOutput({ result: 'error', message: String(err) });
  }
}

function doGet() {
  return jsonOutput({ result: 'ok', message: 'Seniors of Excellence NT form endpoint is running.' });
}

function jsonOutput(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
