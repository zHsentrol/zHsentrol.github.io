module.exports = {
  rules: [
    {
      pattern: /\/api\/getLivelist.php\?rtype=origin$/,
      respondwith: './livelist.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=more$/,
      respondwith: './livelist-more.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=refresh$/,
      respondwith: './livelist-refresh.json'
    },
    {
      pattern: /\/api\/getLiveDetail.php\?id=1$/,
      respondwith: './detail.json'
    },
    {
      pattern: /\/api\/getLiveDetail.php\?id=2$/,
      respondwith: './detail2.json'
    }
  ]
};
