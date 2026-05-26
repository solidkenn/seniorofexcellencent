export const SHEET_FORM_URL =
  'https://script.google.com/macros/s/AKfycbxWjT6wCySMHMVz-II8_4zdrHaBgn1CELBfEhzsWcCIMtoaE_cDmIAM1zIC2ifbFbxB/exec';

export function submitToGoogleSheet(tab, row) {
  return fetch(SHEET_FORM_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ tab, row })
  });
}

export function sheetFormTimestamp() {
  return new Date().toISOString();
}
