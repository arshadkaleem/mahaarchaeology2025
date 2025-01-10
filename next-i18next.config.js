const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'mr-IN',
    locales: ['en', 'mr-IN'],
    localeDetection: false,
    localePath: path.resolve('./public/locales')
  },
};