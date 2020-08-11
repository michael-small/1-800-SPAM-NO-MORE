function checkTextMessage() {
  // Text Message
  let text = document.getElementById('text-message').innerHTML;

  // Word literal matches
  commonSpamWords = [
    'activity',
    'address',
    'amazon',
    'account',
    'bank',
    'btc',
    'bitcoin',
    'bit.ly',
    'card',
    'claim',
    'coupon',
    'credit',
    'debt',
    'delete',
    'deletion',
    'free',
    'gift',
    'go to',
    'irs',
    'loan',
    'locked',
    'log',
    'name',
    'now',
    'number',
    'password',
    'payment',
    'prize',
    'problem',
    'social security',
    'survey',
    'suspicious',
    'tax',
    'urgent',
    'username',
    'win',
    'won',
    '$',
  ];

  let wordLiteralRegex = new RegExp(commonSpamWords.join('|'), 'gi');
  let wordLiteralMatches = text.match(wordLiteralRegex) || [];

  document
    .getElementById('matches')
    .insertAdjacentHTML(
      'beforeend',
      wordLiteralMatches.slice(0, -1).join(', ')
    );
  document.getElementById('literal_matches_num').innerHTML =
    wordLiteralMatches.length;

  // Matches of the `utm_` family
  let underscoreMatches = text.match(/(utm_.*?=)/g);
  document
    .getElementById('underscore_matches')
    .insertAdjacentHTML('beforeend', underscoreMatches.join(', '));
  document.getElementById('underscore_matches_num').innerHTML =
    underscoreMatches.length;
}
