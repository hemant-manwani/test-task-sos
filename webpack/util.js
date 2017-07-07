'use strict';

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'developemnt';

module.exports = {
  isProduction,
  isDevelopment,
};
