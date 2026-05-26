(function () {
  window.SHEET_FORM_URL =
    'https://script.google.com/macros/s/AKfycbxWjT6wCySMHMVz-II8_4zdrHaBgn1CELBfEhzsWcCIMtoaE_cDmIAM1zIC2ifbFbxB/exec';

  window.submitToGoogleSheet = function (tab, row) {
    return fetch(window.SHEET_FORM_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ tab: tab, row: row })
    });
  };

  window.sheetFormTimestamp = function () {
    return new Date().toISOString();
  };
})();
