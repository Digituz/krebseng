const devConfig = {
  domain: 'http://app.local:3000',
};

const prodConfig = {
  domain: 'https://www.krebseng.com.br',
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

module.exports = {
  ...config
};
