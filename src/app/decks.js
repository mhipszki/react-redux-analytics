const intro = {
  title: 'Hello React London!',
  content: [
    '🙂',
    'my name is 👋 Marton',
    'this talk is about',
    '*Analytics in a React / Redux SPA*',
    'tonight',
    'analytics, GTM, architecture,',
    'SPAs vs traditional websites'
  ]
};

const analyticsForBetterUx = {
  title: 'Analytics for better UX',
  content: [
    '*how*',
    '🔍 capturing indicative data',
    '*why*',
    '🤔 understanding users => improve UX',
    '*importance*',
    '😬 not having event tracking',
    '🙄 trusting your tracking setup',
    '👍 making the right decisions'
  ]
};

const recapOnGTM = {
  title: 'Quick recap on GTM',
  content: [
    '*Google Tag Manager*',
    'Data Layer Variables 👉 extract information',
    'Triggers 👉 conditionally fire tags',
    'Tags 👉 relay data to 3rd parties (GA, etc)',
    '*publishing setup*',
    'gtm.js',
    '*sharing information*',
    '`window.dataLayer = []`',
    '`<button data-foo="bar">click me</button>`',
    '`window.dataLayer.push()`'
  ]
};

const traditionalVsSPAs = {
  title: 'SPAs vs traditional websites',
  content: [
    '❤️ GTM built-ins to help up and running',
    '*single page view*',
    '😱 Data Layer won`t be re-set',
    '😕 data only availabe after SPA loaded',
    '*some extra work needed*',
    '👻 virtual page views',
    '`window.dataLayer.push("productId", undefined)`'
  ]
};

const waysOfImplementingAnalytics = {
  title: 'Different ways of adding Analytics',
  content: [
    '😩 Custom Data Attributes `data-product-id="p1234"`',
    '⬇️',
    '😕 `window.dataLayer.push()`',
    '⬇️',
    '🙃 importing the `analytics` module',
    '⬇️',
    '😊 passing `onButtonClick` to presentational components',
    '⬇️',
    '😎 Redux actions to trigger tracking events'
  ]
};

const demoPage = 'demo-page';

const analyticsMiddleware = {
  title: 'The Analytics Middleware',
  content: [
    '👀 watches for actions to be tracked',
    '🏗 pulls data from store',
    '🛠 transforms data for analytics',
    '🥊 pushes data to GTM Data Layer',
    '👌 loose coupling (abstraction layer)'
  ]
};

const dataContract = {
  title: 'Data contract / Data Layer',
  content: [
    '*📜 contract*',
    'analytics is a consumer',
    'analytics 👉 F/E 👉 B/E',
    'sharing information',
    'when it breaks',
    '*💾 Data Layer*',
    'similar to Redux store',
    'GTM extracts from there',
    '⚠️ needs to be kept clean!'
  ]
};

const dontHateAnalytics = {
  title: 'I hate analytics, how to fix that?',
  content: [
    'just another requirement',
    '¯\\_(ツ)_/¯',
    '😕 usually added afterwards',
    '🤔 retrofitting challenges',
    '😩 GTM docs are not dev friendly',
    '👥 3 amigos refinement',
    '💡 add to A/C early',
    '✅ build analytics layer with first feature'
  ]
};

const wrapUp = {
  title: 'Wrap up',
  content: [
    'analytics is for 👩‍🔧👨‍✈️👩‍🍳👨‍⚕️🎅',
    'analytics is not 🚀👨‍🔬',
    'collaborate 💡',
    'think architecture and scalability 👓',
    'use Redux middleware + mapped actions 👌',
    'keep Data Layer clean',
    'learning Analytics makes you a better dev 😉'
  ]
};

const thankYou = {
  title: 'Thank you',
  content: [
    '😌',
    'Marton Hipszki',
    'equalexperts.com',
    '🐦 twitter: twitter.com/mhipszki',
    '*try the demo*',
    '*have a look at the code*',
    '💻 github.com/mhipszki/react-redux-analytics'
  ]
};

const decks = [
  intro,
  analyticsForBetterUx,
  recapOnGTM,
  traditionalVsSPAs,
  demoPage,
  waysOfImplementingAnalytics,
  analyticsMiddleware,
  dataContract,
  dontHateAnalytics,
  wrapUp,
  thankYou
];

export default decks;
