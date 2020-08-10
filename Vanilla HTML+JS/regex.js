function checkTextMessage() {
  let text = document.getElementById('text-message').innerHTML;
  let wordLiteralMatches = text.match(
    /survey|win|won|go to|\$|gift|card|amazon|irs|tax|must|bit.ly|bank|account|locked|log|password|username|deletion|delete|bitcoin|btc|urgent|now/gi
  );
  document
    .getElementById('matches')
    .insertAdjacentHTML('beforeend', wordLiteralMatches.join(', '));
  document.getElementById('literal_matches_num').innerHTML =
    wordLiteralMatches.length;

  let underscoreMatches = text.match(/(utm_.*?)/);
  document
    .getElementById('underscore_matches')
    .insertAdjacentHTML('beforeend', underscoreMatches.join(', '));
  document.getElementById('underscore_matches_num').innerHTML =
    underscoreMatches.length;
}
