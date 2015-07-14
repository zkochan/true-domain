'use strict';

module.exports = (function(d) {
  var trueDomain, p;
  var domain = d.domain;
  var s = '_gd' + Math.random();

  function getTrueDomain(parts, domain) {
    domain = parts.pop() + (!domain ? '' : '.' + domain);
    d.cookie = s + '=' + s + ';domain=' + domain + ';';
    if (!parts.length || d.cookie.indexOf(s + '=' + s) !== -1) {
      return domain;
    }
    return getTrueDomain(parts, domain);
  }

  p = domain.split('.');
  trueDomain = getTrueDomain(p);

  d.cookie = s + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=' +
    trueDomain + ';';
  return trueDomain;
})(document);
