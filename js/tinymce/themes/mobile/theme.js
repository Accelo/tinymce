(function () {
var mobile = (function () {
  'use strict';

  var noop = function () {
  };
  var noarg = function (f) {
    return function () {
      return f();
    };
  };
  var compose = function (fa, fb) {
    return function () {
      return fa(fb.apply(null, arguments));
    };
  };
  var constant = function (value) {
    return function () {
      return value;
    };
  };
  var identity = function (x) {
    return x;
  };
  var tripleEquals = function (a, b) {
    return a === b;
  };
  var curry = function (f) {
    var args = new Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++)
      args[i - 1] = arguments[i];
    return function () {
      var newArgs = new Array(arguments.length);
      for (var j = 0; j < newArgs.length; j++)
        newArgs[j] = arguments[j];
      var all = args.concat(newArgs);
      return f.apply(null, all);
    };
  };
  var not = function (f) {
    return function () {
      return !f.apply(null, arguments);
    };
  };
  var die = function (msg) {
    return function () {
      throw new Error(msg);
    };
  };
  var apply = function (f) {
    return f();
  };
  var call = function (f) {
    f();
  };
  var never = constant(false);
  var always = constant(true);
  var $_26xiiiwjjdxlezmo = {
    noop: noop,
    noarg: noarg,
    compose: compose,
    constant: constant,
    identity: identity,
    tripleEquals: tripleEquals,
    curry: curry,
    not: not,
    die: die,
    apply: apply,
    call: call,
    never: never,
    always: always
  };

  var $_f2g7alwijdxlezmh = {
    contextmenu: $_26xiiiwjjdxlezmo.constant('contextmenu'),
    touchstart: $_26xiiiwjjdxlezmo.constant('touchstart'),
    touchmove: $_26xiiiwjjdxlezmo.constant('touchmove'),
    touchend: $_26xiiiwjjdxlezmo.constant('touchend'),
    gesturestart: $_26xiiiwjjdxlezmo.constant('gesturestart'),
    mousedown: $_26xiiiwjjdxlezmo.constant('mousedown'),
    mousemove: $_26xiiiwjjdxlezmo.constant('mousemove'),
    mouseout: $_26xiiiwjjdxlezmo.constant('mouseout'),
    mouseup: $_26xiiiwjjdxlezmo.constant('mouseup'),
    mouseover: $_26xiiiwjjdxlezmo.constant('mouseover'),
    focusin: $_26xiiiwjjdxlezmo.constant('focusin'),
    keydown: $_26xiiiwjjdxlezmo.constant('keydown'),
    input: $_26xiiiwjjdxlezmo.constant('input'),
    change: $_26xiiiwjjdxlezmo.constant('change'),
    focus: $_26xiiiwjjdxlezmo.constant('focus'),
    click: $_26xiiiwjjdxlezmo.constant('click'),
    transitionend: $_26xiiiwjjdxlezmo.constant('transitionend'),
    selectstart: $_26xiiiwjjdxlezmo.constant('selectstart')
  };

  var cached = function (f) {
    var called = false;
    var r;
    return function () {
      if (!called) {
        called = true;
        r = f.apply(null, arguments);
      }
      return r;
    };
  };
  var $_6hk83awljdxlezmy = { cached: cached };

  var firstMatch = function (regexes, s) {
    for (var i = 0; i < regexes.length; i++) {
      var x = regexes[i];
      if (x.test(s))
        return x;
    }
    return undefined;
  };
  var find = function (regexes, agent) {
    var r = firstMatch(regexes, agent);
    if (!r)
      return {
        major: 0,
        minor: 0
      };
    var group = function (i) {
      return Number(agent.replace(r, '$' + i));
    };
    return nu(group(1), group(2));
  };
  var detect = function (versionRegexes, agent) {
    var cleanedAgent = String(agent).toLowerCase();
    if (versionRegexes.length === 0)
      return unknown();
    return find(versionRegexes, cleanedAgent);
  };
  var unknown = function () {
    return nu(0, 0);
  };
  var nu = function (major, minor) {
    return {
      major: major,
      minor: minor
    };
  };
  var $_ex1pbjwojdxlezn6 = {
    nu: nu,
    detect: detect,
    unknown: unknown
  };

  var edge = 'Edge';
  var chrome = 'Chrome';
  var ie = 'IE';
  var opera = 'Opera';
  var firefox = 'Firefox';
  var safari = 'Safari';
  var isBrowser = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown$1 = function () {
    return nu$1({
      current: undefined,
      version: $_ex1pbjwojdxlezn6.unknown()
    });
  };
  var nu$1 = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isEdge: isBrowser(edge, current),
      isChrome: isBrowser(chrome, current),
      isIE: isBrowser(ie, current),
      isOpera: isBrowser(opera, current),
      isFirefox: isBrowser(firefox, current),
      isSafari: isBrowser(safari, current)
    };
  };
  var $_ads89swnjdxlezn1 = {
    unknown: unknown$1,
    nu: nu$1,
    edge: $_26xiiiwjjdxlezmo.constant(edge),
    chrome: $_26xiiiwjjdxlezmo.constant(chrome),
    ie: $_26xiiiwjjdxlezmo.constant(ie),
    opera: $_26xiiiwjjdxlezmo.constant(opera),
    firefox: $_26xiiiwjjdxlezmo.constant(firefox),
    safari: $_26xiiiwjjdxlezmo.constant(safari)
  };

  var windows = 'Windows';
  var ios = 'iOS';
  var android = 'Android';
  var linux = 'Linux';
  var osx = 'OSX';
  var solaris = 'Solaris';
  var freebsd = 'FreeBSD';
  var isOS = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown$2 = function () {
    return nu$2({
      current: undefined,
      version: $_ex1pbjwojdxlezn6.unknown()
    });
  };
  var nu$2 = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isWindows: isOS(windows, current),
      isiOS: isOS(ios, current),
      isAndroid: isOS(android, current),
      isOSX: isOS(osx, current),
      isLinux: isOS(linux, current),
      isSolaris: isOS(solaris, current),
      isFreeBSD: isOS(freebsd, current)
    };
  };
  var $_484g3cwpjdxlezn9 = {
    unknown: unknown$2,
    nu: nu$2,
    windows: $_26xiiiwjjdxlezmo.constant(windows),
    ios: $_26xiiiwjjdxlezmo.constant(ios),
    android: $_26xiiiwjjdxlezmo.constant(android),
    linux: $_26xiiiwjjdxlezmo.constant(linux),
    osx: $_26xiiiwjjdxlezmo.constant(osx),
    solaris: $_26xiiiwjjdxlezmo.constant(solaris),
    freebsd: $_26xiiiwjjdxlezmo.constant(freebsd)
  };

  function DeviceType (os, browser, userAgent) {
    var isiPad = os.isiOS() && /ipad/i.test(userAgent) === true;
    var isiPhone = os.isiOS() && !isiPad;
    var isAndroid3 = os.isAndroid() && os.version.major === 3;
    var isAndroid4 = os.isAndroid() && os.version.major === 4;
    var isTablet = isiPad || isAndroid3 || isAndroid4 && /mobile/i.test(userAgent) === true;
    var isTouch = os.isiOS() || os.isAndroid();
    var isPhone = isTouch && !isTablet;
    var iOSwebview = browser.isSafari() && os.isiOS() && /safari/i.test(userAgent) === false;
    return {
      isiPad: $_26xiiiwjjdxlezmo.constant(isiPad),
      isiPhone: $_26xiiiwjjdxlezmo.constant(isiPhone),
      isTablet: $_26xiiiwjjdxlezmo.constant(isTablet),
      isPhone: $_26xiiiwjjdxlezmo.constant(isPhone),
      isTouch: $_26xiiiwjjdxlezmo.constant(isTouch),
      isAndroid: os.isAndroid,
      isiOS: os.isiOS,
      isWebView: $_26xiiiwjjdxlezmo.constant(iOSwebview)
    };
  }

  var never$1 = $_26xiiiwjjdxlezmo.never;
  var always$1 = $_26xiiiwjjdxlezmo.always;
  var none = function () {
    return NONE;
  };
  var NONE = function () {
    var eq = function (o) {
      return o.isNone();
    };
    var call = function (thunk) {
      return thunk();
    };
    var id = function (n) {
      return n;
    };
    var noop = function () {
    };
    var me = {
      fold: function (n, s) {
        return n();
      },
      is: never$1,
      isSome: never$1,
      isNone: always$1,
      getOr: id,
      getOrThunk: call,
      getOrDie: function (msg) {
        throw new Error(msg || 'error: getOrDie called on none.');
      },
      or: id,
      orThunk: call,
      map: none,
      ap: none,
      each: noop,
      bind: none,
      flatten: none,
      exists: never$1,
      forall: always$1,
      filter: none,
      equals: eq,
      equals_: eq,
      toArray: function () {
        return [];
      },
      toString: $_26xiiiwjjdxlezmo.constant('none()')
    };
    if (Object.freeze)
      Object.freeze(me);
    return me;
  }();
  var some = function (a) {
    var constant_a = function () {
      return a;
    };
    var self = function () {
      return me;
    };
    var map = function (f) {
      return some(f(a));
    };
    var bind = function (f) {
      return f(a);
    };
    var me = {
      fold: function (n, s) {
        return s(a);
      },
      is: function (v) {
        return a === v;
      },
      isSome: always$1,
      isNone: never$1,
      getOr: constant_a,
      getOrThunk: constant_a,
      getOrDie: constant_a,
      or: self,
      orThunk: self,
      map: map,
      ap: function (optfab) {
        return optfab.fold(none, function (fab) {
          return some(fab(a));
        });
      },
      each: function (f) {
        f(a);
      },
      bind: bind,
      flatten: constant_a,
      exists: bind,
      forall: bind,
      filter: function (f) {
        return f(a) ? me : NONE;
      },
      equals: function (o) {
        return o.is(a);
      },
      equals_: function (o, elementEq) {
        return o.fold(never$1, function (b) {
          return elementEq(a, b);
        });
      },
      toArray: function () {
        return [a];
      },
      toString: function () {
        return 'some(' + a + ')';
      }
    };
    return me;
  };
  var from = function (value) {
    return value === null || value === undefined ? NONE : some(value);
  };
  var Option = {
    some: some,
    none: none,
    from: from
  };

  var rawIndexOf = function () {
    var pIndexOf = Array.prototype.indexOf;
    var fastIndex = function (xs, x) {
      return pIndexOf.call(xs, x);
    };
    var slowIndex = function (xs, x) {
      return slowIndexOf(xs, x);
    };
    return pIndexOf === undefined ? slowIndex : fastIndex;
  }();
  var indexOf = function (xs, x) {
    var r = rawIndexOf(xs, x);
    return r === -1 ? Option.none() : Option.some(r);
  };
  var contains = function (xs, x) {
    return rawIndexOf(xs, x) > -1;
  };
  var exists = function (xs, pred) {
    return findIndex(xs, pred).isSome();
  };
  var range = function (num, f) {
    var r = [];
    for (var i = 0; i < num; i++) {
      r.push(f(i));
    }
    return r;
  };
  var chunk = function (array, size) {
    var r = [];
    for (var i = 0; i < array.length; i += size) {
      var s = array.slice(i, i + size);
      r.push(s);
    }
    return r;
  };
  var map = function (xs, f) {
    var len = xs.length;
    var r = new Array(len);
    for (var i = 0; i < len; i++) {
      var x = xs[i];
      r[i] = f(x, i, xs);
    }
    return r;
  };
  var each = function (xs, f) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      f(x, i, xs);
    }
  };
  var eachr = function (xs, f) {
    for (var i = xs.length - 1; i >= 0; i--) {
      var x = xs[i];
      f(x, i, xs);
    }
  };
  var partition = function (xs, pred) {
    var pass = [];
    var fail = [];
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      var arr = pred(x, i, xs) ? pass : fail;
      arr.push(x);
    }
    return {
      pass: pass,
      fail: fail
    };
  };
  var filter = function (xs, pred) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        r.push(x);
      }
    }
    return r;
  };
  var groupBy = function (xs, f) {
    if (xs.length === 0) {
      return [];
    } else {
      var wasType = f(xs[0]);
      var r = [];
      var group = [];
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        var type = f(x);
        if (type !== wasType) {
          r.push(group);
          group = [];
        }
        wasType = type;
        group.push(x);
      }
      if (group.length !== 0) {
        r.push(group);
      }
      return r;
    }
  };
  var foldr = function (xs, f, acc) {
    eachr(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var foldl = function (xs, f, acc) {
    each(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var find$1 = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(x);
      }
    }
    return Option.none();
  };
  var findIndex = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(i);
      }
    }
    return Option.none();
  };
  var slowIndexOf = function (xs, x) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (xs[i] === x) {
        return i;
      }
    }
    return -1;
  };
  var push = Array.prototype.push;
  var flatten = function (xs) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (!Array.prototype.isPrototypeOf(xs[i]))
        throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
      push.apply(r, xs[i]);
    }
    return r;
  };
  var bind = function (xs, f) {
    var output = map(xs, f);
    return flatten(output);
  };
  var forall = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      var x = xs[i];
      if (pred(x, i, xs) !== true) {
        return false;
      }
    }
    return true;
  };
  var equal = function (a1, a2) {
    return a1.length === a2.length && forall(a1, function (x, i) {
      return x === a2[i];
    });
  };
  var slice = Array.prototype.slice;
  var reverse = function (xs) {
    var r = slice.call(xs, 0);
    r.reverse();
    return r;
  };
  var difference = function (a1, a2) {
    return filter(a1, function (x) {
      return !contains(a2, x);
    });
  };
  var mapToObject = function (xs, f) {
    var r = {};
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      r[String(x)] = f(x, i);
    }
    return r;
  };
  var pure = function (x) {
    return [x];
  };
  var sort = function (xs, comparator) {
    var copy = slice.call(xs, 0);
    copy.sort(comparator);
    return copy;
  };
  var head = function (xs) {
    return xs.length === 0 ? Option.none() : Option.some(xs[0]);
  };
  var last = function (xs) {
    return xs.length === 0 ? Option.none() : Option.some(xs[xs.length - 1]);
  };
  var $_6dbxmwwsjdxleznr = {
    map: map,
    each: each,
    eachr: eachr,
    partition: partition,
    filter: filter,
    groupBy: groupBy,
    indexOf: indexOf,
    foldr: foldr,
    foldl: foldl,
    find: find$1,
    findIndex: findIndex,
    flatten: flatten,
    bind: bind,
    forall: forall,
    exists: exists,
    contains: contains,
    equal: equal,
    reverse: reverse,
    chunk: chunk,
    difference: difference,
    mapToObject: mapToObject,
    pure: pure,
    sort: sort,
    range: range,
    head: head,
    last: last
  };

  var detect$1 = function (candidates, userAgent) {
    var agent = String(userAgent).toLowerCase();
    return $_6dbxmwwsjdxleznr.find(candidates, function (candidate) {
      return candidate.search(agent);
    });
  };
  var detectBrowser = function (browsers, userAgent) {
    return detect$1(browsers, userAgent).map(function (browser) {
      var version = $_ex1pbjwojdxlezn6.detect(browser.versionRegexes, userAgent);
      return {
        current: browser.name,
        version: version
      };
    });
  };
  var detectOs = function (oses, userAgent) {
    return detect$1(oses, userAgent).map(function (os) {
      var version = $_ex1pbjwojdxlezn6.detect(os.versionRegexes, userAgent);
      return {
        current: os.name,
        version: version
      };
    });
  };
  var $_do6z77wrjdxlezni = {
    detectBrowser: detectBrowser,
    detectOs: detectOs
  };

  var addToStart = function (str, prefix) {
    return prefix + str;
  };
  var addToEnd = function (str, suffix) {
    return str + suffix;
  };
  var removeFromStart = function (str, numChars) {
    return str.substring(numChars);
  };
  var removeFromEnd = function (str, numChars) {
    return str.substring(0, str.length - numChars);
  };
  var $_tkhsbwwjdxlezp1 = {
    addToStart: addToStart,
    addToEnd: addToEnd,
    removeFromStart: removeFromStart,
    removeFromEnd: removeFromEnd
  };

  var first = function (str, count) {
    return str.substr(0, count);
  };
  var last$1 = function (str, count) {
    return str.substr(str.length - count, str.length);
  };
  var head$1 = function (str) {
    return str === '' ? Option.none() : Option.some(str.substr(0, 1));
  };
  var tail = function (str) {
    return str === '' ? Option.none() : Option.some(str.substring(1));
  };
  var $_anc0dewxjdxlezp2 = {
    first: first,
    last: last$1,
    head: head$1,
    tail: tail
  };

  var checkRange = function (str, substr, start) {
    if (substr === '')
      return true;
    if (str.length < substr.length)
      return false;
    var x = str.substr(start, start + substr.length);
    return x === substr;
  };
  var supplant = function (str, obj) {
    var isStringOrNumber = function (a) {
      var t = typeof a;
      return t === 'string' || t === 'number';
    };
    return str.replace(/\${([^{}]*)}/g, function (a, b) {
      var value = obj[b];
      return isStringOrNumber(value) ? value : a;
    });
  };
  var removeLeading = function (str, prefix) {
    return startsWith(str, prefix) ? $_tkhsbwwjdxlezp1.removeFromStart(str, prefix.length) : str;
  };
  var removeTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? $_tkhsbwwjdxlezp1.removeFromEnd(str, prefix.length) : str;
  };
  var ensureLeading = function (str, prefix) {
    return startsWith(str, prefix) ? str : $_tkhsbwwjdxlezp1.addToStart(str, prefix);
  };
  var ensureTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? str : $_tkhsbwwjdxlezp1.addToEnd(str, prefix);
  };
  var contains$1 = function (str, substr) {
    return str.indexOf(substr) !== -1;
  };
  var capitalize = function (str) {
    return $_anc0dewxjdxlezp2.head(str).bind(function (head) {
      return $_anc0dewxjdxlezp2.tail(str).map(function (tail) {
        return head.toUpperCase() + tail;
      });
    }).getOr(str);
  };
  var startsWith = function (str, prefix) {
    return checkRange(str, prefix, 0);
  };
  var endsWith = function (str, suffix) {
    return checkRange(str, suffix, str.length - suffix.length);
  };
  var trim = function (str) {
    return str.replace(/^\s+|\s+$/g, '');
  };
  var lTrim = function (str) {
    return str.replace(/^\s+/g, '');
  };
  var rTrim = function (str) {
    return str.replace(/\s+$/g, '');
  };
  var $_4304iowvjdxlezox = {
    supplant: supplant,
    startsWith: startsWith,
    removeLeading: removeLeading,
    removeTrailing: removeTrailing,
    ensureLeading: ensureLeading,
    ensureTrailing: ensureTrailing,
    endsWith: endsWith,
    contains: contains$1,
    trim: trim,
    lTrim: lTrim,
    rTrim: rTrim,
    capitalize: capitalize
  };

  var normalVersionRegex = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/;
  var checkContains = function (target) {
    return function (uastring) {
      return $_4304iowvjdxlezox.contains(uastring, target);
    };
  };
  var browsers = [
    {
      name: 'Edge',
      versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
      search: function (uastring) {
        var monstrosity = $_4304iowvjdxlezox.contains(uastring, 'edge/') && $_4304iowvjdxlezox.contains(uastring, 'chrome') && $_4304iowvjdxlezox.contains(uastring, 'safari') && $_4304iowvjdxlezox.contains(uastring, 'applewebkit');
        return monstrosity;
      }
    },
    {
      name: 'Chrome',
      versionRegexes: [
        /.*?chrome\/([0-9]+)\.([0-9]+).*/,
        normalVersionRegex
      ],
      search: function (uastring) {
        return $_4304iowvjdxlezox.contains(uastring, 'chrome') && !$_4304iowvjdxlezox.contains(uastring, 'chromeframe');
      }
    },
    {
      name: 'IE',
      versionRegexes: [
        /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
        /.*?rv:([0-9]+)\.([0-9]+).*/
      ],
      search: function (uastring) {
        return $_4304iowvjdxlezox.contains(uastring, 'msie') || $_4304iowvjdxlezox.contains(uastring, 'trident');
      }
    },
    {
      name: 'Opera',
      versionRegexes: [
        normalVersionRegex,
        /.*?opera\/([0-9]+)\.([0-9]+).*/
      ],
      search: checkContains('opera')
    },
    {
      name: 'Firefox',
      versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
      search: checkContains('firefox')
    },
    {
      name: 'Safari',
      versionRegexes: [
        normalVersionRegex,
        /.*?cpu os ([0-9]+)_([0-9]+).*/
      ],
      search: function (uastring) {
        return ($_4304iowvjdxlezox.contains(uastring, 'safari') || $_4304iowvjdxlezox.contains(uastring, 'mobile/')) && $_4304iowvjdxlezox.contains(uastring, 'applewebkit');
      }
    }
  ];
  var oses = [
    {
      name: 'Windows',
      search: checkContains('win'),
      versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'iOS',
      search: function (uastring) {
        return $_4304iowvjdxlezox.contains(uastring, 'iphone') || $_4304iowvjdxlezox.contains(uastring, 'ipad');
      },
      versionRegexes: [
        /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        /.*cpu os ([0-9]+)_([0-9]+).*/,
        /.*cpu iphone os ([0-9]+)_([0-9]+).*/
      ]
    },
    {
      name: 'Android',
      search: checkContains('android'),
      versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'OSX',
      search: checkContains('os x'),
      versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
    },
    {
      name: 'Linux',
      search: checkContains('linux'),
      versionRegexes: []
    },
    {
      name: 'Solaris',
      search: checkContains('sunos'),
      versionRegexes: []
    },
    {
      name: 'FreeBSD',
      search: checkContains('freebsd'),
      versionRegexes: []
    }
  ];
  var $_675cpfwujdxlezop = {
    browsers: $_26xiiiwjjdxlezmo.constant(browsers),
    oses: $_26xiiiwjjdxlezmo.constant(oses)
  };

  var detect$2 = function (userAgent) {
    var browsers = $_675cpfwujdxlezop.browsers();
    var oses = $_675cpfwujdxlezop.oses();
    var browser = $_do6z77wrjdxlezni.detectBrowser(browsers, userAgent).fold($_ads89swnjdxlezn1.unknown, $_ads89swnjdxlezn1.nu);
    var os = $_do6z77wrjdxlezni.detectOs(oses, userAgent).fold($_484g3cwpjdxlezn9.unknown, $_484g3cwpjdxlezn9.nu);
    var deviceType = DeviceType(os, browser, userAgent);
    return {
      browser: browser,
      os: os,
      deviceType: deviceType
    };
  };
  var $_5096jowmjdxlezn0 = { detect: detect$2 };

  var detect$3 = $_6hk83awljdxlezmy.cached(function () {
    var userAgent = navigator.userAgent;
    return $_5096jowmjdxlezn0.detect(userAgent);
  });
  var $_g8mzcxwkjdxlezmu = { detect: detect$3 };

  var alloy = { tap: $_26xiiiwjjdxlezmo.constant('alloy.tap') };
  var $_7mziizwhjdxlezm8 = {
    focus: $_26xiiiwjjdxlezmo.constant('alloy.focus'),
    postBlur: $_26xiiiwjjdxlezmo.constant('alloy.blur.post'),
    receive: $_26xiiiwjjdxlezmo.constant('alloy.receive'),
    execute: $_26xiiiwjjdxlezmo.constant('alloy.execute'),
    focusItem: $_26xiiiwjjdxlezmo.constant('alloy.focus.item'),
    tap: alloy.tap,
    tapOrClick: $_g8mzcxwkjdxlezmu.detect().deviceType.isTouch() ? alloy.tap : $_f2g7alwijdxlezmh.click,
    longpress: $_26xiiiwjjdxlezmo.constant('alloy.longpress'),
    sandboxClose: $_26xiiiwjjdxlezmo.constant('alloy.sandbox.close'),
    systemInit: $_26xiiiwjjdxlezmo.constant('alloy.system.init'),
    windowScroll: $_26xiiiwjjdxlezmo.constant('alloy.system.scroll'),
    attachedToDom: $_26xiiiwjjdxlezmo.constant('alloy.system.attached'),
    detachedFromDom: $_26xiiiwjjdxlezmo.constant('alloy.system.detached'),
    changeTab: $_26xiiiwjjdxlezmo.constant('alloy.change.tab'),
    dismissTab: $_26xiiiwjjdxlezmo.constant('alloy.dismiss.tab')
  };

  var typeOf = function (x) {
    if (x === null)
      return 'null';
    var t = typeof x;
    if (t === 'object' && Array.prototype.isPrototypeOf(x))
      return 'array';
    if (t === 'object' && String.prototype.isPrototypeOf(x))
      return 'string';
    return t;
  };
  var isType = function (type) {
    return function (value) {
      return typeOf(value) === type;
    };
  };
  var $_9wk4wvwzjdxlezp8 = {
    isString: isType('string'),
    isObject: isType('object'),
    isArray: isType('array'),
    isNull: isType('null'),
    isBoolean: isType('boolean'),
    isUndefined: isType('undefined'),
    isFunction: isType('function'),
    isNumber: isType('number')
  };

  var shallow = function (old, nu) {
    return nu;
  };
  var deep = function (old, nu) {
    var bothObjects = $_9wk4wvwzjdxlezp8.isObject(old) && $_9wk4wvwzjdxlezp8.isObject(nu);
    return bothObjects ? deepMerge(old, nu) : nu;
  };
  var baseMerge = function (merger) {
    return function () {
      var objects = new Array(arguments.length);
      for (var i = 0; i < objects.length; i++)
        objects[i] = arguments[i];
      if (objects.length === 0)
        throw new Error('Can\'t merge zero objects');
      var ret = {};
      for (var j = 0; j < objects.length; j++) {
        var curObject = objects[j];
        for (var key in curObject)
          if (curObject.hasOwnProperty(key)) {
            ret[key] = merger(ret[key], curObject[key]);
          }
      }
      return ret;
    };
  };
  var deepMerge = baseMerge(deep);
  var merge = baseMerge(shallow);
  var $_dngveawyjdxlezp5 = {
    deepMerge: deepMerge,
    merge: merge
  };

  var keys = function () {
    var fastKeys = Object.keys;
    var slowKeys = function (o) {
      var r = [];
      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          r.push(i);
        }
      }
      return r;
    };
    return fastKeys === undefined ? slowKeys : fastKeys;
  }();
  var each$1 = function (obj, f) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      f(x, i, obj);
    }
  };
  var objectMap = function (obj, f) {
    return tupleMap(obj, function (x, i, obj) {
      return {
        k: i,
        v: f(x, i, obj)
      };
    });
  };
  var tupleMap = function (obj, f) {
    var r = {};
    each$1(obj, function (x, i) {
      var tuple = f(x, i, obj);
      r[tuple.k] = tuple.v;
    });
    return r;
  };
  var bifilter = function (obj, pred) {
    var t = {};
    var f = {};
    each$1(obj, function (x, i) {
      var branch = pred(x, i) ? t : f;
      branch[i] = x;
    });
    return {
      t: t,
      f: f
    };
  };
  var mapToArray = function (obj, f) {
    var r = [];
    each$1(obj, function (value, name) {
      r.push(f(value, name));
    });
    return r;
  };
  var find$2 = function (obj, pred) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      if (pred(x, i, obj)) {
        return Option.some(x);
      }
    }
    return Option.none();
  };
  var values = function (obj) {
    return mapToArray(obj, function (v) {
      return v;
    });
  };
  var size = function (obj) {
    return values(obj).length;
  };
  var $_8ih830x0jdxlezpa = {
    bifilter: bifilter,
    each: each$1,
    map: objectMap,
    mapToArray: mapToArray,
    tupleMap: tupleMap,
    find: find$2,
    keys: keys,
    values: values,
    size: size
  };

  var emit = function (component, event) {
    dispatchWith(component, component.element(), event, {});
  };
  var emitWith = function (component, event, properties) {
    dispatchWith(component, component.element(), event, properties);
  };
  var emitExecute = function (component) {
    emit(component, $_7mziizwhjdxlezm8.execute());
  };
  var dispatch = function (component, target, event) {
    dispatchWith(component, target, event, {});
  };
  var dispatchWith = function (component, target, event, properties) {
    var data = $_dngveawyjdxlezp5.deepMerge({ target: target }, properties);
    component.getSystem().triggerEvent(event, target, $_8ih830x0jdxlezpa.map(data, $_26xiiiwjjdxlezmo.constant));
  };
  var dispatchEvent = function (component, target, event, simulatedEvent) {
    component.getSystem().triggerEvent(event, target, simulatedEvent.event());
  };
  var dispatchFocus = function (component, target) {
    component.getSystem().triggerFocus(target, component.element());
  };
  var $_7qvrqpwgjdxlezlj = {
    emit: emit,
    emitWith: emitWith,
    emitExecute: emitExecute,
    dispatch: dispatch,
    dispatchWith: dispatchWith,
    dispatchEvent: dispatchEvent,
    dispatchFocus: dispatchFocus
  };

  function Immutable () {
    var fields = arguments;
    return function () {
      var values = new Array(arguments.length);
      for (var i = 0; i < values.length; i++)
        values[i] = arguments[i];
      if (fields.length !== values.length)
        throw new Error('Wrong number of arguments to struct. Expected "[' + fields.length + ']", got ' + values.length + ' arguments');
      var struct = {};
      $_6dbxmwwsjdxleznr.each(fields, function (name, i) {
        struct[name] = $_26xiiiwjjdxlezmo.constant(values[i]);
      });
      return struct;
    };
  }

  var sort$1 = function (arr) {
    return arr.slice(0).sort();
  };
  var reqMessage = function (required, keys) {
    throw new Error('All required keys (' + sort$1(required).join(', ') + ') were not specified. Specified keys were: ' + sort$1(keys).join(', ') + '.');
  };
  var unsuppMessage = function (unsupported) {
    throw new Error('Unsupported keys for object: ' + sort$1(unsupported).join(', '));
  };
  var validateStrArr = function (label, array) {
    if (!$_9wk4wvwzjdxlezp8.isArray(array))
      throw new Error('The ' + label + ' fields must be an array. Was: ' + array + '.');
    $_6dbxmwwsjdxleznr.each(array, function (a) {
      if (!$_9wk4wvwzjdxlezp8.isString(a))
        throw new Error('The value ' + a + ' in the ' + label + ' fields was not a string.');
    });
  };
  var invalidTypeMessage = function (incorrect, type) {
    throw new Error('All values need to be of type: ' + type + '. Keys (' + sort$1(incorrect).join(', ') + ') were not.');
  };
  var checkDupes = function (everything) {
    var sorted = sort$1(everything);
    var dupe = $_6dbxmwwsjdxleznr.find(sorted, function (s, i) {
      return i < sorted.length - 1 && s === sorted[i + 1];
    });
    dupe.each(function (d) {
      throw new Error('The field: ' + d + ' occurs more than once in the combined fields: [' + sorted.join(', ') + '].');
    });
  };
  var $_2s4hm9x7jdxlezqo = {
    sort: sort$1,
    reqMessage: reqMessage,
    unsuppMessage: unsuppMessage,
    validateStrArr: validateStrArr,
    invalidTypeMessage: invalidTypeMessage,
    checkDupes: checkDupes
  };

  function MixedBag (required, optional) {
    var everything = required.concat(optional);
    if (everything.length === 0)
      throw new Error('You must specify at least one required or optional field.');
    $_2s4hm9x7jdxlezqo.validateStrArr('required', required);
    $_2s4hm9x7jdxlezqo.validateStrArr('optional', optional);
    $_2s4hm9x7jdxlezqo.checkDupes(everything);
    return function (obj) {
      var keys = $_8ih830x0jdxlezpa.keys(obj);
      var allReqd = $_6dbxmwwsjdxleznr.forall(required, function (req) {
        return $_6dbxmwwsjdxleznr.contains(keys, req);
      });
      if (!allReqd)
        $_2s4hm9x7jdxlezqo.reqMessage(required, keys);
      var unsupported = $_6dbxmwwsjdxleznr.filter(keys, function (key) {
        return !$_6dbxmwwsjdxleznr.contains(everything, key);
      });
      if (unsupported.length > 0)
        $_2s4hm9x7jdxlezqo.unsuppMessage(unsupported);
      var r = {};
      $_6dbxmwwsjdxleznr.each(required, function (req) {
        r[req] = $_26xiiiwjjdxlezmo.constant(obj[req]);
      });
      $_6dbxmwwsjdxleznr.each(optional, function (opt) {
        r[opt] = $_26xiiiwjjdxlezmo.constant(Object.prototype.hasOwnProperty.call(obj, opt) ? Option.some(obj[opt]) : Option.none());
      });
      return r;
    };
  }

  var $_8fo9b5x4jdxlezqc = {
    immutable: Immutable,
    immutableBag: MixedBag
  };

  var toArray = function (target, f) {
    var r = [];
    var recurse = function (e) {
      r.push(e);
      return f(e);
    };
    var cur = f(target);
    do {
      cur = cur.bind(recurse);
    } while (cur.isSome());
    return r;
  };
  var $_55iwd0x8jdxlezqt = { toArray: toArray };

  var global = typeof window !== 'undefined' ? window : Function('return this;')();

  var path = function (parts, scope) {
    var o = scope !== undefined && scope !== null ? scope : global;
    for (var i = 0; i < parts.length && o !== undefined && o !== null; ++i)
      o = o[parts[i]];
    return o;
  };
  var resolve = function (p, scope) {
    var parts = p.split('.');
    return path(parts, scope);
  };
  var step = function (o, part) {
    if (o[part] === undefined || o[part] === null)
      o[part] = {};
    return o[part];
  };
  var forge = function (parts, target) {
    var o = target !== undefined ? target : global;
    for (var i = 0; i < parts.length; ++i)
      o = step(o, parts[i]);
    return o;
  };
  var namespace = function (name, target) {
    var parts = name.split('.');
    return forge(parts, target);
  };
  var $_qedxixcjdxlezrk = {
    path: path,
    resolve: resolve,
    forge: forge,
    namespace: namespace
  };

  var unsafe = function (name, scope) {
    return $_qedxixcjdxlezrk.resolve(name, scope);
  };
  var getOrDie = function (name, scope) {
    var actual = unsafe(name, scope);
    if (actual === undefined || actual === null)
      throw name + ' not available on this browser';
    return actual;
  };
  var $_g695cyxbjdxlezrf = { getOrDie: getOrDie };

  var node = function () {
    var f = $_g695cyxbjdxlezrf.getOrDie('Node');
    return f;
  };
  var compareDocumentPosition = function (a, b, match) {
    return (a.compareDocumentPosition(b) & match) !== 0;
  };
  var documentPositionPreceding = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_PRECEDING);
  };
  var documentPositionContainedBy = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_CONTAINED_BY);
  };
  var $_act1pdxajdxlezrc = {
    documentPositionPreceding: documentPositionPreceding,
    documentPositionContainedBy: documentPositionContainedBy
  };

  var fromHtml = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    if (!div.hasChildNodes() || div.childNodes.length > 1) {
      console.error('HTML does not have a single root node', html);
      throw 'HTML must have a single root node';
    }
    return fromDom(div.childNodes[0]);
  };
  var fromTag = function (tag, scope) {
    var doc = scope || document;
    var node = doc.createElement(tag);
    return fromDom(node);
  };
  var fromText = function (text, scope) {
    var doc = scope || document;
    var node = doc.createTextNode(text);
    return fromDom(node);
  };
  var fromDom = function (node) {
    if (node === null || node === undefined)
      throw new Error('Node cannot be null or undefined');
    return { dom: $_26xiiiwjjdxlezmo.constant(node) };
  };
  var fromPoint = function (doc, x, y) {
    return Option.from(doc.dom().elementFromPoint(x, y)).map(fromDom);
  };
  var $_2ejbh1xfjdxlezs6 = {
    fromHtml: fromHtml,
    fromTag: fromTag,
    fromText: fromText,
    fromDom: fromDom,
    fromPoint: fromPoint
  };

  var $_29l77oxgjdxlezsc = {
    ATTRIBUTE: 2,
    CDATA_SECTION: 4,
    COMMENT: 8,
    DOCUMENT: 9,
    DOCUMENT_TYPE: 10,
    DOCUMENT_FRAGMENT: 11,
    ELEMENT: 1,
    TEXT: 3,
    PROCESSING_INSTRUCTION: 7,
    ENTITY_REFERENCE: 5,
    ENTITY: 6,
    NOTATION: 12
  };

  var ELEMENT = $_29l77oxgjdxlezsc.ELEMENT;
  var DOCUMENT = $_29l77oxgjdxlezsc.DOCUMENT;
  var is = function (element, selector) {
    var elem = element.dom();
    if (elem.nodeType !== ELEMENT)
      return false;
    else if (elem.matches !== undefined)
      return elem.matches(selector);
    else if (elem.msMatchesSelector !== undefined)
      return elem.msMatchesSelector(selector);
    else if (elem.webkitMatchesSelector !== undefined)
      return elem.webkitMatchesSelector(selector);
    else if (elem.mozMatchesSelector !== undefined)
      return elem.mozMatchesSelector(selector);
    else
      throw new Error('Browser lacks native selectors');
  };
  var bypassSelector = function (dom) {
    return dom.nodeType !== ELEMENT && dom.nodeType !== DOCUMENT || dom.childElementCount === 0;
  };
  var all = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? [] : $_6dbxmwwsjdxleznr.map(base.querySelectorAll(selector), $_2ejbh1xfjdxlezs6.fromDom);
  };
  var one = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? Option.none() : Option.from(base.querySelector(selector)).map($_2ejbh1xfjdxlezs6.fromDom);
  };
  var $_3c0spqxejdxlezrz = {
    all: all,
    is: is,
    one: one
  };

  var eq = function (e1, e2) {
    return e1.dom() === e2.dom();
  };
  var isEqualNode = function (e1, e2) {
    return e1.dom().isEqualNode(e2.dom());
  };
  var member = function (element, elements) {
    return $_6dbxmwwsjdxleznr.exists(elements, $_26xiiiwjjdxlezmo.curry(eq, element));
  };
  var regularContains = function (e1, e2) {
    var d1 = e1.dom(), d2 = e2.dom();
    return d1 === d2 ? false : d1.contains(d2);
  };
  var ieContains = function (e1, e2) {
    return $_act1pdxajdxlezrc.documentPositionContainedBy(e1.dom(), e2.dom());
  };
  var browser = $_g8mzcxwkjdxlezmu.detect().browser;
  var contains$2 = browser.isIE() ? ieContains : regularContains;
  var $_4u044dx9jdxlezqw = {
    eq: eq,
    isEqualNode: isEqualNode,
    member: member,
    contains: contains$2,
    is: $_3c0spqxejdxlezrz.is
  };

  var owner = function (element) {
    return $_2ejbh1xfjdxlezs6.fromDom(element.dom().ownerDocument);
  };
  var documentElement = function (element) {
    var doc = owner(element);
    return $_2ejbh1xfjdxlezs6.fromDom(doc.dom().documentElement);
  };
  var defaultView = function (element) {
    var el = element.dom();
    var defaultView = el.ownerDocument.defaultView;
    return $_2ejbh1xfjdxlezs6.fromDom(defaultView);
  };
  var parent = function (element) {
    var dom = element.dom();
    return Option.from(dom.parentNode).map($_2ejbh1xfjdxlezs6.fromDom);
  };
  var findIndex$1 = function (element) {
    return parent(element).bind(function (p) {
      var kin = children(p);
      return $_6dbxmwwsjdxleznr.findIndex(kin, function (elem) {
        return $_4u044dx9jdxlezqw.eq(element, elem);
      });
    });
  };
  var parents = function (element, isRoot) {
    var stop = $_9wk4wvwzjdxlezp8.isFunction(isRoot) ? isRoot : $_26xiiiwjjdxlezmo.constant(false);
    var dom = element.dom();
    var ret = [];
    while (dom.parentNode !== null && dom.parentNode !== undefined) {
      var rawParent = dom.parentNode;
      var parent = $_2ejbh1xfjdxlezs6.fromDom(rawParent);
      ret.push(parent);
      if (stop(parent) === true)
        break;
      else
        dom = rawParent;
    }
    return ret;
  };
  var siblings = function (element) {
    var filterSelf = function (elements) {
      return $_6dbxmwwsjdxleznr.filter(elements, function (x) {
        return !$_4u044dx9jdxlezqw.eq(element, x);
      });
    };
    return parent(element).map(children).map(filterSelf).getOr([]);
  };
  var offsetParent = function (element) {
    var dom = element.dom();
    return Option.from(dom.offsetParent).map($_2ejbh1xfjdxlezs6.fromDom);
  };
  var prevSibling = function (element) {
    var dom = element.dom();
    return Option.from(dom.previousSibling).map($_2ejbh1xfjdxlezs6.fromDom);
  };
  var nextSibling = function (element) {
    var dom = element.dom();
    return Option.from(dom.nextSibling).map($_2ejbh1xfjdxlezs6.fromDom);
  };
  var prevSiblings = function (element) {
    return $_6dbxmwwsjdxleznr.reverse($_55iwd0x8jdxlezqt.toArray(element, prevSibling));
  };
  var nextSiblings = function (element) {
    return $_55iwd0x8jdxlezqt.toArray(element, nextSibling);
  };
  var children = function (element) {
    var dom = element.dom();
    return $_6dbxmwwsjdxleznr.map(dom.childNodes, $_2ejbh1xfjdxlezs6.fromDom);
  };
  var child = function (element, index) {
    var children = element.dom().childNodes;
    return Option.from(children[index]).map($_2ejbh1xfjdxlezs6.fromDom);
  };
  var firstChild = function (element) {
    return child(element, 0);
  };
  var lastChild = function (element) {
    return child(element, element.dom().childNodes.length - 1);
  };
  var childNodesCount = function (element) {
    return element.dom().childNodes.length;
  };
  var hasChildNodes = function (element) {
    return element.dom().hasChildNodes();
  };
  var spot = $_8fo9b5x4jdxlezqc.immutable('element', 'offset');
  var leaf = function (element, offset) {
    var cs = children(element);
    return cs.length > 0 && offset < cs.length ? spot(cs[offset], 0) : spot(element, offset);
  };
  var $_s9ri4x3jdxlezpx = {
    owner: owner,
    defaultView: defaultView,
    documentElement: documentElement,
    parent: parent,
    findIndex: findIndex$1,
    parents: parents,
    siblings: siblings,
    prevSibling: prevSibling,
    offsetParent: offsetParent,
    prevSiblings: prevSiblings,
    nextSibling: nextSibling,
    nextSiblings: nextSiblings,
    children: children,
    child: child,
    firstChild: firstChild,
    lastChild: lastChild,
    childNodesCount: childNodesCount,
    hasChildNodes: hasChildNodes,
    leaf: leaf
  };

  var before = function (marker, element) {
    var parent = $_s9ri4x3jdxlezpx.parent(marker);
    parent.each(function (v) {
      v.dom().insertBefore(element.dom(), marker.dom());
    });
  };
  var after = function (marker, element) {
    var sibling = $_s9ri4x3jdxlezpx.nextSibling(marker);
    sibling.fold(function () {
      var parent = $_s9ri4x3jdxlezpx.parent(marker);
      parent.each(function (v) {
        append(v, element);
      });
    }, function (v) {
      before(v, element);
    });
  };
  var prepend = function (parent, element) {
    var firstChild = $_s9ri4x3jdxlezpx.firstChild(parent);
    firstChild.fold(function () {
      append(parent, element);
    }, function (v) {
      parent.dom().insertBefore(element.dom(), v.dom());
    });
  };
  var append = function (parent, element) {
    parent.dom().appendChild(element.dom());
  };
  var appendAt = function (parent, element, index) {
    $_s9ri4x3jdxlezpx.child(parent, index).fold(function () {
      append(parent, element);
    }, function (v) {
      before(v, element);
    });
  };
  var wrap = function (element, wrapper) {
    before(element, wrapper);
    append(wrapper, element);
  };
  var $_72vikbx2jdxlezpu = {
    before: before,
    after: after,
    prepend: prepend,
    append: append,
    appendAt: appendAt,
    wrap: wrap
  };

  var before$1 = function (marker, elements) {
    $_6dbxmwwsjdxleznr.each(elements, function (x) {
      $_72vikbx2jdxlezpu.before(marker, x);
    });
  };
  var after$1 = function (marker, elements) {
    $_6dbxmwwsjdxleznr.each(elements, function (x, i) {
      var e = i === 0 ? marker : elements[i - 1];
      $_72vikbx2jdxlezpu.after(e, x);
    });
  };
  var prepend$1 = function (parent, elements) {
    $_6dbxmwwsjdxleznr.each(elements.slice().reverse(), function (x) {
      $_72vikbx2jdxlezpu.prepend(parent, x);
    });
  };
  var append$1 = function (parent, elements) {
    $_6dbxmwwsjdxleznr.each(elements, function (x) {
      $_72vikbx2jdxlezpu.append(parent, x);
    });
  };
  var $_gixrgexijdxlezsi = {
    before: before$1,
    after: after$1,
    prepend: prepend$1,
    append: append$1
  };

  var empty = function (element) {
    element.dom().textContent = '';
    $_6dbxmwwsjdxleznr.each($_s9ri4x3jdxlezpx.children(element), function (rogue) {
      remove(rogue);
    });
  };
  var remove = function (element) {
    var dom = element.dom();
    if (dom.parentNode !== null)
      dom.parentNode.removeChild(dom);
  };
  var unwrap = function (wrapper) {
    var children = $_s9ri4x3jdxlezpx.children(wrapper);
    if (children.length > 0)
      $_gixrgexijdxlezsi.before(wrapper, children);
    remove(wrapper);
  };
  var $_6zenc9xhjdxlezse = {
    empty: empty,
    remove: remove,
    unwrap: unwrap
  };

  var name = function (element) {
    var r = element.dom().nodeName;
    return r.toLowerCase();
  };
  var type = function (element) {
    return element.dom().nodeType;
  };
  var value = function (element) {
    return element.dom().nodeValue;
  };
  var isType$1 = function (t) {
    return function (element) {
      return type(element) === t;
    };
  };
  var isComment = function (element) {
    return type(element) === $_29l77oxgjdxlezsc.COMMENT || name(element) === '#comment';
  };
  var isElement = isType$1($_29l77oxgjdxlezsc.ELEMENT);
  var isText = isType$1($_29l77oxgjdxlezsc.TEXT);
  var isDocument = isType$1($_29l77oxgjdxlezsc.DOCUMENT);
  var $_xp48txkjdxlezsr = {
    name: name,
    type: type,
    value: value,
    isElement: isElement,
    isText: isText,
    isDocument: isDocument,
    isComment: isComment
  };

  var inBody = function (element) {
    var dom = $_xp48txkjdxlezsr.isText(element) ? element.dom().parentNode : element.dom();
    return dom !== undefined && dom !== null && dom.ownerDocument.body.contains(dom);
  };
  var body = $_6hk83awljdxlezmy.cached(function () {
    return getBody($_2ejbh1xfjdxlezs6.fromDom(document));
  });
  var getBody = function (doc) {
    var body = doc.dom().body;
    if (body === null || body === undefined)
      throw 'Body is not available yet';
    return $_2ejbh1xfjdxlezs6.fromDom(body);
  };
  var $_80u4ksxjjdxlezsm = {
    body: body,
    getBody: getBody,
    inBody: inBody
  };

  var fireDetaching = function (component) {
    $_7qvrqpwgjdxlezlj.emit(component, $_7mziizwhjdxlezm8.detachedFromDom());
    var children = component.components();
    $_6dbxmwwsjdxleznr.each(children, fireDetaching);
  };
  var fireAttaching = function (component) {
    var children = component.components();
    $_6dbxmwwsjdxleznr.each(children, fireAttaching);
    $_7qvrqpwgjdxlezlj.emit(component, $_7mziizwhjdxlezm8.attachedToDom());
  };
  var attach = function (parent, child) {
    attachWith(parent, child, $_72vikbx2jdxlezpu.append);
  };
  var attachWith = function (parent, child, insertion) {
    parent.getSystem().addToWorld(child);
    insertion(parent.element(), child.element());
    if ($_80u4ksxjjdxlezsm.inBody(parent.element()))
      fireAttaching(child);
    parent.syncComponents();
  };
  var doDetach = function (component) {
    fireDetaching(component);
    $_6zenc9xhjdxlezse.remove(component.element());
    component.getSystem().removeFromWorld(component);
  };
  var detach = function (component) {
    var parent = $_s9ri4x3jdxlezpx.parent(component.element()).bind(function (p) {
      return component.getSystem().getByDom(p).fold(Option.none, Option.some);
    });
    doDetach(component);
    parent.each(function (p) {
      p.syncComponents();
    });
  };
  var detachChildren = function (component) {
    var subs = component.components();
    $_6dbxmwwsjdxleznr.each(subs, doDetach);
    $_6zenc9xhjdxlezse.empty(component.element());
    component.syncComponents();
  };
  var attachSystem = function (element, guiSystem) {
    $_72vikbx2jdxlezpu.append(element, guiSystem.element());
    var children = $_s9ri4x3jdxlezpx.children(guiSystem.element());
    $_6dbxmwwsjdxleznr.each(children, function (child) {
      guiSystem.getByDom(child).each(fireAttaching);
    });
  };
  var detachSystem = function (guiSystem) {
    var children = $_s9ri4x3jdxlezpx.children(guiSystem.element());
    $_6dbxmwwsjdxleznr.each(children, function (child) {
      guiSystem.getByDom(child).each(fireDetaching);
    });
    $_6zenc9xhjdxlezse.remove(guiSystem.element());
  };
  var $_fzj7dix1jdxlezpg = {
    attach: attach,
    attachWith: attachWith,
    detach: detach,
    detachChildren: detachChildren,
    attachSystem: attachSystem,
    detachSystem: detachSystem
  };

  var fromHtml$1 = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    return $_s9ri4x3jdxlezpx.children($_2ejbh1xfjdxlezs6.fromDom(div));
  };
  var fromTags = function (tags, scope) {
    return $_6dbxmwwsjdxleznr.map(tags, function (x) {
      return $_2ejbh1xfjdxlezs6.fromTag(x, scope);
    });
  };
  var fromText$1 = function (texts, scope) {
    return $_6dbxmwwsjdxleznr.map(texts, function (x) {
      return $_2ejbh1xfjdxlezs6.fromText(x, scope);
    });
  };
  var fromDom$1 = function (nodes) {
    return $_6dbxmwwsjdxleznr.map(nodes, $_2ejbh1xfjdxlezs6.fromDom);
  };
  var $_1yxe25xpjdxleztv = {
    fromHtml: fromHtml$1,
    fromTags: fromTags,
    fromText: fromText$1,
    fromDom: fromDom$1
  };

  var get = function (element) {
    return element.dom().innerHTML;
  };
  var set = function (element, content) {
    var owner = $_s9ri4x3jdxlezpx.owner(element);
    var docDom = owner.dom();
    var fragment = $_2ejbh1xfjdxlezs6.fromDom(docDom.createDocumentFragment());
    var contentElements = $_1yxe25xpjdxleztv.fromHtml(content, docDom);
    $_gixrgexijdxlezsi.append(fragment, contentElements);
    $_6zenc9xhjdxlezse.empty(element);
    $_72vikbx2jdxlezpu.append(element, fragment);
  };
  var getOuter = function (element) {
    var container = $_2ejbh1xfjdxlezs6.fromTag('div');
    var clone = $_2ejbh1xfjdxlezs6.fromDom(element.dom().cloneNode(true));
    $_72vikbx2jdxlezpu.append(container, clone);
    return get(container);
  };
  var $_64cz3zxojdxleztt = {
    get: get,
    set: set,
    getOuter: getOuter
  };

  var rawSet = function (dom, key, value) {
    if ($_9wk4wvwzjdxlezp8.isString(value) || $_9wk4wvwzjdxlezp8.isBoolean(value) || $_9wk4wvwzjdxlezp8.isNumber(value)) {
      dom.setAttribute(key, value + '');
    } else {
      console.error('Invalid call to Attr.set. Key ', key, ':: Value ', value, ':: Element ', dom);
      throw new Error('Attribute value was not simple');
    }
  };
  var set$1 = function (element, key, value) {
    rawSet(element.dom(), key, value);
  };
  var setAll = function (element, attrs) {
    var dom = element.dom();
    $_8ih830x0jdxlezpa.each(attrs, function (v, k) {
      rawSet(dom, k, v);
    });
  };
  var get$1 = function (element, key) {
    var v = element.dom().getAttribute(key);
    return v === null ? undefined : v;
  };
  var has = function (element, key) {
    var dom = element.dom();
    return dom && dom.hasAttribute ? dom.hasAttribute(key) : false;
  };
  var remove$1 = function (element, key) {
    element.dom().removeAttribute(key);
  };
  var hasNone = function (element) {
    var attrs = element.dom().attributes;
    return attrs === undefined || attrs === null || attrs.length === 0;
  };
  var clone = function (element) {
    return $_6dbxmwwsjdxleznr.foldl(element.dom().attributes, function (acc, attr) {
      acc[attr.name] = attr.value;
      return acc;
    }, {});
  };
  var transferOne = function (source, destination, attr) {
    if (has(source, attr) && !has(destination, attr))
      set$1(destination, attr, get$1(source, attr));
  };
  var transfer = function (source, destination, attrs) {
    if (!$_xp48txkjdxlezsr.isElement(source) || !$_xp48txkjdxlezsr.isElement(destination))
      return;
    $_6dbxmwwsjdxleznr.each(attrs, function (attr) {
      transferOne(source, destination, attr);
    });
  };
  var $_72a1mgxrjdxlezu3 = {
    clone: clone,
    set: set$1,
    setAll: setAll,
    get: get$1,
    has: has,
    remove: remove$1,
    hasNone: hasNone,
    transfer: transfer
  };

  var clone$1 = function (original, deep) {
    return $_2ejbh1xfjdxlezs6.fromDom(original.dom().cloneNode(deep));
  };
  var shallow$1 = function (original) {
    return clone$1(original, false);
  };
  var deep$1 = function (original) {
    return clone$1(original, true);
  };
  var shallowAs = function (original, tag) {
    var nu = $_2ejbh1xfjdxlezs6.fromTag(tag);
    var attributes = $_72a1mgxrjdxlezu3.clone(original);
    $_72a1mgxrjdxlezu3.setAll(nu, attributes);
    return nu;
  };
  var copy = function (original, tag) {
    var nu = shallowAs(original, tag);
    var cloneChildren = $_s9ri4x3jdxlezpx.children(deep$1(original));
    $_gixrgexijdxlezsi.append(nu, cloneChildren);
    return nu;
  };
  var mutate = function (original, tag) {
    var nu = shallowAs(original, tag);
    $_72vikbx2jdxlezpu.before(original, nu);
    var children = $_s9ri4x3jdxlezpx.children(original);
    $_gixrgexijdxlezsi.append(nu, children);
    $_6zenc9xhjdxlezse.remove(original);
    return nu;
  };
  var $_6snpowxqjdxlezu0 = {
    shallow: shallow$1,
    shallowAs: shallowAs,
    deep: deep$1,
    copy: copy,
    mutate: mutate
  };

  var getHtml = function (element) {
    var clone = $_6snpowxqjdxlezu0.shallow(element);
    return $_64cz3zxojdxleztt.getOuter(clone);
  };
  var $_ay0ikaxnjdxleztn = { getHtml: getHtml };

  var element = function (elem) {
    return $_ay0ikaxnjdxleztn.getHtml(elem);
  };
  var $_5vhxqxmjdxleztl = { element: element };

  var value$1 = function (o) {
    var is = function (v) {
      return o === v;
    };
    var or = function (opt) {
      return value$1(o);
    };
    var orThunk = function (f) {
      return value$1(o);
    };
    var map = function (f) {
      return value$1(f(o));
    };
    var each = function (f) {
      f(o);
    };
    var bind = function (f) {
      return f(o);
    };
    var fold = function (_, onValue) {
      return onValue(o);
    };
    var exists = function (f) {
      return f(o);
    };
    var forall = function (f) {
      return f(o);
    };
    var toOption = function () {
      return Option.some(o);
    };
    return {
      is: is,
      isValue: $_26xiiiwjjdxlezmo.always,
      isError: $_26xiiiwjjdxlezmo.never,
      getOr: $_26xiiiwjjdxlezmo.constant(o),
      getOrThunk: $_26xiiiwjjdxlezmo.constant(o),
      getOrDie: $_26xiiiwjjdxlezmo.constant(o),
      or: or,
      orThunk: orThunk,
      fold: fold,
      map: map,
      each: each,
      bind: bind,
      exists: exists,
      forall: forall,
      toOption: toOption
    };
  };
  var error = function (message) {
    var getOrThunk = function (f) {
      return f();
    };
    var getOrDie = function () {
      return $_26xiiiwjjdxlezmo.die(message)();
    };
    var or = function (opt) {
      return opt;
    };
    var orThunk = function (f) {
      return f();
    };
    var map = function (f) {
      return error(message);
    };
    var bind = function (f) {
      return error(message);
    };
    var fold = function (onError, _) {
      return onError(message);
    };
    return {
      is: $_26xiiiwjjdxlezmo.never,
      isValue: $_26xiiiwjjdxlezmo.never,
      isError: $_26xiiiwjjdxlezmo.always,
      getOr: $_26xiiiwjjdxlezmo.identity,
      getOrThunk: getOrThunk,
      getOrDie: getOrDie,
      or: or,
      orThunk: orThunk,
      fold: fold,
      map: map,
      each: $_26xiiiwjjdxlezmo.noop,
      bind: bind,
      exists: $_26xiiiwjjdxlezmo.never,
      forall: $_26xiiiwjjdxlezmo.always,
      toOption: Option.none
    };
  };
  var Result = {
    value: value$1,
    error: error
  };

  var generate = function (cases) {
    if (!$_9wk4wvwzjdxlezp8.isArray(cases)) {
      throw new Error('cases must be an array');
    }
    if (cases.length === 0) {
      throw new Error('there must be at least one case');
    }
    var constructors = [];
    var adt = {};
    $_6dbxmwwsjdxleznr.each(cases, function (acase, count) {
      var keys = $_8ih830x0jdxlezpa.keys(acase);
      if (keys.length !== 1) {
        throw new Error('one and only one name per case');
      }
      var key = keys[0];
      var value = acase[key];
      if (adt[key] !== undefined) {
        throw new Error('duplicate key detected:' + key);
      } else if (key === 'cata') {
        throw new Error('cannot have a case named cata (sorry)');
      } else if (!$_9wk4wvwzjdxlezp8.isArray(value)) {
        throw new Error('case arguments must be an array');
      }
      constructors.push(key);
      adt[key] = function () {
        var argLength = arguments.length;
        if (argLength !== value.length) {
          throw new Error('Wrong number of arguments to case ' + key + '. Expected ' + value.length + ' (' + value + '), got ' + argLength);
        }
        var args = new Array(argLength);
        for (var i = 0; i < args.length; i++)
          args[i] = arguments[i];
        var match = function (branches) {
          var branchKeys = $_8ih830x0jdxlezpa.keys(branches);
          if (constructors.length !== branchKeys.length) {
            throw new Error('Wrong number of arguments to match. Expected: ' + constructors.join(',') + '\nActual: ' + branchKeys.join(','));
          }
          var allReqd = $_6dbxmwwsjdxleznr.forall(constructors, function (reqKey) {
            return $_6dbxmwwsjdxleznr.contains(branchKeys, reqKey);
          });
          if (!allReqd)
            throw new Error('Not all branches were specified when using match. Specified: ' + branchKeys.join(', ') + '\nRequired: ' + constructors.join(', '));
          return branches[key].apply(null, args);
        };
        return {
          fold: function () {
            if (arguments.length !== cases.length) {
              throw new Error('Wrong number of arguments to fold. Expected ' + cases.length + ', got ' + arguments.length);
            }
            var target = arguments[count];
            return target.apply(null, args);
          },
          match: match,
          log: function (label) {
            console.log(label, {
              constructors: constructors,
              constructor: key,
              params: args
            });
          }
        };
      };
    });
    return adt;
  };
  var $_dxqtfixwjdxlezva = { generate: generate };

  var comparison = $_dxqtfixwjdxlezva.generate([
    {
      bothErrors: [
        'error1',
        'error2'
      ]
    },
    {
      firstError: [
        'error1',
        'value2'
      ]
    },
    {
      secondError: [
        'value1',
        'error2'
      ]
    },
    {
      bothValues: [
        'value1',
        'value2'
      ]
    }
  ]);
  var partition$1 = function (results) {
    var errors = [];
    var values = [];
    $_6dbxmwwsjdxleznr.each(results, function (result) {
      result.fold(function (err) {
        errors.push(err);
      }, function (value) {
        values.push(value);
      });
    });
    return {
      errors: errors,
      values: values
    };
  };
  var compare = function (result1, result2) {
    return result1.fold(function (err1) {
      return result2.fold(function (err2) {
        return comparison.bothErrors(err1, err2);
      }, function (val2) {
        return comparison.firstError(err1, val2);
      });
    }, function (val1) {
      return result2.fold(function (err2) {
        return comparison.secondError(val1, err2);
      }, function (val2) {
        return comparison.bothValues(val1, val2);
      });
    });
  };
  var $_8wlqglxvjdxlezv5 = {
    partition: partition$1,
    compare: compare
  };

  var mergeValues = function (values, base) {
    return Result.value($_dngveawyjdxlezp5.deepMerge.apply(undefined, [base].concat(values)));
  };
  var mergeErrors = function (errors) {
    return $_26xiiiwjjdxlezmo.compose(Result.error, $_6dbxmwwsjdxleznr.flatten)(errors);
  };
  var consolidateObj = function (objects, base) {
    var partitions = $_8wlqglxvjdxlezv5.partition(objects);
    return partitions.errors.length > 0 ? mergeErrors(partitions.errors) : mergeValues(partitions.values, base);
  };
  var consolidateArr = function (objects) {
    var partitions = $_8wlqglxvjdxlezv5.partition(objects);
    return partitions.errors.length > 0 ? mergeErrors(partitions.errors) : Result.value(partitions.values);
  };
  var $_acwynvxtjdxlezuh = {
    consolidateObj: consolidateObj,
    consolidateArr: consolidateArr
  };

  var narrow = function (obj, fields) {
    var r = {};
    $_6dbxmwwsjdxleznr.each(fields, function (field) {
      if (obj[field] !== undefined && obj.hasOwnProperty(field))
        r[field] = obj[field];
    });
    return r;
  };
  var indexOnKey = function (array, key) {
    var obj = {};
    $_6dbxmwwsjdxleznr.each(array, function (a) {
      var keyValue = a[key];
      obj[keyValue] = a;
    });
    return obj;
  };
  var exclude = function (obj, fields) {
    var r = {};
    $_8ih830x0jdxlezpa.each(obj, function (v, k) {
      if (!$_6dbxmwwsjdxleznr.contains(fields, k)) {
        r[k] = v;
      }
    });
    return r;
  };
  var $_4sgddtxxjdxlezvj = {
    narrow: narrow,
    exclude: exclude,
    indexOnKey: indexOnKey
  };

  var readOpt = function (key) {
    return function (obj) {
      return obj.hasOwnProperty(key) ? Option.from(obj[key]) : Option.none();
    };
  };
  var readOr = function (key, fallback) {
    return function (obj) {
      return readOpt(key)(obj).getOr(fallback);
    };
  };
  var readOptFrom = function (obj, key) {
    return readOpt(key)(obj);
  };
  var hasKey = function (obj, key) {
    return obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null;
  };
  var $_9z6ufxyjdxlezvp = {
    readOpt: readOpt,
    readOr: readOr,
    readOptFrom: readOptFrom,
    hasKey: hasKey
  };

  var wrap$1 = function (key, value) {
    var r = {};
    r[key] = value;
    return r;
  };
  var wrapAll = function (keyvalues) {
    var r = {};
    $_6dbxmwwsjdxleznr.each(keyvalues, function (kv) {
      r[kv.key] = kv.value;
    });
    return r;
  };
  var $_37ulpwxzjdxlezvu = {
    wrap: wrap$1,
    wrapAll: wrapAll
  };

  var narrow$1 = function (obj, fields) {
    return $_4sgddtxxjdxlezvj.narrow(obj, fields);
  };
  var exclude$1 = function (obj, fields) {
    return $_4sgddtxxjdxlezvj.exclude(obj, fields);
  };
  var readOpt$1 = function (key) {
    return $_9z6ufxyjdxlezvp.readOpt(key);
  };
  var readOr$1 = function (key, fallback) {
    return $_9z6ufxyjdxlezvp.readOr(key, fallback);
  };
  var readOptFrom$1 = function (obj, key) {
    return $_9z6ufxyjdxlezvp.readOptFrom(obj, key);
  };
  var wrap$2 = function (key, value) {
    return $_37ulpwxzjdxlezvu.wrap(key, value);
  };
  var wrapAll$1 = function (keyvalues) {
    return $_37ulpwxzjdxlezvu.wrapAll(keyvalues);
  };
  var indexOnKey$1 = function (array, key) {
    return $_4sgddtxxjdxlezvj.indexOnKey(array, key);
  };
  var consolidate = function (objs, base) {
    return $_acwynvxtjdxlezuh.consolidateObj(objs, base);
  };
  var hasKey$1 = function (obj, key) {
    return $_9z6ufxyjdxlezvp.hasKey(obj, key);
  };
  var $_ey6c2jxsjdxlezue = {
    narrow: narrow$1,
    exclude: exclude$1,
    readOpt: readOpt$1,
    readOr: readOr$1,
    readOptFrom: readOptFrom$1,
    wrap: wrap$2,
    wrapAll: wrapAll$1,
    indexOnKey: indexOnKey$1,
    hasKey: hasKey$1,
    consolidate: consolidate
  };

  var cat = function (arr) {
    var r = [];
    var push = function (x) {
      r.push(x);
    };
    for (var i = 0; i < arr.length; i++) {
      arr[i].each(push);
    }
    return r;
  };
  var findMap = function (arr, f) {
    for (var i = 0; i < arr.length; i++) {
      var r = f(arr[i], i);
      if (r.isSome()) {
        return r;
      }
    }
    return Option.none();
  };
  var liftN = function (arr, f) {
    var r = [];
    for (var i = 0; i < arr.length; i++) {
      var x = arr[i];
      if (x.isSome()) {
        r.push(x.getOrDie());
      } else {
        return Option.none();
      }
    }
    return Option.some(f.apply(null, r));
  };
  var $_dznnjvy0jdxlezvy = {
    cat: cat,
    findMap: findMap,
    liftN: liftN
  };

  var unknown$3 = 'unknown';
  var debugging = true;
  var CHROME_INSPECTOR_GLOBAL = '__CHROME_INSPECTOR_CONNECTION_TO_ALLOY__';
  var eventsMonitored = [];
  var path$1 = [
    'alloy/data/Fields',
    'alloy/debugging/Debugging'
  ];
  var getTrace = function () {
    if (debugging === false)
      return unknown$3;
    var err = new Error();
    if (err.stack !== undefined) {
      var lines = err.stack.split('\n');
      return $_6dbxmwwsjdxleznr.find(lines, function (line) {
        return line.indexOf('alloy') > 0 && !$_6dbxmwwsjdxleznr.exists(path$1, function (p) {
          return line.indexOf(p) > -1;
        });
      }).getOr(unknown$3);
    } else {
      return unknown$3;
    }
  };
  var logHandler = function (label, handlerName, trace) {
  };
  var ignoreEvent = {
    logEventCut: $_26xiiiwjjdxlezmo.noop,
    logEventStopped: $_26xiiiwjjdxlezmo.noop,
    logNoParent: $_26xiiiwjjdxlezmo.noop,
    logEventNoHandlers: $_26xiiiwjjdxlezmo.noop,
    logEventResponse: $_26xiiiwjjdxlezmo.noop,
    write: $_26xiiiwjjdxlezmo.noop
  };
  var monitorEvent = function (eventName, initialTarget, f) {
    var logger = debugging && (eventsMonitored === '*' || $_6dbxmwwsjdxleznr.contains(eventsMonitored, eventName)) ? function () {
      var sequence = [];
      return {
        logEventCut: function (name, target, purpose) {
          sequence.push({
            outcome: 'cut',
            target: target,
            purpose: purpose
          });
        },
        logEventStopped: function (name, target, purpose) {
          sequence.push({
            outcome: 'stopped',
            target: target,
            purpose: purpose
          });
        },
        logNoParent: function (name, target, purpose) {
          sequence.push({
            outcome: 'no-parent',
            target: target,
            purpose: purpose
          });
        },
        logEventNoHandlers: function (name, target) {
          sequence.push({
            outcome: 'no-handlers-left',
            target: target
          });
        },
        logEventResponse: function (name, target, purpose) {
          sequence.push({
            outcome: 'response',
            purpose: purpose,
            target: target
          });
        },
        write: function () {
          if ($_6dbxmwwsjdxleznr.contains([
              'mousemove',
              'mouseover',
              'mouseout',
              $_7mziizwhjdxlezm8.systemInit()
            ], eventName))
            return;
          console.log(eventName, {
            event: eventName,
            target: initialTarget.dom(),
            sequence: $_6dbxmwwsjdxleznr.map(sequence, function (s) {
              if (!$_6dbxmwwsjdxleznr.contains([
                  'cut',
                  'stopped',
                  'response'
                ], s.outcome))
                return s.outcome;
              else
                return '{' + s.purpose + '} ' + s.outcome + ' at (' + $_5vhxqxmjdxleztl.element(s.target) + ')';
            })
          });
        }
      };
    }() : ignoreEvent;
    var output = f(logger);
    logger.write();
    return output;
  };
  var inspectorInfo = function (comp) {
    var go = function (c) {
      var cSpec = c.spec();
      return {
        '(original.spec)': cSpec,
        '(dom.ref)': c.element().dom(),
        '(element)': $_5vhxqxmjdxleztl.element(c.element()),
        '(initComponents)': $_6dbxmwwsjdxleznr.map(cSpec.components !== undefined ? cSpec.components : [], go),
        '(components)': $_6dbxmwwsjdxleznr.map(c.components(), go),
        '(bound.events)': $_8ih830x0jdxlezpa.mapToArray(c.events(), function (v, k) {
          return [k];
        }).join(', '),
        '(behaviours)': cSpec.behaviours !== undefined ? $_8ih830x0jdxlezpa.map(cSpec.behaviours, function (v, k) {
          return v === undefined ? '--revoked--' : {
            config: v.configAsRaw(),
            'original-config': v.initialConfig,
            state: c.readState(k)
          };
        }) : 'none'
      };
    };
    return go(comp);
  };
  var getOrInitConnection = function () {
    if (window[CHROME_INSPECTOR_GLOBAL] !== undefined)
      return window[CHROME_INSPECTOR_GLOBAL];
    else {
      window[CHROME_INSPECTOR_GLOBAL] = {
        systems: {},
        lookup: function (uid) {
          var systems = window[CHROME_INSPECTOR_GLOBAL].systems;
          var connections = $_8ih830x0jdxlezpa.keys(systems);
          return $_dznnjvy0jdxlezvy.findMap(connections, function (conn) {
            var connGui = systems[conn];
            return connGui.getByUid(uid).toOption().map(function (comp) {
              return $_ey6c2jxsjdxlezue.wrap($_5vhxqxmjdxleztl.element(comp.element()), inspectorInfo(comp));
            });
          });
        }
      };
      return window[CHROME_INSPECTOR_GLOBAL];
    }
  };
  var registerInspector = function (name, gui) {
    var connection = getOrInitConnection();
    connection.systems[name] = gui;
  };
  var $_8mf2lqxljdxlezsw = {
    logHandler: logHandler,
    noLogger: $_26xiiiwjjdxlezmo.constant(ignoreEvent),
    getTrace: getTrace,
    monitorEvent: monitorEvent,
    isDebugging: $_26xiiiwjjdxlezmo.constant(debugging),
    registerInspector: registerInspector
  };

  var isSource = function (component, simulatedEvent) {
    return $_4u044dx9jdxlezqw.eq(component.element(), simulatedEvent.event().target());
  };
  var $_aunkrxy5jdxlezx4 = { isSource: isSource };

  var adt = $_dxqtfixwjdxlezva.generate([
    { strict: [] },
    { defaultedThunk: ['fallbackThunk'] },
    { asOption: [] },
    { asDefaultedOptionThunk: ['fallbackThunk'] },
    { mergeWithThunk: ['baseThunk'] }
  ]);
  var defaulted = function (fallback) {
    return adt.defaultedThunk($_26xiiiwjjdxlezmo.constant(fallback));
  };
  var asDefaultedOption = function (fallback) {
    return adt.asDefaultedOptionThunk($_26xiiiwjjdxlezmo.constant(fallback));
  };
  var mergeWith = function (base) {
    return adt.mergeWithThunk($_26xiiiwjjdxlezmo.constant(base));
  };
  var $_8ycmk2y8jdxlezxw = {
    strict: adt.strict,
    asOption: adt.asOption,
    defaulted: defaulted,
    defaultedThunk: adt.defaultedThunk,
    asDefaultedOption: asDefaultedOption,
    asDefaultedOptionThunk: adt.asDefaultedOptionThunk,
    mergeWith: mergeWith,
    mergeWithThunk: adt.mergeWithThunk
  };

  var typeAdt = $_dxqtfixwjdxlezva.generate([
    {
      setOf: [
        'validator',
        'valueType'
      ]
    },
    { arrOf: ['valueType'] },
    { objOf: ['fields'] },
    { itemOf: ['validator'] },
    {
      choiceOf: [
        'key',
        'branches'
      ]
    },
    { thunk: ['description'] },
    {
      func: [
        'args',
        'outputSchema'
      ]
    }
  ]);
  var fieldAdt = $_dxqtfixwjdxlezva.generate([
    {
      field: [
        'name',
        'presence',
        'type'
      ]
    },
    { state: ['name'] }
  ]);
  var $_8ouvfeyajdxlezyw = {
    typeAdt: typeAdt,
    fieldAdt: fieldAdt
  };

  var json = function () {
    return $_g695cyxbjdxlezrf.getOrDie('JSON');
  };
  var parse = function (obj) {
    return json().parse(obj);
  };
  var stringify = function (obj, replacer, space) {
    return json().stringify(obj, replacer, space);
  };
  var $_67p1lqydjdxlezzd = {
    parse: parse,
    stringify: stringify
  };

  var formatObj = function (input) {
    return $_9wk4wvwzjdxlezp8.isObject(input) && $_8ih830x0jdxlezpa.keys(input).length > 100 ? ' removed due to size' : $_67p1lqydjdxlezzd.stringify(input, null, 2);
  };
  var formatErrors = function (errors) {
    var es = errors.length > 10 ? errors.slice(0, 10).concat([{
        path: [],
        getErrorInfo: function () {
          return '... (only showing first ten failures)';
        }
      }]) : errors;
    return $_6dbxmwwsjdxleznr.map(es, function (e) {
      return 'Failed path: (' + e.path.join(' > ') + ')\n' + e.getErrorInfo();
    });
  };
  var $_ggxwc7ycjdxlezz4 = {
    formatObj: formatObj,
    formatErrors: formatErrors
  };

  var nu$3 = function (path, getErrorInfo) {
    return Result.error([{
        path: path,
        getErrorInfo: getErrorInfo
      }]);
  };
  var missingStrict = function (path, key, obj) {
    return nu$3(path, function () {
      return 'Could not find valid *strict* value for "' + key + '" in ' + $_ggxwc7ycjdxlezz4.formatObj(obj);
    });
  };
  var missingKey = function (path, key) {
    return nu$3(path, function () {
      return 'Choice schema did not contain choice key: "' + key + '"';
    });
  };
  var missingBranch = function (path, branches, branch) {
    return nu$3(path, function () {
      return 'The chosen schema: "' + branch + '" did not exist in branches: ' + $_ggxwc7ycjdxlezz4.formatObj(branches);
    });
  };
  var unsupportedFields = function (path, unsupported) {
    return nu$3(path, function () {
      return 'There are unsupported fields: [' + unsupported.join(', ') + '] specified';
    });
  };
  var custom = function (path, err) {
    return nu$3(path, function () {
      return err;
    });
  };
  var toString = function (error) {
    return 'Failed path: (' + error.path.join(' > ') + ')\n' + error.getErrorInfo();
  };
  var $_gfstt0ybjdxlezz0 = {
    missingStrict: missingStrict,
    missingKey: missingKey,
    missingBranch: missingBranch,
    unsupportedFields: unsupportedFields,
    custom: custom,
    toString: toString
  };

  var adt$1 = $_dxqtfixwjdxlezva.generate([
    {
      field: [
        'key',
        'okey',
        'presence',
        'prop'
      ]
    },
    {
      state: [
        'okey',
        'instantiator'
      ]
    }
  ]);
  var output = function (okey, value) {
    return adt$1.state(okey, $_26xiiiwjjdxlezmo.constant(value));
  };
  var snapshot = function (okey) {
    return adt$1.state(okey, $_26xiiiwjjdxlezmo.identity);
  };
  var strictAccess = function (path, obj, key) {
    return $_9z6ufxyjdxlezvp.readOptFrom(obj, key).fold(function () {
      return $_gfstt0ybjdxlezz0.missingStrict(path, key, obj);
    }, Result.value);
  };
  var fallbackAccess = function (obj, key, fallbackThunk) {
    var v = $_9z6ufxyjdxlezvp.readOptFrom(obj, key).fold(function () {
      return fallbackThunk(obj);
    }, $_26xiiiwjjdxlezmo.identity);
    return Result.value(v);
  };
  var optionAccess = function (obj, key) {
    return Result.value($_9z6ufxyjdxlezvp.readOptFrom(obj, key));
  };
  var optionDefaultedAccess = function (obj, key, fallback) {
    var opt = $_9z6ufxyjdxlezvp.readOptFrom(obj, key).map(function (val) {
      return val === true ? fallback(obj) : val;
    });
    return Result.value(opt);
  };
  var cExtractOne = function (path, obj, field, strength) {
    return field.fold(function (key, okey, presence, prop) {
      var bundle = function (av) {
        return prop.extract(path.concat([key]), strength, av).map(function (res) {
          return $_37ulpwxzjdxlezvu.wrap(okey, strength(res));
        });
      };
      var bundleAsOption = function (optValue) {
        return optValue.fold(function () {
          var outcome = $_37ulpwxzjdxlezvu.wrap(okey, strength(Option.none()));
          return Result.value(outcome);
        }, function (ov) {
          return prop.extract(path.concat([key]), strength, ov).map(function (res) {
            return $_37ulpwxzjdxlezvu.wrap(okey, strength(Option.some(res)));
          });
        });
      };
      return function () {
        return presence.fold(function () {
          return strictAccess(path, obj, key).bind(bundle);
        }, function (fallbackThunk) {
          return fallbackAccess(obj, key, fallbackThunk).bind(bundle);
        }, function () {
          return optionAccess(obj, key).bind(bundleAsOption);
        }, function (fallbackThunk) {
          return optionDefaultedAccess(obj, key, fallbackThunk).bind(bundleAsOption);
        }, function (baseThunk) {
          var base = baseThunk(obj);
          return fallbackAccess(obj, key, $_26xiiiwjjdxlezmo.constant({})).map(function (v) {
            return $_dngveawyjdxlezp5.deepMerge(base, v);
          }).bind(bundle);
        });
      }();
    }, function (okey, instantiator) {
      var state = instantiator(obj);
      return Result.value($_37ulpwxzjdxlezvu.wrap(okey, strength(state)));
    });
  };
  var cExtract = function (path, obj, fields, strength) {
    var results = $_6dbxmwwsjdxleznr.map(fields, function (field) {
      return cExtractOne(path, obj, field, strength);
    });
    return $_acwynvxtjdxlezuh.consolidateObj(results, {});
  };
  var value$2 = function (validator) {
    var extract = function (path, strength, val) {
      return validator(val, strength).fold(function (err) {
        return $_gfstt0ybjdxlezz0.custom(path, err);
      }, Result.value);
    };
    var toString = function () {
      return 'val';
    };
    var toDsl = function () {
      return $_8ouvfeyajdxlezyw.typeAdt.itemOf(validator);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var getSetKeys = function (obj) {
    var keys = $_8ih830x0jdxlezpa.keys(obj);
    return $_6dbxmwwsjdxleznr.filter(keys, function (k) {
      return $_ey6c2jxsjdxlezue.hasKey(obj, k);
    });
  };
  var objOnly = function (fields) {
    var delegate = obj(fields);
    var fieldNames = $_6dbxmwwsjdxleznr.foldr(fields, function (acc, f) {
      return f.fold(function (key) {
        return $_dngveawyjdxlezp5.deepMerge(acc, $_ey6c2jxsjdxlezue.wrap(key, true));
      }, $_26xiiiwjjdxlezmo.constant(acc));
    }, {});
    var extract = function (path, strength, o) {
      var keys = $_9wk4wvwzjdxlezp8.isBoolean(o) ? [] : getSetKeys(o);
      var extra = $_6dbxmwwsjdxleznr.filter(keys, function (k) {
        return !$_ey6c2jxsjdxlezue.hasKey(fieldNames, k);
      });
      return extra.length === 0 ? delegate.extract(path, strength, o) : $_gfstt0ybjdxlezz0.unsupportedFields(path, extra);
    };
    return {
      extract: extract,
      toString: delegate.toString,
      toDsl: delegate.toDsl
    };
  };
  var obj = function (fields) {
    var extract = function (path, strength, o) {
      return cExtract(path, o, fields, strength);
    };
    var toString = function () {
      var fieldStrings = $_6dbxmwwsjdxleznr.map(fields, function (field) {
        return field.fold(function (key, okey, presence, prop) {
          return key + ' -> ' + prop.toString();
        }, function (okey, instantiator) {
          return 'state(' + okey + ')';
        });
      });
      return 'obj{\n' + fieldStrings.join('\n') + '}';
    };
    var toDsl = function () {
      return $_8ouvfeyajdxlezyw.typeAdt.objOf($_6dbxmwwsjdxleznr.map(fields, function (f) {
        return f.fold(function (key, okey, presence, prop) {
          return $_8ouvfeyajdxlezyw.fieldAdt.field(key, presence, prop);
        }, function (okey, instantiator) {
          return $_8ouvfeyajdxlezyw.fieldAdt.state(okey);
        });
      }));
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var arr = function (prop) {
    var extract = function (path, strength, array) {
      var results = $_6dbxmwwsjdxleznr.map(array, function (a, i) {
        return prop.extract(path.concat(['[' + i + ']']), strength, a);
      });
      return $_acwynvxtjdxlezuh.consolidateArr(results);
    };
    var toString = function () {
      return 'array(' + prop.toString() + ')';
    };
    var toDsl = function () {
      return $_8ouvfeyajdxlezyw.typeAdt.arrOf(prop);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var setOf = function (validator, prop) {
    var validateKeys = function (path, keys) {
      return arr(value$2(validator)).extract(path, $_26xiiiwjjdxlezmo.identity, keys);
    };
    var extract = function (path, strength, o) {
      var keys = $_8ih830x0jdxlezpa.keys(o);
      return validateKeys(path, keys).bind(function (validKeys) {
        var schema = $_6dbxmwwsjdxleznr.map(validKeys, function (vk) {
          return adt$1.field(vk, vk, $_8ycmk2y8jdxlezxw.strict(), prop);
        });
        return obj(schema).extract(path, strength, o);
      });
    };
    var toString = function () {
      return 'setOf(' + prop.toString() + ')';
    };
    var toDsl = function () {
      return $_8ouvfeyajdxlezyw.typeAdt.setOf(validator, prop);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var func = function (args, schema, retriever) {
    var delegate = value$2(function (f, strength) {
      return $_9wk4wvwzjdxlezp8.isFunction(f) ? Result.value(function () {
        var gArgs = Array.prototype.slice.call(arguments, 0);
        var allowedArgs = gArgs.slice(0, args.length);
        var o = f.apply(null, allowedArgs);
        return retriever(o, strength);
      }) : Result.error('Not a function');
    });
    return {
      extract: delegate.extract,
      toString: function () {
        return 'function';
      },
      toDsl: function () {
        return $_8ouvfeyajdxlezyw.typeAdt.func(args, schema);
      }
    };
  };
  var thunk = function (desc, processor) {
    var getP = $_6hk83awljdxlezmy.cached(function () {
      return processor();
    });
    var extract = function (path, strength, val) {
      return getP().extract(path, strength, val);
    };
    var toString = function () {
      return getP().toString();
    };
    var toDsl = function () {
      return $_8ouvfeyajdxlezyw.typeAdt.thunk(desc);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var anyValue = value$2(Result.value);
  var arrOfObj = $_26xiiiwjjdxlezmo.compose(arr, obj);
  var $_8te2koy9jdxlezyc = {
    anyValue: $_26xiiiwjjdxlezmo.constant(anyValue),
    value: value$2,
    obj: obj,
    objOnly: objOnly,
    arr: arr,
    setOf: setOf,
    arrOfObj: arrOfObj,
    state: adt$1.state,
    field: adt$1.field,
    output: output,
    snapshot: snapshot,
    thunk: thunk,
    func: func
  };

  var strict = function (key) {
    return $_8te2koy9jdxlezyc.field(key, key, $_8ycmk2y8jdxlezxw.strict(), $_8te2koy9jdxlezyc.anyValue());
  };
  var strictOf = function (key, schema) {
    return $_8te2koy9jdxlezyc.field(key, key, $_8ycmk2y8jdxlezxw.strict(), schema);
  };
  var strictFunction = function (key) {
    return $_8te2koy9jdxlezyc.field(key, key, $_8ycmk2y8jdxlezxw.strict(), $_8te2koy9jdxlezyc.value(function (f) {
      return $_9wk4wvwzjdxlezp8.isFunction(f) ? Result.value(f) : Result.error('Not a function');
    }));
  };
  var forbid = function (key, message) {
    return $_8te2koy9jdxlezyc.field(key, key, $_8ycmk2y8jdxlezxw.asOption(), $_8te2koy9jdxlezyc.value(function (v) {
      return Result.error('The field: ' + key + ' is forbidden. ' + message);
    }));
  };
  var strictArrayOf = function (key, prop) {
    return strictOf(key, prop);
  };
  var strictObjOf = function (key, objSchema) {
    return $_8te2koy9jdxlezyc.field(key, key, $_8ycmk2y8jdxlezxw.strict(), $_8te2koy9jdxlezyc.obj(objSchema));
  };
  var strictArrayOfObj = function (key, objFields) {
    return $_8te2koy9jdxlezyc.field(key, key, $_8ycmk2y8jdxlezxw.strict(), $_8te2koy9jdxlezyc.arrOfObj(objFields));
  };
  var option = function (key) {
    return $_8te2koy9jdxlezyc.field(key, key, $_8ycmk2y8jdxlezxw.asOption(), $_8te2koy9jdxlezyc.anyValue());
  };
  var optionOf = function (key, schema) {
    return $_8te2koy9jdxlezyc.field(key, key, $_8ycmk2y8jdxlezxw.asOption(), schema);
  };
  var optionObjOf = function (key, objSchema) {
    return $_8te2koy9jdxlezyc.field(key, key, $_8ycmk2y8jdxlezxw.asOption(), $_8te2koy9jdxlezyc.obj(objSchema));
  };
  var optionObjOfOnly = function (key, objSchema) {
    return $_8te2koy9jdxlezyc.field(key, key, $_8ycmk2y8jdxlezxw.asOption(), $_8te2koy9jdxlezyc.objOnly(objSchema));
  };
  var defaulted$1 = function (key, fallback) {
    return $_8te2koy9jdxlezyc.field(key, key, $_8ycmk2y8jdxlezxw.defaulted(fallback), $_8te2koy9jdxlezyc.anyValue());
  };
  var defaultedOf = function (key, fallback, schema) {
    return $_8te2koy9jdxlezyc.field(key, key, $_8ycmk2y8jdxlezxw.defaulted(fallback), schema);
  };
  var defaultedObjOf = function (key, fallback, objSchema) {
    return $_8te2koy9jdxlezyc.field(key, key, $_8ycmk2y8jdxlezxw.defaulted(fallback), $_8te2koy9jdxlezyc.obj(objSchema));
  };
  var field = function (key, okey, presence, prop) {
    return $_8te2koy9jdxlezyc.field(key, okey, presence, prop);
  };
  var state = function (okey, instantiator) {
    return $_8te2koy9jdxlezyc.state(okey, instantiator);
  };
  var $_5jvmj2y7jdxlezxo = {
    strict: strict,
    strictOf: strictOf,
    strictObjOf: strictObjOf,
    strictArrayOf: strictArrayOf,
    strictArrayOfObj: strictArrayOfObj,
    strictFunction: strictFunction,
    forbid: forbid,
    option: option,
    optionOf: optionOf,
    optionObjOf: optionObjOf,
    optionObjOfOnly: optionObjOfOnly,
    defaulted: defaulted$1,
    defaultedOf: defaultedOf,
    defaultedObjOf: defaultedObjOf,
    field: field,
    state: state
  };

  var chooseFrom = function (path, strength, input, branches, ch) {
    var fields = $_ey6c2jxsjdxlezue.readOptFrom(branches, ch);
    return fields.fold(function () {
      return $_gfstt0ybjdxlezz0.missingBranch(path, branches, ch);
    }, function (fs) {
      return $_8te2koy9jdxlezyc.obj(fs).extract(path.concat(['branch: ' + ch]), strength, input);
    });
  };
  var choose = function (key, branches) {
    var extract = function (path, strength, input) {
      var choice = $_ey6c2jxsjdxlezue.readOptFrom(input, key);
      return choice.fold(function () {
        return $_gfstt0ybjdxlezz0.missingKey(path, key);
      }, function (chosen) {
        return chooseFrom(path, strength, input, branches, chosen);
      });
    };
    var toString = function () {
      return 'chooseOn(' + key + '). Possible values: ' + $_8ih830x0jdxlezpa.keys(branches);
    };
    var toDsl = function () {
      return $_8ouvfeyajdxlezyw.typeAdt.choiceOf(key, branches);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var $_29yw1oyfjdxlezzo = { choose: choose };

  var anyValue$1 = $_8te2koy9jdxlezyc.value(Result.value);
  var arrOfObj$1 = function (objFields) {
    return $_8te2koy9jdxlezyc.arrOfObj(objFields);
  };
  var arrOfVal = function () {
    return $_8te2koy9jdxlezyc.arr(anyValue$1);
  };
  var arrOf = $_8te2koy9jdxlezyc.arr;
  var objOf = $_8te2koy9jdxlezyc.obj;
  var objOfOnly = $_8te2koy9jdxlezyc.objOnly;
  var setOf$1 = $_8te2koy9jdxlezyc.setOf;
  var valueOf = function (validator) {
    return $_8te2koy9jdxlezyc.value(function (v) {
      return validator(v);
    });
  };
  var extract = function (label, prop, strength, obj) {
    return prop.extract([label], strength, obj).fold(function (errs) {
      return Result.error({
        input: obj,
        errors: errs
      });
    }, Result.value);
  };
  var asStruct = function (label, prop, obj) {
    return extract(label, prop, $_26xiiiwjjdxlezmo.constant, obj);
  };
  var asRaw = function (label, prop, obj) {
    return extract(label, prop, $_26xiiiwjjdxlezmo.identity, obj);
  };
  var getOrDie$1 = function (extraction) {
    return extraction.fold(function (errInfo) {
      throw new Error(formatError(errInfo));
    }, $_26xiiiwjjdxlezmo.identity);
  };
  var asRawOrDie = function (label, prop, obj) {
    return getOrDie$1(asRaw(label, prop, obj));
  };
  var asStructOrDie = function (label, prop, obj) {
    return getOrDie$1(asStruct(label, prop, obj));
  };
  var formatError = function (errInfo) {
    return 'Errors: \n' + $_ggxwc7ycjdxlezz4.formatErrors(errInfo.errors) + '\n\nInput object: ' + $_ggxwc7ycjdxlezz4.formatObj(errInfo.input);
  };
  var choose$1 = function (key, branches) {
    return $_29yw1oyfjdxlezzo.choose(key, branches);
  };
  var thunkOf = function (desc, schema) {
    return $_8te2koy9jdxlezyc.thunk(desc, schema);
  };
  var funcOrDie = function (args, schema) {
    var retriever = function (output, strength) {
      return getOrDie$1(extract('()', schema, strength, output));
    };
    return $_8te2koy9jdxlezyc.func(args, schema, retriever);
  };
  var $_2vagecyejdxlezzg = {
    anyValue: $_26xiiiwjjdxlezmo.constant(anyValue$1),
    arrOfObj: arrOfObj$1,
    arrOf: arrOf,
    arrOfVal: arrOfVal,
    valueOf: valueOf,
    setOf: setOf$1,
    objOf: objOf,
    objOfOnly: objOfOnly,
    asStruct: asStruct,
    asRaw: asRaw,
    asStructOrDie: asStructOrDie,
    asRawOrDie: asRawOrDie,
    getOrDie: getOrDie$1,
    formatError: formatError,
    choose: choose$1,
    thunkOf: thunkOf,
    funcOrDie: funcOrDie
  };

  var nu$4 = function (parts) {
    if (!$_ey6c2jxsjdxlezue.hasKey(parts, 'can') && !$_ey6c2jxsjdxlezue.hasKey(parts, 'abort') && !$_ey6c2jxsjdxlezue.hasKey(parts, 'run'))
      throw new Error('EventHandler defined by: ' + $_67p1lqydjdxlezzd.stringify(parts, null, 2) + ' does not have can, abort, or run!');
    return $_2vagecyejdxlezzg.asRawOrDie('Extracting event.handler', $_2vagecyejdxlezzg.objOfOnly([
      $_5jvmj2y7jdxlezxo.defaulted('can', $_26xiiiwjjdxlezmo.constant(true)),
      $_5jvmj2y7jdxlezxo.defaulted('abort', $_26xiiiwjjdxlezmo.constant(false)),
      $_5jvmj2y7jdxlezxo.defaulted('run', $_26xiiiwjjdxlezmo.noop)
    ]), parts);
  };
  var all$1 = function (handlers, f) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return $_6dbxmwwsjdxleznr.foldl(handlers, function (acc, handler) {
        return acc && f(handler).apply(undefined, args);
      }, true);
    };
  };
  var any = function (handlers, f) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return $_6dbxmwwsjdxleznr.foldl(handlers, function (acc, handler) {
        return acc || f(handler).apply(undefined, args);
      }, false);
    };
  };
  var read = function (handler) {
    return $_9wk4wvwzjdxlezp8.isFunction(handler) ? {
      can: $_26xiiiwjjdxlezmo.constant(true),
      abort: $_26xiiiwjjdxlezmo.constant(false),
      run: handler
    } : handler;
  };
  var fuse = function (handlers) {
    var can = all$1(handlers, function (handler) {
      return handler.can;
    });
    var abort = any(handlers, function (handler) {
      return handler.abort;
    });
    var run = function () {
      var args = Array.prototype.slice.call(arguments, 0);
      $_6dbxmwwsjdxleznr.each(handlers, function (handler) {
        handler.run.apply(undefined, args);
      });
    };
    return nu$4({
      can: can,
      abort: abort,
      run: run
    });
  };
  var $_gdgb03y6jdxlezx9 = {
    read: read,
    fuse: fuse,
    nu: nu$4
  };

  var derive = $_ey6c2jxsjdxlezue.wrapAll;
  var abort = function (name, predicate) {
    return {
      key: name,
      value: $_gdgb03y6jdxlezx9.nu({ abort: predicate })
    };
  };
  var can = function (name, predicate) {
    return {
      key: name,
      value: $_gdgb03y6jdxlezx9.nu({ can: predicate })
    };
  };
  var preventDefault = function (name) {
    return {
      key: name,
      value: $_gdgb03y6jdxlezx9.nu({
        run: function (component, simulatedEvent) {
          simulatedEvent.event().prevent();
        }
      })
    };
  };
  var run = function (name, handler) {
    return {
      key: name,
      value: $_gdgb03y6jdxlezx9.nu({ run: handler })
    };
  };
  var runActionExtra = function (name, action, extra) {
    return {
      key: name,
      value: $_gdgb03y6jdxlezx9.nu({
        run: function (component) {
          action.apply(undefined, [component].concat(extra));
        }
      })
    };
  };
  var runOnName = function (name) {
    return function (handler) {
      return run(name, handler);
    };
  };
  var runOnSourceName = function (name) {
    return function (handler) {
      return {
        key: name,
        value: $_gdgb03y6jdxlezx9.nu({
          run: function (component, simulatedEvent) {
            if ($_aunkrxy5jdxlezx4.isSource(component, simulatedEvent))
              handler(component, simulatedEvent);
          }
        })
      };
    };
  };
  var redirectToUid = function (name, uid) {
    return run(name, function (component, simulatedEvent) {
      component.getSystem().getByUid(uid).each(function (redirectee) {
        $_7qvrqpwgjdxlezlj.dispatchEvent(redirectee, redirectee.element(), name, simulatedEvent);
      });
    });
  };
  var redirectToPart = function (name, detail, partName) {
    var uid = detail.partUids()[partName];
    return redirectToUid(name, uid);
  };
  var runWithTarget = function (name, f) {
    return run(name, function (component, simulatedEvent) {
      component.getSystem().getByDom(simulatedEvent.event().target()).each(function (target) {
        f(component, target, simulatedEvent);
      });
    });
  };
  var cutter = function (name) {
    return run(name, function (component, simulatedEvent) {
      simulatedEvent.cut();
    });
  };
  var stopper = function (name) {
    return run(name, function (component, simulatedEvent) {
      simulatedEvent.stop();
    });
  };
  var $_fpalyxy4jdxlezwy = {
    derive: derive,
    run: run,
    preventDefault: preventDefault,
    runActionExtra: runActionExtra,
    runOnAttached: runOnSourceName($_7mziizwhjdxlezm8.attachedToDom()),
    runOnDetached: runOnSourceName($_7mziizwhjdxlezm8.detachedFromDom()),
    runOnInit: runOnSourceName($_7mziizwhjdxlezm8.systemInit()),
    runOnExecute: runOnName($_7mziizwhjdxlezm8.execute()),
    redirectToUid: redirectToUid,
    redirectToPart: redirectToPart,
    runWithTarget: runWithTarget,
    abort: abort,
    can: can,
    cutter: cutter,
    stopper: stopper
  };

  var markAsBehaviourApi = function (f, apiName, apiFunction) {
    return f;
  };
  var markAsExtraApi = function (f, extraName) {
    return f;
  };
  var markAsSketchApi = function (f, apiFunction) {
    return f;
  };
  var getAnnotation = Option.none;
  var $_b832a6ygjdxlezzu = {
    markAsBehaviourApi: markAsBehaviourApi,
    markAsExtraApi: markAsExtraApi,
    markAsSketchApi: markAsSketchApi,
    getAnnotation: getAnnotation
  };

  var nu$5 = $_8fo9b5x4jdxlezqc.immutableBag(['tag'], [
    'classes',
    'attributes',
    'styles',
    'value',
    'innerHtml',
    'domChildren',
    'defChildren'
  ]);
  var defToStr = function (defn) {
    var raw = defToRaw(defn);
    return $_67p1lqydjdxlezzd.stringify(raw, null, 2);
  };
  var defToRaw = function (defn) {
    return {
      tag: defn.tag(),
      classes: defn.classes().getOr([]),
      attributes: defn.attributes().getOr({}),
      styles: defn.styles().getOr({}),
      value: defn.value().getOr('<none>'),
      innerHtml: defn.innerHtml().getOr('<none>'),
      defChildren: defn.defChildren().getOr('<none>'),
      domChildren: defn.domChildren().fold(function () {
        return '<none>';
      }, function (children) {
        return children.length === 0 ? '0 children, but still specified' : String(children.length);
      })
    };
  };
  var $_4hr4jfyijdxlf00b = {
    nu: nu$5,
    defToStr: defToStr,
    defToRaw: defToRaw
  };

  var fields = [
    'classes',
    'attributes',
    'styles',
    'value',
    'innerHtml',
    'defChildren',
    'domChildren'
  ];
  var nu$6 = $_8fo9b5x4jdxlezqc.immutableBag([], fields);
  var derive$1 = function (settings) {
    var r = {};
    var keys = $_8ih830x0jdxlezpa.keys(settings);
    $_6dbxmwwsjdxleznr.each(keys, function (key) {
      settings[key].each(function (v) {
        r[key] = v;
      });
    });
    return nu$6(r);
  };
  var modToStr = function (mod) {
    var raw = modToRaw(mod);
    return $_67p1lqydjdxlezzd.stringify(raw, null, 2);
  };
  var modToRaw = function (mod) {
    return {
      classes: mod.classes().getOr('<none>'),
      attributes: mod.attributes().getOr('<none>'),
      styles: mod.styles().getOr('<none>'),
      value: mod.value().getOr('<none>'),
      innerHtml: mod.innerHtml().getOr('<none>'),
      defChildren: mod.defChildren().getOr('<none>'),
      domChildren: mod.domChildren().fold(function () {
        return '<none>';
      }, function (children) {
        return children.length === 0 ? '0 children, but still specified' : String(children.length);
      })
    };
  };
  var clashingOptArrays = function (key, oArr1, oArr2) {
    return oArr1.fold(function () {
      return oArr2.fold(function () {
        return {};
      }, function (arr2) {
        return $_ey6c2jxsjdxlezue.wrap(key, arr2);
      });
    }, function (arr1) {
      return oArr2.fold(function () {
        return $_ey6c2jxsjdxlezue.wrap(key, arr1);
      }, function (arr2) {
        return $_ey6c2jxsjdxlezue.wrap(key, arr2);
      });
    });
  };
  var merge$1 = function (defnA, mod) {
    var raw = $_dngveawyjdxlezp5.deepMerge({
      tag: defnA.tag(),
      classes: mod.classes().getOr([]).concat(defnA.classes().getOr([])),
      attributes: $_dngveawyjdxlezp5.merge(defnA.attributes().getOr({}), mod.attributes().getOr({})),
      styles: $_dngveawyjdxlezp5.merge(defnA.styles().getOr({}), mod.styles().getOr({}))
    }, mod.innerHtml().or(defnA.innerHtml()).map(function (innerHtml) {
      return $_ey6c2jxsjdxlezue.wrap('innerHtml', innerHtml);
    }).getOr({}), clashingOptArrays('domChildren', mod.domChildren(), defnA.domChildren()), clashingOptArrays('defChildren', mod.defChildren(), defnA.defChildren()), mod.value().or(defnA.value()).map(function (value) {
      return $_ey6c2jxsjdxlezue.wrap('value', value);
    }).getOr({}));
    return $_4hr4jfyijdxlf00b.nu(raw);
  };
  var $_8a5bobyhjdxlezzz = {
    nu: nu$6,
    derive: derive$1,
    merge: merge$1,
    modToStr: modToStr,
    modToRaw: modToRaw
  };

  var executeEvent = function (bConfig, bState, executor) {
    return $_fpalyxy4jdxlezwy.runOnExecute(function (component) {
      executor(component, bConfig, bState);
    });
  };
  var loadEvent = function (bConfig, bState, f) {
    return $_fpalyxy4jdxlezwy.runOnInit(function (component, simulatedEvent) {
      f(component, bConfig, bState);
    });
  };
  var create = function (schema, name, active, apis, extra, state) {
    var configSchema = $_2vagecyejdxlezzg.objOfOnly(schema);
    var schemaSchema = $_5jvmj2y7jdxlezxo.optionObjOf(name, [$_5jvmj2y7jdxlezxo.optionObjOfOnly('config', schema)]);
    return doCreate(configSchema, schemaSchema, name, active, apis, extra, state);
  };
  var createModes = function (modes, name, active, apis, extra, state) {
    var configSchema = modes;
    var schemaSchema = $_5jvmj2y7jdxlezxo.optionObjOf(name, [$_5jvmj2y7jdxlezxo.optionOf('config', modes)]);
    return doCreate(configSchema, schemaSchema, name, active, apis, extra, state);
  };
  var wrapApi = function (bName, apiFunction, apiName) {
    var f = function (component) {
      var args = arguments;
      return component.config({ name: $_26xiiiwjjdxlezmo.constant(bName) }).fold(function () {
        throw new Error('We could not find any behaviour configuration for: ' + bName + '. Using API: ' + apiName);
      }, function (info) {
        var rest = Array.prototype.slice.call(args, 1);
        return apiFunction.apply(undefined, [
          component,
          info.config,
          info.state
        ].concat(rest));
      });
    };
    return $_b832a6ygjdxlezzu.markAsBehaviourApi(f, apiName, apiFunction);
  };
  var revokeBehaviour = function (name) {
    return {
      key: name,
      value: undefined
    };
  };
  var doCreate = function (configSchema, schemaSchema, name, active, apis, extra, state) {
    var getConfig = function (info) {
      return $_ey6c2jxsjdxlezue.hasKey(info, name) ? info[name]() : Option.none();
    };
    var wrappedApis = $_8ih830x0jdxlezpa.map(apis, function (apiF, apiName) {
      return wrapApi(name, apiF, apiName);
    });
    var wrappedExtra = $_8ih830x0jdxlezpa.map(extra, function (extraF, extraName) {
      return $_b832a6ygjdxlezzu.markAsExtraApi(extraF, extraName);
    });
    var me = $_dngveawyjdxlezp5.deepMerge(wrappedExtra, wrappedApis, {
      revoke: $_26xiiiwjjdxlezmo.curry(revokeBehaviour, name),
      config: function (spec) {
        var prepared = $_2vagecyejdxlezzg.asStructOrDie(name + '-config', configSchema, spec);
        return {
          key: name,
          value: {
            config: prepared,
            me: me,
            configAsRaw: $_6hk83awljdxlezmy.cached(function () {
              return $_2vagecyejdxlezzg.asRawOrDie(name + '-config', configSchema, spec);
            }),
            initialConfig: spec,
            state: state
          }
        };
      },
      schema: function () {
        return schemaSchema;
      },
      exhibit: function (info, base) {
        return getConfig(info).bind(function (behaviourInfo) {
          return $_ey6c2jxsjdxlezue.readOptFrom(active, 'exhibit').map(function (exhibitor) {
            return exhibitor(base, behaviourInfo.config, behaviourInfo.state);
          });
        }).getOr($_8a5bobyhjdxlezzz.nu({}));
      },
      name: function () {
        return name;
      },
      handlers: function (info) {
        return getConfig(info).bind(function (behaviourInfo) {
          return $_ey6c2jxsjdxlezue.readOptFrom(active, 'events').map(function (events) {
            return events(behaviourInfo.config, behaviourInfo.state);
          });
        }).getOr({});
      }
    });
    return me;
  };
  var $_52b1ndy3jdxlezwf = {
    executeEvent: executeEvent,
    loadEvent: loadEvent,
    create: create,
    createModes: createModes
  };

  var base = function (handleUnsupported, required) {
    return baseWith(handleUnsupported, required, {
      validate: $_9wk4wvwzjdxlezp8.isFunction,
      label: 'function'
    });
  };
  var baseWith = function (handleUnsupported, required, pred) {
    if (required.length === 0)
      throw new Error('You must specify at least one required field.');
    $_2s4hm9x7jdxlezqo.validateStrArr('required', required);
    $_2s4hm9x7jdxlezqo.checkDupes(required);
    return function (obj) {
      var keys = $_8ih830x0jdxlezpa.keys(obj);
      var allReqd = $_6dbxmwwsjdxleznr.forall(required, function (req) {
        return $_6dbxmwwsjdxleznr.contains(keys, req);
      });
      if (!allReqd)
        $_2s4hm9x7jdxlezqo.reqMessage(required, keys);
      handleUnsupported(required, keys);
      var invalidKeys = $_6dbxmwwsjdxleznr.filter(required, function (key) {
        return !pred.validate(obj[key], key);
      });
      if (invalidKeys.length > 0)
        $_2s4hm9x7jdxlezqo.invalidTypeMessage(invalidKeys, pred.label);
      return obj;
    };
  };
  var handleExact = function (required, keys) {
    var unsupported = $_6dbxmwwsjdxleznr.filter(keys, function (key) {
      return !$_6dbxmwwsjdxleznr.contains(required, key);
    });
    if (unsupported.length > 0)
      $_2s4hm9x7jdxlezqo.unsuppMessage(unsupported);
  };
  var allowExtra = $_26xiiiwjjdxlezmo.noop;
  var $_gife37yljdxlf00u = {
    exactly: $_26xiiiwjjdxlezmo.curry(base, handleExact),
    ensure: $_26xiiiwjjdxlezmo.curry(base, allowExtra),
    ensureWith: $_26xiiiwjjdxlezmo.curry(baseWith, allowExtra)
  };

  var BehaviourState = $_gife37yljdxlf00u.ensure(['readState']);

  var init = function () {
    return BehaviourState({
      readState: function () {
        return 'No State required';
      }
    });
  };
  var $_8skmpryjjdxlf00p = { init: init };

  var derive$2 = function (capabilities) {
    return $_ey6c2jxsjdxlezue.wrapAll(capabilities);
  };
  var simpleSchema = $_2vagecyejdxlezzg.objOfOnly([
    $_5jvmj2y7jdxlezxo.strict('fields'),
    $_5jvmj2y7jdxlezxo.strict('name'),
    $_5jvmj2y7jdxlezxo.defaulted('active', {}),
    $_5jvmj2y7jdxlezxo.defaulted('apis', {}),
    $_5jvmj2y7jdxlezxo.defaulted('extra', {}),
    $_5jvmj2y7jdxlezxo.defaulted('state', $_8skmpryjjdxlf00p)
  ]);
  var create$1 = function (data) {
    var value = $_2vagecyejdxlezzg.asRawOrDie('Creating behaviour: ' + data.name, simpleSchema, data);
    return $_52b1ndy3jdxlezwf.create(value.fields, value.name, value.active, value.apis, value.extra, value.state);
  };
  var modeSchema = $_2vagecyejdxlezzg.objOfOnly([
    $_5jvmj2y7jdxlezxo.strict('branchKey'),
    $_5jvmj2y7jdxlezxo.strict('branches'),
    $_5jvmj2y7jdxlezxo.strict('name'),
    $_5jvmj2y7jdxlezxo.defaulted('active', {}),
    $_5jvmj2y7jdxlezxo.defaulted('apis', {}),
    $_5jvmj2y7jdxlezxo.defaulted('extra', {}),
    $_5jvmj2y7jdxlezxo.defaulted('state', $_8skmpryjjdxlf00p)
  ]);
  var createModes$1 = function (data) {
    var value = $_2vagecyejdxlezzg.asRawOrDie('Creating behaviour: ' + data.name, modeSchema, data);
    return $_52b1ndy3jdxlezwf.createModes($_2vagecyejdxlezzg.choose(value.branchKey, value.branches), value.name, value.active, value.apis, value.extra, value.state);
  };
  var $_5tm9cmy2jdxlezw3 = {
    derive: derive$2,
    revoke: $_26xiiiwjjdxlezmo.constant(undefined),
    noActive: $_26xiiiwjjdxlezmo.constant({}),
    noApis: $_26xiiiwjjdxlezmo.constant({}),
    noExtra: $_26xiiiwjjdxlezmo.constant({}),
    noState: $_26xiiiwjjdxlezmo.constant($_8skmpryjjdxlf00p),
    create: create$1,
    createModes: createModes$1
  };

  function Toggler (turnOff, turnOn, initial) {
    var active = initial || false;
    var on = function () {
      turnOn();
      active = true;
    };
    var off = function () {
      turnOff();
      active = false;
    };
    var toggle = function () {
      var f = active ? off : on;
      f();
    };
    var isOn = function () {
      return active;
    };
    return {
      on: on,
      off: off,
      toggle: toggle,
      isOn: isOn
    };
  }

  var read$1 = function (element, attr) {
    var value = $_72a1mgxrjdxlezu3.get(element, attr);
    return value === undefined || value === '' ? [] : value.split(' ');
  };
  var add = function (element, attr, id) {
    var old = read$1(element, attr);
    var nu = old.concat([id]);
    $_72a1mgxrjdxlezu3.set(element, attr, nu.join(' '));
  };
  var remove$2 = function (element, attr, id) {
    var nu = $_6dbxmwwsjdxleznr.filter(read$1(element, attr), function (v) {
      return v !== id;
    });
    if (nu.length > 0)
      $_72a1mgxrjdxlezu3.set(element, attr, nu.join(' '));
    else
      $_72a1mgxrjdxlezu3.remove(element, attr);
  };
  var $_1c19b8yqjdxlf019 = {
    read: read$1,
    add: add,
    remove: remove$2
  };

  var supports = function (element) {
    return element.dom().classList !== undefined;
  };
  var get$2 = function (element) {
    return $_1c19b8yqjdxlf019.read(element, 'class');
  };
  var add$1 = function (element, clazz) {
    return $_1c19b8yqjdxlf019.add(element, 'class', clazz);
  };
  var remove$3 = function (element, clazz) {
    return $_1c19b8yqjdxlf019.remove(element, 'class', clazz);
  };
  var toggle = function (element, clazz) {
    if ($_6dbxmwwsjdxleznr.contains(get$2(element), clazz)) {
      remove$3(element, clazz);
    } else {
      add$1(element, clazz);
    }
  };
  var $_4m0v05ypjdxlf016 = {
    get: get$2,
    add: add$1,
    remove: remove$3,
    toggle: toggle,
    supports: supports
  };

  var add$2 = function (element, clazz) {
    if ($_4m0v05ypjdxlf016.supports(element))
      element.dom().classList.add(clazz);
    else
      $_4m0v05ypjdxlf016.add(element, clazz);
  };
  var cleanClass = function (element) {
    var classList = $_4m0v05ypjdxlf016.supports(element) ? element.dom().classList : $_4m0v05ypjdxlf016.get(element);
    if (classList.length === 0) {
      $_72a1mgxrjdxlezu3.remove(element, 'class');
    }
  };
  var remove$4 = function (element, clazz) {
    if ($_4m0v05ypjdxlf016.supports(element)) {
      var classList = element.dom().classList;
      classList.remove(clazz);
    } else
      $_4m0v05ypjdxlf016.remove(element, clazz);
    cleanClass(element);
  };
  var toggle$1 = function (element, clazz) {
    return $_4m0v05ypjdxlf016.supports(element) ? element.dom().classList.toggle(clazz) : $_4m0v05ypjdxlf016.toggle(element, clazz);
  };
  var toggler = function (element, clazz) {
    var hasClasslist = $_4m0v05ypjdxlf016.supports(element);
    var classList = element.dom().classList;
    var off = function () {
      if (hasClasslist)
        classList.remove(clazz);
      else
        $_4m0v05ypjdxlf016.remove(element, clazz);
    };
    var on = function () {
      if (hasClasslist)
        classList.add(clazz);
      else
        $_4m0v05ypjdxlf016.add(element, clazz);
    };
    return Toggler(off, on, has$1(element, clazz));
  };
  var has$1 = function (element, clazz) {
    return $_4m0v05ypjdxlf016.supports(element) && element.dom().classList.contains(clazz);
  };
  var $_79eveeynjdxlf012 = {
    add: add$2,
    remove: remove$4,
    toggle: toggle$1,
    toggler: toggler,
    has: has$1
  };

  var swap = function (element, addCls, removeCls) {
    $_79eveeynjdxlf012.remove(element, removeCls);
    $_79eveeynjdxlf012.add(element, addCls);
  };
  var toAlpha = function (component, swapConfig, swapState) {
    swap(component.element(), swapConfig.alpha(), swapConfig.omega());
  };
  var toOmega = function (component, swapConfig, swapState) {
    swap(component.element(), swapConfig.omega(), swapConfig.alpha());
  };
  var clear = function (component, swapConfig, swapState) {
    $_79eveeynjdxlf012.remove(component.element(), swapConfig.alpha());
    $_79eveeynjdxlf012.remove(component.element(), swapConfig.omega());
  };
  var isAlpha = function (component, swapConfig, swapState) {
    return $_79eveeynjdxlf012.has(component.element(), swapConfig.alpha());
  };
  var isOmega = function (component, swapConfig, swapState) {
    return $_79eveeynjdxlf012.has(component.element(), swapConfig.omega());
  };
  var $_47253pymjdxlf00y = {
    toAlpha: toAlpha,
    toOmega: toOmega,
    isAlpha: isAlpha,
    isOmega: isOmega,
    clear: clear
  };

  var SwapSchema = [
    $_5jvmj2y7jdxlezxo.strict('alpha'),
    $_5jvmj2y7jdxlezxo.strict('omega')
  ];

  var Swapping = $_5tm9cmy2jdxlezw3.create({
    fields: SwapSchema,
    name: 'swapping',
    apis: $_47253pymjdxlf00y
  });

  var Cell = function (initial) {
    var value = initial;
    var get = function () {
      return value;
    };
    var set = function (v) {
      value = v;
    };
    var clone = function () {
      return Cell(get());
    };
    return {
      get: get,
      set: set,
      clone: clone
    };
  };

  function ClosestOrAncestor (is, ancestor, scope, a, isRoot) {
    return is(scope, a) ? Option.some(scope) : $_9wk4wvwzjdxlezp8.isFunction(isRoot) && isRoot(scope) ? Option.none() : ancestor(scope, a, isRoot);
  }

  var first$1 = function (predicate) {
    return descendant($_80u4ksxjjdxlezsm.body(), predicate);
  };
  var ancestor = function (scope, predicate, isRoot) {
    var element = scope.dom();
    var stop = $_9wk4wvwzjdxlezp8.isFunction(isRoot) ? isRoot : $_26xiiiwjjdxlezmo.constant(false);
    while (element.parentNode) {
      element = element.parentNode;
      var el = $_2ejbh1xfjdxlezs6.fromDom(element);
      if (predicate(el))
        return Option.some(el);
      else if (stop(el))
        break;
    }
    return Option.none();
  };
  var closest = function (scope, predicate, isRoot) {
    var is = function (scope) {
      return predicate(scope);
    };
    return ClosestOrAncestor(is, ancestor, scope, predicate, isRoot);
  };
  var sibling = function (scope, predicate) {
    var element = scope.dom();
    if (!element.parentNode)
      return Option.none();
    return child$1($_2ejbh1xfjdxlezs6.fromDom(element.parentNode), function (x) {
      return !$_4u044dx9jdxlezqw.eq(scope, x) && predicate(x);
    });
  };
  var child$1 = function (scope, predicate) {
    var result = $_6dbxmwwsjdxleznr.find(scope.dom().childNodes, $_26xiiiwjjdxlezmo.compose(predicate, $_2ejbh1xfjdxlezs6.fromDom));
    return result.map($_2ejbh1xfjdxlezs6.fromDom);
  };
  var descendant = function (scope, predicate) {
    var descend = function (element) {
      for (var i = 0; i < element.childNodes.length; i++) {
        if (predicate($_2ejbh1xfjdxlezs6.fromDom(element.childNodes[i])))
          return Option.some($_2ejbh1xfjdxlezs6.fromDom(element.childNodes[i]));
        var res = descend(element.childNodes[i]);
        if (res.isSome())
          return res;
      }
      return Option.none();
    };
    return descend(scope.dom());
  };
  var $_6w4r10yvjdxlf01p = {
    first: first$1,
    ancestor: ancestor,
    closest: closest,
    sibling: sibling,
    child: child$1,
    descendant: descendant
  };

  var any$1 = function (predicate) {
    return $_6w4r10yvjdxlf01p.first(predicate).isSome();
  };
  var ancestor$1 = function (scope, predicate, isRoot) {
    return $_6w4r10yvjdxlf01p.ancestor(scope, predicate, isRoot).isSome();
  };
  var closest$1 = function (scope, predicate, isRoot) {
    return $_6w4r10yvjdxlf01p.closest(scope, predicate, isRoot).isSome();
  };
  var sibling$1 = function (scope, predicate) {
    return $_6w4r10yvjdxlf01p.sibling(scope, predicate).isSome();
  };
  var child$2 = function (scope, predicate) {
    return $_6w4r10yvjdxlf01p.child(scope, predicate).isSome();
  };
  var descendant$1 = function (scope, predicate) {
    return $_6w4r10yvjdxlf01p.descendant(scope, predicate).isSome();
  };
  var $_aymrhdyujdxlf01n = {
    any: any$1,
    ancestor: ancestor$1,
    closest: closest$1,
    sibling: sibling$1,
    child: child$2,
    descendant: descendant$1
  };

  var focus = function (element) {
    element.dom().focus();
  };
  var blur = function (element) {
    element.dom().blur();
  };
  var hasFocus = function (element) {
    var doc = $_s9ri4x3jdxlezpx.owner(element).dom();
    return element.dom() === doc.activeElement;
  };
  var active = function (_doc) {
    var doc = _doc !== undefined ? _doc.dom() : document;
    return Option.from(doc.activeElement).map($_2ejbh1xfjdxlezs6.fromDom);
  };
  var focusInside = function (element) {
    var doc = $_s9ri4x3jdxlezpx.owner(element);
    var inside = active(doc).filter(function (a) {
      return $_aymrhdyujdxlf01n.closest(a, $_26xiiiwjjdxlezmo.curry($_4u044dx9jdxlezqw.eq, element));
    });
    inside.fold(function () {
      focus(element);
    }, $_26xiiiwjjdxlezmo.noop);
  };
  var search = function (element) {
    return active($_s9ri4x3jdxlezpx.owner(element)).filter(function (e) {
      return element.dom().contains(e.dom());
    });
  };
  var $_9am9mvytjdxlf01i = {
    hasFocus: hasFocus,
    focus: focus,
    blur: blur,
    active: active,
    search: search,
    focusInside: focusInside
  };

  var DOMUtils = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var ThemeManager = tinymce.util.Tools.resolve('tinymce.ThemeManager');

  var openLink = function (target) {
    var link = document.createElement('a');
    link.target = '_blank';
    link.href = target.href;
    link.rel = 'noreferrer noopener';
    var nuEvt = document.createEvent('MouseEvents');
    nuEvt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    document.body.appendChild(link);
    link.dispatchEvent(nuEvt);
    document.body.removeChild(link);
  };
  var $_9knnkhyzjdxlf023 = { openLink: openLink };

  var isSkinDisabled = function (editor) {
    return editor.settings.skin === false;
  };
  var $_8i8331z0jdxlf025 = { isSkinDisabled: isSkinDisabled };

  var formatChanged = 'formatChanged';
  var orientationChanged = 'orientationChanged';
  var dropupDismissed = 'dropupDismissed';
  var $_62vx58z1jdxlf026 = {
    formatChanged: $_26xiiiwjjdxlezmo.constant(formatChanged),
    orientationChanged: $_26xiiiwjjdxlezmo.constant(orientationChanged),
    dropupDismissed: $_26xiiiwjjdxlezmo.constant(dropupDismissed)
  };

  var chooseChannels = function (channels, message) {
    return message.universal() ? channels : $_6dbxmwwsjdxleznr.filter(channels, function (ch) {
      return $_6dbxmwwsjdxleznr.contains(message.channels(), ch);
    });
  };
  var events = function (receiveConfig) {
    return $_fpalyxy4jdxlezwy.derive([$_fpalyxy4jdxlezwy.run($_7mziizwhjdxlezm8.receive(), function (component, message) {
        var channelMap = receiveConfig.channels();
        var channels = $_8ih830x0jdxlezpa.keys(channelMap);
        var targetChannels = chooseChannels(channels, message);
        $_6dbxmwwsjdxleznr.each(targetChannels, function (ch) {
          var channelInfo = channelMap[ch]();
          var channelSchema = channelInfo.schema();
          var data = $_2vagecyejdxlezzg.asStructOrDie('channel[' + ch + '] data\nReceiver: ' + $_5vhxqxmjdxleztl.element(component.element()), channelSchema, message.data());
          channelInfo.onReceive()(component, data);
        });
      })]);
  };
  var $_bkt95rz4jdxlf02s = { events: events };

  var menuFields = [
    $_5jvmj2y7jdxlezxo.strict('menu'),
    $_5jvmj2y7jdxlezxo.strict('selectedMenu')
  ];
  var itemFields = [
    $_5jvmj2y7jdxlezxo.strict('item'),
    $_5jvmj2y7jdxlezxo.strict('selectedItem')
  ];
  var schema = $_2vagecyejdxlezzg.objOfOnly(itemFields.concat(menuFields));
  var itemSchema = $_2vagecyejdxlezzg.objOfOnly(itemFields);
  var $_479absz7jdxlf03q = {
    menuFields: $_26xiiiwjjdxlezmo.constant(menuFields),
    itemFields: $_26xiiiwjjdxlezmo.constant(itemFields),
    schema: $_26xiiiwjjdxlezmo.constant(schema),
    itemSchema: $_26xiiiwjjdxlezmo.constant(itemSchema)
  };

  var initSize = $_5jvmj2y7jdxlezxo.strictObjOf('initSize', [
    $_5jvmj2y7jdxlezxo.strict('numColumns'),
    $_5jvmj2y7jdxlezxo.strict('numRows')
  ]);
  var itemMarkers = function () {
    return $_5jvmj2y7jdxlezxo.strictOf('markers', $_479absz7jdxlf03q.itemSchema());
  };
  var menuMarkers = function () {
    return $_5jvmj2y7jdxlezxo.strictOf('markers', $_479absz7jdxlf03q.schema());
  };
  var tieredMenuMarkers = function () {
    return $_5jvmj2y7jdxlezxo.strictObjOf('markers', [$_5jvmj2y7jdxlezxo.strict('backgroundMenu')].concat($_479absz7jdxlf03q.menuFields()).concat($_479absz7jdxlf03q.itemFields()));
  };
  var markers = function (required) {
    return $_5jvmj2y7jdxlezxo.strictObjOf('markers', $_6dbxmwwsjdxleznr.map(required, $_5jvmj2y7jdxlezxo.strict));
  };
  var onPresenceHandler = function (label, fieldName, presence) {
    var trace = $_8mf2lqxljdxlezsw.getTrace();
    return $_5jvmj2y7jdxlezxo.field(fieldName, fieldName, presence, $_2vagecyejdxlezzg.valueOf(function (f) {
      return Result.value(function () {
        $_8mf2lqxljdxlezsw.logHandler(label, fieldName, trace);
        return f.apply(undefined, arguments);
      });
    }));
  };
  var onHandler = function (fieldName) {
    return onPresenceHandler('onHandler', fieldName, $_8ycmk2y8jdxlezxw.defaulted($_26xiiiwjjdxlezmo.noop));
  };
  var onKeyboardHandler = function (fieldName) {
    return onPresenceHandler('onKeyboardHandler', fieldName, $_8ycmk2y8jdxlezxw.defaulted(Option.none));
  };
  var onStrictHandler = function (fieldName) {
    return onPresenceHandler('onHandler', fieldName, $_8ycmk2y8jdxlezxw.strict());
  };
  var onStrictKeyboardHandler = function (fieldName) {
    return onPresenceHandler('onKeyboardHandler', fieldName, $_8ycmk2y8jdxlezxw.strict());
  };
  var output$1 = function (name, value) {
    return $_5jvmj2y7jdxlezxo.state(name, $_26xiiiwjjdxlezmo.constant(value));
  };
  var snapshot$1 = function (name) {
    return $_5jvmj2y7jdxlezxo.state(name, $_26xiiiwjjdxlezmo.identity);
  };
  var $_d0ld34z6jdxlf03c = {
    initSize: $_26xiiiwjjdxlezmo.constant(initSize),
    itemMarkers: itemMarkers,
    menuMarkers: menuMarkers,
    tieredMenuMarkers: tieredMenuMarkers,
    markers: markers,
    onHandler: onHandler,
    onKeyboardHandler: onKeyboardHandler,
    onStrictHandler: onStrictHandler,
    onStrictKeyboardHandler: onStrictKeyboardHandler,
    output: output$1,
    snapshot: snapshot$1
  };

  var ReceivingSchema = [$_5jvmj2y7jdxlezxo.strictOf('channels', $_2vagecyejdxlezzg.setOf(Result.value, $_2vagecyejdxlezzg.objOfOnly([
      $_d0ld34z6jdxlf03c.onStrictHandler('onReceive'),
      $_5jvmj2y7jdxlezxo.defaulted('schema', $_2vagecyejdxlezzg.anyValue())
    ])))];

  var Receiving = $_5tm9cmy2jdxlezw3.create({
    fields: ReceivingSchema,
    name: 'receiving',
    active: $_bkt95rz4jdxlf02s
  });

  var updateAriaState = function (component, toggleConfig) {
    var pressed = isOn(component, toggleConfig);
    var ariaInfo = toggleConfig.aria();
    ariaInfo.update()(component, ariaInfo, pressed);
  };
  var toggle$2 = function (component, toggleConfig, toggleState) {
    $_79eveeynjdxlf012.toggle(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var on = function (component, toggleConfig, toggleState) {
    $_79eveeynjdxlf012.add(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var off = function (component, toggleConfig, toggleState) {
    $_79eveeynjdxlf012.remove(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var isOn = function (component, toggleConfig) {
    return $_79eveeynjdxlf012.has(component.element(), toggleConfig.toggleClass());
  };
  var onLoad = function (component, toggleConfig, toggleState) {
    var api = toggleConfig.selected() ? on : off;
    api(component, toggleConfig, toggleState);
  };
  var $_a76lbszajdxlf046 = {
    onLoad: onLoad,
    toggle: toggle$2,
    isOn: isOn,
    on: on,
    off: off
  };

  var exhibit = function (base, toggleConfig, toggleState) {
    return $_8a5bobyhjdxlezzz.nu({});
  };
  var events$1 = function (toggleConfig, toggleState) {
    var execute = $_52b1ndy3jdxlezwf.executeEvent(toggleConfig, toggleState, $_a76lbszajdxlf046.toggle);
    var load = $_52b1ndy3jdxlezwf.loadEvent(toggleConfig, toggleState, $_a76lbszajdxlf046.onLoad);
    return $_fpalyxy4jdxlezwy.derive($_6dbxmwwsjdxleznr.flatten([
      toggleConfig.toggleOnExecute() ? [execute] : [],
      [load]
    ]));
  };
  var $_dl7pgrz9jdxlf041 = {
    exhibit: exhibit,
    events: events$1
  };

  var updatePressed = function (component, ariaInfo, status) {
    $_72a1mgxrjdxlezu3.set(component.element(), 'aria-pressed', status);
    if (ariaInfo.syncWithExpanded())
      updateExpanded(component, ariaInfo, status);
  };
  var updateSelected = function (component, ariaInfo, status) {
    $_72a1mgxrjdxlezu3.set(component.element(), 'aria-selected', status);
  };
  var updateChecked = function (component, ariaInfo, status) {
    $_72a1mgxrjdxlezu3.set(component.element(), 'aria-checked', status);
  };
  var updateExpanded = function (component, ariaInfo, status) {
    $_72a1mgxrjdxlezu3.set(component.element(), 'aria-expanded', status);
  };
  var tagAttributes = {
    button: ['aria-pressed'],
    'input:checkbox': ['aria-checked']
  };
  var roleAttributes = {
    'button': ['aria-pressed'],
    'listbox': [
      'aria-pressed',
      'aria-expanded'
    ],
    'menuitemcheckbox': ['aria-checked']
  };
  var detectFromTag = function (component) {
    var elem = component.element();
    var rawTag = $_xp48txkjdxlezsr.name(elem);
    var suffix = rawTag === 'input' && $_72a1mgxrjdxlezu3.has(elem, 'type') ? ':' + $_72a1mgxrjdxlezu3.get(elem, 'type') : '';
    return $_ey6c2jxsjdxlezue.readOptFrom(tagAttributes, rawTag + suffix);
  };
  var detectFromRole = function (component) {
    var elem = component.element();
    if (!$_72a1mgxrjdxlezu3.has(elem, 'role'))
      return Option.none();
    else {
      var role = $_72a1mgxrjdxlezu3.get(elem, 'role');
      return $_ey6c2jxsjdxlezue.readOptFrom(roleAttributes, role);
    }
  };
  var updateAuto = function (component, ariaInfo, status) {
    var attributes = detectFromRole(component).orThunk(function () {
      return detectFromTag(component);
    }).getOr([]);
    $_6dbxmwwsjdxleznr.each(attributes, function (attr) {
      $_72a1mgxrjdxlezu3.set(component.element(), attr, status);
    });
  };
  var $_bycsbmzcjdxlf04j = {
    updatePressed: updatePressed,
    updateSelected: updateSelected,
    updateChecked: updateChecked,
    updateExpanded: updateExpanded,
    updateAuto: updateAuto
  };

  var ToggleSchema = [
    $_5jvmj2y7jdxlezxo.defaulted('selected', false),
    $_5jvmj2y7jdxlezxo.strict('toggleClass'),
    $_5jvmj2y7jdxlezxo.defaulted('toggleOnExecute', true),
    $_5jvmj2y7jdxlezxo.defaultedOf('aria', { mode: 'none' }, $_2vagecyejdxlezzg.choose('mode', {
      'pressed': [
        $_5jvmj2y7jdxlezxo.defaulted('syncWithExpanded', false),
        $_d0ld34z6jdxlf03c.output('update', $_bycsbmzcjdxlf04j.updatePressed)
      ],
      'checked': [$_d0ld34z6jdxlf03c.output('update', $_bycsbmzcjdxlf04j.updateChecked)],
      'expanded': [$_d0ld34z6jdxlf03c.output('update', $_bycsbmzcjdxlf04j.updateExpanded)],
      'selected': [$_d0ld34z6jdxlf03c.output('update', $_bycsbmzcjdxlf04j.updateSelected)],
      'none': [$_d0ld34z6jdxlf03c.output('update', $_26xiiiwjjdxlezmo.noop)]
    }))
  ];

  var Toggling = $_5tm9cmy2jdxlezw3.create({
    fields: ToggleSchema,
    name: 'toggling',
    active: $_dl7pgrz9jdxlf041,
    apis: $_a76lbszajdxlf046
  });

  var format = function (command, update) {
    return Receiving.config({
      channels: $_ey6c2jxsjdxlezue.wrap($_62vx58z1jdxlf026.formatChanged(), {
        onReceive: function (button, data) {
          if (data.command === command) {
            update(button, data.state);
          }
        }
      })
    });
  };
  var orientation = function (onReceive) {
    return Receiving.config({ channels: $_ey6c2jxsjdxlezue.wrap($_62vx58z1jdxlf026.orientationChanged(), { onReceive: onReceive }) });
  };
  var receive = function (channel, onReceive) {
    return {
      key: channel,
      value: { onReceive: onReceive }
    };
  };
  var $_2qdoh4zdjdxlf04x = {
    format: format,
    orientation: orientation,
    receive: receive
  };

  var prefix = 'tinymce-mobile';
  var resolve$1 = function (p) {
    return prefix + '-' + p;
  };
  var $_6pb5xszejdxlf051 = {
    resolve: resolve$1,
    prefix: $_26xiiiwjjdxlezmo.constant(prefix)
  };

  var focus$1 = function (component, focusConfig) {
    if (!focusConfig.ignore()) {
      $_9am9mvytjdxlf01i.focus(component.element());
      focusConfig.onFocus()(component);
    }
  };
  var blur$1 = function (component, focusConfig) {
    if (!focusConfig.ignore()) {
      $_9am9mvytjdxlf01i.blur(component.element());
    }
  };
  var isFocused = function (component) {
    return $_9am9mvytjdxlf01i.hasFocus(component.element());
  };
  var $_8qx5brzjjdxlf05r = {
    focus: focus$1,
    blur: blur$1,
    isFocused: isFocused
  };

  var exhibit$1 = function (base, focusConfig) {
    if (focusConfig.ignore())
      return $_8a5bobyhjdxlezzz.nu({});
    else
      return $_8a5bobyhjdxlezzz.nu({ attributes: { 'tabindex': '-1' } });
  };
  var events$2 = function (focusConfig) {
    return $_fpalyxy4jdxlezwy.derive([$_fpalyxy4jdxlezwy.run($_7mziizwhjdxlezm8.focus(), function (component, simulatedEvent) {
        $_8qx5brzjjdxlf05r.focus(component, focusConfig);
        simulatedEvent.stop();
      })]);
  };
  var $_7mtmsszijdxlf05o = {
    exhibit: exhibit$1,
    events: events$2
  };

  var FocusSchema = [
    $_d0ld34z6jdxlf03c.onHandler('onFocus'),
    $_5jvmj2y7jdxlezxo.defaulted('ignore', false)
  ];

  var Focusing = $_5tm9cmy2jdxlezw3.create({
    fields: FocusSchema,
    name: 'focusing',
    active: $_7mtmsszijdxlf05o,
    apis: $_8qx5brzjjdxlf05r
  });

  var $_eha28uzpjdxlf06z = {
    BACKSPACE: $_26xiiiwjjdxlezmo.constant([8]),
    TAB: $_26xiiiwjjdxlezmo.constant([9]),
    ENTER: $_26xiiiwjjdxlezmo.constant([13]),
    SHIFT: $_26xiiiwjjdxlezmo.constant([16]),
    CTRL: $_26xiiiwjjdxlezmo.constant([17]),
    ALT: $_26xiiiwjjdxlezmo.constant([18]),
    CAPSLOCK: $_26xiiiwjjdxlezmo.constant([20]),
    ESCAPE: $_26xiiiwjjdxlezmo.constant([27]),
    SPACE: $_26xiiiwjjdxlezmo.constant([32]),
    PAGEUP: $_26xiiiwjjdxlezmo.constant([33]),
    PAGEDOWN: $_26xiiiwjjdxlezmo.constant([34]),
    END: $_26xiiiwjjdxlezmo.constant([35]),
    HOME: $_26xiiiwjjdxlezmo.constant([36]),
    LEFT: $_26xiiiwjjdxlezmo.constant([37]),
    UP: $_26xiiiwjjdxlezmo.constant([38]),
    RIGHT: $_26xiiiwjjdxlezmo.constant([39]),
    DOWN: $_26xiiiwjjdxlezmo.constant([40]),
    INSERT: $_26xiiiwjjdxlezmo.constant([45]),
    DEL: $_26xiiiwjjdxlezmo.constant([46]),
    META: $_26xiiiwjjdxlezmo.constant([
      91,
      93,
      224
    ]),
    F10: $_26xiiiwjjdxlezmo.constant([121])
  };

  var cycleBy = function (value, delta, min, max) {
    var r = value + delta;
    if (r > max)
      return min;
    else
      return r < min ? max : r;
  };
  var cap = function (value, min, max) {
    if (value <= min)
      return min;
    else
      return value >= max ? max : value;
  };
  var $_72fm9gzujdxlf07v = {
    cycleBy: cycleBy,
    cap: cap
  };

  var all$2 = function (predicate) {
    return descendants($_80u4ksxjjdxlezsm.body(), predicate);
  };
  var ancestors = function (scope, predicate, isRoot) {
    return $_6dbxmwwsjdxleznr.filter($_s9ri4x3jdxlezpx.parents(scope, isRoot), predicate);
  };
  var siblings$1 = function (scope, predicate) {
    return $_6dbxmwwsjdxleznr.filter($_s9ri4x3jdxlezpx.siblings(scope), predicate);
  };
  var children$1 = function (scope, predicate) {
    return $_6dbxmwwsjdxleznr.filter($_s9ri4x3jdxlezpx.children(scope), predicate);
  };
  var descendants = function (scope, predicate) {
    var result = [];
    $_6dbxmwwsjdxleznr.each($_s9ri4x3jdxlezpx.children(scope), function (x) {
      if (predicate(x)) {
        result = result.concat([x]);
      }
      result = result.concat(descendants(x, predicate));
    });
    return result;
  };
  var $_2nt6fizwjdxlf07z = {
    all: all$2,
    ancestors: ancestors,
    siblings: siblings$1,
    children: children$1,
    descendants: descendants
  };

  var all$3 = function (selector) {
    return $_3c0spqxejdxlezrz.all(selector);
  };
  var ancestors$1 = function (scope, selector, isRoot) {
    return $_2nt6fizwjdxlf07z.ancestors(scope, function (e) {
      return $_3c0spqxejdxlezrz.is(e, selector);
    }, isRoot);
  };
  var siblings$2 = function (scope, selector) {
    return $_2nt6fizwjdxlf07z.siblings(scope, function (e) {
      return $_3c0spqxejdxlezrz.is(e, selector);
    });
  };
  var children$2 = function (scope, selector) {
    return $_2nt6fizwjdxlf07z.children(scope, function (e) {
      return $_3c0spqxejdxlezrz.is(e, selector);
    });
  };
  var descendants$1 = function (scope, selector) {
    return $_3c0spqxejdxlezrz.all(selector, scope);
  };
  var $_390b63zvjdxlf07x = {
    all: all$3,
    ancestors: ancestors$1,
    siblings: siblings$2,
    children: children$2,
    descendants: descendants$1
  };

  var first$2 = function (selector) {
    return $_3c0spqxejdxlezrz.one(selector);
  };
  var ancestor$2 = function (scope, selector, isRoot) {
    return $_6w4r10yvjdxlf01p.ancestor(scope, function (e) {
      return $_3c0spqxejdxlezrz.is(e, selector);
    }, isRoot);
  };
  var sibling$2 = function (scope, selector) {
    return $_6w4r10yvjdxlf01p.sibling(scope, function (e) {
      return $_3c0spqxejdxlezrz.is(e, selector);
    });
  };
  var child$3 = function (scope, selector) {
    return $_6w4r10yvjdxlf01p.child(scope, function (e) {
      return $_3c0spqxejdxlezrz.is(e, selector);
    });
  };
  var descendant$2 = function (scope, selector) {
    return $_3c0spqxejdxlezrz.one(selector, scope);
  };
  var closest$2 = function (scope, selector, isRoot) {
    return ClosestOrAncestor($_3c0spqxejdxlezrz.is, ancestor$2, scope, selector, isRoot);
  };
  var $_77tktczxjdxlf083 = {
    first: first$2,
    ancestor: ancestor$2,
    sibling: sibling$2,
    child: child$3,
    descendant: descendant$2,
    closest: closest$2
  };

  var dehighlightAll = function (component, hConfig, hState) {
    var highlighted = $_390b63zvjdxlf07x.descendants(component.element(), '.' + hConfig.highlightClass());
    $_6dbxmwwsjdxleznr.each(highlighted, function (h) {
      $_79eveeynjdxlf012.remove(h, hConfig.highlightClass());
      component.getSystem().getByDom(h).each(function (target) {
        hConfig.onDehighlight()(component, target);
      });
    });
  };
  var dehighlight = function (component, hConfig, hState, target) {
    var wasHighlighted = isHighlighted(component, hConfig, hState, target);
    $_79eveeynjdxlf012.remove(target.element(), hConfig.highlightClass());
    if (wasHighlighted)
      hConfig.onDehighlight()(component, target);
  };
  var highlight = function (component, hConfig, hState, target) {
    var wasHighlighted = isHighlighted(component, hConfig, hState, target);
    dehighlightAll(component, hConfig, hState);
    $_79eveeynjdxlf012.add(target.element(), hConfig.highlightClass());
    if (!wasHighlighted)
      hConfig.onHighlight()(component, target);
  };
  var highlightFirst = function (component, hConfig, hState) {
    getFirst(component, hConfig, hState).each(function (firstComp) {
      highlight(component, hConfig, hState, firstComp);
    });
  };
  var highlightLast = function (component, hConfig, hState) {
    getLast(component, hConfig, hState).each(function (lastComp) {
      highlight(component, hConfig, hState, lastComp);
    });
  };
  var highlightAt = function (component, hConfig, hState, index) {
    getByIndex(component, hConfig, hState, index).fold(function (err) {
      throw new Error(err);
    }, function (firstComp) {
      highlight(component, hConfig, hState, firstComp);
    });
  };
  var highlightBy = function (component, hConfig, hState, predicate) {
    var items = $_390b63zvjdxlf07x.descendants(component.element(), '.' + hConfig.itemClass());
    var itemComps = $_dznnjvy0jdxlezvy.cat($_6dbxmwwsjdxleznr.map(items, function (i) {
      return component.getSystem().getByDom(i).toOption();
    }));
    var targetComp = $_6dbxmwwsjdxleznr.find(itemComps, predicate);
    targetComp.each(function (c) {
      highlight(component, hConfig, hState, c);
    });
  };
  var isHighlighted = function (component, hConfig, hState, queryTarget) {
    return $_79eveeynjdxlf012.has(queryTarget.element(), hConfig.highlightClass());
  };
  var getHighlighted = function (component, hConfig, hState) {
    return $_77tktczxjdxlf083.descendant(component.element(), '.' + hConfig.highlightClass()).bind(component.getSystem().getByDom);
  };
  var getByIndex = function (component, hConfig, hState, index) {
    var items = $_390b63zvjdxlf07x.descendants(component.element(), '.' + hConfig.itemClass());
    return Option.from(items[index]).fold(function () {
      return Result.error('No element found with index ' + index);
    }, component.getSystem().getByDom);
  };
  var getFirst = function (component, hConfig, hState) {
    return $_77tktczxjdxlf083.descendant(component.element(), '.' + hConfig.itemClass()).bind(component.getSystem().getByDom);
  };
  var getLast = function (component, hConfig, hState) {
    var items = $_390b63zvjdxlf07x.descendants(component.element(), '.' + hConfig.itemClass());
    var last = items.length > 0 ? Option.some(items[items.length - 1]) : Option.none();
    return last.bind(component.getSystem().getByDom);
  };
  var getDelta = function (component, hConfig, hState, delta) {
    var items = $_390b63zvjdxlf07x.descendants(component.element(), '.' + hConfig.itemClass());
    var current = $_6dbxmwwsjdxleznr.findIndex(items, function (item) {
      return $_79eveeynjdxlf012.has(item, hConfig.highlightClass());
    });
    return current.bind(function (selected) {
      var dest = $_72fm9gzujdxlf07v.cycleBy(selected, delta, 0, items.length - 1);
      return component.getSystem().getByDom(items[dest]);
    });
  };
  var getPrevious = function (component, hConfig, hState) {
    return getDelta(component, hConfig, hState, -1);
  };
  var getNext = function (component, hConfig, hState) {
    return getDelta(component, hConfig, hState, +1);
  };
  var $_fg27hfztjdxlf07i = {
    dehighlightAll: dehighlightAll,
    dehighlight: dehighlight,
    highlight: highlight,
    highlightFirst: highlightFirst,
    highlightLast: highlightLast,
    highlightAt: highlightAt,
    highlightBy: highlightBy,
    isHighlighted: isHighlighted,
    getHighlighted: getHighlighted,
    getFirst: getFirst,
    getLast: getLast,
    getPrevious: getPrevious,
    getNext: getNext
  };

  var HighlightSchema = [
    $_5jvmj2y7jdxlezxo.strict('highlightClass'),
    $_5jvmj2y7jdxlezxo.strict('itemClass'),
    $_d0ld34z6jdxlf03c.onHandler('onHighlight'),
    $_d0ld34z6jdxlf03c.onHandler('onDehighlight')
  ];

  var Highlighting = $_5tm9cmy2jdxlezw3.create({
    fields: HighlightSchema,
    name: 'highlighting',
    apis: $_fg27hfztjdxlf07i
  });

  var dom = function () {
    var get = function (component) {
      return $_9am9mvytjdxlf01i.search(component.element());
    };
    var set = function (component, focusee) {
      component.getSystem().triggerFocus(focusee, component.element());
    };
    return {
      get: get,
      set: set
    };
  };
  var highlights = function () {
    var get = function (component) {
      return Highlighting.getHighlighted(component).map(function (item) {
        return item.element();
      });
    };
    var set = function (component, element) {
      component.getSystem().getByDom(element).fold($_26xiiiwjjdxlezmo.noop, function (item) {
        Highlighting.highlight(component, item);
      });
    };
    return {
      get: get,
      set: set
    };
  };
  var $_1lx0j9zrjdxlf07a = {
    dom: dom,
    highlights: highlights
  };

  var inSet = function (keys) {
    return function (event) {
      return $_6dbxmwwsjdxleznr.contains(keys, event.raw().which);
    };
  };
  var and = function (preds) {
    return function (event) {
      return $_6dbxmwwsjdxleznr.forall(preds, function (pred) {
        return pred(event);
      });
    };
  };
  var is$1 = function (key) {
    return function (event) {
      return event.raw().which === key;
    };
  };
  var isShift = function (event) {
    return event.raw().shiftKey === true;
  };
  var isControl = function (event) {
    return event.raw().ctrlKey === true;
  };
  var $_9ev19b100jdxlf08c = {
    inSet: inSet,
    and: and,
    is: is$1,
    isShift: isShift,
    isNotShift: $_26xiiiwjjdxlezmo.not(isShift),
    isControl: isControl,
    isNotControl: $_26xiiiwjjdxlezmo.not(isControl)
  };

  var basic = function (key, action) {
    return {
      matches: $_9ev19b100jdxlf08c.is(key),
      classification: action
    };
  };
  var rule = function (matches, action) {
    return {
      matches: matches,
      classification: action
    };
  };
  var choose$2 = function (transitions, event) {
    var transition = $_6dbxmwwsjdxleznr.find(transitions, function (t) {
      return t.matches(event);
    });
    return transition.map(function (t) {
      return t.classification;
    });
  };
  var $_q3qv1zzjdxlf089 = {
    basic: basic,
    rule: rule,
    choose: choose$2
  };

  var typical = function (infoSchema, stateInit, getRules, getEvents, getApis, optFocusIn) {
    var schema = function () {
      return infoSchema.concat([
        $_5jvmj2y7jdxlezxo.defaulted('focusManager', $_1lx0j9zrjdxlf07a.dom()),
        $_d0ld34z6jdxlf03c.output('handler', me),
        $_d0ld34z6jdxlf03c.output('state', stateInit)
      ]);
    };
    var processKey = function (component, simulatedEvent, keyingConfig, keyingState) {
      var rules = getRules(component, simulatedEvent, keyingConfig, keyingState);
      return $_q3qv1zzjdxlf089.choose(rules, simulatedEvent.event()).bind(function (rule) {
        return rule(component, simulatedEvent, keyingConfig, keyingState);
      });
    };
    var toEvents = function (keyingConfig, keyingState) {
      var otherEvents = getEvents(keyingConfig, keyingState);
      var keyEvents = $_fpalyxy4jdxlezwy.derive(optFocusIn.map(function (focusIn) {
        return $_fpalyxy4jdxlezwy.run($_7mziizwhjdxlezm8.focus(), function (component, simulatedEvent) {
          focusIn(component, keyingConfig, keyingState, simulatedEvent);
          simulatedEvent.stop();
        });
      }).toArray().concat([$_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.keydown(), function (component, simulatedEvent) {
          processKey(component, simulatedEvent, keyingConfig, keyingState).each(function (_) {
            simulatedEvent.stop();
          });
        })]));
      return $_dngveawyjdxlezp5.deepMerge(otherEvents, keyEvents);
    };
    var me = {
      schema: schema,
      processKey: processKey,
      toEvents: toEvents,
      toApis: getApis
    };
    return me;
  };
  var $_8ch24jzqjdxlf074 = { typical: typical };

  var cyclePrev = function (values, index, predicate) {
    var before = $_6dbxmwwsjdxleznr.reverse(values.slice(0, index));
    var after = $_6dbxmwwsjdxleznr.reverse(values.slice(index + 1));
    return $_6dbxmwwsjdxleznr.find(before.concat(after), predicate);
  };
  var tryPrev = function (values, index, predicate) {
    var before = $_6dbxmwwsjdxleznr.reverse(values.slice(0, index));
    return $_6dbxmwwsjdxleznr.find(before, predicate);
  };
  var cycleNext = function (values, index, predicate) {
    var before = values.slice(0, index);
    var after = values.slice(index + 1);
    return $_6dbxmwwsjdxleznr.find(after.concat(before), predicate);
  };
  var tryNext = function (values, index, predicate) {
    var after = values.slice(index + 1);
    return $_6dbxmwwsjdxleznr.find(after, predicate);
  };
  var $_39lwcm101jdxlf08i = {
    cyclePrev: cyclePrev,
    cycleNext: cycleNext,
    tryPrev: tryPrev,
    tryNext: tryNext
  };

  var isSupported = function (dom) {
    return dom.style !== undefined;
  };
  var $_rbr91104jdxlf094 = { isSupported: isSupported };

  var internalSet = function (dom, property, value) {
    if (!$_9wk4wvwzjdxlezp8.isString(value)) {
      console.error('Invalid call to CSS.set. Property ', property, ':: Value ', value, ':: Element ', dom);
      throw new Error('CSS value must be a string: ' + value);
    }
    if ($_rbr91104jdxlf094.isSupported(dom))
      dom.style.setProperty(property, value);
  };
  var internalRemove = function (dom, property) {
    if ($_rbr91104jdxlf094.isSupported(dom))
      dom.style.removeProperty(property);
  };
  var set$2 = function (element, property, value) {
    var dom = element.dom();
    internalSet(dom, property, value);
  };
  var setAll$1 = function (element, css) {
    var dom = element.dom();
    $_8ih830x0jdxlezpa.each(css, function (v, k) {
      internalSet(dom, k, v);
    });
  };
  var setOptions = function (element, css) {
    var dom = element.dom();
    $_8ih830x0jdxlezpa.each(css, function (v, k) {
      v.fold(function () {
        internalRemove(dom, k);
      }, function (value) {
        internalSet(dom, k, value);
      });
    });
  };
  var get$3 = function (element, property) {
    var dom = element.dom();
    var styles = window.getComputedStyle(dom);
    var r = styles.getPropertyValue(property);
    var v = r === '' && !$_80u4ksxjjdxlezsm.inBody(element) ? getUnsafeProperty(dom, property) : r;
    return v === null ? undefined : v;
  };
  var getUnsafeProperty = function (dom, property) {
    return $_rbr91104jdxlf094.isSupported(dom) ? dom.style.getPropertyValue(property) : '';
  };
  var getRaw = function (element, property) {
    var dom = element.dom();
    var raw = getUnsafeProperty(dom, property);
    return Option.from(raw).filter(function (r) {
      return r.length > 0;
    });
  };
  var getAllRaw = function (element) {
    var css = {};
    var dom = element.dom();
    if ($_rbr91104jdxlf094.isSupported(dom)) {
      for (var i = 0; i < dom.style.length; i++) {
        var ruleName = dom.style.item(i);
        css[ruleName] = dom.style[ruleName];
      }
    }
    return css;
  };
  var isValidValue = function (tag, property, value) {
    var element = $_2ejbh1xfjdxlezs6.fromTag(tag);
    set$2(element, property, value);
    var style = getRaw(element, property);
    return style.isSome();
  };
  var remove$5 = function (element, property) {
    var dom = element.dom();
    internalRemove(dom, property);
    if ($_72a1mgxrjdxlezu3.has(element, 'style') && $_4304iowvjdxlezox.trim($_72a1mgxrjdxlezu3.get(element, 'style')) === '') {
      $_72a1mgxrjdxlezu3.remove(element, 'style');
    }
  };
  var preserve = function (element, f) {
    var oldStyles = $_72a1mgxrjdxlezu3.get(element, 'style');
    var result = f(element);
    var restore = oldStyles === undefined ? $_72a1mgxrjdxlezu3.remove : $_72a1mgxrjdxlezu3.set;
    restore(element, 'style', oldStyles);
    return result;
  };
  var copy$1 = function (source, target) {
    var sourceDom = source.dom();
    var targetDom = target.dom();
    if ($_rbr91104jdxlf094.isSupported(sourceDom) && $_rbr91104jdxlf094.isSupported(targetDom)) {
      targetDom.style.cssText = sourceDom.style.cssText;
    }
  };
  var reflow = function (e) {
    return e.dom().offsetWidth;
  };
  var transferOne$1 = function (source, destination, style) {
    getRaw(source, style).each(function (value) {
      if (getRaw(destination, style).isNone())
        set$2(destination, style, value);
    });
  };
  var transfer$1 = function (source, destination, styles) {
    if (!$_xp48txkjdxlezsr.isElement(source) || !$_xp48txkjdxlezsr.isElement(destination))
      return;
    $_6dbxmwwsjdxleznr.each(styles, function (style) {
      transferOne$1(source, destination, style);
    });
  };
  var $_99zvvg103jdxlf08t = {
    copy: copy$1,
    set: set$2,
    preserve: preserve,
    setAll: setAll$1,
    setOptions: setOptions,
    remove: remove$5,
    get: get$3,
    getRaw: getRaw,
    getAllRaw: getAllRaw,
    isValidValue: isValidValue,
    reflow: reflow,
    transfer: transfer$1
  };

  function Dimension (name, getOffset) {
    var set = function (element, h) {
      if (!$_9wk4wvwzjdxlezp8.isNumber(h) && !h.match(/^[0-9]+$/))
        throw name + '.set accepts only positive integer values. Value was ' + h;
      var dom = element.dom();
      if ($_rbr91104jdxlf094.isSupported(dom))
        dom.style[name] = h + 'px';
    };
    var get = function (element) {
      var r = getOffset(element);
      if (r <= 0 || r === null) {
        var css = $_99zvvg103jdxlf08t.get(element, name);
        return parseFloat(css) || 0;
      }
      return r;
    };
    var getOuter = get;
    var aggregate = function (element, properties) {
      return $_6dbxmwwsjdxleznr.foldl(properties, function (acc, property) {
        var val = $_99zvvg103jdxlf08t.get(element, property);
        var value = val === undefined ? 0 : parseInt(val, 10);
        return isNaN(value) ? acc : acc + value;
      }, 0);
    };
    var max = function (element, value, properties) {
      var cumulativeInclusions = aggregate(element, properties);
      var absoluteMax = value > cumulativeInclusions ? value - cumulativeInclusions : 0;
      return absoluteMax;
    };
    return {
      set: set,
      get: get,
      getOuter: getOuter,
      aggregate: aggregate,
      max: max
    };
  }

  var api = Dimension('height', function (element) {
    return $_80u4ksxjjdxlezsm.inBody(element) ? element.dom().getBoundingClientRect().height : element.dom().offsetHeight;
  });
  var set$3 = function (element, h) {
    api.set(element, h);
  };
  var get$4 = function (element) {
    return api.get(element);
  };
  var getOuter$1 = function (element) {
    return api.getOuter(element);
  };
  var setMax = function (element, value) {
    var inclusions = [
      'margin-top',
      'border-top-width',
      'padding-top',
      'padding-bottom',
      'border-bottom-width',
      'margin-bottom'
    ];
    var absMax = api.max(element, value, inclusions);
    $_99zvvg103jdxlf08t.set(element, 'max-height', absMax + 'px');
  };
  var $_4y496102jdxlf08r = {
    set: set$3,
    get: get$4,
    getOuter: getOuter$1,
    setMax: setMax
  };

  var create$2 = function (cyclicField) {
    var schema = [
      $_5jvmj2y7jdxlezxo.option('onEscape'),
      $_5jvmj2y7jdxlezxo.option('onEnter'),
      $_5jvmj2y7jdxlezxo.defaulted('selector', '[data-alloy-tabstop="true"]'),
      $_5jvmj2y7jdxlezxo.defaulted('firstTabstop', 0),
      $_5jvmj2y7jdxlezxo.defaulted('useTabstopAt', $_26xiiiwjjdxlezmo.constant(true)),
      $_5jvmj2y7jdxlezxo.option('visibilitySelector')
    ].concat([cyclicField]);
    var isVisible = function (tabbingConfig, element) {
      var target = tabbingConfig.visibilitySelector().bind(function (sel) {
        return $_77tktczxjdxlf083.closest(element, sel);
      }).getOr(element);
      return $_4y496102jdxlf08r.get(target) > 0;
    };
    var findInitial = function (component, tabbingConfig) {
      var tabstops = $_390b63zvjdxlf07x.descendants(component.element(), tabbingConfig.selector());
      var visibles = $_6dbxmwwsjdxleznr.filter(tabstops, function (elem) {
        return isVisible(tabbingConfig, elem);
      });
      return Option.from(visibles[tabbingConfig.firstTabstop()]);
    };
    var findCurrent = function (component, tabbingConfig) {
      return tabbingConfig.focusManager().get(component).bind(function (elem) {
        return $_77tktczxjdxlf083.closest(elem, tabbingConfig.selector());
      });
    };
    var isTabstop = function (tabbingConfig, element) {
      return isVisible(tabbingConfig, element) && tabbingConfig.useTabstopAt()(element);
    };
    var focusIn = function (component, tabbingConfig, tabbingState) {
      findInitial(component, tabbingConfig).each(function (target) {
        tabbingConfig.focusManager().set(component, target);
      });
    };
    var goFromTabstop = function (component, tabstops, stopIndex, tabbingConfig, cycle) {
      return cycle(tabstops, stopIndex, function (elem) {
        return isTabstop(tabbingConfig, elem);
      }).fold(function () {
        return tabbingConfig.cyclic() ? Option.some(true) : Option.none();
      }, function (target) {
        tabbingConfig.focusManager().set(component, target);
        return Option.some(true);
      });
    };
    var go = function (component, simulatedEvent, tabbingConfig, cycle) {
      var tabstops = $_390b63zvjdxlf07x.descendants(component.element(), tabbingConfig.selector());
      return findCurrent(component, tabbingConfig).bind(function (tabstop) {
        var optStopIndex = $_6dbxmwwsjdxleznr.findIndex(tabstops, $_26xiiiwjjdxlezmo.curry($_4u044dx9jdxlezqw.eq, tabstop));
        return optStopIndex.bind(function (stopIndex) {
          return goFromTabstop(component, tabstops, stopIndex, tabbingConfig, cycle);
        });
      });
    };
    var goBackwards = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      var navigate = tabbingConfig.cyclic() ? $_39lwcm101jdxlf08i.cyclePrev : $_39lwcm101jdxlf08i.tryPrev;
      return go(component, simulatedEvent, tabbingConfig, navigate);
    };
    var goForwards = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      var navigate = tabbingConfig.cyclic() ? $_39lwcm101jdxlf08i.cycleNext : $_39lwcm101jdxlf08i.tryNext;
      return go(component, simulatedEvent, tabbingConfig, navigate);
    };
    var execute = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      return tabbingConfig.onEnter().bind(function (f) {
        return f(component, simulatedEvent);
      });
    };
    var exit = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      return tabbingConfig.onEscape().bind(function (f) {
        return f(component, simulatedEvent);
      });
    };
    var getRules = $_26xiiiwjjdxlezmo.constant([
      $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.and([
        $_9ev19b100jdxlf08c.isShift,
        $_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.TAB())
      ]), goBackwards),
      $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.TAB()), goForwards),
      $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.ESCAPE()), exit),
      $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.and([
        $_9ev19b100jdxlf08c.isNotShift,
        $_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.ENTER())
      ]), execute)
    ]);
    var getEvents = $_26xiiiwjjdxlezmo.constant({});
    var getApis = $_26xiiiwjjdxlezmo.constant({});
    return $_8ch24jzqjdxlf074.typical(schema, $_8skmpryjjdxlf00p.init, getRules, getEvents, getApis, Option.some(focusIn));
  };
  var $_r3p1izojdxlf06i = { create: create$2 };

  var AcyclicType = $_r3p1izojdxlf06i.create($_5jvmj2y7jdxlezxo.state('cyclic', $_26xiiiwjjdxlezmo.constant(false)));

  var CyclicType = $_r3p1izojdxlf06i.create($_5jvmj2y7jdxlezxo.state('cyclic', $_26xiiiwjjdxlezmo.constant(true)));

  var inside = function (target) {
    return $_xp48txkjdxlezsr.name(target) === 'input' && $_72a1mgxrjdxlezu3.get(target, 'type') !== 'radio' || $_xp48txkjdxlezsr.name(target) === 'textarea';
  };
  var $_agoibq108jdxlf09o = { inside: inside };

  var doDefaultExecute = function (component, simulatedEvent, focused) {
    $_7qvrqpwgjdxlezlj.dispatch(component, focused, $_7mziizwhjdxlezm8.execute());
    return Option.some(true);
  };
  var defaultExecute = function (component, simulatedEvent, focused) {
    return $_agoibq108jdxlf09o.inside(focused) && $_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.SPACE())(simulatedEvent.event()) ? Option.none() : doDefaultExecute(component, simulatedEvent, focused);
  };
  var $_gf80ot109jdxlf09t = { defaultExecute: defaultExecute };

  var schema$1 = [
    $_5jvmj2y7jdxlezxo.defaulted('execute', $_gf80ot109jdxlf09t.defaultExecute),
    $_5jvmj2y7jdxlezxo.defaulted('useSpace', false),
    $_5jvmj2y7jdxlezxo.defaulted('useEnter', true),
    $_5jvmj2y7jdxlezxo.defaulted('useControlEnter', false),
    $_5jvmj2y7jdxlezxo.defaulted('useDown', false)
  ];
  var execute = function (component, simulatedEvent, executeConfig, executeState) {
    return executeConfig.execute()(component, simulatedEvent, component.element());
  };
  var getRules = function (component, simulatedEvent, executeConfig, executeState) {
    var spaceExec = executeConfig.useSpace() && !$_agoibq108jdxlf09o.inside(component.element()) ? $_eha28uzpjdxlf06z.SPACE() : [];
    var enterExec = executeConfig.useEnter() ? $_eha28uzpjdxlf06z.ENTER() : [];
    var downExec = executeConfig.useDown() ? $_eha28uzpjdxlf06z.DOWN() : [];
    var execKeys = spaceExec.concat(enterExec).concat(downExec);
    return [$_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet(execKeys), execute)].concat(executeConfig.useControlEnter() ? [$_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.and([
        $_9ev19b100jdxlf08c.isControl,
        $_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.ENTER())
      ]), execute)] : []);
  };
  var getEvents = $_26xiiiwjjdxlezmo.constant({});
  var getApis = $_26xiiiwjjdxlezmo.constant({});
  var ExecutionType = $_8ch24jzqjdxlf074.typical(schema$1, $_8skmpryjjdxlf00p.init, getRules, getEvents, getApis, Option.none());

  var flatgrid = function (spec) {
    var dimensions = Cell(Option.none());
    var setGridSize = function (numRows, numColumns) {
      dimensions.set(Option.some({
        numRows: $_26xiiiwjjdxlezmo.constant(numRows),
        numColumns: $_26xiiiwjjdxlezmo.constant(numColumns)
      }));
    };
    var getNumRows = function () {
      return dimensions.get().map(function (d) {
        return d.numRows();
      });
    };
    var getNumColumns = function () {
      return dimensions.get().map(function (d) {
        return d.numColumns();
      });
    };
    return BehaviourState({
      readState: $_26xiiiwjjdxlezmo.constant({}),
      setGridSize: setGridSize,
      getNumRows: getNumRows,
      getNumColumns: getNumColumns
    });
  };
  var init$1 = function (spec) {
    return spec.state()(spec);
  };
  var $_ydlxr10bjdxlf0aa = {
    flatgrid: flatgrid,
    init: init$1
  };

  var onDirection = function (isLtr, isRtl) {
    return function (element) {
      return getDirection(element) === 'rtl' ? isRtl : isLtr;
    };
  };
  var getDirection = function (element) {
    return $_99zvvg103jdxlf08t.get(element, 'direction') === 'rtl' ? 'rtl' : 'ltr';
  };
  var $_3x03qw10djdxlf0al = {
    onDirection: onDirection,
    getDirection: getDirection
  };

  var useH = function (movement) {
    return function (component, simulatedEvent, config, state) {
      var move = movement(component.element());
      return use(move, component, simulatedEvent, config, state);
    };
  };
  var west = function (moveLeft, moveRight) {
    var movement = $_3x03qw10djdxlf0al.onDirection(moveLeft, moveRight);
    return useH(movement);
  };
  var east = function (moveLeft, moveRight) {
    var movement = $_3x03qw10djdxlf0al.onDirection(moveRight, moveLeft);
    return useH(movement);
  };
  var useV = function (move) {
    return function (component, simulatedEvent, config, state) {
      return use(move, component, simulatedEvent, config, state);
    };
  };
  var use = function (move, component, simulatedEvent, config, state) {
    var outcome = config.focusManager().get(component).bind(function (focused) {
      return move(component.element(), focused, config, state);
    });
    return outcome.map(function (newFocus) {
      config.focusManager().set(component, newFocus);
      return true;
    });
  };
  var $_3d3hpj10cjdxlf0ai = {
    east: east,
    west: west,
    north: useV,
    south: useV,
    move: useV
  };

  var indexInfo = $_8fo9b5x4jdxlezqc.immutableBag([
    'index',
    'candidates'
  ], []);
  var locate = function (candidates, predicate) {
    return $_6dbxmwwsjdxleznr.findIndex(candidates, predicate).map(function (index) {
      return indexInfo({
        index: index,
        candidates: candidates
      });
    });
  };
  var $_5j9lbp10fjdxlf0b2 = { locate: locate };

  var visibilityToggler = function (element, property, hiddenValue, visibleValue) {
    var initial = $_99zvvg103jdxlf08t.get(element, property);
    if (initial === undefined)
      initial = '';
    var value = initial === hiddenValue ? visibleValue : hiddenValue;
    var off = $_26xiiiwjjdxlezmo.curry($_99zvvg103jdxlf08t.set, element, property, initial);
    var on = $_26xiiiwjjdxlezmo.curry($_99zvvg103jdxlf08t.set, element, property, value);
    return Toggler(off, on, false);
  };
  var toggler$1 = function (element) {
    return visibilityToggler(element, 'visibility', 'hidden', 'visible');
  };
  var displayToggler = function (element, value) {
    return visibilityToggler(element, 'display', 'none', value);
  };
  var isHidden = function (dom) {
    return dom.offsetWidth <= 0 && dom.offsetHeight <= 0;
  };
  var isVisible = function (element) {
    var dom = element.dom();
    return !isHidden(dom);
  };
  var $_cgf78910gjdxlf0b8 = {
    toggler: toggler$1,
    displayToggler: displayToggler,
    isVisible: isVisible
  };

  var locateVisible = function (container, current, selector) {
    var filter = $_cgf78910gjdxlf0b8.isVisible;
    return locateIn(container, current, selector, filter);
  };
  var locateIn = function (container, current, selector, filter) {
    var predicate = $_26xiiiwjjdxlezmo.curry($_4u044dx9jdxlezqw.eq, current);
    var candidates = $_390b63zvjdxlf07x.descendants(container, selector);
    var visible = $_6dbxmwwsjdxleznr.filter(candidates, $_cgf78910gjdxlf0b8.isVisible);
    return $_5j9lbp10fjdxlf0b2.locate(visible, predicate);
  };
  var findIndex$2 = function (elements, target) {
    return $_6dbxmwwsjdxleznr.findIndex(elements, function (elem) {
      return $_4u044dx9jdxlezqw.eq(target, elem);
    });
  };
  var $_a3qx8q10ejdxlf0an = {
    locateVisible: locateVisible,
    locateIn: locateIn,
    findIndex: findIndex$2
  };

  var withGrid = function (values, index, numCols, f) {
    var oldRow = Math.floor(index / numCols);
    var oldColumn = index % numCols;
    return f(oldRow, oldColumn).bind(function (address) {
      var newIndex = address.row() * numCols + address.column();
      return newIndex >= 0 && newIndex < values.length ? Option.some(values[newIndex]) : Option.none();
    });
  };
  var cycleHorizontal = function (values, index, numRows, numCols, delta) {
    return withGrid(values, index, numCols, function (oldRow, oldColumn) {
      var onLastRow = oldRow === numRows - 1;
      var colsInRow = onLastRow ? values.length - oldRow * numCols : numCols;
      var newColumn = $_72fm9gzujdxlf07v.cycleBy(oldColumn, delta, 0, colsInRow - 1);
      return Option.some({
        row: $_26xiiiwjjdxlezmo.constant(oldRow),
        column: $_26xiiiwjjdxlezmo.constant(newColumn)
      });
    });
  };
  var cycleVertical = function (values, index, numRows, numCols, delta) {
    return withGrid(values, index, numCols, function (oldRow, oldColumn) {
      var newRow = $_72fm9gzujdxlf07v.cycleBy(oldRow, delta, 0, numRows - 1);
      var onLastRow = newRow === numRows - 1;
      var colsInRow = onLastRow ? values.length - newRow * numCols : numCols;
      var newCol = $_72fm9gzujdxlf07v.cap(oldColumn, 0, colsInRow - 1);
      return Option.some({
        row: $_26xiiiwjjdxlezmo.constant(newRow),
        column: $_26xiiiwjjdxlezmo.constant(newCol)
      });
    });
  };
  var cycleRight = function (values, index, numRows, numCols) {
    return cycleHorizontal(values, index, numRows, numCols, +1);
  };
  var cycleLeft = function (values, index, numRows, numCols) {
    return cycleHorizontal(values, index, numRows, numCols, -1);
  };
  var cycleUp = function (values, index, numRows, numCols) {
    return cycleVertical(values, index, numRows, numCols, -1);
  };
  var cycleDown = function (values, index, numRows, numCols) {
    return cycleVertical(values, index, numRows, numCols, +1);
  };
  var $_4nncfi10hjdxlf0be = {
    cycleDown: cycleDown,
    cycleUp: cycleUp,
    cycleLeft: cycleLeft,
    cycleRight: cycleRight
  };

  var schema$2 = [
    $_5jvmj2y7jdxlezxo.strict('selector'),
    $_5jvmj2y7jdxlezxo.defaulted('execute', $_gf80ot109jdxlf09t.defaultExecute),
    $_d0ld34z6jdxlf03c.onKeyboardHandler('onEscape'),
    $_5jvmj2y7jdxlezxo.defaulted('captureTab', false),
    $_d0ld34z6jdxlf03c.initSize()
  ];
  var focusIn = function (component, gridConfig, gridState) {
    $_77tktczxjdxlf083.descendant(component.element(), gridConfig.selector()).each(function (first) {
      gridConfig.focusManager().set(component, first);
    });
  };
  var findCurrent = function (component, gridConfig) {
    return gridConfig.focusManager().get(component).bind(function (elem) {
      return $_77tktczxjdxlf083.closest(elem, gridConfig.selector());
    });
  };
  var execute$1 = function (component, simulatedEvent, gridConfig, gridState) {
    return findCurrent(component, gridConfig).bind(function (focused) {
      return gridConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var doMove = function (cycle) {
    return function (element, focused, gridConfig, gridState) {
      return $_a3qx8q10ejdxlf0an.locateVisible(element, focused, gridConfig.selector()).bind(function (identified) {
        return cycle(identified.candidates(), identified.index(), gridState.getNumRows().getOr(gridConfig.initSize().numRows()), gridState.getNumColumns().getOr(gridConfig.initSize().numColumns()));
      });
    };
  };
  var handleTab = function (component, simulatedEvent, gridConfig, gridState) {
    return gridConfig.captureTab() ? Option.some(true) : Option.none();
  };
  var doEscape = function (component, simulatedEvent, gridConfig, gridState) {
    return gridConfig.onEscape()(component, simulatedEvent);
  };
  var moveLeft = doMove($_4nncfi10hjdxlf0be.cycleLeft);
  var moveRight = doMove($_4nncfi10hjdxlf0be.cycleRight);
  var moveNorth = doMove($_4nncfi10hjdxlf0be.cycleUp);
  var moveSouth = doMove($_4nncfi10hjdxlf0be.cycleDown);
  var getRules$1 = $_26xiiiwjjdxlezmo.constant([
    $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.LEFT()), $_3d3hpj10cjdxlf0ai.west(moveLeft, moveRight)),
    $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.RIGHT()), $_3d3hpj10cjdxlf0ai.east(moveLeft, moveRight)),
    $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.UP()), $_3d3hpj10cjdxlf0ai.north(moveNorth)),
    $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.DOWN()), $_3d3hpj10cjdxlf0ai.south(moveSouth)),
    $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.and([
      $_9ev19b100jdxlf08c.isShift,
      $_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.TAB())
    ]), handleTab),
    $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.and([
      $_9ev19b100jdxlf08c.isNotShift,
      $_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.TAB())
    ]), handleTab),
    $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.ESCAPE()), doEscape),
    $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.SPACE().concat($_eha28uzpjdxlf06z.ENTER())), execute$1)
  ]);
  var getEvents$1 = $_26xiiiwjjdxlezmo.constant({});
  var getApis$1 = {};
  var FlatgridType = $_8ch24jzqjdxlf074.typical(schema$2, $_ydlxr10bjdxlf0aa.flatgrid, getRules$1, getEvents$1, getApis$1, Option.some(focusIn));

  var horizontal = function (container, selector, current, delta) {
    return $_a3qx8q10ejdxlf0an.locateVisible(container, current, selector, $_26xiiiwjjdxlezmo.constant(true)).bind(function (identified) {
      var index = identified.index();
      var candidates = identified.candidates();
      var newIndex = $_72fm9gzujdxlf07v.cycleBy(index, delta, 0, candidates.length - 1);
      return Option.from(candidates[newIndex]);
    });
  };
  var $_46u5h710jjdxlf0bt = { horizontal: horizontal };

  var schema$3 = [
    $_5jvmj2y7jdxlezxo.strict('selector'),
    $_5jvmj2y7jdxlezxo.defaulted('getInitial', Option.none),
    $_5jvmj2y7jdxlezxo.defaulted('execute', $_gf80ot109jdxlf09t.defaultExecute),
    $_5jvmj2y7jdxlezxo.defaulted('executeOnMove', false)
  ];
  var findCurrent$1 = function (component, flowConfig) {
    return flowConfig.focusManager().get(component).bind(function (elem) {
      return $_77tktczxjdxlf083.closest(elem, flowConfig.selector());
    });
  };
  var execute$2 = function (component, simulatedEvent, flowConfig) {
    return findCurrent$1(component, flowConfig).bind(function (focused) {
      return flowConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var focusIn$1 = function (component, flowConfig) {
    flowConfig.getInitial()(component).or($_77tktczxjdxlf083.descendant(component.element(), flowConfig.selector())).each(function (first) {
      flowConfig.focusManager().set(component, first);
    });
  };
  var moveLeft$1 = function (element, focused, info) {
    return $_46u5h710jjdxlf0bt.horizontal(element, info.selector(), focused, -1);
  };
  var moveRight$1 = function (element, focused, info) {
    return $_46u5h710jjdxlf0bt.horizontal(element, info.selector(), focused, +1);
  };
  var doMove$1 = function (movement) {
    return function (component, simulatedEvent, flowConfig) {
      return movement(component, simulatedEvent, flowConfig).bind(function () {
        return flowConfig.executeOnMove() ? execute$2(component, simulatedEvent, flowConfig) : Option.some(true);
      });
    };
  };
  var getRules$2 = function (_) {
    return [
      $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.LEFT().concat($_eha28uzpjdxlf06z.UP())), doMove$1($_3d3hpj10cjdxlf0ai.west(moveLeft$1, moveRight$1))),
      $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.RIGHT().concat($_eha28uzpjdxlf06z.DOWN())), doMove$1($_3d3hpj10cjdxlf0ai.east(moveLeft$1, moveRight$1))),
      $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.ENTER()), execute$2),
      $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.SPACE()), execute$2)
    ];
  };
  var getEvents$2 = $_26xiiiwjjdxlezmo.constant({});
  var getApis$2 = $_26xiiiwjjdxlezmo.constant({});
  var FlowType = $_8ch24jzqjdxlf074.typical(schema$3, $_8skmpryjjdxlf00p.init, getRules$2, getEvents$2, getApis$2, Option.some(focusIn$1));

  var outcome = $_8fo9b5x4jdxlezqc.immutableBag([
    'rowIndex',
    'columnIndex',
    'cell'
  ], []);
  var toCell = function (matrix, rowIndex, columnIndex) {
    return Option.from(matrix[rowIndex]).bind(function (row) {
      return Option.from(row[columnIndex]).map(function (cell) {
        return outcome({
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          cell: cell
        });
      });
    });
  };
  var cycleHorizontal$1 = function (matrix, rowIndex, startCol, deltaCol) {
    var row = matrix[rowIndex];
    var colsInRow = row.length;
    var newColIndex = $_72fm9gzujdxlf07v.cycleBy(startCol, deltaCol, 0, colsInRow - 1);
    return toCell(matrix, rowIndex, newColIndex);
  };
  var cycleVertical$1 = function (matrix, colIndex, startRow, deltaRow) {
    var nextRowIndex = $_72fm9gzujdxlf07v.cycleBy(startRow, deltaRow, 0, matrix.length - 1);
    var colsInNextRow = matrix[nextRowIndex].length;
    var nextColIndex = $_72fm9gzujdxlf07v.cap(colIndex, 0, colsInNextRow - 1);
    return toCell(matrix, nextRowIndex, nextColIndex);
  };
  var moveHorizontal = function (matrix, rowIndex, startCol, deltaCol) {
    var row = matrix[rowIndex];
    var colsInRow = row.length;
    var newColIndex = $_72fm9gzujdxlf07v.cap(startCol + deltaCol, 0, colsInRow - 1);
    return toCell(matrix, rowIndex, newColIndex);
  };
  var moveVertical = function (matrix, colIndex, startRow, deltaRow) {
    var nextRowIndex = $_72fm9gzujdxlf07v.cap(startRow + deltaRow, 0, matrix.length - 1);
    var colsInNextRow = matrix[nextRowIndex].length;
    var nextColIndex = $_72fm9gzujdxlf07v.cap(colIndex, 0, colsInNextRow - 1);
    return toCell(matrix, nextRowIndex, nextColIndex);
  };
  var cycleRight$1 = function (matrix, startRow, startCol) {
    return cycleHorizontal$1(matrix, startRow, startCol, +1);
  };
  var cycleLeft$1 = function (matrix, startRow, startCol) {
    return cycleHorizontal$1(matrix, startRow, startCol, -1);
  };
  var cycleUp$1 = function (matrix, startRow, startCol) {
    return cycleVertical$1(matrix, startCol, startRow, -1);
  };
  var cycleDown$1 = function (matrix, startRow, startCol) {
    return cycleVertical$1(matrix, startCol, startRow, +1);
  };
  var moveLeft$2 = function (matrix, startRow, startCol) {
    return moveHorizontal(matrix, startRow, startCol, -1);
  };
  var moveRight$2 = function (matrix, startRow, startCol) {
    return moveHorizontal(matrix, startRow, startCol, +1);
  };
  var moveUp = function (matrix, startRow, startCol) {
    return moveVertical(matrix, startCol, startRow, -1);
  };
  var moveDown = function (matrix, startRow, startCol) {
    return moveVertical(matrix, startCol, startRow, +1);
  };
  var $_c6k0wb10ljdxlf0cc = {
    cycleRight: cycleRight$1,
    cycleLeft: cycleLeft$1,
    cycleUp: cycleUp$1,
    cycleDown: cycleDown$1,
    moveLeft: moveLeft$2,
    moveRight: moveRight$2,
    moveUp: moveUp,
    moveDown: moveDown
  };

  var schema$4 = [
    $_5jvmj2y7jdxlezxo.strictObjOf('selectors', [
      $_5jvmj2y7jdxlezxo.strict('row'),
      $_5jvmj2y7jdxlezxo.strict('cell')
    ]),
    $_5jvmj2y7jdxlezxo.defaulted('cycles', true),
    $_5jvmj2y7jdxlezxo.defaulted('previousSelector', Option.none),
    $_5jvmj2y7jdxlezxo.defaulted('execute', $_gf80ot109jdxlf09t.defaultExecute)
  ];
  var focusIn$2 = function (component, matrixConfig) {
    var focused = matrixConfig.previousSelector()(component).orThunk(function () {
      var selectors = matrixConfig.selectors();
      return $_77tktczxjdxlf083.descendant(component.element(), selectors.cell());
    });
    focused.each(function (cell) {
      matrixConfig.focusManager().set(component, cell);
    });
  };
  var execute$3 = function (component, simulatedEvent, matrixConfig) {
    return $_9am9mvytjdxlf01i.search(component.element()).bind(function (focused) {
      return matrixConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var toMatrix = function (rows, matrixConfig) {
    return $_6dbxmwwsjdxleznr.map(rows, function (row) {
      return $_390b63zvjdxlf07x.descendants(row, matrixConfig.selectors().cell());
    });
  };
  var doMove$2 = function (ifCycle, ifMove) {
    return function (element, focused, matrixConfig) {
      var move = matrixConfig.cycles() ? ifCycle : ifMove;
      return $_77tktczxjdxlf083.closest(focused, matrixConfig.selectors().row()).bind(function (inRow) {
        var cellsInRow = $_390b63zvjdxlf07x.descendants(inRow, matrixConfig.selectors().cell());
        return $_a3qx8q10ejdxlf0an.findIndex(cellsInRow, focused).bind(function (colIndex) {
          var allRows = $_390b63zvjdxlf07x.descendants(element, matrixConfig.selectors().row());
          return $_a3qx8q10ejdxlf0an.findIndex(allRows, inRow).bind(function (rowIndex) {
            var matrix = toMatrix(allRows, matrixConfig);
            return move(matrix, rowIndex, colIndex).map(function (next) {
              return next.cell();
            });
          });
        });
      });
    };
  };
  var moveLeft$3 = doMove$2($_c6k0wb10ljdxlf0cc.cycleLeft, $_c6k0wb10ljdxlf0cc.moveLeft);
  var moveRight$3 = doMove$2($_c6k0wb10ljdxlf0cc.cycleRight, $_c6k0wb10ljdxlf0cc.moveRight);
  var moveNorth$1 = doMove$2($_c6k0wb10ljdxlf0cc.cycleUp, $_c6k0wb10ljdxlf0cc.moveUp);
  var moveSouth$1 = doMove$2($_c6k0wb10ljdxlf0cc.cycleDown, $_c6k0wb10ljdxlf0cc.moveDown);
  var getRules$3 = $_26xiiiwjjdxlezmo.constant([
    $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.LEFT()), $_3d3hpj10cjdxlf0ai.west(moveLeft$3, moveRight$3)),
    $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.RIGHT()), $_3d3hpj10cjdxlf0ai.east(moveLeft$3, moveRight$3)),
    $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.UP()), $_3d3hpj10cjdxlf0ai.north(moveNorth$1)),
    $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.DOWN()), $_3d3hpj10cjdxlf0ai.south(moveSouth$1)),
    $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.SPACE().concat($_eha28uzpjdxlf06z.ENTER())), execute$3)
  ]);
  var getEvents$3 = $_26xiiiwjjdxlezmo.constant({});
  var getApis$3 = $_26xiiiwjjdxlezmo.constant({});
  var MatrixType = $_8ch24jzqjdxlf074.typical(schema$4, $_8skmpryjjdxlf00p.init, getRules$3, getEvents$3, getApis$3, Option.some(focusIn$2));

  var schema$5 = [
    $_5jvmj2y7jdxlezxo.strict('selector'),
    $_5jvmj2y7jdxlezxo.defaulted('execute', $_gf80ot109jdxlf09t.defaultExecute),
    $_5jvmj2y7jdxlezxo.defaulted('moveOnTab', false)
  ];
  var execute$4 = function (component, simulatedEvent, menuConfig) {
    return menuConfig.focusManager().get(component).bind(function (focused) {
      return menuConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var focusIn$3 = function (component, menuConfig, simulatedEvent) {
    $_77tktczxjdxlf083.descendant(component.element(), menuConfig.selector()).each(function (first) {
      menuConfig.focusManager().set(component, first);
    });
  };
  var moveUp$1 = function (element, focused, info) {
    return $_46u5h710jjdxlf0bt.horizontal(element, info.selector(), focused, -1);
  };
  var moveDown$1 = function (element, focused, info) {
    return $_46u5h710jjdxlf0bt.horizontal(element, info.selector(), focused, +1);
  };
  var fireShiftTab = function (component, simulatedEvent, menuConfig) {
    return menuConfig.moveOnTab() ? $_3d3hpj10cjdxlf0ai.move(moveUp$1)(component, simulatedEvent, menuConfig) : Option.none();
  };
  var fireTab = function (component, simulatedEvent, menuConfig) {
    return menuConfig.moveOnTab() ? $_3d3hpj10cjdxlf0ai.move(moveDown$1)(component, simulatedEvent, menuConfig) : Option.none();
  };
  var getRules$4 = $_26xiiiwjjdxlezmo.constant([
    $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.UP()), $_3d3hpj10cjdxlf0ai.move(moveUp$1)),
    $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.DOWN()), $_3d3hpj10cjdxlf0ai.move(moveDown$1)),
    $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.and([
      $_9ev19b100jdxlf08c.isShift,
      $_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.TAB())
    ]), fireShiftTab),
    $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.and([
      $_9ev19b100jdxlf08c.isNotShift,
      $_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.TAB())
    ]), fireTab),
    $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.ENTER()), execute$4),
    $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.SPACE()), execute$4)
  ]);
  var getEvents$4 = $_26xiiiwjjdxlezmo.constant({});
  var getApis$4 = $_26xiiiwjjdxlezmo.constant({});
  var MenuType = $_8ch24jzqjdxlf074.typical(schema$5, $_8skmpryjjdxlf00p.init, getRules$4, getEvents$4, getApis$4, Option.some(focusIn$3));

  var schema$6 = [
    $_d0ld34z6jdxlf03c.onKeyboardHandler('onSpace'),
    $_d0ld34z6jdxlf03c.onKeyboardHandler('onEnter'),
    $_d0ld34z6jdxlf03c.onKeyboardHandler('onShiftEnter'),
    $_d0ld34z6jdxlf03c.onKeyboardHandler('onLeft'),
    $_d0ld34z6jdxlf03c.onKeyboardHandler('onRight'),
    $_d0ld34z6jdxlf03c.onKeyboardHandler('onTab'),
    $_d0ld34z6jdxlf03c.onKeyboardHandler('onShiftTab'),
    $_d0ld34z6jdxlf03c.onKeyboardHandler('onUp'),
    $_d0ld34z6jdxlf03c.onKeyboardHandler('onDown'),
    $_d0ld34z6jdxlf03c.onKeyboardHandler('onEscape'),
    $_5jvmj2y7jdxlezxo.option('focusIn')
  ];
  var getRules$5 = function (component, simulatedEvent, executeInfo) {
    return [
      $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.SPACE()), executeInfo.onSpace()),
      $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.and([
        $_9ev19b100jdxlf08c.isNotShift,
        $_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.ENTER())
      ]), executeInfo.onEnter()),
      $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.and([
        $_9ev19b100jdxlf08c.isShift,
        $_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.ENTER())
      ]), executeInfo.onShiftEnter()),
      $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.and([
        $_9ev19b100jdxlf08c.isShift,
        $_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.TAB())
      ]), executeInfo.onShiftTab()),
      $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.and([
        $_9ev19b100jdxlf08c.isNotShift,
        $_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.TAB())
      ]), executeInfo.onTab()),
      $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.UP()), executeInfo.onUp()),
      $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.DOWN()), executeInfo.onDown()),
      $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.LEFT()), executeInfo.onLeft()),
      $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.RIGHT()), executeInfo.onRight()),
      $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.SPACE()), executeInfo.onSpace()),
      $_q3qv1zzjdxlf089.rule($_9ev19b100jdxlf08c.inSet($_eha28uzpjdxlf06z.ESCAPE()), executeInfo.onEscape())
    ];
  };
  var focusIn$4 = function (component, executeInfo) {
    return executeInfo.focusIn().bind(function (f) {
      return f(component, executeInfo);
    });
  };
  var getEvents$5 = $_26xiiiwjjdxlezmo.constant({});
  var getApis$5 = $_26xiiiwjjdxlezmo.constant({});
  var SpecialType = $_8ch24jzqjdxlf074.typical(schema$6, $_8skmpryjjdxlf00p.init, getRules$5, getEvents$5, getApis$5, Option.some(focusIn$4));

  var $_e9qyewzmjdxlf06a = {
    acyclic: AcyclicType.schema(),
    cyclic: CyclicType.schema(),
    flow: FlowType.schema(),
    flatgrid: FlatgridType.schema(),
    matrix: MatrixType.schema(),
    execution: ExecutionType.schema(),
    menu: MenuType.schema(),
    special: SpecialType.schema()
  };

  var Keying = $_5tm9cmy2jdxlezw3.createModes({
    branchKey: 'mode',
    branches: $_e9qyewzmjdxlf06a,
    name: 'keying',
    active: {
      events: function (keyingConfig, keyingState) {
        var handler = keyingConfig.handler();
        return handler.toEvents(keyingConfig, keyingState);
      }
    },
    apis: {
      focusIn: function (component) {
        component.getSystem().triggerFocus(component.element(), component.element());
      },
      setGridSize: function (component, keyConfig, keyState, numRows, numColumns) {
        if (!$_ey6c2jxsjdxlezue.hasKey(keyState, 'setGridSize')) {
          console.error('Layout does not support setGridSize');
        } else {
          keyState.setGridSize(numRows, numColumns);
        }
      }
    },
    state: $_ydlxr10bjdxlf0aa
  });

  var field$1 = function (name, forbidden) {
    return $_5jvmj2y7jdxlezxo.defaultedObjOf(name, {}, $_6dbxmwwsjdxleznr.map(forbidden, function (f) {
      return $_5jvmj2y7jdxlezxo.forbid(f.name(), 'Cannot configure ' + f.name() + ' for ' + name);
    }).concat([$_5jvmj2y7jdxlezxo.state('dump', $_26xiiiwjjdxlezmo.identity)]));
  };
  var get$5 = function (data) {
    return data.dump();
  };
  var $_32y64u10ojdxlf0d0 = {
    field: field$1,
    get: get$5
  };

  var unique = 0;
  var generate$1 = function (prefix) {
    var date = new Date();
    var time = date.getTime();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
  };
  var $_5a8g5a10rjdxlf0dt = { generate: generate$1 };

  var premadeTag = $_5a8g5a10rjdxlf0dt.generate('alloy-premade');
  var apiConfig = $_5a8g5a10rjdxlf0dt.generate('api');
  var premade = function (comp) {
    return $_ey6c2jxsjdxlezue.wrap(premadeTag, comp);
  };
  var getPremade = function (spec) {
    return $_ey6c2jxsjdxlezue.readOptFrom(spec, premadeTag);
  };
  var makeApi = function (f) {
    return $_b832a6ygjdxlezzu.markAsSketchApi(function (component) {
      var args = Array.prototype.slice.call(arguments, 0);
      var spi = component.config(apiConfig);
      return f.apply(undefined, [spi].concat(args));
    }, f);
  };
  var $_73wlbg10qjdxlf0dm = {
    apiConfig: $_26xiiiwjjdxlezmo.constant(apiConfig),
    makeApi: makeApi,
    premade: premade,
    getPremade: getPremade
  };

  var adt$2 = $_dxqtfixwjdxlezva.generate([
    { required: ['data'] },
    { external: ['data'] },
    { optional: ['data'] },
    { group: ['data'] }
  ]);
  var fFactory = $_5jvmj2y7jdxlezxo.defaulted('factory', { sketch: $_26xiiiwjjdxlezmo.identity });
  var fSchema = $_5jvmj2y7jdxlezxo.defaulted('schema', []);
  var fName = $_5jvmj2y7jdxlezxo.strict('name');
  var fPname = $_5jvmj2y7jdxlezxo.field('pname', 'pname', $_8ycmk2y8jdxlezxw.defaultedThunk(function (typeSpec) {
    return '<alloy.' + $_5a8g5a10rjdxlf0dt.generate(typeSpec.name) + '>';
  }), $_2vagecyejdxlezzg.anyValue());
  var fDefaults = $_5jvmj2y7jdxlezxo.defaulted('defaults', $_26xiiiwjjdxlezmo.constant({}));
  var fOverrides = $_5jvmj2y7jdxlezxo.defaulted('overrides', $_26xiiiwjjdxlezmo.constant({}));
  var requiredSpec = $_2vagecyejdxlezzg.objOf([
    fFactory,
    fSchema,
    fName,
    fPname,
    fDefaults,
    fOverrides
  ]);
  var externalSpec = $_2vagecyejdxlezzg.objOf([
    fFactory,
    fSchema,
    fName,
    fDefaults,
    fOverrides
  ]);
  var optionalSpec = $_2vagecyejdxlezzg.objOf([
    fFactory,
    fSchema,
    fName,
    fPname,
    fDefaults,
    fOverrides
  ]);
  var groupSpec = $_2vagecyejdxlezzg.objOf([
    fFactory,
    fSchema,
    fName,
    $_5jvmj2y7jdxlezxo.strict('unit'),
    fPname,
    fDefaults,
    fOverrides
  ]);
  var asNamedPart = function (part) {
    return part.fold(Option.some, Option.none, Option.some, Option.some);
  };
  var name$1 = function (part) {
    var get = function (data) {
      return data.name();
    };
    return part.fold(get, get, get, get);
  };
  var asCommon = function (part) {
    return part.fold($_26xiiiwjjdxlezmo.identity, $_26xiiiwjjdxlezmo.identity, $_26xiiiwjjdxlezmo.identity, $_26xiiiwjjdxlezmo.identity);
  };
  var convert = function (adtConstructor, partSpec) {
    return function (spec) {
      var data = $_2vagecyejdxlezzg.asStructOrDie('Converting part type', partSpec, spec);
      return adtConstructor(data);
    };
  };
  var $_8qnic510vjdxlf0eq = {
    required: convert(adt$2.required, requiredSpec),
    external: convert(adt$2.external, externalSpec),
    optional: convert(adt$2.optional, optionalSpec),
    group: convert(adt$2.group, groupSpec),
    asNamedPart: asNamedPart,
    name: name$1,
    asCommon: asCommon,
    original: $_26xiiiwjjdxlezmo.constant('entirety')
  };

  var placeholder = 'placeholder';
  var adt$3 = $_dxqtfixwjdxlezva.generate([
    {
      single: [
        'required',
        'valueThunk'
      ]
    },
    {
      multiple: [
        'required',
        'valueThunks'
      ]
    }
  ]);
  var isSubstitute = function (uiType) {
    return $_6dbxmwwsjdxleznr.contains([placeholder], uiType);
  };
  var subPlaceholder = function (owner, detail, compSpec, placeholders) {
    if (owner.exists(function (o) {
        return o !== compSpec.owner;
      }))
      return adt$3.single(true, $_26xiiiwjjdxlezmo.constant(compSpec));
    return $_ey6c2jxsjdxlezue.readOptFrom(placeholders, compSpec.name).fold(function () {
      throw new Error('Unknown placeholder component: ' + compSpec.name + '\nKnown: [' + $_8ih830x0jdxlezpa.keys(placeholders) + ']\nNamespace: ' + owner.getOr('none') + '\nSpec: ' + $_67p1lqydjdxlezzd.stringify(compSpec, null, 2));
    }, function (newSpec) {
      return newSpec.replace();
    });
  };
  var scan = function (owner, detail, compSpec, placeholders) {
    if (compSpec.uiType === placeholder)
      return subPlaceholder(owner, detail, compSpec, placeholders);
    else
      return adt$3.single(false, $_26xiiiwjjdxlezmo.constant(compSpec));
  };
  var substitute = function (owner, detail, compSpec, placeholders) {
    var base = scan(owner, detail, compSpec, placeholders);
    return base.fold(function (req, valueThunk) {
      var value = valueThunk(detail, compSpec.config, compSpec.validated);
      var childSpecs = $_ey6c2jxsjdxlezue.readOptFrom(value, 'components').getOr([]);
      var substituted = $_6dbxmwwsjdxleznr.bind(childSpecs, function (c) {
        return substitute(owner, detail, c, placeholders);
      });
      return [$_dngveawyjdxlezp5.deepMerge(value, { components: substituted })];
    }, function (req, valuesThunk) {
      var values = valuesThunk(detail, compSpec.config, compSpec.validated);
      return values;
    });
  };
  var substituteAll = function (owner, detail, components, placeholders) {
    return $_6dbxmwwsjdxleznr.bind(components, function (c) {
      return substitute(owner, detail, c, placeholders);
    });
  };
  var oneReplace = function (label, replacements) {
    var called = false;
    var used = function () {
      return called;
    };
    var replace = function () {
      if (called === true)
        throw new Error('Trying to use the same placeholder more than once: ' + label);
      called = true;
      return replacements;
    };
    var required = function () {
      return replacements.fold(function (req, _) {
        return req;
      }, function (req, _) {
        return req;
      });
    };
    return {
      name: $_26xiiiwjjdxlezmo.constant(label),
      required: required,
      used: used,
      replace: replace
    };
  };
  var substitutePlaces = function (owner, detail, components, placeholders) {
    var ps = $_8ih830x0jdxlezpa.map(placeholders, function (ph, name) {
      return oneReplace(name, ph);
    });
    var outcome = substituteAll(owner, detail, components, ps);
    $_8ih830x0jdxlezpa.each(ps, function (p) {
      if (p.used() === false && p.required()) {
        throw new Error('Placeholder: ' + p.name() + ' was not found in components list\nNamespace: ' + owner.getOr('none') + '\nComponents: ' + $_67p1lqydjdxlezzd.stringify(detail.components(), null, 2));
      }
    });
    return outcome;
  };
  var singleReplace = function (detail, p) {
    var replacement = p;
    return replacement.fold(function (req, valueThunk) {
      return [valueThunk(detail)];
    }, function (req, valuesThunk) {
      return valuesThunk(detail);
    });
  };
  var $_cw9ym210wjdxlf0f4 = {
    single: adt$3.single,
    multiple: adt$3.multiple,
    isSubstitute: isSubstitute,
    placeholder: $_26xiiiwjjdxlezmo.constant(placeholder),
    substituteAll: substituteAll,
    substitutePlaces: substitutePlaces,
    singleReplace: singleReplace
  };

  var combine = function (detail, data, partSpec, partValidated) {
    var spec = partSpec;
    return $_dngveawyjdxlezp5.deepMerge(data.defaults()(detail, partSpec, partValidated), partSpec, { uid: detail.partUids()[data.name()] }, data.overrides()(detail, partSpec, partValidated), { 'debug.sketcher': $_ey6c2jxsjdxlezue.wrap('part-' + data.name(), spec) });
  };
  var subs = function (owner, detail, parts) {
    var internals = {};
    var externals = {};
    $_6dbxmwwsjdxleznr.each(parts, function (part) {
      part.fold(function (data) {
        internals[data.pname()] = $_cw9ym210wjdxlf0f4.single(true, function (detail, partSpec, partValidated) {
          return data.factory().sketch(combine(detail, data, partSpec, partValidated));
        });
      }, function (data) {
        var partSpec = detail.parts()[data.name()]();
        externals[data.name()] = $_26xiiiwjjdxlezmo.constant(combine(detail, data, partSpec[$_8qnic510vjdxlf0eq.original()]()));
      }, function (data) {
        internals[data.pname()] = $_cw9ym210wjdxlf0f4.single(false, function (detail, partSpec, partValidated) {
          return data.factory().sketch(combine(detail, data, partSpec, partValidated));
        });
      }, function (data) {
        internals[data.pname()] = $_cw9ym210wjdxlf0f4.multiple(true, function (detail, _partSpec, _partValidated) {
          var units = detail[data.name()]();
          return $_6dbxmwwsjdxleznr.map(units, function (u) {
            return data.factory().sketch($_dngveawyjdxlezp5.deepMerge(data.defaults()(detail, u), u, data.overrides()(detail, u)));
          });
        });
      });
    });
    return {
      internals: $_26xiiiwjjdxlezmo.constant(internals),
      externals: $_26xiiiwjjdxlezmo.constant(externals)
    };
  };
  var $_4vdrt610ujdxlf0eg = { subs: subs };

  var generate$2 = function (owner, parts) {
    var r = {};
    $_6dbxmwwsjdxleznr.each(parts, function (part) {
      $_8qnic510vjdxlf0eq.asNamedPart(part).each(function (np) {
        var g = doGenerateOne(owner, np.pname());
        r[np.name()] = function (config) {
          var validated = $_2vagecyejdxlezzg.asRawOrDie('Part: ' + np.name() + ' in ' + owner, $_2vagecyejdxlezzg.objOf(np.schema()), config);
          return $_dngveawyjdxlezp5.deepMerge(g, {
            config: config,
            validated: validated
          });
        };
      });
    });
    return r;
  };
  var doGenerateOne = function (owner, pname) {
    return {
      uiType: $_cw9ym210wjdxlf0f4.placeholder(),
      owner: owner,
      name: pname
    };
  };
  var generateOne = function (owner, pname, config) {
    return {
      uiType: $_cw9ym210wjdxlf0f4.placeholder(),
      owner: owner,
      name: pname,
      config: config,
      validated: {}
    };
  };
  var schemas = function (parts) {
    return $_6dbxmwwsjdxleznr.bind(parts, function (part) {
      return part.fold(Option.none, Option.some, Option.none, Option.none).map(function (data) {
        return $_5jvmj2y7jdxlezxo.strictObjOf(data.name(), data.schema().concat([$_d0ld34z6jdxlf03c.snapshot($_8qnic510vjdxlf0eq.original())]));
      }).toArray();
    });
  };
  var names = function (parts) {
    return $_6dbxmwwsjdxleznr.map(parts, $_8qnic510vjdxlf0eq.name);
  };
  var substitutes = function (owner, detail, parts) {
    return $_4vdrt610ujdxlf0eg.subs(owner, detail, parts);
  };
  var components = function (owner, detail, internals) {
    return $_cw9ym210wjdxlf0f4.substitutePlaces(Option.some(owner), detail, detail.components(), internals);
  };
  var getPart = function (component, detail, partKey) {
    var uid = detail.partUids()[partKey];
    return component.getSystem().getByUid(uid).toOption();
  };
  var getPartOrDie = function (component, detail, partKey) {
    return getPart(component, detail, partKey).getOrDie('Could not find part: ' + partKey);
  };
  var getParts = function (component, detail, partKeys) {
    var r = {};
    var uids = detail.partUids();
    var system = component.getSystem();
    $_6dbxmwwsjdxleznr.each(partKeys, function (pk) {
      r[pk] = system.getByUid(uids[pk]);
    });
    return $_8ih830x0jdxlezpa.map(r, $_26xiiiwjjdxlezmo.constant);
  };
  var getAllParts = function (component, detail) {
    var system = component.getSystem();
    return $_8ih830x0jdxlezpa.map(detail.partUids(), function (pUid, k) {
      return $_26xiiiwjjdxlezmo.constant(system.getByUid(pUid));
    });
  };
  var getPartsOrDie = function (component, detail, partKeys) {
    var r = {};
    var uids = detail.partUids();
    var system = component.getSystem();
    $_6dbxmwwsjdxleznr.each(partKeys, function (pk) {
      r[pk] = system.getByUid(uids[pk]).getOrDie();
    });
    return $_8ih830x0jdxlezpa.map(r, $_26xiiiwjjdxlezmo.constant);
  };
  var defaultUids = function (baseUid, partTypes) {
    var partNames = names(partTypes);
    return $_ey6c2jxsjdxlezue.wrapAll($_6dbxmwwsjdxleznr.map(partNames, function (pn) {
      return {
        key: pn,
        value: baseUid + '-' + pn
      };
    }));
  };
  var defaultUidsSchema = function (partTypes) {
    return $_5jvmj2y7jdxlezxo.field('partUids', 'partUids', $_8ycmk2y8jdxlezxw.mergeWithThunk(function (spec) {
      return defaultUids(spec.uid, partTypes);
    }), $_2vagecyejdxlezzg.anyValue());
  };
  var $_3ucuv110tjdxlf0e0 = {
    generate: generate$2,
    generateOne: generateOne,
    schemas: schemas,
    names: names,
    substitutes: substitutes,
    components: components,
    defaultUids: defaultUids,
    defaultUidsSchema: defaultUidsSchema,
    getAllParts: getAllParts,
    getPart: getPart,
    getPartOrDie: getPartOrDie,
    getParts: getParts,
    getPartsOrDie: getPartsOrDie
  };

  var prefix$1 = 'alloy-id-';
  var idAttr = 'data-alloy-id';
  var $_8f9xd510yjdxlf0fy = {
    prefix: $_26xiiiwjjdxlezmo.constant(prefix$1),
    idAttr: $_26xiiiwjjdxlezmo.constant(idAttr)
  };

  var prefix$2 = $_8f9xd510yjdxlf0fy.prefix();
  var idAttr$1 = $_8f9xd510yjdxlf0fy.idAttr();
  var write = function (label, elem) {
    var id = $_5a8g5a10rjdxlf0dt.generate(prefix$2 + label);
    $_72a1mgxrjdxlezu3.set(elem, idAttr$1, id);
    return id;
  };
  var writeOnly = function (elem, uid) {
    $_72a1mgxrjdxlezu3.set(elem, idAttr$1, uid);
  };
  var read$2 = function (elem) {
    var id = $_xp48txkjdxlezsr.isElement(elem) ? $_72a1mgxrjdxlezu3.get(elem, idAttr$1) : null;
    return Option.from(id);
  };
  var find$3 = function (container, id) {
    return $_77tktczxjdxlf083.descendant(container, id);
  };
  var generate$3 = function (prefix) {
    return $_5a8g5a10rjdxlf0dt.generate(prefix);
  };
  var revoke = function (elem) {
    $_72a1mgxrjdxlezu3.remove(elem, idAttr$1);
  };
  var $_ctuqf410xjdxlf0fo = {
    revoke: revoke,
    write: write,
    writeOnly: writeOnly,
    read: read$2,
    find: find$3,
    generate: generate$3,
    attribute: $_26xiiiwjjdxlezmo.constant(idAttr$1)
  };

  var getPartsSchema = function (partNames, _optPartNames, _owner) {
    var owner = _owner !== undefined ? _owner : 'Unknown owner';
    var fallbackThunk = function () {
      return [$_d0ld34z6jdxlf03c.output('partUids', {})];
    };
    var optPartNames = _optPartNames !== undefined ? _optPartNames : fallbackThunk();
    if (partNames.length === 0 && optPartNames.length === 0)
      return fallbackThunk();
    var partsSchema = $_5jvmj2y7jdxlezxo.strictObjOf('parts', $_6dbxmwwsjdxleznr.flatten([
      $_6dbxmwwsjdxleznr.map(partNames, $_5jvmj2y7jdxlezxo.strict),
      $_6dbxmwwsjdxleznr.map(optPartNames, function (optPart) {
        return $_5jvmj2y7jdxlezxo.defaulted(optPart, $_cw9ym210wjdxlf0f4.single(false, function () {
          throw new Error('The optional part: ' + optPart + ' was not specified in the config, but it was used in components');
        }));
      })
    ]));
    var partUidsSchema = $_5jvmj2y7jdxlezxo.state('partUids', function (spec) {
      if (!$_ey6c2jxsjdxlezue.hasKey(spec, 'parts')) {
        throw new Error('Part uid definition for owner: ' + owner + ' requires "parts"\nExpected parts: ' + partNames.join(', ') + '\nSpec: ' + $_67p1lqydjdxlezzd.stringify(spec, null, 2));
      }
      var uids = $_8ih830x0jdxlezpa.map(spec.parts, function (v, k) {
        return $_ey6c2jxsjdxlezue.readOptFrom(v, 'uid').getOrThunk(function () {
          return spec.uid + '-' + k;
        });
      });
      return uids;
    });
    return [
      partsSchema,
      partUidsSchema
    ];
  };
  var base$1 = function (label, partSchemas, partUidsSchemas, spec) {
    var ps = partSchemas.length > 0 ? [$_5jvmj2y7jdxlezxo.strictObjOf('parts', partSchemas)] : [];
    return ps.concat([
      $_5jvmj2y7jdxlezxo.strict('uid'),
      $_5jvmj2y7jdxlezxo.defaulted('dom', {}),
      $_5jvmj2y7jdxlezxo.defaulted('components', []),
      $_d0ld34z6jdxlf03c.snapshot('originalSpec'),
      $_5jvmj2y7jdxlezxo.defaulted('debug.sketcher', {})
    ]).concat(partUidsSchemas);
  };
  var asRawOrDie$1 = function (label, schema, spec, partSchemas, partUidsSchemas) {
    var baseS = base$1(label, partSchemas, spec, partUidsSchemas);
    return $_2vagecyejdxlezzg.asRawOrDie(label + ' [SpecSchema]', $_2vagecyejdxlezzg.objOfOnly(baseS.concat(schema)), spec);
  };
  var asStructOrDie$1 = function (label, schema, spec, partSchemas, partUidsSchemas) {
    var baseS = base$1(label, partSchemas, partUidsSchemas, spec);
    return $_2vagecyejdxlezzg.asStructOrDie(label + ' [SpecSchema]', $_2vagecyejdxlezzg.objOfOnly(baseS.concat(schema)), spec);
  };
  var extend = function (builder, original, nu) {
    var newSpec = $_dngveawyjdxlezp5.deepMerge(original, nu);
    return builder(newSpec);
  };
  var addBehaviours = function (original, behaviours) {
    return $_dngveawyjdxlezp5.deepMerge(original, behaviours);
  };
  var $_4ng72810zjdxlf0g2 = {
    asRawOrDie: asRawOrDie$1,
    asStructOrDie: asStructOrDie$1,
    addBehaviours: addBehaviours,
    getPartsSchema: getPartsSchema,
    extend: extend
  };

  var single = function (owner, schema, factory, spec) {
    var specWithUid = supplyUid(spec);
    var detail = $_4ng72810zjdxlf0g2.asStructOrDie(owner, schema, specWithUid, [], []);
    return $_dngveawyjdxlezp5.deepMerge(factory(detail, specWithUid), { 'debug.sketcher': $_ey6c2jxsjdxlezue.wrap(owner, spec) });
  };
  var composite = function (owner, schema, partTypes, factory, spec) {
    var specWithUid = supplyUid(spec);
    var partSchemas = $_3ucuv110tjdxlf0e0.schemas(partTypes);
    var partUidsSchema = $_3ucuv110tjdxlf0e0.defaultUidsSchema(partTypes);
    var detail = $_4ng72810zjdxlf0g2.asStructOrDie(owner, schema, specWithUid, partSchemas, [partUidsSchema]);
    var subs = $_3ucuv110tjdxlf0e0.substitutes(owner, detail, partTypes);
    var components = $_3ucuv110tjdxlf0e0.components(owner, detail, subs.internals());
    return $_dngveawyjdxlezp5.deepMerge(factory(detail, components, specWithUid, subs.externals()), { 'debug.sketcher': $_ey6c2jxsjdxlezue.wrap(owner, spec) });
  };
  var supplyUid = function (spec) {
    return $_dngveawyjdxlezp5.deepMerge({ uid: $_ctuqf410xjdxlf0fo.generate('uid') }, spec);
  };
  var $_cvnsdc10sjdxlf0du = {
    supplyUid: supplyUid,
    single: single,
    composite: composite
  };

  var singleSchema = $_2vagecyejdxlezzg.objOfOnly([
    $_5jvmj2y7jdxlezxo.strict('name'),
    $_5jvmj2y7jdxlezxo.strict('factory'),
    $_5jvmj2y7jdxlezxo.strict('configFields'),
    $_5jvmj2y7jdxlezxo.defaulted('apis', {}),
    $_5jvmj2y7jdxlezxo.defaulted('extraApis', {})
  ]);
  var compositeSchema = $_2vagecyejdxlezzg.objOfOnly([
    $_5jvmj2y7jdxlezxo.strict('name'),
    $_5jvmj2y7jdxlezxo.strict('factory'),
    $_5jvmj2y7jdxlezxo.strict('configFields'),
    $_5jvmj2y7jdxlezxo.strict('partFields'),
    $_5jvmj2y7jdxlezxo.defaulted('apis', {}),
    $_5jvmj2y7jdxlezxo.defaulted('extraApis', {})
  ]);
  var single$1 = function (rawConfig) {
    var config = $_2vagecyejdxlezzg.asRawOrDie('Sketcher for ' + rawConfig.name, singleSchema, rawConfig);
    var sketch = function (spec) {
      return $_cvnsdc10sjdxlf0du.single(config.name, config.configFields, config.factory, spec);
    };
    var apis = $_8ih830x0jdxlezpa.map(config.apis, $_73wlbg10qjdxlf0dm.makeApi);
    var extraApis = $_8ih830x0jdxlezpa.map(config.extraApis, function (f, k) {
      return $_b832a6ygjdxlezzu.markAsExtraApi(f, k);
    });
    return $_dngveawyjdxlezp5.deepMerge({
      name: $_26xiiiwjjdxlezmo.constant(config.name),
      partFields: $_26xiiiwjjdxlezmo.constant([]),
      configFields: $_26xiiiwjjdxlezmo.constant(config.configFields),
      sketch: sketch
    }, apis, extraApis);
  };
  var composite$1 = function (rawConfig) {
    var config = $_2vagecyejdxlezzg.asRawOrDie('Sketcher for ' + rawConfig.name, compositeSchema, rawConfig);
    var sketch = function (spec) {
      return $_cvnsdc10sjdxlf0du.composite(config.name, config.configFields, config.partFields, config.factory, spec);
    };
    var parts = $_3ucuv110tjdxlf0e0.generate(config.name, config.partFields);
    var apis = $_8ih830x0jdxlezpa.map(config.apis, $_73wlbg10qjdxlf0dm.makeApi);
    var extraApis = $_8ih830x0jdxlezpa.map(config.extraApis, function (f, k) {
      return $_b832a6ygjdxlezzu.markAsExtraApi(f, k);
    });
    return $_dngveawyjdxlezp5.deepMerge({
      name: $_26xiiiwjjdxlezmo.constant(config.name),
      partFields: $_26xiiiwjjdxlezmo.constant(config.partFields),
      configFields: $_26xiiiwjjdxlezmo.constant(config.configFields),
      sketch: sketch,
      parts: $_26xiiiwjjdxlezmo.constant(parts)
    }, apis, extraApis);
  };
  var $_e8py5t10pjdxlf0dc = {
    single: single$1,
    composite: composite$1
  };

  var events$3 = function (optAction) {
    var executeHandler = function (action) {
      return $_fpalyxy4jdxlezwy.run($_7mziizwhjdxlezm8.execute(), function (component, simulatedEvent) {
        action(component);
        simulatedEvent.stop();
      });
    };
    var onClick = function (component, simulatedEvent) {
      simulatedEvent.stop();
      $_7qvrqpwgjdxlezlj.emitExecute(component);
    };
    var onMousedown = function (component, simulatedEvent) {
      simulatedEvent.cut();
    };
    var pointerEvents = $_g8mzcxwkjdxlezmu.detect().deviceType.isTouch() ? [$_fpalyxy4jdxlezwy.run($_7mziizwhjdxlezm8.tap(), onClick)] : [
      $_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.click(), onClick),
      $_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.mousedown(), onMousedown)
    ];
    return $_fpalyxy4jdxlezwy.derive($_6dbxmwwsjdxleznr.flatten([
      optAction.map(executeHandler).toArray(),
      pointerEvents
    ]));
  };
  var $_64q4tc110jdxlf0gh = { events: events$3 };

  var factory = function (detail, spec) {
    var events = $_64q4tc110jdxlf0gh.events(detail.action());
    var optType = $_ey6c2jxsjdxlezue.readOptFrom(detail.dom(), 'attributes').bind($_ey6c2jxsjdxlezue.readOpt('type'));
    var optTag = $_ey6c2jxsjdxlezue.readOptFrom(detail.dom(), 'tag');
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: detail.components(),
      events: events,
      behaviours: $_dngveawyjdxlezp5.deepMerge($_5tm9cmy2jdxlezw3.derive([
        Focusing.config({}),
        Keying.config({
          mode: 'execution',
          useSpace: true,
          useEnter: true
        })
      ]), $_32y64u10ojdxlf0d0.get(detail.buttonBehaviours())),
      domModification: {
        attributes: $_dngveawyjdxlezp5.deepMerge(optType.fold(function () {
          return optTag.is('button') ? { type: 'button' } : {};
        }, function (t) {
          return {};
        }), { role: detail.role().getOr('button') })
      },
      eventOrder: detail.eventOrder()
    };
  };
  var Button = $_e8py5t10pjdxlf0dc.single({
    name: 'Button',
    factory: factory,
    configFields: [
      $_5jvmj2y7jdxlezxo.defaulted('uid', undefined),
      $_5jvmj2y7jdxlezxo.strict('dom'),
      $_5jvmj2y7jdxlezxo.defaulted('components', []),
      $_32y64u10ojdxlf0d0.field('buttonBehaviours', [
        Focusing,
        Keying
      ]),
      $_5jvmj2y7jdxlezxo.option('action'),
      $_5jvmj2y7jdxlezxo.option('role'),
      $_5jvmj2y7jdxlezxo.defaulted('eventOrder', {})
    ]
  });

  var exhibit$2 = function (base, unselectConfig) {
    return $_8a5bobyhjdxlezzz.nu({
      styles: {
        '-webkit-user-select': 'none',
        'user-select': 'none',
        '-ms-user-select': 'none',
        '-moz-user-select': '-moz-none'
      },
      attributes: { 'unselectable': 'on' }
    });
  };
  var events$4 = function (unselectConfig) {
    return $_fpalyxy4jdxlezwy.derive([$_fpalyxy4jdxlezwy.abort($_f2g7alwijdxlezmh.selectstart(), $_26xiiiwjjdxlezmo.constant(true))]);
  };
  var $_34umx1112jdxlf0gq = {
    events: events$4,
    exhibit: exhibit$2
  };

  var Unselecting = $_5tm9cmy2jdxlezw3.create({
    fields: [],
    name: 'unselecting',
    active: $_34umx1112jdxlf0gq
  });

  var getAttrs = function (elem) {
    var attributes = elem.dom().attributes !== undefined ? elem.dom().attributes : [];
    return $_6dbxmwwsjdxleznr.foldl(attributes, function (b, attr) {
      if (attr.name === 'class')
        return b;
      else
        return $_dngveawyjdxlezp5.deepMerge(b, $_ey6c2jxsjdxlezue.wrap(attr.name, attr.value));
    }, {});
  };
  var getClasses = function (elem) {
    return Array.prototype.slice.call(elem.dom().classList, 0);
  };
  var fromHtml$2 = function (html) {
    var elem = $_2ejbh1xfjdxlezs6.fromHtml(html);
    var children = $_s9ri4x3jdxlezpx.children(elem);
    var attrs = getAttrs(elem);
    var classes = getClasses(elem);
    var contents = children.length === 0 ? {} : { innerHtml: $_64cz3zxojdxleztt.get(elem) };
    return $_dngveawyjdxlezp5.deepMerge({
      tag: $_xp48txkjdxlezsr.name(elem),
      classes: classes,
      attributes: attrs
    }, contents);
  };
  var sketch = function (sketcher, html, config) {
    return sketcher.sketch($_dngveawyjdxlezp5.deepMerge({ dom: fromHtml$2(html) }, config));
  };
  var $_c7auea114jdxlf0gy = {
    fromHtml: fromHtml$2,
    sketch: sketch
  };

  var dom$1 = function (rawHtml) {
    var html = $_4304iowvjdxlezox.supplant(rawHtml, { prefix: $_6pb5xszejdxlf051.prefix() });
    return $_c7auea114jdxlf0gy.fromHtml(html);
  };
  var spec = function (rawHtml) {
    var sDom = dom$1(rawHtml);
    return { dom: sDom };
  };
  var $_2vsnm0113jdxlf0gu = {
    dom: dom$1,
    spec: spec
  };

  var forToolbarCommand = function (editor, command) {
    return forToolbar(command, function () {
      editor.execCommand(command);
    }, {});
  };
  var getToggleBehaviours = function (command) {
    return $_5tm9cmy2jdxlezw3.derive([
      Toggling.config({
        toggleClass: $_6pb5xszejdxlf051.resolve('toolbar-button-selected'),
        toggleOnExecute: false,
        aria: { mode: 'pressed' }
      }),
      $_2qdoh4zdjdxlf04x.format(command, function (button, status) {
        var toggle = status ? Toggling.on : Toggling.off;
        toggle(button);
      })
    ]);
  };
  var forToolbarStateCommand = function (editor, command) {
    var extraBehaviours = getToggleBehaviours(command);
    return forToolbar(command, function () {
      editor.execCommand(command);
    }, extraBehaviours);
  };
  var forToolbarStateAction = function (editor, clazz, command, action) {
    var extraBehaviours = getToggleBehaviours(command);
    return forToolbar(clazz, action, extraBehaviours);
  };
  var forToolbar = function (clazz, action, extraBehaviours) {
    return Button.sketch({
      dom: $_2vsnm0113jdxlf0gu.dom('<span class="${prefix}-toolbar-button ${prefix}-icon-' + clazz + ' ${prefix}-icon"></span>'),
      action: action,
      buttonBehaviours: $_dngveawyjdxlezp5.deepMerge($_5tm9cmy2jdxlezw3.derive([Unselecting.config({})]), extraBehaviours)
    });
  };
  var $_50h76zfjdxlf054 = {
    forToolbar: forToolbar,
    forToolbarCommand: forToolbarCommand,
    forToolbarStateAction: forToolbarStateAction,
    forToolbarStateCommand: forToolbarStateCommand
  };

  var reduceBy = function (value, min, max, step) {
    if (value < min)
      return value;
    else if (value > max)
      return max;
    else if (value === min)
      return min - 1;
    else
      return Math.max(min, value - step);
  };
  var increaseBy = function (value, min, max, step) {
    if (value > max)
      return value;
    else if (value < min)
      return min;
    else if (value === max)
      return max + 1;
    else
      return Math.min(max, value + step);
  };
  var capValue = function (value, min, max) {
    return Math.max(min, Math.min(max, value));
  };
  var snapValueOfX = function (bounds, value, min, max, step, snapStart) {
    return snapStart.fold(function () {
      var initValue = value - min;
      var extraValue = Math.round(initValue / step) * step;
      return capValue(min + extraValue, min - 1, max + 1);
    }, function (start) {
      var remainder = (value - start) % step;
      var adjustment = Math.round(remainder / step);
      var rawSteps = Math.floor((value - start) / step);
      var maxSteps = Math.floor((max - start) / step);
      var numSteps = Math.min(maxSteps, rawSteps + adjustment);
      var r = start + numSteps * step;
      return Math.max(start, r);
    });
  };
  var findValueOfX = function (bounds, min, max, xValue, step, snapToGrid, snapStart) {
    var range = max - min;
    if (xValue < bounds.left)
      return min - 1;
    else if (xValue > bounds.right)
      return max + 1;
    else {
      var xOffset = Math.min(bounds.right, Math.max(xValue, bounds.left)) - bounds.left;
      var newValue = capValue(xOffset / bounds.width * range + min, min - 1, max + 1);
      var roundedValue = Math.round(newValue);
      return snapToGrid && newValue >= min && newValue <= max ? snapValueOfX(bounds, newValue, min, max, step, snapStart) : roundedValue;
    }
  };
  var $_34fsgr119jdxlf0ia = {
    reduceBy: reduceBy,
    increaseBy: increaseBy,
    findValueOfX: findValueOfX
  };

  var changeEvent = 'slider.change.value';
  var isTouch = $_g8mzcxwkjdxlezmu.detect().deviceType.isTouch();
  var getEventSource = function (simulatedEvent) {
    var evt = simulatedEvent.event().raw();
    if (isTouch && evt.touches !== undefined && evt.touches.length === 1)
      return Option.some(evt.touches[0]);
    else if (isTouch && evt.touches !== undefined)
      return Option.none();
    else if (!isTouch && evt.clientX !== undefined)
      return Option.some(evt);
    else
      return Option.none();
  };
  var getEventX = function (simulatedEvent) {
    var spot = getEventSource(simulatedEvent);
    return spot.map(function (s) {
      return s.clientX;
    });
  };
  var fireChange = function (component, value) {
    $_7qvrqpwgjdxlezlj.emitWith(component, changeEvent, { value: value });
  };
  var moveRightFromLedge = function (ledge, detail) {
    fireChange(ledge, detail.min());
  };
  var moveLeftFromRedge = function (redge, detail) {
    fireChange(redge, detail.max());
  };
  var setToRedge = function (redge, detail) {
    fireChange(redge, detail.max() + 1);
  };
  var setToLedge = function (ledge, detail) {
    fireChange(ledge, detail.min() - 1);
  };
  var setToX = function (spectrum, spectrumBounds, detail, xValue) {
    var value = $_34fsgr119jdxlf0ia.findValueOfX(spectrumBounds, detail.min(), detail.max(), xValue, detail.stepSize(), detail.snapToGrid(), detail.snapStart());
    fireChange(spectrum, value);
  };
  var setXFromEvent = function (spectrum, detail, spectrumBounds, simulatedEvent) {
    return getEventX(simulatedEvent).map(function (xValue) {
      setToX(spectrum, spectrumBounds, detail, xValue);
      return xValue;
    });
  };
  var moveLeft$4 = function (spectrum, detail) {
    var newValue = $_34fsgr119jdxlf0ia.reduceBy(detail.value().get(), detail.min(), detail.max(), detail.stepSize());
    fireChange(spectrum, newValue);
  };
  var moveRight$4 = function (spectrum, detail) {
    var newValue = $_34fsgr119jdxlf0ia.increaseBy(detail.value().get(), detail.min(), detail.max(), detail.stepSize());
    fireChange(spectrum, newValue);
  };
  var $_1bwkf2118jdxlf0i3 = {
    setXFromEvent: setXFromEvent,
    setToLedge: setToLedge,
    setToRedge: setToRedge,
    moveLeftFromRedge: moveLeftFromRedge,
    moveRightFromLedge: moveRightFromLedge,
    moveLeft: moveLeft$4,
    moveRight: moveRight$4,
    changeEvent: $_26xiiiwjjdxlezmo.constant(changeEvent)
  };

  var platform = $_g8mzcxwkjdxlezmu.detect();
  var isTouch$1 = platform.deviceType.isTouch();
  var edgePart = function (name, action) {
    return $_8qnic510vjdxlf0eq.optional({
      name: '' + name + '-edge',
      overrides: function (detail) {
        var touchEvents = $_fpalyxy4jdxlezwy.derive([$_fpalyxy4jdxlezwy.runActionExtra($_f2g7alwijdxlezmh.touchstart(), action, [detail])]);
        var mouseEvents = $_fpalyxy4jdxlezwy.derive([
          $_fpalyxy4jdxlezwy.runActionExtra($_f2g7alwijdxlezmh.mousedown(), action, [detail]),
          $_fpalyxy4jdxlezwy.runActionExtra($_f2g7alwijdxlezmh.mousemove(), function (l, det) {
            if (det.mouseIsDown().get())
              action(l, det);
          }, [detail])
        ]);
        return { events: isTouch$1 ? touchEvents : mouseEvents };
      }
    });
  };
  var ledgePart = edgePart('left', $_1bwkf2118jdxlf0i3.setToLedge);
  var redgePart = edgePart('right', $_1bwkf2118jdxlf0i3.setToRedge);
  var thumbPart = $_8qnic510vjdxlf0eq.required({
    name: 'thumb',
    defaults: $_26xiiiwjjdxlezmo.constant({ dom: { styles: { position: 'absolute' } } }),
    overrides: function (detail) {
      return {
        events: $_fpalyxy4jdxlezwy.derive([
          $_fpalyxy4jdxlezwy.redirectToPart($_f2g7alwijdxlezmh.touchstart(), detail, 'spectrum'),
          $_fpalyxy4jdxlezwy.redirectToPart($_f2g7alwijdxlezmh.touchmove(), detail, 'spectrum'),
          $_fpalyxy4jdxlezwy.redirectToPart($_f2g7alwijdxlezmh.touchend(), detail, 'spectrum')
        ])
      };
    }
  });
  var spectrumPart = $_8qnic510vjdxlf0eq.required({
    schema: [$_5jvmj2y7jdxlezxo.state('mouseIsDown', function () {
        return Cell(false);
      })],
    name: 'spectrum',
    overrides: function (detail) {
      var moveToX = function (spectrum, simulatedEvent) {
        var spectrumBounds = spectrum.element().dom().getBoundingClientRect();
        $_1bwkf2118jdxlf0i3.setXFromEvent(spectrum, detail, spectrumBounds, simulatedEvent);
      };
      var touchEvents = $_fpalyxy4jdxlezwy.derive([
        $_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.touchstart(), moveToX),
        $_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.touchmove(), moveToX)
      ]);
      var mouseEvents = $_fpalyxy4jdxlezwy.derive([
        $_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.mousedown(), moveToX),
        $_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.mousemove(), function (spectrum, se) {
          if (detail.mouseIsDown().get())
            moveToX(spectrum, se);
        })
      ]);
      return {
        behaviours: $_5tm9cmy2jdxlezw3.derive(isTouch$1 ? [] : [
          Keying.config({
            mode: 'special',
            onLeft: function (spectrum) {
              $_1bwkf2118jdxlf0i3.moveLeft(spectrum, detail);
              return Option.some(true);
            },
            onRight: function (spectrum) {
              $_1bwkf2118jdxlf0i3.moveRight(spectrum, detail);
              return Option.some(true);
            }
          }),
          Focusing.config({})
        ]),
        events: isTouch$1 ? touchEvents : mouseEvents
      };
    }
  });
  var SliderParts = [
    ledgePart,
    redgePart,
    thumbPart,
    spectrumPart
  ];

  var onLoad$1 = function (component, repConfig, repState) {
    repConfig.store().manager().onLoad(component, repConfig, repState);
  };
  var onUnload = function (component, repConfig, repState) {
    repConfig.store().manager().onUnload(component, repConfig, repState);
  };
  var setValue = function (component, repConfig, repState, data) {
    repConfig.store().manager().setValue(component, repConfig, repState, data);
  };
  var getValue = function (component, repConfig, repState) {
    return repConfig.store().manager().getValue(component, repConfig, repState);
  };
  var $_9uh03d11djdxlf0iq = {
    onLoad: onLoad$1,
    onUnload: onUnload,
    setValue: setValue,
    getValue: getValue
  };

  var events$5 = function (repConfig, repState) {
    var es = repConfig.resetOnDom() ? [
      $_fpalyxy4jdxlezwy.runOnAttached(function (comp, se) {
        $_9uh03d11djdxlf0iq.onLoad(comp, repConfig, repState);
      }),
      $_fpalyxy4jdxlezwy.runOnDetached(function (comp, se) {
        $_9uh03d11djdxlf0iq.onUnload(comp, repConfig, repState);
      })
    ] : [$_52b1ndy3jdxlezwf.loadEvent(repConfig, repState, $_9uh03d11djdxlf0iq.onLoad)];
    return $_fpalyxy4jdxlezwy.derive(es);
  };
  var $_5iyeez11cjdxlf0io = { events: events$5 };

  var memory = function () {
    var data = Cell(null);
    var readState = function () {
      return {
        mode: 'memory',
        value: data.get()
      };
    };
    var isNotSet = function () {
      return data.get() === null;
    };
    var clear = function () {
      data.set(null);
    };
    return BehaviourState({
      set: data.set,
      get: data.get,
      isNotSet: isNotSet,
      clear: clear,
      readState: readState
    });
  };
  var manual = function () {
    var readState = function () {
    };
    return BehaviourState({ readState: readState });
  };
  var dataset = function () {
    var data = Cell({});
    var readState = function () {
      return {
        mode: 'dataset',
        dataset: data.get()
      };
    };
    return BehaviourState({
      readState: readState,
      set: data.set,
      get: data.get
    });
  };
  var init$2 = function (spec) {
    return spec.store().manager().state(spec);
  };
  var $_8a75h911gjdxlf0j3 = {
    memory: memory,
    dataset: dataset,
    manual: manual,
    init: init$2
  };

  var setValue$1 = function (component, repConfig, repState, data) {
    var dataKey = repConfig.store().getDataKey();
    repState.set({});
    repConfig.store().setData()(component, data);
    repConfig.onSetValue()(component, data);
  };
  var getValue$1 = function (component, repConfig, repState) {
    var key = repConfig.store().getDataKey()(component);
    var dataset = repState.get();
    return $_ey6c2jxsjdxlezue.readOptFrom(dataset, key).fold(function () {
      return repConfig.store().getFallbackEntry()(key);
    }, function (data) {
      return data;
    });
  };
  var onLoad$2 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (data) {
      setValue$1(component, repConfig, repState, data);
    });
  };
  var onUnload$1 = function (component, repConfig, repState) {
    repState.set({});
  };
  var DatasetStore = [
    $_5jvmj2y7jdxlezxo.option('initialValue'),
    $_5jvmj2y7jdxlezxo.strict('getFallbackEntry'),
    $_5jvmj2y7jdxlezxo.strict('getDataKey'),
    $_5jvmj2y7jdxlezxo.strict('setData'),
    $_d0ld34z6jdxlf03c.output('manager', {
      setValue: setValue$1,
      getValue: getValue$1,
      onLoad: onLoad$2,
      onUnload: onUnload$1,
      state: $_8a75h911gjdxlf0j3.dataset
    })
  ];

  var getValue$2 = function (component, repConfig, repState) {
    return repConfig.store().getValue()(component);
  };
  var setValue$2 = function (component, repConfig, repState, data) {
    repConfig.store().setValue()(component, data);
    repConfig.onSetValue()(component, data);
  };
  var onLoad$3 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (data) {
      repConfig.store().setValue()(component, data);
    });
  };
  var ManualStore = [
    $_5jvmj2y7jdxlezxo.strict('getValue'),
    $_5jvmj2y7jdxlezxo.defaulted('setValue', $_26xiiiwjjdxlezmo.noop),
    $_5jvmj2y7jdxlezxo.option('initialValue'),
    $_d0ld34z6jdxlf03c.output('manager', {
      setValue: setValue$2,
      getValue: getValue$2,
      onLoad: onLoad$3,
      onUnload: $_26xiiiwjjdxlezmo.noop,
      state: $_8skmpryjjdxlf00p.init
    })
  ];

  var setValue$3 = function (component, repConfig, repState, data) {
    repState.set(data);
    repConfig.onSetValue()(component, data);
  };
  var getValue$3 = function (component, repConfig, repState) {
    return repState.get();
  };
  var onLoad$4 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (initVal) {
      if (repState.isNotSet())
        repState.set(initVal);
    });
  };
  var onUnload$2 = function (component, repConfig, repState) {
    repState.clear();
  };
  var MemoryStore = [
    $_5jvmj2y7jdxlezxo.option('initialValue'),
    $_d0ld34z6jdxlf03c.output('manager', {
      setValue: setValue$3,
      getValue: getValue$3,
      onLoad: onLoad$4,
      onUnload: onUnload$2,
      state: $_8a75h911gjdxlf0j3.memory
    })
  ];

  var RepresentSchema = [
    $_5jvmj2y7jdxlezxo.defaultedOf('store', { mode: 'memory' }, $_2vagecyejdxlezzg.choose('mode', {
      memory: MemoryStore,
      manual: ManualStore,
      dataset: DatasetStore
    })),
    $_d0ld34z6jdxlf03c.onHandler('onSetValue'),
    $_5jvmj2y7jdxlezxo.defaulted('resetOnDom', false)
  ];

  var me = $_5tm9cmy2jdxlezw3.create({
    fields: RepresentSchema,
    name: 'representing',
    active: $_5iyeez11cjdxlf0io,
    apis: $_9uh03d11djdxlf0iq,
    extra: {
      setValueFrom: function (component, source) {
        var value = me.getValue(source);
        me.setValue(component, value);
      }
    },
    state: $_8a75h911gjdxlf0j3
  });

  var isTouch$2 = $_g8mzcxwkjdxlezmu.detect().deviceType.isTouch();
  var SliderSchema = [
    $_5jvmj2y7jdxlezxo.strict('min'),
    $_5jvmj2y7jdxlezxo.strict('max'),
    $_5jvmj2y7jdxlezxo.defaulted('stepSize', 1),
    $_5jvmj2y7jdxlezxo.defaulted('onChange', $_26xiiiwjjdxlezmo.noop),
    $_5jvmj2y7jdxlezxo.defaulted('onInit', $_26xiiiwjjdxlezmo.noop),
    $_5jvmj2y7jdxlezxo.defaulted('onDragStart', $_26xiiiwjjdxlezmo.noop),
    $_5jvmj2y7jdxlezxo.defaulted('onDragEnd', $_26xiiiwjjdxlezmo.noop),
    $_5jvmj2y7jdxlezxo.defaulted('snapToGrid', false),
    $_5jvmj2y7jdxlezxo.option('snapStart'),
    $_5jvmj2y7jdxlezxo.strict('getInitialValue'),
    $_32y64u10ojdxlf0d0.field('sliderBehaviours', [
      Keying,
      me
    ]),
    $_5jvmj2y7jdxlezxo.state('value', function (spec) {
      return Cell(spec.min);
    })
  ].concat(!isTouch$2 ? [$_5jvmj2y7jdxlezxo.state('mouseIsDown', function () {
      return Cell(false);
    })] : []);

  var api$1 = Dimension('width', function (element) {
    return element.dom().offsetWidth;
  });
  var set$4 = function (element, h) {
    api$1.set(element, h);
  };
  var get$6 = function (element) {
    return api$1.get(element);
  };
  var getOuter$2 = function (element) {
    return api$1.getOuter(element);
  };
  var setMax$1 = function (element, value) {
    var inclusions = [
      'margin-left',
      'border-left-width',
      'padding-left',
      'padding-right',
      'border-right-width',
      'margin-right'
    ];
    var absMax = api$1.max(element, value, inclusions);
    $_99zvvg103jdxlf08t.set(element, 'max-width', absMax + 'px');
  };
  var $_3s6gko11kjdxlf0jx = {
    set: set$4,
    get: get$6,
    getOuter: getOuter$2,
    setMax: setMax$1
  };

  var isTouch$3 = $_g8mzcxwkjdxlezmu.detect().deviceType.isTouch();
  var sketch$1 = function (detail, components, spec, externals) {
    var range = detail.max() - detail.min();
    var getXCentre = function (component) {
      var rect = component.element().dom().getBoundingClientRect();
      return (rect.left + rect.right) / 2;
    };
    var getThumb = function (component) {
      return $_3ucuv110tjdxlf0e0.getPartOrDie(component, detail, 'thumb');
    };
    var getXOffset = function (slider, spectrumBounds, detail) {
      var v = detail.value().get();
      if (v < detail.min()) {
        return $_3ucuv110tjdxlf0e0.getPart(slider, detail, 'left-edge').fold(function () {
          return 0;
        }, function (ledge) {
          return getXCentre(ledge) - spectrumBounds.left;
        });
      } else if (v > detail.max()) {
        return $_3ucuv110tjdxlf0e0.getPart(slider, detail, 'right-edge').fold(function () {
          return spectrumBounds.width;
        }, function (redge) {
          return getXCentre(redge) - spectrumBounds.left;
        });
      } else {
        return (detail.value().get() - detail.min()) / range * spectrumBounds.width;
      }
    };
    var getXPos = function (slider) {
      var spectrum = $_3ucuv110tjdxlf0e0.getPartOrDie(slider, detail, 'spectrum');
      var spectrumBounds = spectrum.element().dom().getBoundingClientRect();
      var sliderBounds = slider.element().dom().getBoundingClientRect();
      var xOffset = getXOffset(slider, spectrumBounds, detail);
      return spectrumBounds.left - sliderBounds.left + xOffset;
    };
    var refresh = function (component) {
      var pos = getXPos(component);
      var thumb = getThumb(component);
      var thumbRadius = $_3s6gko11kjdxlf0jx.get(thumb.element()) / 2;
      $_99zvvg103jdxlf08t.set(thumb.element(), 'left', pos - thumbRadius + 'px');
    };
    var changeValue = function (component, newValue) {
      var oldValue = detail.value().get();
      var thumb = getThumb(component);
      if (oldValue !== newValue || $_99zvvg103jdxlf08t.getRaw(thumb.element(), 'left').isNone()) {
        detail.value().set(newValue);
        refresh(component);
        detail.onChange()(component, thumb, newValue);
        return Option.some(true);
      } else {
        return Option.none();
      }
    };
    var resetToMin = function (slider) {
      changeValue(slider, detail.min());
    };
    var resetToMax = function (slider) {
      changeValue(slider, detail.max());
    };
    var uiEventsArr = isTouch$3 ? [
      $_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.touchstart(), function (slider, simulatedEvent) {
        detail.onDragStart()(slider, getThumb(slider));
      }),
      $_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.touchend(), function (slider, simulatedEvent) {
        detail.onDragEnd()(slider, getThumb(slider));
      })
    ] : [
      $_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.mousedown(), function (slider, simulatedEvent) {
        simulatedEvent.stop();
        detail.onDragStart()(slider, getThumb(slider));
        detail.mouseIsDown().set(true);
      }),
      $_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.mouseup(), function (slider, simulatedEvent) {
        detail.onDragEnd()(slider, getThumb(slider));
        detail.mouseIsDown().set(false);
      })
    ];
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_dngveawyjdxlezp5.deepMerge($_5tm9cmy2jdxlezw3.derive($_6dbxmwwsjdxleznr.flatten([
        !isTouch$3 ? [Keying.config({
            mode: 'special',
            focusIn: function (slider) {
              return $_3ucuv110tjdxlf0e0.getPart(slider, detail, 'spectrum').map(Keying.focusIn).map($_26xiiiwjjdxlezmo.constant(true));
            }
          })] : [],
        [me.config({
            store: {
              mode: 'manual',
              getValue: function (_) {
                return detail.value().get();
              }
            }
          })]
      ])), $_32y64u10ojdxlf0d0.get(detail.sliderBehaviours())),
      events: $_fpalyxy4jdxlezwy.derive([
        $_fpalyxy4jdxlezwy.run($_1bwkf2118jdxlf0i3.changeEvent(), function (slider, simulatedEvent) {
          changeValue(slider, simulatedEvent.event().value());
        }),
        $_fpalyxy4jdxlezwy.runOnAttached(function (slider, simulatedEvent) {
          detail.value().set(detail.getInitialValue()());
          var thumb = getThumb(slider);
          refresh(slider);
          detail.onInit()(slider, thumb, detail.value().get());
        })
      ].concat(uiEventsArr)),
      apis: {
        resetToMin: resetToMin,
        resetToMax: resetToMax,
        refresh: refresh
      },
      domModification: { styles: { position: 'relative' } }
    };
  };
  var $_7vu14411jjdxlf0ji = { sketch: sketch$1 };

  var Slider = $_e8py5t10pjdxlf0dc.composite({
    name: 'Slider',
    configFields: SliderSchema,
    partFields: SliderParts,
    factory: $_7vu14411jjdxlf0ji.sketch,
    apis: {
      resetToMin: function (apis, slider) {
        apis.resetToMin(slider);
      },
      resetToMax: function (apis, slider) {
        apis.resetToMax(slider);
      },
      refresh: function (apis, slider) {
        apis.refresh(slider);
      }
    }
  });

  var button = function (realm, clazz, makeItems) {
    return $_50h76zfjdxlf054.forToolbar(clazz, function () {
      var items = makeItems();
      realm.setContextToolbar([{
          label: clazz + ' group',
          items: items
        }]);
    }, {});
  };
  var $_cwoaqq11ljdxlf0k4 = { button: button };

  var BLACK = -1;
  var makeSlider = function (spec) {
    var getColor = function (hue) {
      if (hue < 0) {
        return 'black';
      } else if (hue > 360) {
        return 'white';
      } else {
        return 'hsl(' + hue + ', 100%, 50%)';
      }
    };
    var onInit = function (slider, thumb, value) {
      var color = getColor(value);
      $_99zvvg103jdxlf08t.set(thumb.element(), 'background-color', color);
    };
    var onChange = function (slider, thumb, value) {
      var color = getColor(value);
      $_99zvvg103jdxlf08t.set(thumb.element(), 'background-color', color);
      spec.onChange(slider, thumb, color);
    };
    return Slider.sketch({
      dom: $_2vsnm0113jdxlf0gu.dom('<div class="${prefix}-slider ${prefix}-hue-slider-container"></div>'),
      components: [
        Slider.parts()['left-edge']($_2vsnm0113jdxlf0gu.spec('<div class="${prefix}-hue-slider-black"></div>')),
        Slider.parts().spectrum({
          dom: $_2vsnm0113jdxlf0gu.dom('<div class="${prefix}-slider-gradient-container"></div>'),
          components: [$_2vsnm0113jdxlf0gu.spec('<div class="${prefix}-slider-gradient"></div>')],
          behaviours: $_5tm9cmy2jdxlezw3.derive([Toggling.config({ toggleClass: $_6pb5xszejdxlf051.resolve('thumb-active') })])
        }),
        Slider.parts()['right-edge']($_2vsnm0113jdxlf0gu.spec('<div class="${prefix}-hue-slider-white"></div>')),
        Slider.parts().thumb({
          dom: $_2vsnm0113jdxlf0gu.dom('<div class="${prefix}-slider-thumb"></div>'),
          behaviours: $_5tm9cmy2jdxlezw3.derive([Toggling.config({ toggleClass: $_6pb5xszejdxlf051.resolve('thumb-active') })])
        })
      ],
      onChange: onChange,
      onDragStart: function (slider, thumb) {
        Toggling.on(thumb);
      },
      onDragEnd: function (slider, thumb) {
        Toggling.off(thumb);
      },
      onInit: onInit,
      stepSize: 10,
      min: 0,
      max: 360,
      getInitialValue: spec.getInitialValue,
      sliderBehaviours: $_5tm9cmy2jdxlezw3.derive([$_2qdoh4zdjdxlf04x.orientation(Slider.refresh)])
    });
  };
  var makeItems = function (spec) {
    return [makeSlider(spec)];
  };
  var sketch$2 = function (realm, editor) {
    var spec = {
      onChange: function (slider, thumb, color) {
        editor.undoManager.transact(function () {
          editor.formatter.apply('forecolor', { value: color });
          editor.nodeChanged();
        });
      },
      getInitialValue: function () {
        return BLACK;
      }
    };
    return $_cwoaqq11ljdxlf0k4.button(realm, 'color', function () {
      return makeItems(spec);
    });
  };
  var $_5voend115jdxlf0hb = {
    makeItems: makeItems,
    sketch: sketch$2
  };

  var schema$7 = $_2vagecyejdxlezzg.objOfOnly([
    $_5jvmj2y7jdxlezxo.strict('getInitialValue'),
    $_5jvmj2y7jdxlezxo.strict('onChange'),
    $_5jvmj2y7jdxlezxo.strict('category'),
    $_5jvmj2y7jdxlezxo.strict('sizes')
  ]);
  var sketch$3 = function (rawSpec) {
    var spec = $_2vagecyejdxlezzg.asRawOrDie('SizeSlider', schema$7, rawSpec);
    var isValidValue = function (valueIndex) {
      return valueIndex >= 0 && valueIndex < spec.sizes.length;
    };
    var onChange = function (slider, thumb, valueIndex) {
      if (isValidValue(valueIndex)) {
        spec.onChange(valueIndex);
      }
    };
    return Slider.sketch({
      dom: {
        tag: 'div',
        classes: [
          $_6pb5xszejdxlf051.resolve('slider-' + spec.category + '-size-container'),
          $_6pb5xszejdxlf051.resolve('slider'),
          $_6pb5xszejdxlf051.resolve('slider-size-container')
        ]
      },
      onChange: onChange,
      onDragStart: function (slider, thumb) {
        Toggling.on(thumb);
      },
      onDragEnd: function (slider, thumb) {
        Toggling.off(thumb);
      },
      min: 0,
      max: spec.sizes.length - 1,
      stepSize: 1,
      getInitialValue: spec.getInitialValue,
      snapToGrid: true,
      sliderBehaviours: $_5tm9cmy2jdxlezw3.derive([$_2qdoh4zdjdxlf04x.orientation(Slider.refresh)]),
      components: [
        Slider.parts().spectrum({
          dom: $_2vsnm0113jdxlf0gu.dom('<div class="${prefix}-slider-size-container"></div>'),
          components: [$_2vsnm0113jdxlf0gu.spec('<div class="${prefix}-slider-size-line"></div>')]
        }),
        Slider.parts().thumb({
          dom: $_2vsnm0113jdxlf0gu.dom('<div class="${prefix}-slider-thumb"></div>'),
          behaviours: $_5tm9cmy2jdxlezw3.derive([Toggling.config({ toggleClass: $_6pb5xszejdxlf051.resolve('thumb-active') })])
        })
      ]
    });
  };
  var $_6cevlj11njdxlf0k7 = { sketch: sketch$3 };

  var ancestor$3 = function (scope, transform, isRoot) {
    var element = scope.dom();
    var stop = $_9wk4wvwzjdxlezp8.isFunction(isRoot) ? isRoot : $_26xiiiwjjdxlezmo.constant(false);
    while (element.parentNode) {
      element = element.parentNode;
      var el = $_2ejbh1xfjdxlezs6.fromDom(element);
      var transformed = transform(el);
      if (transformed.isSome())
        return transformed;
      else if (stop(el))
        break;
    }
    return Option.none();
  };
  var closest$3 = function (scope, transform, isRoot) {
    var current = transform(scope);
    return current.orThunk(function () {
      return isRoot(scope) ? Option.none() : ancestor$3(scope, transform, isRoot);
    });
  };
  var $_585bg511pjdxlf0ks = {
    ancestor: ancestor$3,
    closest: closest$3
  };

  var candidates = [
    '9px',
    '10px',
    '11px',
    '12px',
    '14px',
    '16px',
    '18px',
    '20px',
    '24px',
    '32px',
    '36px'
  ];
  var defaultSize = 'medium';
  var defaultIndex = 2;
  var indexToSize = function (index) {
    return Option.from(candidates[index]);
  };
  var sizeToIndex = function (size) {
    return $_6dbxmwwsjdxleznr.findIndex(candidates, function (v) {
      return v === size;
    });
  };
  var getRawOrComputed = function (isRoot, rawStart) {
    var optStart = $_xp48txkjdxlezsr.isElement(rawStart) ? Option.some(rawStart) : $_s9ri4x3jdxlezpx.parent(rawStart);
    return optStart.map(function (start) {
      var inline = $_585bg511pjdxlf0ks.closest(start, function (elem) {
        return $_99zvvg103jdxlf08t.getRaw(elem, 'font-size');
      }, isRoot);
      return inline.getOrThunk(function () {
        return $_99zvvg103jdxlf08t.get(start, 'font-size');
      });
    }).getOr('');
  };
  var getSize = function (editor) {
    var node = editor.selection.getStart();
    var elem = $_2ejbh1xfjdxlezs6.fromDom(node);
    var root = $_2ejbh1xfjdxlezs6.fromDom(editor.getBody());
    var isRoot = function (e) {
      return $_4u044dx9jdxlezqw.eq(root, e);
    };
    var elemSize = getRawOrComputed(isRoot, elem);
    return $_6dbxmwwsjdxleznr.find(candidates, function (size) {
      return elemSize === size;
    }).getOr(defaultSize);
  };
  var applySize = function (editor, value) {
    var currentValue = getSize(editor);
    if (currentValue !== value) {
      editor.execCommand('fontSize', false, value);
    }
  };
  var get$7 = function (editor) {
    var size = getSize(editor);
    return sizeToIndex(size).getOr(defaultIndex);
  };
  var apply$1 = function (editor, index) {
    indexToSize(index).each(function (size) {
      applySize(editor, size);
    });
  };
  var $_djo6hg11ojdxlf0kf = {
    candidates: $_26xiiiwjjdxlezmo.constant(candidates),
    get: get$7,
    apply: apply$1
  };

  var sizes = $_djo6hg11ojdxlf0kf.candidates();
  var makeSlider$1 = function (spec) {
    return $_6cevlj11njdxlf0k7.sketch({
      onChange: spec.onChange,
      sizes: sizes,
      category: 'font',
      getInitialValue: spec.getInitialValue
    });
  };
  var makeItems$1 = function (spec) {
    return [
      $_2vsnm0113jdxlf0gu.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-small-font ${prefix}-icon"></span>'),
      makeSlider$1(spec),
      $_2vsnm0113jdxlf0gu.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-large-font ${prefix}-icon"></span>')
    ];
  };
  var sketch$4 = function (realm, editor) {
    var spec = {
      onChange: function (value) {
        $_djo6hg11ojdxlf0kf.apply(editor, value);
      },
      getInitialValue: function () {
        return $_djo6hg11ojdxlf0kf.get(editor);
      }
    };
    return $_cwoaqq11ljdxlf0k4.button(realm, 'font-size', function () {
      return makeItems$1(spec);
    });
  };
  var $_dvehm011mjdxlf0k5 = {
    makeItems: makeItems$1,
    sketch: sketch$4
  };

  var record = function (spec) {
    var uid = $_ey6c2jxsjdxlezue.hasKey(spec, 'uid') ? spec.uid : $_ctuqf410xjdxlf0fo.generate('memento');
    var get = function (any) {
      return any.getSystem().getByUid(uid).getOrDie();
    };
    var getOpt = function (any) {
      return any.getSystem().getByUid(uid).fold(Option.none, Option.some);
    };
    var asSpec = function () {
      return $_dngveawyjdxlezp5.deepMerge(spec, { uid: uid });
    };
    return {
      get: get,
      getOpt: getOpt,
      asSpec: asSpec
    };
  };
  var $_g4pwn311rjdxlf0lb = { record: record };

  function create$3(width, height) {
    return resize(document.createElement('canvas'), width, height);
  }
  function clone$2(canvas) {
    var tCanvas, ctx;
    tCanvas = create$3(canvas.width, canvas.height);
    ctx = get2dContext(tCanvas);
    ctx.drawImage(canvas, 0, 0);
    return tCanvas;
  }
  function get2dContext(canvas) {
    return canvas.getContext('2d');
  }
  function get3dContext(canvas) {
    var gl = null;
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {
    }
    if (!gl) {
      gl = null;
    }
    return gl;
  }
  function resize(canvas, width, height) {
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }
  var $_33y0k211ujdxlf0lz = {
    create: create$3,
    clone: clone$2,
    resize: resize,
    get2dContext: get2dContext,
    get3dContext: get3dContext
  };

  function getWidth(image) {
    return image.naturalWidth || image.width;
  }
  function getHeight(image) {
    return image.naturalHeight || image.height;
  }
  var $_g8je5l11vjdxlf0m1 = {
    getWidth: getWidth,
    getHeight: getHeight
  };

  var promise = function () {
    var Promise = function (fn) {
      if (typeof this !== 'object')
        throw new TypeError('Promises must be constructed via new');
      if (typeof fn !== 'function')
        throw new TypeError('not a function');
      this._state = null;
      this._value = null;
      this._deferreds = [];
      doResolve(fn, bind(resolve, this), bind(reject, this));
    };
    var asap = Promise.immediateFn || typeof setImmediate === 'function' && setImmediate || function (fn) {
      setTimeout(fn, 1);
    };
    function bind(fn, thisArg) {
      return function () {
        fn.apply(thisArg, arguments);
      };
    }
    var isArray = Array.isArray || function (value) {
      return Object.prototype.toString.call(value) === '[object Array]';
    };
    function handle(deferred) {
      var me = this;
      if (this._state === null) {
        this._deferreds.push(deferred);
        return;
      }
      asap(function () {
        var cb = me._state ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
          (me._state ? deferred.resolve : deferred.reject)(me._value);
          return;
        }
        var ret;
        try {
          ret = cb(me._value);
        } catch (e) {
          deferred.reject(e);
          return;
        }
        deferred.resolve(ret);
      });
    }
    function resolve(newValue) {
      try {
        if (newValue === this)
          throw new TypeError('A promise cannot be resolved with itself.');
        if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
          var then = newValue.then;
          if (typeof then === 'function') {
            doResolve(bind(then, newValue), bind(resolve, this), bind(reject, this));
            return;
          }
        }
        this._state = true;
        this._value = newValue;
        finale.call(this);
      } catch (e) {
        reject.call(this, e);
      }
    }
    function reject(newValue) {
      this._state = false;
      this._value = newValue;
      finale.call(this);
    }
    function finale() {
      for (var i = 0, len = this._deferreds.length; i < len; i++) {
        handle.call(this, this._deferreds[i]);
      }
      this._deferreds = null;
    }
    function Handler(onFulfilled, onRejected, resolve, reject) {
      this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
      this.onRejected = typeof onRejected === 'function' ? onRejected : null;
      this.resolve = resolve;
      this.reject = reject;
    }
    function doResolve(fn, onFulfilled, onRejected) {
      var done = false;
      try {
        fn(function (value) {
          if (done)
            return;
          done = true;
          onFulfilled(value);
        }, function (reason) {
          if (done)
            return;
          done = true;
          onRejected(reason);
        });
      } catch (ex) {
        if (done)
          return;
        done = true;
        onRejected(ex);
      }
    }
    Promise.prototype['catch'] = function (onRejected) {
      return this.then(null, onRejected);
    };
    Promise.prototype.then = function (onFulfilled, onRejected) {
      var me = this;
      return new Promise(function (resolve, reject) {
        handle.call(me, new Handler(onFulfilled, onRejected, resolve, reject));
      });
    };
    Promise.all = function () {
      var args = Array.prototype.slice.call(arguments.length === 1 && isArray(arguments[0]) ? arguments[0] : arguments);
      return new Promise(function (resolve, reject) {
        if (args.length === 0)
          return resolve([]);
        var remaining = args.length;
        function res(i, val) {
          try {
            if (val && (typeof val === 'object' || typeof val === 'function')) {
              var then = val.then;
              if (typeof then === 'function') {
                then.call(val, function (val) {
                  res(i, val);
                }, reject);
                return;
              }
            }
            args[i] = val;
            if (--remaining === 0) {
              resolve(args);
            }
          } catch (ex) {
            reject(ex);
          }
        }
        for (var i = 0; i < args.length; i++) {
          res(i, args[i]);
        }
      });
    };
    Promise.resolve = function (value) {
      if (value && typeof value === 'object' && value.constructor === Promise) {
        return value;
      }
      return new Promise(function (resolve) {
        resolve(value);
      });
    };
    Promise.reject = function (value) {
      return new Promise(function (resolve, reject) {
        reject(value);
      });
    };
    Promise.race = function (values) {
      return new Promise(function (resolve, reject) {
        for (var i = 0, len = values.length; i < len; i++) {
          values[i].then(resolve, reject);
        }
      });
    };
    return Promise;
  };
  var Promise = window.Promise ? window.Promise : promise();

  function Blob (parts, properties) {
    var f = $_g695cyxbjdxlezrf.getOrDie('Blob');
    return new f(parts, properties);
  }

  function FileReader () {
    var f = $_g695cyxbjdxlezrf.getOrDie('FileReader');
    return new f();
  }

  function Uint8Array (arr) {
    var f = $_g695cyxbjdxlezrf.getOrDie('Uint8Array');
    return new f(arr);
  }

  var requestAnimationFrame = function (callback) {
    var f = $_g695cyxbjdxlezrf.getOrDie('requestAnimationFrame');
    f(callback);
  };
  var atob = function (base64) {
    var f = $_g695cyxbjdxlezrf.getOrDie('atob');
    return f(base64);
  };
  var $_3m91dj120jdxlf0mi = {
    atob: atob,
    requestAnimationFrame: requestAnimationFrame
  };

  function loadImage(image) {
    return new Promise(function (resolve) {
      function loaded() {
        image.removeEventListener('load', loaded);
        resolve(image);
      }
      if (image.complete) {
        resolve(image);
      } else {
        image.addEventListener('load', loaded);
      }
    });
  }
  function imageToBlob(image) {
    return loadImage(image).then(function (image) {
      var src = image.src;
      if (src.indexOf('blob:') === 0) {
        return anyUriToBlob(src);
      }
      if (src.indexOf('data:') === 0) {
        return dataUriToBlob(src);
      }
      return anyUriToBlob(src);
    });
  }
  function blobToImage(blob) {
    return new Promise(function (resolve, reject) {
      var blobUrl = URL.createObjectURL(blob);
      var image = new Image();
      var removeListeners = function () {
        image.removeEventListener('load', loaded);
        image.removeEventListener('error', error);
      };
      function loaded() {
        removeListeners();
        resolve(image);
      }
      function error() {
        removeListeners();
        reject('Unable to load data of type ' + blob.type + ': ' + blobUrl);
      }
      image.addEventListener('load', loaded);
      image.addEventListener('error', error);
      image.src = blobUrl;
      if (image.complete) {
        loaded();
      }
    });
  }
  function anyUriToBlob(url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      xhr.onload = function () {
        if (this.status == 200) {
          resolve(this.response);
        }
      };
      xhr.onerror = function () {
        var _this = this;
        var corsError = function () {
          var obj = new Error('No access to download image');
          obj.code = 18;
          obj.name = 'SecurityError';
          return obj;
        };
        var genericError = function () {
          return new Error('Error ' + _this.status + ' downloading image');
        };
        reject(this.status === 0 ? corsError() : genericError());
      };
      xhr.send();
    });
  }
  function dataUriToBlobSync(uri) {
    var data = uri.split(',');
    var matches = /data:([^;]+)/.exec(data[0]);
    if (!matches)
      return Option.none();
    var mimetype = matches[1];
    var base64 = data[1];
    var sliceSize = 1024;
    var byteCharacters = $_3m91dj120jdxlf0mi.atob(base64);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);
    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      var begin = sliceIndex * sliceSize;
      var end = Math.min(begin + sliceSize, bytesLength);
      var bytes = new Array(end - begin);
      for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = Uint8Array(bytes);
    }
    return Option.some(Blob(byteArrays, { type: mimetype }));
  }
  function dataUriToBlob(uri) {
    return new Promise(function (resolve, reject) {
      dataUriToBlobSync(uri).fold(function () {
        reject('uri is not base64: ' + uri);
      }, resolve);
    });
  }
  function uriToBlob(url) {
    if (url.indexOf('blob:') === 0) {
      return anyUriToBlob(url);
    }
    if (url.indexOf('data:') === 0) {
      return dataUriToBlob(url);
    }
    return null;
  }
  function canvasToBlob(canvas, type, quality) {
    type = type || 'image/png';
    if (HTMLCanvasElement.prototype.toBlob) {
      return new Promise(function (resolve) {
        canvas.toBlob(function (blob) {
          resolve(blob);
        }, type, quality);
      });
    } else {
      return dataUriToBlob(canvas.toDataURL(type, quality));
    }
  }
  function canvasToDataURL(getCanvas, type, quality) {
    type = type || 'image/png';
    return getCanvas.then(function (canvas) {
      return canvas.toDataURL(type, quality);
    });
  }
  function blobToCanvas(blob) {
    return blobToImage(blob).then(function (image) {
      revokeImageUrl(image);
      var context, canvas;
      canvas = $_33y0k211ujdxlf0lz.create($_g8je5l11vjdxlf0m1.getWidth(image), $_g8je5l11vjdxlf0m1.getHeight(image));
      context = $_33y0k211ujdxlf0lz.get2dContext(canvas);
      context.drawImage(image, 0, 0);
      return canvas;
    });
  }
  function blobToDataUri(blob) {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }
  function blobToArrayBuffer(blob) {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsArrayBuffer(blob);
    });
  }
  function blobToBase64(blob) {
    return blobToDataUri(blob).then(function (dataUri) {
      return dataUri.split(',')[1];
    });
  }
  function revokeImageUrl(image) {
    URL.revokeObjectURL(image.src);
  }
  var $_6vi6u111tjdxlf0ln = {
    blobToImage: blobToImage,
    imageToBlob: imageToBlob,
    blobToArrayBuffer: blobToArrayBuffer,
    blobToDataUri: blobToDataUri,
    blobToBase64: blobToBase64,
    dataUriToBlobSync: dataUriToBlobSync,
    canvasToBlob: canvasToBlob,
    canvasToDataURL: canvasToDataURL,
    blobToCanvas: blobToCanvas,
    uriToBlob: uriToBlob
  };

  var blobToImage$1 = function (image) {
    return $_6vi6u111tjdxlf0ln.blobToImage(image);
  };
  var imageToBlob$1 = function (blob) {
    return $_6vi6u111tjdxlf0ln.imageToBlob(blob);
  };
  var blobToDataUri$1 = function (blob) {
    return $_6vi6u111tjdxlf0ln.blobToDataUri(blob);
  };
  var blobToBase64$1 = function (blob) {
    return $_6vi6u111tjdxlf0ln.blobToBase64(blob);
  };
  var dataUriToBlobSync$1 = function (uri) {
    return $_6vi6u111tjdxlf0ln.dataUriToBlobSync(uri);
  };
  var uriToBlob$1 = function (uri) {
    return Option.from($_6vi6u111tjdxlf0ln.uriToBlob(uri));
  };
  var $_9f9ebg11sjdxlf0li = {
    blobToImage: blobToImage$1,
    imageToBlob: imageToBlob$1,
    blobToDataUri: blobToDataUri$1,
    blobToBase64: blobToBase64$1,
    dataUriToBlobSync: dataUriToBlobSync$1,
    uriToBlob: uriToBlob$1
  };

  var addImage = function (editor, blob) {
    $_9f9ebg11sjdxlf0li.blobToBase64(blob).then(function (base64) {
      editor.undoManager.transact(function () {
        var cache = editor.editorUpload.blobCache;
        var info = cache.create($_5a8g5a10rjdxlf0dt.generate('mceu'), blob, base64);
        cache.add(info);
        var img = editor.dom.createHTML('img', { src: info.blobUri() });
        editor.insertContent(img);
      });
    });
  };
  var extractBlob = function (simulatedEvent) {
    var event = simulatedEvent.event();
    var files = event.raw().target.files || event.raw().dataTransfer.files;
    return Option.from(files[0]);
  };
  var sketch$5 = function (editor) {
    var pickerDom = {
      tag: 'input',
      attributes: {
        accept: 'image/*',
        type: 'file',
        title: ''
      },
      styles: {
        visibility: 'hidden',
        position: 'absolute'
      }
    };
    var memPicker = $_g4pwn311rjdxlf0lb.record({
      dom: pickerDom,
      events: $_fpalyxy4jdxlezwy.derive([
        $_fpalyxy4jdxlezwy.cutter($_f2g7alwijdxlezmh.click()),
        $_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.change(), function (picker, simulatedEvent) {
          extractBlob(simulatedEvent).each(function (blob) {
            addImage(editor, blob);
          });
        })
      ])
    });
    return Button.sketch({
      dom: $_2vsnm0113jdxlf0gu.dom('<span class="${prefix}-toolbar-button ${prefix}-icon-image ${prefix}-icon"></span>'),
      components: [memPicker.asSpec()],
      action: function (button) {
        var picker = memPicker.get(button);
        picker.element().dom().click();
      }
    });
  };
  var $_57prxg11qjdxlf0kz = { sketch: sketch$5 };

  var get$8 = function (element) {
    return element.dom().textContent;
  };
  var set$5 = function (element, value) {
    element.dom().textContent = value;
  };
  var $_atmz31123jdxlf0n4 = {
    get: get$8,
    set: set$5
  };

  var isNotEmpty = function (val) {
    return val.length > 0;
  };
  var defaultToEmpty = function (str) {
    return str === undefined || str === null ? '' : str;
  };
  var noLink = function (editor) {
    var text = editor.selection.getContent({ format: 'text' });
    return {
      url: '',
      text: text,
      title: '',
      target: '',
      link: Option.none()
    };
  };
  var fromLink = function (link) {
    var text = $_atmz31123jdxlf0n4.get(link);
    var url = $_72a1mgxrjdxlezu3.get(link, 'href');
    var title = $_72a1mgxrjdxlezu3.get(link, 'title');
    var target = $_72a1mgxrjdxlezu3.get(link, 'target');
    return {
      url: defaultToEmpty(url),
      text: text !== url ? defaultToEmpty(text) : '',
      title: defaultToEmpty(title),
      target: defaultToEmpty(target),
      link: Option.some(link)
    };
  };
  var getInfo = function (editor) {
    return query(editor).fold(function () {
      return noLink(editor);
    }, function (link) {
      return fromLink(link);
    });
  };
  var wasSimple = function (link) {
    var prevHref = $_72a1mgxrjdxlezu3.get(link, 'href');
    var prevText = $_atmz31123jdxlf0n4.get(link);
    return prevHref === prevText;
  };
  var getTextToApply = function (link, url, info) {
    return info.text.filter(isNotEmpty).fold(function () {
      return wasSimple(link) ? Option.some(url) : Option.none();
    }, Option.some);
  };
  var unlinkIfRequired = function (editor, info) {
    var activeLink = info.link.bind($_26xiiiwjjdxlezmo.identity);
    activeLink.each(function (link) {
      editor.execCommand('unlink');
    });
  };
  var getAttrs$1 = function (url, info) {
    var attrs = {};
    attrs.href = url;
    info.title.filter(isNotEmpty).each(function (title) {
      attrs.title = title;
    });
    info.target.filter(isNotEmpty).each(function (target) {
      attrs.target = target;
    });
    return attrs;
  };
  var applyInfo = function (editor, info) {
    info.url.filter(isNotEmpty).fold(function () {
      unlinkIfRequired(editor, info);
    }, function (url) {
      var attrs = getAttrs$1(url, info);
      var activeLink = info.link.bind($_26xiiiwjjdxlezmo.identity);
      activeLink.fold(function () {
        var text = info.text.filter(isNotEmpty).getOr(url);
        editor.insertContent(editor.dom.createHTML('a', attrs, editor.dom.encode(text)));
      }, function (link) {
        var text = getTextToApply(link, url, info);
        $_72a1mgxrjdxlezu3.setAll(link, attrs);
        text.each(function (newText) {
          $_atmz31123jdxlf0n4.set(link, newText);
        });
      });
    });
  };
  var query = function (editor) {
    var start = $_2ejbh1xfjdxlezs6.fromDom(editor.selection.getStart());
    return $_77tktczxjdxlf083.closest(start, 'a');
  };
  var $_9yl38p122jdxlf0ms = {
    getInfo: getInfo,
    applyInfo: applyInfo,
    query: query
  };

  var platform$1 = $_g8mzcxwkjdxlezmu.detect();
  var preserve$1 = function (f, editor) {
    var rng = editor.selection.getRng();
    f();
    editor.selection.setRng(rng);
  };
  var forAndroid = function (editor, f) {
    var wrapper = platform$1.os.isAndroid() ? preserve$1 : $_26xiiiwjjdxlezmo.apply;
    wrapper(f, editor);
  };
  var $_a2acgj124jdxlf0n5 = { forAndroid: forAndroid };

  var events$6 = function (name, eventHandlers) {
    var events = $_fpalyxy4jdxlezwy.derive(eventHandlers);
    return $_5tm9cmy2jdxlezw3.create({
      fields: [$_5jvmj2y7jdxlezxo.strict('enabled')],
      name: name,
      active: { events: $_26xiiiwjjdxlezmo.constant(events) }
    });
  };
  var config = function (name, eventHandlers) {
    var me = events$6(name, eventHandlers);
    return {
      key: name,
      value: {
        config: {},
        me: me,
        configAsRaw: $_26xiiiwjjdxlezmo.constant({}),
        initialConfig: {},
        state: $_5tm9cmy2jdxlezw3.noState()
      }
    };
  };
  var $_940p5d126jdxlf0og = {
    events: events$6,
    config: config
  };

  var getCurrent = function (component, composeConfig, composeState) {
    return composeConfig.find()(component);
  };
  var $_efbl35128jdxlf0ou = { getCurrent: getCurrent };

  var ComposeSchema = [$_5jvmj2y7jdxlezxo.strict('find')];

  var Composing = $_5tm9cmy2jdxlezw3.create({
    fields: ComposeSchema,
    name: 'composing',
    apis: $_efbl35128jdxlf0ou
  });

  var factory$1 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: $_dngveawyjdxlezp5.deepMerge({
        tag: 'div',
        attributes: { role: 'presentation' }
      }, detail.dom()),
      components: detail.components(),
      behaviours: $_32y64u10ojdxlf0d0.get(detail.containerBehaviours()),
      events: detail.events(),
      domModification: detail.domModification(),
      eventOrder: detail.eventOrder()
    };
  };
  var Container = $_e8py5t10pjdxlf0dc.single({
    name: 'Container',
    factory: factory$1,
    configFields: [
      $_5jvmj2y7jdxlezxo.defaulted('components', []),
      $_32y64u10ojdxlf0d0.field('containerBehaviours', []),
      $_5jvmj2y7jdxlezxo.defaulted('events', {}),
      $_5jvmj2y7jdxlezxo.defaulted('domModification', {}),
      $_5jvmj2y7jdxlezxo.defaulted('eventOrder', {})
    ]
  });

  var factory$2 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      behaviours: $_dngveawyjdxlezp5.deepMerge($_5tm9cmy2jdxlezw3.derive([
        me.config({
          store: {
            mode: 'memory',
            initialValue: detail.getInitialValue()()
          }
        }),
        Composing.config({ find: Option.some })
      ]), $_32y64u10ojdxlf0d0.get(detail.dataBehaviours())),
      events: $_fpalyxy4jdxlezwy.derive([$_fpalyxy4jdxlezwy.runOnAttached(function (component, simulatedEvent) {
          me.setValue(component, detail.getInitialValue()());
        })])
    };
  };
  var DataField = $_e8py5t10pjdxlf0dc.single({
    name: 'DataField',
    factory: factory$2,
    configFields: [
      $_5jvmj2y7jdxlezxo.strict('uid'),
      $_5jvmj2y7jdxlezxo.strict('dom'),
      $_5jvmj2y7jdxlezxo.strict('getInitialValue'),
      $_32y64u10ojdxlf0d0.field('dataBehaviours', [
        me,
        Composing
      ])
    ]
  });

  var get$9 = function (element) {
    return element.dom().value;
  };
  var set$6 = function (element, value) {
    if (value === undefined)
      throw new Error('Value.set was undefined');
    element.dom().value = value;
  };
  var $_8n8qc012ejdxlf0ql = {
    set: set$6,
    get: get$9
  };

  var schema$8 = [
    $_5jvmj2y7jdxlezxo.option('data'),
    $_5jvmj2y7jdxlezxo.defaulted('inputAttributes', {}),
    $_5jvmj2y7jdxlezxo.defaulted('inputStyles', {}),
    $_5jvmj2y7jdxlezxo.defaulted('type', 'input'),
    $_5jvmj2y7jdxlezxo.defaulted('tag', 'input'),
    $_5jvmj2y7jdxlezxo.defaulted('inputClasses', []),
    $_d0ld34z6jdxlf03c.onHandler('onSetValue'),
    $_5jvmj2y7jdxlezxo.defaulted('styles', {}),
    $_5jvmj2y7jdxlezxo.option('placeholder'),
    $_5jvmj2y7jdxlezxo.defaulted('eventOrder', {}),
    $_32y64u10ojdxlf0d0.field('inputBehaviours', [
      me,
      Focusing
    ]),
    $_5jvmj2y7jdxlezxo.defaulted('selectOnFocus', true)
  ];
  var behaviours = function (detail) {
    return $_dngveawyjdxlezp5.deepMerge($_5tm9cmy2jdxlezw3.derive([
      me.config({
        store: {
          mode: 'manual',
          initialValue: detail.data().getOr(undefined),
          getValue: function (input) {
            return $_8n8qc012ejdxlf0ql.get(input.element());
          },
          setValue: function (input, data) {
            var current = $_8n8qc012ejdxlf0ql.get(input.element());
            if (current !== data) {
              $_8n8qc012ejdxlf0ql.set(input.element(), data);
            }
          }
        },
        onSetValue: detail.onSetValue()
      }),
      Focusing.config({
        onFocus: detail.selectOnFocus() === false ? $_26xiiiwjjdxlezmo.noop : function (component) {
          var input = component.element();
          var value = $_8n8qc012ejdxlf0ql.get(input);
          input.dom().setSelectionRange(0, value.length);
        }
      })
    ]), $_32y64u10ojdxlf0d0.get(detail.inputBehaviours()));
  };
  var dom$2 = function (detail) {
    return {
      tag: detail.tag(),
      attributes: $_dngveawyjdxlezp5.deepMerge($_ey6c2jxsjdxlezue.wrapAll([{
          key: 'type',
          value: detail.type()
        }].concat(detail.placeholder().map(function (pc) {
        return {
          key: 'placeholder',
          value: pc
        };
      }).toArray())), detail.inputAttributes()),
      styles: detail.inputStyles(),
      classes: detail.inputClasses()
    };
  };
  var $_2eul4o12djdxlf0pw = {
    schema: $_26xiiiwjjdxlezmo.constant(schema$8),
    behaviours: behaviours,
    dom: dom$2
  };

  var factory$3 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: $_2eul4o12djdxlf0pw.dom(detail),
      components: [],
      behaviours: $_2eul4o12djdxlf0pw.behaviours(detail),
      eventOrder: detail.eventOrder()
    };
  };
  var Input = $_e8py5t10pjdxlf0dc.single({
    name: 'Input',
    configFields: $_2eul4o12djdxlf0pw.schema(),
    factory: factory$3
  });

  var exhibit$3 = function (base, tabConfig) {
    return $_8a5bobyhjdxlezzz.nu({
      attributes: $_ey6c2jxsjdxlezue.wrapAll([{
          key: tabConfig.tabAttr(),
          value: 'true'
        }])
    });
  };
  var $_8t4z6g12gjdxlf0qq = { exhibit: exhibit$3 };

  var TabstopSchema = [$_5jvmj2y7jdxlezxo.defaulted('tabAttr', 'data-alloy-tabstop')];

  var Tabstopping = $_5tm9cmy2jdxlezw3.create({
    fields: TabstopSchema,
    name: 'tabstopping',
    active: $_8t4z6g12gjdxlf0qq
  });

  var clearInputBehaviour = 'input-clearing';
  var field$2 = function (name, placeholder) {
    var inputSpec = $_g4pwn311rjdxlf0lb.record(Input.sketch({
      placeholder: placeholder,
      onSetValue: function (input, data) {
        $_7qvrqpwgjdxlezlj.emit(input, $_f2g7alwijdxlezmh.input());
      },
      inputBehaviours: $_5tm9cmy2jdxlezw3.derive([
        Composing.config({ find: Option.some }),
        Tabstopping.config({}),
        Keying.config({ mode: 'execution' })
      ]),
      selectOnFocus: false
    }));
    var buttonSpec = $_g4pwn311rjdxlf0lb.record(Button.sketch({
      dom: $_2vsnm0113jdxlf0gu.dom('<button class="${prefix}-input-container-x ${prefix}-icon-cancel-circle ${prefix}-icon"></button>'),
      action: function (button) {
        var input = inputSpec.get(button);
        me.setValue(input, '');
      }
    }));
    return {
      name: name,
      spec: Container.sketch({
        dom: $_2vsnm0113jdxlf0gu.dom('<div class="${prefix}-input-container"></div>'),
        components: [
          inputSpec.asSpec(),
          buttonSpec.asSpec()
        ],
        containerBehaviours: $_5tm9cmy2jdxlezw3.derive([
          Toggling.config({ toggleClass: $_6pb5xszejdxlf051.resolve('input-container-empty') }),
          Composing.config({
            find: function (comp) {
              return Option.some(inputSpec.get(comp));
            }
          }),
          $_940p5d126jdxlf0og.config(clearInputBehaviour, [$_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.input(), function (iContainer) {
              var input = inputSpec.get(iContainer);
              var val = me.getValue(input);
              var f = val.length > 0 ? Toggling.off : Toggling.on;
              f(iContainer);
            })])
        ])
      })
    };
  };
  var hidden = function (name) {
    return {
      name: name,
      spec: DataField.sketch({
        dom: {
          tag: 'span',
          styles: { display: 'none' }
        },
        getInitialValue: function () {
          return Option.none();
        }
      })
    };
  };
  var $_810qmb125jdxlf0nb = {
    field: field$2,
    hidden: hidden
  };

  var nativeDisabled = [
    'input',
    'button',
    'textarea'
  ];
  var onLoad$5 = function (component, disableConfig, disableState) {
    if (disableConfig.disabled())
      disable(component, disableConfig, disableState);
  };
  var hasNative = function (component) {
    return $_6dbxmwwsjdxleznr.contains(nativeDisabled, $_xp48txkjdxlezsr.name(component.element()));
  };
  var nativeIsDisabled = function (component) {
    return $_72a1mgxrjdxlezu3.has(component.element(), 'disabled');
  };
  var nativeDisable = function (component) {
    $_72a1mgxrjdxlezu3.set(component.element(), 'disabled', 'disabled');
  };
  var nativeEnable = function (component) {
    $_72a1mgxrjdxlezu3.remove(component.element(), 'disabled');
  };
  var ariaIsDisabled = function (component) {
    return $_72a1mgxrjdxlezu3.get(component.element(), 'aria-disabled') === 'true';
  };
  var ariaDisable = function (component) {
    $_72a1mgxrjdxlezu3.set(component.element(), 'aria-disabled', 'true');
  };
  var ariaEnable = function (component) {
    $_72a1mgxrjdxlezu3.set(component.element(), 'aria-disabled', 'false');
  };
  var disable = function (component, disableConfig, disableState) {
    disableConfig.disableClass().each(function (disableClass) {
      $_79eveeynjdxlf012.add(component.element(), disableClass);
    });
    var f = hasNative(component) ? nativeDisable : ariaDisable;
    f(component);
  };
  var enable = function (component, disableConfig, disableState) {
    disableConfig.disableClass().each(function (disableClass) {
      $_79eveeynjdxlf012.remove(component.element(), disableClass);
    });
    var f = hasNative(component) ? nativeEnable : ariaEnable;
    f(component);
  };
  var isDisabled = function (component) {
    return hasNative(component) ? nativeIsDisabled(component) : ariaIsDisabled(component);
  };
  var $_eerinz12ljdxlf0sg = {
    enable: enable,
    disable: disable,
    isDisabled: isDisabled,
    onLoad: onLoad$5
  };

  var exhibit$4 = function (base, disableConfig, disableState) {
    return $_8a5bobyhjdxlezzz.nu({ classes: disableConfig.disabled() ? disableConfig.disableClass().map($_6dbxmwwsjdxleznr.pure).getOr([]) : [] });
  };
  var events$7 = function (disableConfig, disableState) {
    return $_fpalyxy4jdxlezwy.derive([
      $_fpalyxy4jdxlezwy.abort($_7mziizwhjdxlezm8.execute(), function (component, simulatedEvent) {
        return $_eerinz12ljdxlf0sg.isDisabled(component, disableConfig, disableState);
      }),
      $_52b1ndy3jdxlezwf.loadEvent(disableConfig, disableState, $_eerinz12ljdxlf0sg.onLoad)
    ]);
  };
  var $_93bxky12kjdxlf0sa = {
    exhibit: exhibit$4,
    events: events$7
  };

  var DisableSchema = [
    $_5jvmj2y7jdxlezxo.defaulted('disabled', false),
    $_5jvmj2y7jdxlezxo.option('disableClass')
  ];

  var Disabling = $_5tm9cmy2jdxlezw3.create({
    fields: DisableSchema,
    name: 'disabling',
    active: $_93bxky12kjdxlf0sa,
    apis: $_eerinz12ljdxlf0sg
  });

  var owner$1 = 'form';
  var schema$9 = [$_32y64u10ojdxlf0d0.field('formBehaviours', [me])];
  var getPartName = function (name) {
    return '<alloy.field.' + name + '>';
  };
  var sketch$6 = function (fSpec) {
    var parts = function () {
      var record = [];
      var field = function (name, config) {
        record.push(name);
        return $_3ucuv110tjdxlf0e0.generateOne(owner$1, getPartName(name), config);
      };
      return {
        field: field,
        record: function () {
          return record;
        }
      };
    }();
    var spec = fSpec(parts);
    var partNames = parts.record();
    var fieldParts = $_6dbxmwwsjdxleznr.map(partNames, function (n) {
      return $_8qnic510vjdxlf0eq.required({
        name: n,
        pname: getPartName(n)
      });
    });
    return $_cvnsdc10sjdxlf0du.composite(owner$1, schema$9, fieldParts, make, spec);
  };
  var make = function (detail, components, spec) {
    return $_dngveawyjdxlezp5.deepMerge({
      'debug.sketcher': { 'Form': spec },
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_dngveawyjdxlezp5.deepMerge($_5tm9cmy2jdxlezw3.derive([me.config({
          store: {
            mode: 'manual',
            getValue: function (form) {
              var optPs = $_3ucuv110tjdxlf0e0.getAllParts(form, detail);
              return $_8ih830x0jdxlezpa.map(optPs, function (optPThunk, pName) {
                return optPThunk().bind(Composing.getCurrent).map(me.getValue);
              });
            },
            setValue: function (form, values) {
              $_8ih830x0jdxlezpa.each(values, function (newValue, key) {
                $_3ucuv110tjdxlf0e0.getPart(form, detail, key).each(function (wrapper) {
                  Composing.getCurrent(wrapper).each(function (field) {
                    me.setValue(field, newValue);
                  });
                });
              });
            }
          }
        })]), $_32y64u10ojdxlf0d0.get(detail.formBehaviours())),
      apis: {
        getField: function (form, key) {
          return $_3ucuv110tjdxlf0e0.getPart(form, detail, key).bind(Composing.getCurrent);
        }
      }
    });
  };
  var $_6xuye312njdxlf0sz = {
    getField: $_73wlbg10qjdxlf0dm.makeApi(function (apis, component, key) {
      return apis.getField(component, key);
    }),
    sketch: sketch$6
  };

  var revocable = function (doRevoke) {
    var subject = Cell(Option.none());
    var revoke = function () {
      subject.get().each(doRevoke);
    };
    var clear = function () {
      revoke();
      subject.set(Option.none());
    };
    var set = function (s) {
      revoke();
      subject.set(Option.some(s));
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      isSet: isSet,
      set: set
    };
  };
  var destroyable = function () {
    return revocable(function (s) {
      s.destroy();
    });
  };
  var unbindable = function () {
    return revocable(function (s) {
      s.unbind();
    });
  };
  var api$2 = function () {
    var subject = Cell(Option.none());
    var revoke = function () {
      subject.get().each(function (s) {
        s.destroy();
      });
    };
    var clear = function () {
      revoke();
      subject.set(Option.none());
    };
    var set = function (s) {
      revoke();
      subject.set(Option.some(s));
    };
    var run = function (f) {
      subject.get().each(f);
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      isSet: isSet,
      set: set,
      run: run
    };
  };
  var value$3 = function () {
    var subject = Cell(Option.none());
    var clear = function () {
      subject.set(Option.none());
    };
    var set = function (s) {
      subject.set(Option.some(s));
    };
    var on = function (f) {
      subject.get().each(f);
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      set: set,
      isSet: isSet,
      on: on
    };
  };
  var $_cqf8mx12ojdxlf0tg = {
    destroyable: destroyable,
    unbindable: unbindable,
    api: api$2,
    value: value$3
  };

  var SWIPING_LEFT = 1;
  var SWIPING_RIGHT = -1;
  var SWIPING_NONE = 0;
  var init$3 = function (xValue) {
    return {
      xValue: xValue,
      points: []
    };
  };
  var move = function (model, xValue) {
    if (xValue === model.xValue) {
      return model;
    }
    var currentDirection = xValue - model.xValue > 0 ? SWIPING_LEFT : SWIPING_RIGHT;
    var newPoint = {
      direction: currentDirection,
      xValue: xValue
    };
    var priorPoints = function () {
      if (model.points.length === 0) {
        return [];
      } else {
        var prev = model.points[model.points.length - 1];
        return prev.direction === currentDirection ? model.points.slice(0, model.points.length - 1) : model.points;
      }
    }();
    return {
      xValue: xValue,
      points: priorPoints.concat([newPoint])
    };
  };
  var complete = function (model) {
    if (model.points.length === 0) {
      return SWIPING_NONE;
    } else {
      var firstDirection = model.points[0].direction;
      var lastDirection = model.points[model.points.length - 1].direction;
      return firstDirection === SWIPING_RIGHT && lastDirection === SWIPING_RIGHT ? SWIPING_RIGHT : firstDirection === SWIPING_LEFT && lastDirection === SWIPING_LEFT ? SWIPING_LEFT : SWIPING_NONE;
    }
  };
  var $_arkm8h12pjdxlf0tk = {
    init: init$3,
    move: move,
    complete: complete
  };

  var sketch$7 = function (rawSpec) {
    var navigateEvent = 'navigateEvent';
    var wrapperAdhocEvents = 'serializer-wrapper-events';
    var formAdhocEvents = 'form-events';
    var schema = $_2vagecyejdxlezzg.objOf([
      $_5jvmj2y7jdxlezxo.strict('fields'),
      $_5jvmj2y7jdxlezxo.defaulted('maxFieldIndex', rawSpec.fields.length - 1),
      $_5jvmj2y7jdxlezxo.strict('onExecute'),
      $_5jvmj2y7jdxlezxo.strict('getInitialValue'),
      $_5jvmj2y7jdxlezxo.state('state', function () {
        return {
          dialogSwipeState: $_cqf8mx12ojdxlf0tg.value(),
          currentScreen: Cell(0)
        };
      })
    ]);
    var spec = $_2vagecyejdxlezzg.asRawOrDie('SerialisedDialog', schema, rawSpec);
    var navigationButton = function (direction, directionName, enabled) {
      return Button.sketch({
        dom: $_2vsnm0113jdxlf0gu.dom('<span class="${prefix}-icon-' + directionName + ' ${prefix}-icon"></span>'),
        action: function (button) {
          $_7qvrqpwgjdxlezlj.emitWith(button, navigateEvent, { direction: direction });
        },
        buttonBehaviours: $_5tm9cmy2jdxlezw3.derive([Disabling.config({
            disableClass: $_6pb5xszejdxlf051.resolve('toolbar-navigation-disabled'),
            disabled: !enabled
          })])
      });
    };
    var reposition = function (dialog, message) {
      $_77tktczxjdxlf083.descendant(dialog.element(), '.' + $_6pb5xszejdxlf051.resolve('serialised-dialog-chain')).each(function (parent) {
        $_99zvvg103jdxlf08t.set(parent, 'left', -spec.state.currentScreen.get() * message.width + 'px');
      });
    };
    var navigate = function (dialog, direction) {
      var screens = $_390b63zvjdxlf07x.descendants(dialog.element(), '.' + $_6pb5xszejdxlf051.resolve('serialised-dialog-screen'));
      $_77tktczxjdxlf083.descendant(dialog.element(), '.' + $_6pb5xszejdxlf051.resolve('serialised-dialog-chain')).each(function (parent) {
        if (spec.state.currentScreen.get() + direction >= 0 && spec.state.currentScreen.get() + direction < screens.length) {
          $_99zvvg103jdxlf08t.getRaw(parent, 'left').each(function (left) {
            var currentLeft = parseInt(left, 10);
            var w = $_3s6gko11kjdxlf0jx.get(screens[0]);
            $_99zvvg103jdxlf08t.set(parent, 'left', currentLeft - direction * w + 'px');
          });
          spec.state.currentScreen.set(spec.state.currentScreen.get() + direction);
        }
      });
    };
    var focusInput = function (dialog) {
      var inputs = $_390b63zvjdxlf07x.descendants(dialog.element(), 'input');
      var optInput = Option.from(inputs[spec.state.currentScreen.get()]);
      optInput.each(function (input) {
        dialog.getSystem().getByDom(input).each(function (inputComp) {
          $_7qvrqpwgjdxlezlj.dispatchFocus(dialog, inputComp.element());
        });
      });
      var dotitems = memDots.get(dialog);
      Highlighting.highlightAt(dotitems, spec.state.currentScreen.get());
    };
    var resetState = function () {
      spec.state.currentScreen.set(0);
      spec.state.dialogSwipeState.clear();
    };
    var memForm = $_g4pwn311rjdxlf0lb.record($_6xuye312njdxlf0sz.sketch(function (parts) {
      return {
        dom: $_2vsnm0113jdxlf0gu.dom('<div class="${prefix}-serialised-dialog"></div>'),
        components: [Container.sketch({
            dom: $_2vsnm0113jdxlf0gu.dom('<div class="${prefix}-serialised-dialog-chain" style="left: 0px; position: absolute;"></div>'),
            components: $_6dbxmwwsjdxleznr.map(spec.fields, function (field, i) {
              return i <= spec.maxFieldIndex ? Container.sketch({
                dom: $_2vsnm0113jdxlf0gu.dom('<div class="${prefix}-serialised-dialog-screen"></div>'),
                components: $_6dbxmwwsjdxleznr.flatten([
                  [navigationButton(-1, 'previous', i > 0)],
                  [parts.field(field.name, field.spec)],
                  [navigationButton(+1, 'next', i < spec.maxFieldIndex)]
                ])
              }) : parts.field(field.name, field.spec);
            })
          })],
        formBehaviours: $_5tm9cmy2jdxlezw3.derive([
          $_2qdoh4zdjdxlf04x.orientation(function (dialog, message) {
            reposition(dialog, message);
          }),
          Keying.config({
            mode: 'special',
            focusIn: function (dialog) {
              focusInput(dialog);
            },
            onTab: function (dialog) {
              navigate(dialog, +1);
              return Option.some(true);
            },
            onShiftTab: function (dialog) {
              navigate(dialog, -1);
              return Option.some(true);
            }
          }),
          $_940p5d126jdxlf0og.config(formAdhocEvents, [
            $_fpalyxy4jdxlezwy.runOnAttached(function (dialog, simulatedEvent) {
              resetState();
              var dotitems = memDots.get(dialog);
              Highlighting.highlightFirst(dotitems);
              spec.getInitialValue(dialog).each(function (v) {
                me.setValue(dialog, v);
              });
            }),
            $_fpalyxy4jdxlezwy.runOnExecute(spec.onExecute),
            $_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.transitionend(), function (dialog, simulatedEvent) {
              if (simulatedEvent.event().raw().propertyName === 'left') {
                focusInput(dialog);
              }
            }),
            $_fpalyxy4jdxlezwy.run(navigateEvent, function (dialog, simulatedEvent) {
              var direction = simulatedEvent.event().direction();
              navigate(dialog, direction);
            })
          ])
        ])
      };
    }));
    var memDots = $_g4pwn311rjdxlf0lb.record({
      dom: $_2vsnm0113jdxlf0gu.dom('<div class="${prefix}-dot-container"></div>'),
      behaviours: $_5tm9cmy2jdxlezw3.derive([Highlighting.config({
          highlightClass: $_6pb5xszejdxlf051.resolve('dot-active'),
          itemClass: $_6pb5xszejdxlf051.resolve('dot-item')
        })]),
      components: $_6dbxmwwsjdxleznr.bind(spec.fields, function (_f, i) {
        return i <= spec.maxFieldIndex ? [$_2vsnm0113jdxlf0gu.spec('<div class="${prefix}-dot-item ${prefix}-icon-full-dot ${prefix}-icon"></div>')] : [];
      })
    });
    return {
      dom: $_2vsnm0113jdxlf0gu.dom('<div class="${prefix}-serializer-wrapper"></div>'),
      components: [
        memForm.asSpec(),
        memDots.asSpec()
      ],
      behaviours: $_5tm9cmy2jdxlezw3.derive([
        Keying.config({
          mode: 'special',
          focusIn: function (wrapper) {
            var form = memForm.get(wrapper);
            Keying.focusIn(form);
          }
        }),
        $_940p5d126jdxlf0og.config(wrapperAdhocEvents, [
          $_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.touchstart(), function (wrapper, simulatedEvent) {
            spec.state.dialogSwipeState.set($_arkm8h12pjdxlf0tk.init(simulatedEvent.event().raw().touches[0].clientX));
          }),
          $_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.touchmove(), function (wrapper, simulatedEvent) {
            spec.state.dialogSwipeState.on(function (state) {
              simulatedEvent.event().prevent();
              spec.state.dialogSwipeState.set($_arkm8h12pjdxlf0tk.move(state, simulatedEvent.event().raw().touches[0].clientX));
            });
          }),
          $_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.touchend(), function (wrapper) {
            spec.state.dialogSwipeState.on(function (state) {
              var dialog = memForm.get(wrapper);
              var direction = -1 * $_arkm8h12pjdxlf0tk.complete(state);
              navigate(dialog, direction);
            });
          })
        ])
      ])
    };
  };
  var $_7snuks12ijdxlf0r0 = { sketch: sketch$7 };

  var getGroups = $_6hk83awljdxlezmy.cached(function (realm, editor) {
    return [{
        label: 'the link group',
        items: [$_7snuks12ijdxlf0r0.sketch({
            fields: [
              $_810qmb125jdxlf0nb.field('url', 'Type or paste URL'),
              $_810qmb125jdxlf0nb.field('text', 'Link text'),
              $_810qmb125jdxlf0nb.field('title', 'Link title'),
              $_810qmb125jdxlf0nb.field('target', 'Link target'),
              $_810qmb125jdxlf0nb.hidden('link')
            ],
            maxFieldIndex: [
              'url',
              'text',
              'title',
              'target'
            ].length - 1,
            getInitialValue: function () {
              return Option.some($_9yl38p122jdxlf0ms.getInfo(editor));
            },
            onExecute: function (dialog) {
              var info = me.getValue(dialog);
              $_9yl38p122jdxlf0ms.applyInfo(editor, info);
              realm.restoreToolbar();
              editor.focus();
            }
          })]
      }];
  });
  var sketch$8 = function (realm, editor) {
    return $_50h76zfjdxlf054.forToolbarStateAction(editor, 'link', 'link', function () {
      var groups = getGroups(realm, editor);
      realm.setContextToolbar(groups);
      $_a2acgj124jdxlf0n5.forAndroid(editor, function () {
        realm.focusToolbar();
      });
      $_9yl38p122jdxlf0ms.query(editor).each(function (link) {
        editor.selection.select(link.dom());
      });
    });
  };
  var $_6q8b79121jdxlf0ml = { sketch: sketch$8 };

  var DefaultStyleFormats = [
    {
      title: 'Headings',
      items: [
        {
          title: 'Heading 1',
          format: 'h1'
        },
        {
          title: 'Heading 2',
          format: 'h2'
        },
        {
          title: 'Heading 3',
          format: 'h3'
        },
        {
          title: 'Heading 4',
          format: 'h4'
        },
        {
          title: 'Heading 5',
          format: 'h5'
        },
        {
          title: 'Heading 6',
          format: 'h6'
        }
      ]
    },
    {
      title: 'Inline',
      items: [
        {
          title: 'Bold',
          icon: 'bold',
          format: 'bold'
        },
        {
          title: 'Italic',
          icon: 'italic',
          format: 'italic'
        },
        {
          title: 'Underline',
          icon: 'underline',
          format: 'underline'
        },
        {
          title: 'Strikethrough',
          icon: 'strikethrough',
          format: 'strikethrough'
        },
        {
          title: 'Superscript',
          icon: 'superscript',
          format: 'superscript'
        },
        {
          title: 'Subscript',
          icon: 'subscript',
          format: 'subscript'
        },
        {
          title: 'Code',
          icon: 'code',
          format: 'code'
        }
      ]
    },
    {
      title: 'Blocks',
      items: [
        {
          title: 'Paragraph',
          format: 'p'
        },
        {
          title: 'Blockquote',
          format: 'blockquote'
        },
        {
          title: 'Div',
          format: 'div'
        },
        {
          title: 'Pre',
          format: 'pre'
        }
      ]
    },
    {
      title: 'Alignment',
      items: [
        {
          title: 'Left',
          icon: 'alignleft',
          format: 'alignleft'
        },
        {
          title: 'Center',
          icon: 'aligncenter',
          format: 'aligncenter'
        },
        {
          title: 'Right',
          icon: 'alignright',
          format: 'alignright'
        },
        {
          title: 'Justify',
          icon: 'alignjustify',
          format: 'alignjustify'
        }
      ]
    }
  ];

  var generateFrom = function (spec, all) {
    var schema = $_6dbxmwwsjdxleznr.map(all, function (a) {
      return $_5jvmj2y7jdxlezxo.field(a.name(), a.name(), $_8ycmk2y8jdxlezxw.asOption(), $_2vagecyejdxlezzg.objOf([
        $_5jvmj2y7jdxlezxo.strict('config'),
        $_5jvmj2y7jdxlezxo.defaulted('state', $_8skmpryjjdxlf00p)
      ]));
    });
    var validated = $_2vagecyejdxlezzg.asStruct('component.behaviours', $_2vagecyejdxlezzg.objOf(schema), spec.behaviours).fold(function (errInfo) {
      throw new Error($_2vagecyejdxlezzg.formatError(errInfo) + '\nComplete spec:\n' + $_67p1lqydjdxlezzd.stringify(spec, null, 2));
    }, $_26xiiiwjjdxlezmo.identity);
    return {
      list: all,
      data: $_8ih830x0jdxlezpa.map(validated, function (blobOptionThunk) {
        var blobOption = blobOptionThunk();
        return $_26xiiiwjjdxlezmo.constant(blobOption.map(function (blob) {
          return {
            config: blob.config(),
            state: blob.state().init(blob.config())
          };
        }));
      })
    };
  };
  var getBehaviours = function (bData) {
    return bData.list;
  };
  var getData = function (bData) {
    return bData.data;
  };
  var $_b03fx912wjdxlf0w9 = {
    generateFrom: generateFrom,
    getBehaviours: getBehaviours,
    getData: getData
  };

  var getBehaviours$1 = function (spec) {
    var behaviours = $_ey6c2jxsjdxlezue.readOptFrom(spec, 'behaviours').getOr({});
    var keys = $_6dbxmwwsjdxleznr.filter($_8ih830x0jdxlezpa.keys(behaviours), function (k) {
      return behaviours[k] !== undefined;
    });
    return $_6dbxmwwsjdxleznr.map(keys, function (k) {
      return spec.behaviours[k].me;
    });
  };
  var generateFrom$1 = function (spec, all) {
    return $_b03fx912wjdxlf0w9.generateFrom(spec, all);
  };
  var generate$4 = function (spec) {
    var all = getBehaviours$1(spec);
    return generateFrom$1(spec, all);
  };
  var $_8d76tf12vjdxlf0w1 = {
    generate: generate$4,
    generateFrom: generateFrom$1
  };

  var ComponentApi = $_gife37yljdxlf00u.exactly([
    'getSystem',
    'config',
    'hasConfigured',
    'spec',
    'connect',
    'disconnect',
    'element',
    'syncComponents',
    'readState',
    'components',
    'events'
  ]);

  var SystemApi = $_gife37yljdxlf00u.exactly([
    'debugInfo',
    'triggerFocus',
    'triggerEvent',
    'triggerEscape',
    'addToWorld',
    'removeFromWorld',
    'addToGui',
    'removeFromGui',
    'build',
    'getByUid',
    'getByDom',
    'broadcast',
    'broadcastOn'
  ]);

  function NoContextApi (getComp) {
    var fail = function (event) {
      return function () {
        throw new Error('The component must be in a context to send: ' + event + '\n' + $_5vhxqxmjdxleztl.element(getComp().element()) + ' is not in context.');
      };
    };
    return SystemApi({
      debugInfo: $_26xiiiwjjdxlezmo.constant('fake'),
      triggerEvent: fail('triggerEvent'),
      triggerFocus: fail('triggerFocus'),
      triggerEscape: fail('triggerEscape'),
      build: fail('build'),
      addToWorld: fail('addToWorld'),
      removeFromWorld: fail('removeFromWorld'),
      addToGui: fail('addToGui'),
      removeFromGui: fail('removeFromGui'),
      getByUid: fail('getByUid'),
      getByDom: fail('getByDom'),
      broadcast: fail('broadcast'),
      broadcastOn: fail('broadcastOn')
    });
  }

  var byInnerKey = function (data, tuple) {
    var r = {};
    $_8ih830x0jdxlezpa.each(data, function (detail, key) {
      $_8ih830x0jdxlezpa.each(detail, function (value, indexKey) {
        var chain = $_ey6c2jxsjdxlezue.readOr(indexKey, [])(r);
        r[indexKey] = chain.concat([tuple(key, value)]);
      });
    });
    return r;
  };
  var $_ebsvy3131jdxlf0xg = { byInnerKey: byInnerKey };

  var behaviourDom = function (name, modification) {
    return {
      name: $_26xiiiwjjdxlezmo.constant(name),
      modification: modification
    };
  };
  var concat = function (chain, aspect) {
    var values = $_6dbxmwwsjdxleznr.bind(chain, function (c) {
      return c.modification().getOr([]);
    });
    return Result.value($_ey6c2jxsjdxlezue.wrap(aspect, values));
  };
  var onlyOne = function (chain, aspect, order) {
    if (chain.length > 1)
      return Result.error('Multiple behaviours have tried to change DOM "' + aspect + '". The guilty behaviours are: ' + $_67p1lqydjdxlezzd.stringify($_6dbxmwwsjdxleznr.map(chain, function (b) {
        return b.name();
      })) + '. At this stage, this ' + 'is not supported. Future releases might provide strategies for resolving this.');
    else if (chain.length === 0)
      return Result.value({});
    else
      return Result.value(chain[0].modification().fold(function () {
        return {};
      }, function (m) {
        return $_ey6c2jxsjdxlezue.wrap(aspect, m);
      }));
  };
  var duplicate = function (aspect, k, obj, behaviours) {
    return Result.error('Mulitple behaviours have tried to change the _' + k + '_ "' + aspect + '"' + '. The guilty behaviours are: ' + $_67p1lqydjdxlezzd.stringify($_6dbxmwwsjdxleznr.bind(behaviours, function (b) {
      return b.modification().getOr({})[k] !== undefined ? [b.name()] : [];
    }), null, 2) + '. This is not currently supported.');
  };
  var safeMerge = function (chain, aspect) {
    var y = $_6dbxmwwsjdxleznr.foldl(chain, function (acc, c) {
      var obj = c.modification().getOr({});
      return acc.bind(function (accRest) {
        var parts = $_8ih830x0jdxlezpa.mapToArray(obj, function (v, k) {
          return accRest[k] !== undefined ? duplicate(aspect, k, obj, chain) : Result.value($_ey6c2jxsjdxlezue.wrap(k, v));
        });
        return $_ey6c2jxsjdxlezue.consolidate(parts, accRest);
      });
    }, Result.value({}));
    return y.map(function (yValue) {
      return $_ey6c2jxsjdxlezue.wrap(aspect, yValue);
    });
  };
  var mergeTypes = {
    classes: concat,
    attributes: safeMerge,
    styles: safeMerge,
    domChildren: onlyOne,
    defChildren: onlyOne,
    innerHtml: onlyOne,
    value: onlyOne
  };
  var combine$1 = function (info, baseMod, behaviours, base) {
    var behaviourDoms = $_dngveawyjdxlezp5.deepMerge({}, baseMod);
    $_6dbxmwwsjdxleznr.each(behaviours, function (behaviour) {
      behaviourDoms[behaviour.name()] = behaviour.exhibit(info, base);
    });
    var byAspect = $_ebsvy3131jdxlf0xg.byInnerKey(behaviourDoms, behaviourDom);
    var usedAspect = $_8ih830x0jdxlezpa.map(byAspect, function (values, aspect) {
      return $_6dbxmwwsjdxleznr.bind(values, function (value) {
        return value.modification().fold(function () {
          return [];
        }, function (v) {
          return [value];
        });
      });
    });
    var modifications = $_8ih830x0jdxlezpa.mapToArray(usedAspect, function (values, aspect) {
      return $_ey6c2jxsjdxlezue.readOptFrom(mergeTypes, aspect).fold(function () {
        return Result.error('Unknown field type: ' + aspect);
      }, function (merger) {
        return merger(values, aspect);
      });
    });
    var consolidated = $_ey6c2jxsjdxlezue.consolidate(modifications, {});
    return consolidated.map($_8a5bobyhjdxlezzz.nu);
  };
  var $_7bqoac130jdxlf0x1 = { combine: combine$1 };

  var sortKeys = function (label, keyName, array, order) {
    var sliced = array.slice(0);
    try {
      var sorted = sliced.sort(function (a, b) {
        var aKey = a[keyName]();
        var bKey = b[keyName]();
        var aIndex = order.indexOf(aKey);
        var bIndex = order.indexOf(bKey);
        if (aIndex === -1)
          throw new Error('The ordering for ' + label + ' does not have an entry for ' + aKey + '.\nOrder specified: ' + $_67p1lqydjdxlezzd.stringify(order, null, 2));
        if (bIndex === -1)
          throw new Error('The ordering for ' + label + ' does not have an entry for ' + bKey + '.\nOrder specified: ' + $_67p1lqydjdxlezzd.stringify(order, null, 2));
        if (aIndex < bIndex)
          return -1;
        else if (bIndex < aIndex)
          return 1;
        else
          return 0;
      });
      return Result.value(sorted);
    } catch (err) {
      return Result.error([err]);
    }
  };
  var $_9mco81133jdxlf0y1 = { sortKeys: sortKeys };

  var nu$7 = function (handler, purpose) {
    return {
      handler: handler,
      purpose: $_26xiiiwjjdxlezmo.constant(purpose)
    };
  };
  var curryArgs = function (descHandler, extraArgs) {
    return {
      handler: $_26xiiiwjjdxlezmo.curry.apply(undefined, [descHandler.handler].concat(extraArgs)),
      purpose: descHandler.purpose
    };
  };
  var getHandler = function (descHandler) {
    return descHandler.handler;
  };
  var $_avg8t5134jdxlf0y7 = {
    nu: nu$7,
    curryArgs: curryArgs,
    getHandler: getHandler
  };

  var behaviourTuple = function (name, handler) {
    return {
      name: $_26xiiiwjjdxlezmo.constant(name),
      handler: $_26xiiiwjjdxlezmo.constant(handler)
    };
  };
  var nameToHandlers = function (behaviours, info) {
    var r = {};
    $_6dbxmwwsjdxleznr.each(behaviours, function (behaviour) {
      r[behaviour.name()] = behaviour.handlers(info);
    });
    return r;
  };
  var groupByEvents = function (info, behaviours, base) {
    var behaviourEvents = $_dngveawyjdxlezp5.deepMerge(base, nameToHandlers(behaviours, info));
    return $_ebsvy3131jdxlf0xg.byInnerKey(behaviourEvents, behaviourTuple);
  };
  var combine$2 = function (info, eventOrder, behaviours, base) {
    var byEventName = groupByEvents(info, behaviours, base);
    return combineGroups(byEventName, eventOrder);
  };
  var assemble = function (rawHandler) {
    var handler = $_gdgb03y6jdxlezx9.read(rawHandler);
    return function (component, simulatedEvent) {
      var args = Array.prototype.slice.call(arguments, 0);
      if (handler.abort.apply(undefined, args)) {
        simulatedEvent.stop();
      } else if (handler.can.apply(undefined, args)) {
        handler.run.apply(undefined, args);
      }
    };
  };
  var missingOrderError = function (eventName, tuples) {
    return Result.error(['The event (' + eventName + ') has more than one behaviour that listens to it.\nWhen this occurs, you must ' + 'specify an event ordering for the behaviours in your spec (e.g. [ "listing", "toggling" ]).\nThe behaviours that ' + 'can trigger it are: ' + $_67p1lqydjdxlezzd.stringify($_6dbxmwwsjdxleznr.map(tuples, function (c) {
        return c.name();
      }), null, 2)]);
  };
  var fuse$1 = function (tuples, eventOrder, eventName) {
    var order = eventOrder[eventName];
    if (!order)
      return missingOrderError(eventName, tuples);
    else
      return $_9mco81133jdxlf0y1.sortKeys('Event: ' + eventName, 'name', tuples, order).map(function (sortedTuples) {
        var handlers = $_6dbxmwwsjdxleznr.map(sortedTuples, function (tuple) {
          return tuple.handler();
        });
        return $_gdgb03y6jdxlezx9.fuse(handlers);
      });
  };
  var combineGroups = function (byEventName, eventOrder) {
    var r = $_8ih830x0jdxlezpa.mapToArray(byEventName, function (tuples, eventName) {
      var combined = tuples.length === 1 ? Result.value(tuples[0].handler()) : fuse$1(tuples, eventOrder, eventName);
      return combined.map(function (handler) {
        var assembled = assemble(handler);
        var purpose = tuples.length > 1 ? $_6dbxmwwsjdxleznr.filter(eventOrder, function (o) {
          return $_6dbxmwwsjdxleznr.contains(tuples, function (t) {
            return t.name() === o;
          });
        }).join(' > ') : tuples[0].name();
        return $_ey6c2jxsjdxlezue.wrap(eventName, $_avg8t5134jdxlf0y7.nu(assembled, purpose));
      });
    });
    return $_ey6c2jxsjdxlezue.consolidate(r, {});
  };
  var $_2b15pc132jdxlf0xm = { combine: combine$2 };

  var toInfo = function (spec) {
    return $_2vagecyejdxlezzg.asStruct('custom.definition', $_2vagecyejdxlezzg.objOfOnly([
      $_5jvmj2y7jdxlezxo.field('dom', 'dom', $_8ycmk2y8jdxlezxw.strict(), $_2vagecyejdxlezzg.objOfOnly([
        $_5jvmj2y7jdxlezxo.strict('tag'),
        $_5jvmj2y7jdxlezxo.defaulted('styles', {}),
        $_5jvmj2y7jdxlezxo.defaulted('classes', []),
        $_5jvmj2y7jdxlezxo.defaulted('attributes', {}),
        $_5jvmj2y7jdxlezxo.option('value'),
        $_5jvmj2y7jdxlezxo.option('innerHtml')
      ])),
      $_5jvmj2y7jdxlezxo.strict('components'),
      $_5jvmj2y7jdxlezxo.strict('uid'),
      $_5jvmj2y7jdxlezxo.defaulted('events', {}),
      $_5jvmj2y7jdxlezxo.defaulted('apis', $_26xiiiwjjdxlezmo.constant({})),
      $_5jvmj2y7jdxlezxo.field('eventOrder', 'eventOrder', $_8ycmk2y8jdxlezxw.mergeWith({
        'alloy.execute': [
          'disabling',
          'alloy.base.behaviour',
          'toggling'
        ],
        'alloy.focus': [
          'alloy.base.behaviour',
          'focusing',
          'keying'
        ],
        'alloy.system.init': [
          'alloy.base.behaviour',
          'disabling',
          'toggling',
          'representing'
        ],
        'input': [
          'alloy.base.behaviour',
          'representing',
          'streaming',
          'invalidating'
        ],
        'alloy.system.detached': [
          'alloy.base.behaviour',
          'representing'
        ]
      }), $_2vagecyejdxlezzg.anyValue()),
      $_5jvmj2y7jdxlezxo.option('domModification'),
      $_d0ld34z6jdxlf03c.snapshot('originalSpec'),
      $_5jvmj2y7jdxlezxo.defaulted('debug.sketcher', 'unknown')
    ]), spec);
  };
  var getUid = function (info) {
    return $_ey6c2jxsjdxlezue.wrap($_8f9xd510yjdxlf0fy.idAttr(), info.uid());
  };
  var toDefinition = function (info) {
    var base = {
      tag: info.dom().tag(),
      classes: info.dom().classes(),
      attributes: $_dngveawyjdxlezp5.deepMerge(getUid(info), info.dom().attributes()),
      styles: info.dom().styles(),
      domChildren: $_6dbxmwwsjdxleznr.map(info.components(), function (comp) {
        return comp.element();
      })
    };
    return $_4hr4jfyijdxlf00b.nu($_dngveawyjdxlezp5.deepMerge(base, info.dom().innerHtml().map(function (h) {
      return $_ey6c2jxsjdxlezue.wrap('innerHtml', h);
    }).getOr({}), info.dom().value().map(function (h) {
      return $_ey6c2jxsjdxlezue.wrap('value', h);
    }).getOr({})));
  };
  var toModification = function (info) {
    return info.domModification().fold(function () {
      return $_8a5bobyhjdxlezzz.nu({});
    }, $_8a5bobyhjdxlezzz.nu);
  };
  var toApis = function (info) {
    return info.apis();
  };
  var toEvents = function (info) {
    return info.events();
  };
  var $_f8vgpg135jdxlf0yd = {
    toInfo: toInfo,
    toDefinition: toDefinition,
    toModification: toModification,
    toApis: toApis,
    toEvents: toEvents
  };

  var add$3 = function (element, classes) {
    $_6dbxmwwsjdxleznr.each(classes, function (x) {
      $_79eveeynjdxlf012.add(element, x);
    });
  };
  var remove$6 = function (element, classes) {
    $_6dbxmwwsjdxleznr.each(classes, function (x) {
      $_79eveeynjdxlf012.remove(element, x);
    });
  };
  var toggle$3 = function (element, classes) {
    $_6dbxmwwsjdxleznr.each(classes, function (x) {
      $_79eveeynjdxlf012.toggle(element, x);
    });
  };
  var hasAll = function (element, classes) {
    return $_6dbxmwwsjdxleznr.forall(classes, function (clazz) {
      return $_79eveeynjdxlf012.has(element, clazz);
    });
  };
  var hasAny = function (element, classes) {
    return $_6dbxmwwsjdxleznr.exists(classes, function (clazz) {
      return $_79eveeynjdxlf012.has(element, clazz);
    });
  };
  var getNative = function (element) {
    var classList = element.dom().classList;
    var r = new Array(classList.length);
    for (var i = 0; i < classList.length; i++) {
      r[i] = classList.item(i);
    }
    return r;
  };
  var get$10 = function (element) {
    return $_4m0v05ypjdxlf016.supports(element) ? getNative(element) : $_4m0v05ypjdxlf016.get(element);
  };
  var $_3io6wv137jdxlf0z7 = {
    add: add$3,
    remove: remove$6,
    toggle: toggle$3,
    hasAll: hasAll,
    hasAny: hasAny,
    get: get$10
  };

  var getChildren = function (definition) {
    if (definition.domChildren().isSome() && definition.defChildren().isSome()) {
      throw new Error('Cannot specify children and child specs! Must be one or the other.\nDef: ' + $_4hr4jfyijdxlf00b.defToStr(definition));
    } else {
      return definition.domChildren().fold(function () {
        var defChildren = definition.defChildren().getOr([]);
        return $_6dbxmwwsjdxleznr.map(defChildren, renderDef);
      }, function (domChildren) {
        return domChildren;
      });
    }
  };
  var renderToDom = function (definition) {
    var subject = $_2ejbh1xfjdxlezs6.fromTag(definition.tag());
    $_72a1mgxrjdxlezu3.setAll(subject, definition.attributes().getOr({}));
    $_3io6wv137jdxlf0z7.add(subject, definition.classes().getOr([]));
    $_99zvvg103jdxlf08t.setAll(subject, definition.styles().getOr({}));
    $_64cz3zxojdxleztt.set(subject, definition.innerHtml().getOr(''));
    var children = getChildren(definition);
    $_gixrgexijdxlezsi.append(subject, children);
    definition.value().each(function (value) {
      $_8n8qc012ejdxlf0ql.set(subject, value);
    });
    return subject;
  };
  var renderDef = function (spec) {
    var definition = $_4hr4jfyijdxlf00b.nu(spec);
    return renderToDom(definition);
  };
  var $_g892wr136jdxlf0yu = { renderToDom: renderToDom };

  var build = function (spec) {
    var getMe = function () {
      return me;
    };
    var systemApi = Cell(NoContextApi(getMe));
    var info = $_2vagecyejdxlezzg.getOrDie($_f8vgpg135jdxlf0yd.toInfo($_dngveawyjdxlezp5.deepMerge(spec, { behaviours: undefined })));
    var bBlob = $_8d76tf12vjdxlf0w1.generate(spec);
    var bList = $_b03fx912wjdxlf0w9.getBehaviours(bBlob);
    var bData = $_b03fx912wjdxlf0w9.getData(bBlob);
    var definition = $_f8vgpg135jdxlf0yd.toDefinition(info);
    var baseModification = { 'alloy.base.modification': $_f8vgpg135jdxlf0yd.toModification(info) };
    var modification = $_7bqoac130jdxlf0x1.combine(bData, baseModification, bList, definition).getOrDie();
    var modDefinition = $_8a5bobyhjdxlezzz.merge(definition, modification);
    var item = $_g892wr136jdxlf0yu.renderToDom(modDefinition);
    var baseEvents = { 'alloy.base.behaviour': $_f8vgpg135jdxlf0yd.toEvents(info) };
    var events = $_2b15pc132jdxlf0xm.combine(bData, info.eventOrder(), bList, baseEvents).getOrDie();
    var subcomponents = Cell(info.components());
    var connect = function (newApi) {
      systemApi.set(newApi);
    };
    var disconnect = function () {
      systemApi.set(NoContextApi(getMe));
    };
    var syncComponents = function () {
      var children = $_s9ri4x3jdxlezpx.children(item);
      var subs = $_6dbxmwwsjdxleznr.bind(children, function (child) {
        return systemApi.get().getByDom(child).fold(function () {
          return [];
        }, function (c) {
          return [c];
        });
      });
      subcomponents.set(subs);
    };
    var config = function (behaviour) {
      if (behaviour === $_73wlbg10qjdxlf0dm.apiConfig())
        return info.apis();
      var b = bData;
      var f = $_9wk4wvwzjdxlezp8.isFunction(b[behaviour.name()]) ? b[behaviour.name()] : function () {
        throw new Error('Could not find ' + behaviour.name() + ' in ' + $_67p1lqydjdxlezzd.stringify(spec, null, 2));
      };
      return f();
    };
    var hasConfigured = function (behaviour) {
      return $_9wk4wvwzjdxlezp8.isFunction(bData[behaviour.name()]);
    };
    var readState = function (behaviourName) {
      return bData[behaviourName]().map(function (b) {
        return b.state.readState();
      }).getOr('not enabled');
    };
    var me = ComponentApi({
      getSystem: systemApi.get,
      config: config,
      hasConfigured: hasConfigured,
      spec: $_26xiiiwjjdxlezmo.constant(spec),
      readState: readState,
      connect: connect,
      disconnect: disconnect,
      element: $_26xiiiwjjdxlezmo.constant(item),
      syncComponents: syncComponents,
      components: subcomponents.get,
      events: $_26xiiiwjjdxlezmo.constant(events)
    });
    return me;
  };
  var $_5aobi012ujdxlf0vf = { build: build };

  var isRecursive = function (component, originator, target) {
    return $_4u044dx9jdxlezqw.eq(originator, component.element()) && !$_4u044dx9jdxlezqw.eq(originator, target);
  };
  var $_flyiec138jdxlf0zd = {
    events: $_fpalyxy4jdxlezwy.derive([$_fpalyxy4jdxlezwy.can($_7mziizwhjdxlezm8.focus(), function (component, simulatedEvent) {
        var originator = simulatedEvent.event().originator();
        var target = simulatedEvent.event().target();
        if (isRecursive(component, originator, target)) {
          console.warn($_7mziizwhjdxlezm8.focus() + ' did not get interpreted by the desired target. ' + '\nOriginator: ' + $_5vhxqxmjdxleztl.element(originator) + '\nTarget: ' + $_5vhxqxmjdxleztl.element(target) + '\nCheck the ' + $_7mziizwhjdxlezm8.focus() + ' event handlers');
          return false;
        } else {
          return true;
        }
      })])
  };

  var make$1 = function (spec) {
    return spec;
  };
  var $_7xsobp139jdxlf0zh = { make: make$1 };

  var buildSubcomponents = function (spec) {
    var components = $_ey6c2jxsjdxlezue.readOr('components', [])(spec);
    return $_6dbxmwwsjdxleznr.map(components, build$1);
  };
  var buildFromSpec = function (userSpec) {
    var spec = $_7xsobp139jdxlf0zh.make(userSpec);
    var components = buildSubcomponents(spec);
    var completeSpec = $_dngveawyjdxlezp5.deepMerge($_flyiec138jdxlf0zd, spec, $_ey6c2jxsjdxlezue.wrap('components', components));
    return Result.value($_5aobi012ujdxlf0vf.build(completeSpec));
  };
  var text = function (textContent) {
    var element = $_2ejbh1xfjdxlezs6.fromText(textContent);
    return external({ element: element });
  };
  var external = function (spec) {
    var extSpec = $_2vagecyejdxlezzg.asStructOrDie('external.component', $_2vagecyejdxlezzg.objOfOnly([
      $_5jvmj2y7jdxlezxo.strict('element'),
      $_5jvmj2y7jdxlezxo.option('uid')
    ]), spec);
    var systemApi = Cell(NoContextApi());
    var connect = function (newApi) {
      systemApi.set(newApi);
    };
    var disconnect = function () {
      systemApi.set(NoContextApi(function () {
        return me;
      }));
    };
    extSpec.uid().each(function (uid) {
      $_ctuqf410xjdxlf0fo.writeOnly(extSpec.element(), uid);
    });
    var me = ComponentApi({
      getSystem: systemApi.get,
      config: Option.none,
      hasConfigured: $_26xiiiwjjdxlezmo.constant(false),
      connect: connect,
      disconnect: disconnect,
      element: $_26xiiiwjjdxlezmo.constant(extSpec.element()),
      spec: $_26xiiiwjjdxlezmo.constant(spec),
      readState: $_26xiiiwjjdxlezmo.constant('No state'),
      syncComponents: $_26xiiiwjjdxlezmo.noop,
      components: $_26xiiiwjjdxlezmo.constant([]),
      events: $_26xiiiwjjdxlezmo.constant({})
    });
    return $_73wlbg10qjdxlf0dm.premade(me);
  };
  var build$1 = function (rawUserSpec) {
    return $_73wlbg10qjdxlf0dm.getPremade(rawUserSpec).fold(function () {
      var userSpecWithUid = $_dngveawyjdxlezp5.deepMerge({ uid: $_ctuqf410xjdxlf0fo.generate('') }, rawUserSpec);
      return buildFromSpec(userSpecWithUid).getOrDie();
    }, function (prebuilt) {
      return prebuilt;
    });
  };
  var $_e0aoww12tjdxlf0uv = {
    build: build$1,
    premade: $_73wlbg10qjdxlf0dm.premade,
    external: external,
    text: text
  };

  var hoverEvent = 'alloy.item-hover';
  var focusEvent = 'alloy.item-focus';
  var onHover = function (item) {
    if ($_9am9mvytjdxlf01i.search(item.element()).isNone() || Focusing.isFocused(item)) {
      if (!Focusing.isFocused(item))
        Focusing.focus(item);
      $_7qvrqpwgjdxlezlj.emitWith(item, hoverEvent, { item: item });
    }
  };
  var onFocus = function (item) {
    $_7qvrqpwgjdxlezlj.emitWith(item, focusEvent, { item: item });
  };
  var $_bdcxja13djdxlf103 = {
    hover: $_26xiiiwjjdxlezmo.constant(hoverEvent),
    focus: $_26xiiiwjjdxlezmo.constant(focusEvent),
    onHover: onHover,
    onFocus: onFocus
  };

  var builder = function (info) {
    return {
      dom: $_dngveawyjdxlezp5.deepMerge(info.dom(), { attributes: { role: info.toggling().isSome() ? 'menuitemcheckbox' : 'menuitem' } }),
      behaviours: $_dngveawyjdxlezp5.deepMerge($_5tm9cmy2jdxlezw3.derive([
        info.toggling().fold(Toggling.revoke, function (tConfig) {
          return Toggling.config($_dngveawyjdxlezp5.deepMerge({ aria: { mode: 'checked' } }, tConfig));
        }),
        Focusing.config({
          ignore: info.ignoreFocus(),
          onFocus: function (component) {
            $_bdcxja13djdxlf103.onFocus(component);
          }
        }),
        Keying.config({ mode: 'execution' }),
        me.config({
          store: {
            mode: 'memory',
            initialValue: info.data()
          }
        })
      ]), info.itemBehaviours()),
      events: $_fpalyxy4jdxlezwy.derive([
        $_fpalyxy4jdxlezwy.runWithTarget($_7mziizwhjdxlezm8.tapOrClick(), $_7qvrqpwgjdxlezlj.emitExecute),
        $_fpalyxy4jdxlezwy.cutter($_f2g7alwijdxlezmh.mousedown()),
        $_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.mouseover(), $_bdcxja13djdxlf103.onHover),
        $_fpalyxy4jdxlezwy.run($_7mziizwhjdxlezm8.focusItem(), Focusing.focus)
      ]),
      components: info.components(),
      domModification: info.domModification()
    };
  };
  var schema$10 = [
    $_5jvmj2y7jdxlezxo.strict('data'),
    $_5jvmj2y7jdxlezxo.strict('components'),
    $_5jvmj2y7jdxlezxo.strict('dom'),
    $_5jvmj2y7jdxlezxo.option('toggling'),
    $_5jvmj2y7jdxlezxo.defaulted('itemBehaviours', {}),
    $_5jvmj2y7jdxlezxo.defaulted('ignoreFocus', false),
    $_5jvmj2y7jdxlezxo.defaulted('domModification', {}),
    $_d0ld34z6jdxlf03c.output('builder', builder)
  ];

  var builder$1 = function (detail) {
    return {
      dom: detail.dom(),
      components: detail.components(),
      events: $_fpalyxy4jdxlezwy.derive([$_fpalyxy4jdxlezwy.stopper($_7mziizwhjdxlezm8.focusItem())])
    };
  };
  var schema$11 = [
    $_5jvmj2y7jdxlezxo.strict('dom'),
    $_5jvmj2y7jdxlezxo.strict('components'),
    $_d0ld34z6jdxlf03c.output('builder', builder$1)
  ];

  var owner$2 = 'item-widget';
  var partTypes = [$_8qnic510vjdxlf0eq.required({
      name: 'widget',
      overrides: function (detail) {
        return {
          behaviours: $_5tm9cmy2jdxlezw3.derive([me.config({
              store: {
                mode: 'manual',
                getValue: function (component) {
                  return detail.data();
                },
                setValue: function () {
                }
              }
            })])
        };
      }
    })];
  var $_3gw36913gjdxlf10m = {
    owner: $_26xiiiwjjdxlezmo.constant(owner$2),
    parts: $_26xiiiwjjdxlezmo.constant(partTypes)
  };

  var builder$2 = function (info) {
    var subs = $_3ucuv110tjdxlf0e0.substitutes($_3gw36913gjdxlf10m.owner(), info, $_3gw36913gjdxlf10m.parts());
    var components = $_3ucuv110tjdxlf0e0.components($_3gw36913gjdxlf10m.owner(), info, subs.internals());
    var focusWidget = function (component) {
      return $_3ucuv110tjdxlf0e0.getPart(component, info, 'widget').map(function (widget) {
        Keying.focusIn(widget);
        return widget;
      });
    };
    var onHorizontalArrow = function (component, simulatedEvent) {
      return $_agoibq108jdxlf09o.inside(simulatedEvent.event().target()) ? Option.none() : function () {
        if (info.autofocus()) {
          simulatedEvent.setSource(component.element());
          return Option.none();
        } else {
          return Option.none();
        }
      }();
    };
    return $_dngveawyjdxlezp5.deepMerge({
      dom: info.dom(),
      components: components,
      domModification: info.domModification(),
      events: $_fpalyxy4jdxlezwy.derive([
        $_fpalyxy4jdxlezwy.runOnExecute(function (component, simulatedEvent) {
          focusWidget(component).each(function (widget) {
            simulatedEvent.stop();
          });
        }),
        $_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.mouseover(), $_bdcxja13djdxlf103.onHover),
        $_fpalyxy4jdxlezwy.run($_7mziizwhjdxlezm8.focusItem(), function (component, simulatedEvent) {
          if (info.autofocus())
            focusWidget(component);
          else
            Focusing.focus(component);
        })
      ]),
      behaviours: $_5tm9cmy2jdxlezw3.derive([
        me.config({
          store: {
            mode: 'memory',
            initialValue: info.data()
          }
        }),
        Focusing.config({
          onFocus: function (component) {
            $_bdcxja13djdxlf103.onFocus(component);
          }
        }),
        Keying.config({
          mode: 'special',
          onLeft: onHorizontalArrow,
          onRight: onHorizontalArrow,
          onEscape: function (component, simulatedEvent) {
            if (!Focusing.isFocused(component) && !info.autofocus()) {
              Focusing.focus(component);
              return Option.some(true);
            } else if (info.autofocus()) {
              simulatedEvent.setSource(component.element());
              return Option.none();
            } else {
              return Option.none();
            }
          }
        })
      ])
    });
  };
  var schema$12 = [
    $_5jvmj2y7jdxlezxo.strict('uid'),
    $_5jvmj2y7jdxlezxo.strict('data'),
    $_5jvmj2y7jdxlezxo.strict('components'),
    $_5jvmj2y7jdxlezxo.strict('dom'),
    $_5jvmj2y7jdxlezxo.defaulted('autofocus', false),
    $_5jvmj2y7jdxlezxo.defaulted('domModification', {}),
    $_3ucuv110tjdxlf0e0.defaultUidsSchema($_3gw36913gjdxlf10m.parts()),
    $_d0ld34z6jdxlf03c.output('builder', builder$2)
  ];

  var itemSchema$1 = $_2vagecyejdxlezzg.choose('type', {
    widget: schema$12,
    item: schema$10,
    separator: schema$11
  });
  var configureGrid = function (detail, movementInfo) {
    return {
      mode: 'flatgrid',
      selector: '.' + detail.markers().item(),
      initSize: {
        numColumns: movementInfo.initSize().numColumns(),
        numRows: movementInfo.initSize().numRows()
      },
      focusManager: detail.focusManager()
    };
  };
  var configureMenu = function (detail, movementInfo) {
    return {
      mode: 'menu',
      selector: '.' + detail.markers().item(),
      moveOnTab: movementInfo.moveOnTab(),
      focusManager: detail.focusManager()
    };
  };
  var parts = [$_8qnic510vjdxlf0eq.group({
      factory: {
        sketch: function (spec) {
          var itemInfo = $_2vagecyejdxlezzg.asStructOrDie('menu.spec item', itemSchema$1, spec);
          return itemInfo.builder()(itemInfo);
        }
      },
      name: 'items',
      unit: 'item',
      defaults: function (detail, u) {
        var fallbackUid = $_ctuqf410xjdxlf0fo.generate('');
        return $_dngveawyjdxlezp5.deepMerge({ uid: fallbackUid }, u);
      },
      overrides: function (detail, u) {
        return {
          type: u.type,
          ignoreFocus: detail.fakeFocus(),
          domModification: { classes: [detail.markers().item()] }
        };
      }
    })];
  var schema$13 = [
    $_5jvmj2y7jdxlezxo.strict('value'),
    $_5jvmj2y7jdxlezxo.strict('items'),
    $_5jvmj2y7jdxlezxo.strict('dom'),
    $_5jvmj2y7jdxlezxo.strict('components'),
    $_5jvmj2y7jdxlezxo.defaulted('eventOrder', {}),
    $_32y64u10ojdxlf0d0.field('menuBehaviours', [
      Highlighting,
      me,
      Composing,
      Keying
    ]),
    $_5jvmj2y7jdxlezxo.defaultedOf('movement', {
      mode: 'menu',
      moveOnTab: true
    }, $_2vagecyejdxlezzg.choose('mode', {
      grid: [
        $_d0ld34z6jdxlf03c.initSize(),
        $_d0ld34z6jdxlf03c.output('config', configureGrid)
      ],
      menu: [
        $_5jvmj2y7jdxlezxo.defaulted('moveOnTab', true),
        $_d0ld34z6jdxlf03c.output('config', configureMenu)
      ]
    })),
    $_d0ld34z6jdxlf03c.itemMarkers(),
    $_5jvmj2y7jdxlezxo.defaulted('fakeFocus', false),
    $_5jvmj2y7jdxlezxo.defaulted('focusManager', $_1lx0j9zrjdxlf07a.dom()),
    $_d0ld34z6jdxlf03c.onHandler('onHighlight')
  ];
  var $_4mq7d913bjdxlf0zn = {
    name: $_26xiiiwjjdxlezmo.constant('Menu'),
    schema: $_26xiiiwjjdxlezmo.constant(schema$13),
    parts: $_26xiiiwjjdxlezmo.constant(parts)
  };

  var focusEvent$1 = 'alloy.menu-focus';
  var $_8whfac13ijdxlf112 = { focus: $_26xiiiwjjdxlezmo.constant(focusEvent$1) };

  var make$2 = function (detail, components, spec, externals) {
    return $_dngveawyjdxlezp5.deepMerge({
      dom: $_dngveawyjdxlezp5.deepMerge(detail.dom(), { attributes: { role: 'menu' } }),
      uid: detail.uid(),
      behaviours: $_dngveawyjdxlezp5.deepMerge($_5tm9cmy2jdxlezw3.derive([
        Highlighting.config({
          highlightClass: detail.markers().selectedItem(),
          itemClass: detail.markers().item(),
          onHighlight: detail.onHighlight()
        }),
        me.config({
          store: {
            mode: 'memory',
            initialValue: detail.value()
          }
        }),
        Composing.config({ find: $_26xiiiwjjdxlezmo.identity }),
        Keying.config(detail.movement().config()(detail, detail.movement()))
      ]), $_32y64u10ojdxlf0d0.get(detail.menuBehaviours())),
      events: $_fpalyxy4jdxlezwy.derive([
        $_fpalyxy4jdxlezwy.run($_bdcxja13djdxlf103.focus(), function (menu, simulatedEvent) {
          var event = simulatedEvent.event();
          menu.getSystem().getByDom(event.target()).each(function (item) {
            Highlighting.highlight(menu, item);
            simulatedEvent.stop();
            $_7qvrqpwgjdxlezlj.emitWith(menu, $_8whfac13ijdxlf112.focus(), {
              menu: menu,
              item: item
            });
          });
        }),
        $_fpalyxy4jdxlezwy.run($_bdcxja13djdxlf103.hover(), function (menu, simulatedEvent) {
          var item = simulatedEvent.event().item();
          Highlighting.highlight(menu, item);
        })
      ]),
      components: components,
      eventOrder: detail.eventOrder()
    });
  };
  var $_5p9uu713hjdxlf10v = { make: make$2 };

  var Menu = $_e8py5t10pjdxlf0dc.composite({
    name: 'Menu',
    configFields: $_4mq7d913bjdxlf0zn.schema(),
    partFields: $_4mq7d913bjdxlf0zn.parts(),
    factory: $_5p9uu713hjdxlf10v.make
  });

  var preserve$2 = function (f, container) {
    var ownerDoc = $_s9ri4x3jdxlezpx.owner(container);
    var refocus = $_9am9mvytjdxlf01i.active(ownerDoc).bind(function (focused) {
      var hasFocus = function (elem) {
        return $_4u044dx9jdxlezqw.eq(focused, elem);
      };
      return hasFocus(container) ? Option.some(container) : $_6w4r10yvjdxlf01p.descendant(container, hasFocus);
    });
    var result = f(container);
    refocus.each(function (oldFocus) {
      $_9am9mvytjdxlf01i.active(ownerDoc).filter(function (newFocus) {
        return $_4u044dx9jdxlezqw.eq(newFocus, oldFocus);
      }).orThunk(function () {
        $_9am9mvytjdxlf01i.focus(oldFocus);
      });
    });
    return result;
  };
  var $_dgcsfe13mjdxlf11l = { preserve: preserve$2 };

  var set$7 = function (component, replaceConfig, replaceState, data) {
    $_fzj7dix1jdxlezpg.detachChildren(component);
    $_dgcsfe13mjdxlf11l.preserve(function () {
      var children = $_6dbxmwwsjdxleznr.map(data, component.getSystem().build);
      $_6dbxmwwsjdxleznr.each(children, function (l) {
        $_fzj7dix1jdxlezpg.attach(component, l);
      });
    }, component.element());
  };
  var insert = function (component, replaceConfig, insertion, childSpec) {
    var child = component.getSystem().build(childSpec);
    $_fzj7dix1jdxlezpg.attachWith(component, child, insertion);
  };
  var append$2 = function (component, replaceConfig, replaceState, appendee) {
    insert(component, replaceConfig, $_72vikbx2jdxlezpu.append, appendee);
  };
  var prepend$2 = function (component, replaceConfig, replaceState, prependee) {
    insert(component, replaceConfig, $_72vikbx2jdxlezpu.prepend, prependee);
  };
  var remove$7 = function (component, replaceConfig, replaceState, removee) {
    var children = contents(component, replaceConfig);
    var foundChild = $_6dbxmwwsjdxleznr.find(children, function (child) {
      return $_4u044dx9jdxlezqw.eq(removee.element(), child.element());
    });
    foundChild.each($_fzj7dix1jdxlezpg.detach);
  };
  var contents = function (component, replaceConfig) {
    return component.components();
  };
  var $_acca1x13ljdxlf11e = {
    append: append$2,
    prepend: prepend$2,
    remove: remove$7,
    set: set$7,
    contents: contents
  };

  var Replacing = $_5tm9cmy2jdxlezw3.create({
    fields: [],
    name: 'replacing',
    apis: $_acca1x13ljdxlf11e
  });

  var transpose = function (obj) {
    return $_8ih830x0jdxlezpa.tupleMap(obj, function (v, k) {
      return {
        k: v,
        v: k
      };
    });
  };
  var trace = function (items, byItem, byMenu, finish) {
    return $_ey6c2jxsjdxlezue.readOptFrom(byMenu, finish).bind(function (triggerItem) {
      return $_ey6c2jxsjdxlezue.readOptFrom(items, triggerItem).bind(function (triggerMenu) {
        var rest = trace(items, byItem, byMenu, triggerMenu);
        return Option.some([triggerMenu].concat(rest));
      });
    }).getOr([]);
  };
  var generate$5 = function (menus, expansions) {
    var items = {};
    $_8ih830x0jdxlezpa.each(menus, function (menuItems, menu) {
      $_6dbxmwwsjdxleznr.each(menuItems, function (item) {
        items[item] = menu;
      });
    });
    var byItem = expansions;
    var byMenu = transpose(expansions);
    var menuPaths = $_8ih830x0jdxlezpa.map(byMenu, function (triggerItem, submenu) {
      return [submenu].concat(trace(items, byItem, byMenu, submenu));
    });
    return $_8ih830x0jdxlezpa.map(items, function (path) {
      return $_ey6c2jxsjdxlezue.readOptFrom(menuPaths, path).getOr([path]);
    });
  };
  var $_60wkln13pjdxlf138 = { generate: generate$5 };

  function LayeredState () {
    var expansions = Cell({});
    var menus = Cell({});
    var paths = Cell({});
    var primary = Cell(Option.none());
    var toItemValues = Cell($_26xiiiwjjdxlezmo.constant([]));
    var clear = function () {
      expansions.set({});
      menus.set({});
      paths.set({});
      primary.set(Option.none());
    };
    var isClear = function () {
      return primary.get().isNone();
    };
    var setContents = function (sPrimary, sMenus, sExpansions, sToItemValues) {
      primary.set(Option.some(sPrimary));
      expansions.set(sExpansions);
      menus.set(sMenus);
      toItemValues.set(sToItemValues);
      var menuValues = sToItemValues(sMenus);
      var sPaths = $_60wkln13pjdxlf138.generate(menuValues, sExpansions);
      paths.set(sPaths);
    };
    var expand = function (itemValue) {
      return $_ey6c2jxsjdxlezue.readOptFrom(expansions.get(), itemValue).map(function (menu) {
        var current = $_ey6c2jxsjdxlezue.readOptFrom(paths.get(), itemValue).getOr([]);
        return [menu].concat(current);
      });
    };
    var collapse = function (itemValue) {
      return $_ey6c2jxsjdxlezue.readOptFrom(paths.get(), itemValue).bind(function (path) {
        return path.length > 1 ? Option.some(path.slice(1)) : Option.none();
      });
    };
    var refresh = function (itemValue) {
      return $_ey6c2jxsjdxlezue.readOptFrom(paths.get(), itemValue);
    };
    var lookupMenu = function (menuValue) {
      return $_ey6c2jxsjdxlezue.readOptFrom(menus.get(), menuValue);
    };
    var otherMenus = function (path) {
      var menuValues = toItemValues.get()(menus.get());
      return $_6dbxmwwsjdxleznr.difference($_8ih830x0jdxlezpa.keys(menuValues), path);
    };
    var getPrimary = function () {
      return primary.get().bind(lookupMenu);
    };
    var getMenus = function () {
      return menus.get();
    };
    return {
      setContents: setContents,
      expand: expand,
      refresh: refresh,
      collapse: collapse,
      lookupMenu: lookupMenu,
      otherMenus: otherMenus,
      getPrimary: getPrimary,
      getMenus: getMenus,
      clear: clear,
      isClear: isClear
    };
  }

  var make$3 = function (detail, rawUiSpec) {
    var buildMenus = function (container, menus) {
      return $_8ih830x0jdxlezpa.map(menus, function (spec, name) {
        var data = Menu.sketch($_dngveawyjdxlezp5.deepMerge(spec, {
          value: name,
          items: spec.items,
          markers: $_ey6c2jxsjdxlezue.narrow(rawUiSpec.markers, [
            'item',
            'selectedItem'
          ]),
          fakeFocus: detail.fakeFocus(),
          onHighlight: detail.onHighlight(),
          focusManager: detail.fakeFocus() ? $_1lx0j9zrjdxlf07a.highlights() : $_1lx0j9zrjdxlf07a.dom()
        }));
        return container.getSystem().build(data);
      });
    };
    var state = LayeredState();
    var setup = function (container) {
      var componentMap = buildMenus(container, detail.data().menus());
      state.setContents(detail.data().primary(), componentMap, detail.data().expansions(), function (sMenus) {
        return toMenuValues(container, sMenus);
      });
      return state.getPrimary();
    };
    var getItemValue = function (item) {
      return me.getValue(item).value;
    };
    var toMenuValues = function (container, sMenus) {
      return $_8ih830x0jdxlezpa.map(detail.data().menus(), function (data, menuName) {
        return $_6dbxmwwsjdxleznr.bind(data.items, function (item) {
          return item.type === 'separator' ? [] : [item.data.value];
        });
      });
    };
    var setActiveMenu = function (container, menu) {
      Highlighting.highlight(container, menu);
      Highlighting.getHighlighted(menu).orThunk(function () {
        return Highlighting.getFirst(menu);
      }).each(function (item) {
        $_7qvrqpwgjdxlezlj.dispatch(container, item.element(), $_7mziizwhjdxlezm8.focusItem());
      });
    };
    var getMenus = function (state, menuValues) {
      return $_dznnjvy0jdxlezvy.cat($_6dbxmwwsjdxleznr.map(menuValues, state.lookupMenu));
    };
    var updateMenuPath = function (container, state, path) {
      return Option.from(path[0]).bind(state.lookupMenu).map(function (activeMenu) {
        var rest = getMenus(state, path.slice(1));
        $_6dbxmwwsjdxleznr.each(rest, function (r) {
          $_79eveeynjdxlf012.add(r.element(), detail.markers().backgroundMenu());
        });
        if (!$_80u4ksxjjdxlezsm.inBody(activeMenu.element())) {
          Replacing.append(container, $_e0aoww12tjdxlf0uv.premade(activeMenu));
        }
        $_3io6wv137jdxlf0z7.remove(activeMenu.element(), [detail.markers().backgroundMenu()]);
        setActiveMenu(container, activeMenu);
        var others = getMenus(state, state.otherMenus(path));
        $_6dbxmwwsjdxleznr.each(others, function (o) {
          $_3io6wv137jdxlf0z7.remove(o.element(), [detail.markers().backgroundMenu()]);
          if (!detail.stayInDom())
            Replacing.remove(container, o);
        });
        return activeMenu;
      });
    };
    var expandRight = function (container, item) {
      var value = getItemValue(item);
      return state.expand(value).bind(function (path) {
        Option.from(path[0]).bind(state.lookupMenu).each(function (activeMenu) {
          if (!$_80u4ksxjjdxlezsm.inBody(activeMenu.element())) {
            Replacing.append(container, $_e0aoww12tjdxlf0uv.premade(activeMenu));
          }
          detail.onOpenSubmenu()(container, item, activeMenu);
          Highlighting.highlightFirst(activeMenu);
        });
        return updateMenuPath(container, state, path);
      });
    };
    var collapseLeft = function (container, item) {
      var value = getItemValue(item);
      return state.collapse(value).bind(function (path) {
        return updateMenuPath(container, state, path).map(function (activeMenu) {
          detail.onCollapseMenu()(container, item, activeMenu);
          return activeMenu;
        });
      });
    };
    var updateView = function (container, item) {
      var value = getItemValue(item);
      return state.refresh(value).bind(function (path) {
        return updateMenuPath(container, state, path);
      });
    };
    var onRight = function (container, item) {
      return $_agoibq108jdxlf09o.inside(item.element()) ? Option.none() : expandRight(container, item);
    };
    var onLeft = function (container, item) {
      return $_agoibq108jdxlf09o.inside(item.element()) ? Option.none() : collapseLeft(container, item);
    };
    var onEscape = function (container, item) {
      return collapseLeft(container, item).orThunk(function () {
        return detail.onEscape()(container, item);
      });
    };
    var keyOnItem = function (f) {
      return function (container, simulatedEvent) {
        return $_77tktczxjdxlf083.closest(simulatedEvent.getSource(), '.' + detail.markers().item()).bind(function (target) {
          return container.getSystem().getByDom(target).bind(function (item) {
            return f(container, item);
          });
        });
      };
    };
    var events = $_fpalyxy4jdxlezwy.derive([
      $_fpalyxy4jdxlezwy.run($_8whfac13ijdxlf112.focus(), function (sandbox, simulatedEvent) {
        var menu = simulatedEvent.event().menu();
        Highlighting.highlight(sandbox, menu);
      }),
      $_fpalyxy4jdxlezwy.runOnExecute(function (sandbox, simulatedEvent) {
        var target = simulatedEvent.event().target();
        return sandbox.getSystem().getByDom(target).bind(function (item) {
          var itemValue = getItemValue(item);
          if (itemValue.indexOf('collapse-item') === 0) {
            return collapseLeft(sandbox, item);
          }
          return expandRight(sandbox, item).orThunk(function () {
            return detail.onExecute()(sandbox, item);
          });
        });
      }),
      $_fpalyxy4jdxlezwy.runOnAttached(function (container, simulatedEvent) {
        setup(container).each(function (primary) {
          Replacing.append(container, $_e0aoww12tjdxlf0uv.premade(primary));
          if (detail.openImmediately()) {
            setActiveMenu(container, primary);
            detail.onOpenMenu()(container, primary);
          }
        });
      })
    ].concat(detail.navigateOnHover() ? [$_fpalyxy4jdxlezwy.run($_bdcxja13djdxlf103.hover(), function (sandbox, simulatedEvent) {
        var item = simulatedEvent.event().item();
        updateView(sandbox, item);
        expandRight(sandbox, item);
        detail.onHover()(sandbox, item);
      })] : []));
    var collapseMenuApi = function (container) {
      Highlighting.getHighlighted(container).each(function (currentMenu) {
        Highlighting.getHighlighted(currentMenu).each(function (currentItem) {
          collapseLeft(container, currentItem);
        });
      });
    };
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      behaviours: $_dngveawyjdxlezp5.deepMerge($_5tm9cmy2jdxlezw3.derive([
        Keying.config({
          mode: 'special',
          onRight: keyOnItem(onRight),
          onLeft: keyOnItem(onLeft),
          onEscape: keyOnItem(onEscape),
          focusIn: function (container, keyInfo) {
            state.getPrimary().each(function (primary) {
              $_7qvrqpwgjdxlezlj.dispatch(container, primary.element(), $_7mziizwhjdxlezm8.focusItem());
            });
          }
        }),
        Highlighting.config({
          highlightClass: detail.markers().selectedMenu(),
          itemClass: detail.markers().menu()
        }),
        Composing.config({
          find: function (container) {
            return Highlighting.getHighlighted(container);
          }
        }),
        Replacing.config({})
      ]), $_32y64u10ojdxlf0d0.get(detail.tmenuBehaviours())),
      eventOrder: detail.eventOrder(),
      apis: { collapseMenu: collapseMenuApi },
      events: events
    };
  };
  var $_g33dgk13njdxlf11w = {
    make: make$3,
    collapseItem: $_26xiiiwjjdxlezmo.constant('collapse-item')
  };

  var tieredData = function (primary, menus, expansions) {
    return {
      primary: primary,
      menus: menus,
      expansions: expansions
    };
  };
  var singleData = function (name, menu) {
    return {
      primary: name,
      menus: $_ey6c2jxsjdxlezue.wrap(name, menu),
      expansions: {}
    };
  };
  var collapseItem = function (text) {
    return {
      value: $_5a8g5a10rjdxlf0dt.generate($_g33dgk13njdxlf11w.collapseItem()),
      text: text
    };
  };
  var TieredMenu = $_e8py5t10pjdxlf0dc.single({
    name: 'TieredMenu',
    configFields: [
      $_d0ld34z6jdxlf03c.onStrictKeyboardHandler('onExecute'),
      $_d0ld34z6jdxlf03c.onStrictKeyboardHandler('onEscape'),
      $_d0ld34z6jdxlf03c.onStrictHandler('onOpenMenu'),
      $_d0ld34z6jdxlf03c.onStrictHandler('onOpenSubmenu'),
      $_d0ld34z6jdxlf03c.onHandler('onCollapseMenu'),
      $_5jvmj2y7jdxlezxo.defaulted('openImmediately', true),
      $_5jvmj2y7jdxlezxo.strictObjOf('data', [
        $_5jvmj2y7jdxlezxo.strict('primary'),
        $_5jvmj2y7jdxlezxo.strict('menus'),
        $_5jvmj2y7jdxlezxo.strict('expansions')
      ]),
      $_5jvmj2y7jdxlezxo.defaulted('fakeFocus', false),
      $_d0ld34z6jdxlf03c.onHandler('onHighlight'),
      $_d0ld34z6jdxlf03c.onHandler('onHover'),
      $_d0ld34z6jdxlf03c.tieredMenuMarkers(),
      $_5jvmj2y7jdxlezxo.strict('dom'),
      $_5jvmj2y7jdxlezxo.defaulted('navigateOnHover', true),
      $_5jvmj2y7jdxlezxo.defaulted('stayInDom', false),
      $_32y64u10ojdxlf0d0.field('tmenuBehaviours', [
        Keying,
        Highlighting,
        Composing,
        Replacing
      ]),
      $_5jvmj2y7jdxlezxo.defaulted('eventOrder', {})
    ],
    apis: {
      collapseMenu: function (apis, tmenu) {
        apis.collapseMenu(tmenu);
      }
    },
    factory: $_g33dgk13njdxlf11w.make,
    extraApis: {
      tieredData: tieredData,
      singleData: singleData,
      collapseItem: collapseItem
    }
  });

  var findRoute = function (component, transConfig, transState, route) {
    return $_ey6c2jxsjdxlezue.readOptFrom(transConfig.routes(), route.start()).map($_26xiiiwjjdxlezmo.apply).bind(function (sConfig) {
      return $_ey6c2jxsjdxlezue.readOptFrom(sConfig, route.destination()).map($_26xiiiwjjdxlezmo.apply);
    });
  };
  var getTransition = function (comp, transConfig, transState) {
    var route = getCurrentRoute(comp, transConfig, transState);
    return route.bind(function (r) {
      return getTransitionOf(comp, transConfig, transState, r);
    });
  };
  var getTransitionOf = function (comp, transConfig, transState, route) {
    return findRoute(comp, transConfig, transState, route).bind(function (r) {
      return r.transition().map(function (t) {
        return {
          transition: $_26xiiiwjjdxlezmo.constant(t),
          route: $_26xiiiwjjdxlezmo.constant(r)
        };
      });
    });
  };
  var disableTransition = function (comp, transConfig, transState) {
    getTransition(comp, transConfig, transState).each(function (routeTransition) {
      var t = routeTransition.transition();
      $_79eveeynjdxlf012.remove(comp.element(), t.transitionClass());
      $_72a1mgxrjdxlezu3.remove(comp.element(), transConfig.destinationAttr());
    });
  };
  var getNewRoute = function (comp, transConfig, transState, destination) {
    return {
      start: $_26xiiiwjjdxlezmo.constant($_72a1mgxrjdxlezu3.get(comp.element(), transConfig.stateAttr())),
      destination: $_26xiiiwjjdxlezmo.constant(destination)
    };
  };
  var getCurrentRoute = function (comp, transConfig, transState) {
    var el = comp.element();
    return $_72a1mgxrjdxlezu3.has(el, transConfig.destinationAttr()) ? Option.some({
      start: $_26xiiiwjjdxlezmo.constant($_72a1mgxrjdxlezu3.get(comp.element(), transConfig.stateAttr())),
      destination: $_26xiiiwjjdxlezmo.constant($_72a1mgxrjdxlezu3.get(comp.element(), transConfig.destinationAttr()))
    }) : Option.none();
  };
  var jumpTo = function (comp, transConfig, transState, destination) {
    disableTransition(comp, transConfig, transState);
    if ($_72a1mgxrjdxlezu3.has(comp.element(), transConfig.stateAttr()) && $_72a1mgxrjdxlezu3.get(comp.element(), transConfig.stateAttr()) !== destination)
      transConfig.onFinish()(comp, destination);
    $_72a1mgxrjdxlezu3.set(comp.element(), transConfig.stateAttr(), destination);
  };
  var fasttrack = function (comp, transConfig, transState, destination) {
    if ($_72a1mgxrjdxlezu3.has(comp.element(), transConfig.destinationAttr())) {
      $_72a1mgxrjdxlezu3.set(comp.element(), transConfig.stateAttr(), $_72a1mgxrjdxlezu3.get(comp.element(), transConfig.destinationAttr()));
      $_72a1mgxrjdxlezu3.remove(comp.element(), transConfig.destinationAttr());
    }
  };
  var progressTo = function (comp, transConfig, transState, destination) {
    fasttrack(comp, transConfig, transState, destination);
    var route = getNewRoute(comp, transConfig, transState, destination);
    getTransitionOf(comp, transConfig, transState, route).fold(function () {
      jumpTo(comp, transConfig, transState, destination);
    }, function (routeTransition) {
      disableTransition(comp, transConfig, transState);
      var t = routeTransition.transition();
      $_79eveeynjdxlf012.add(comp.element(), t.transitionClass());
      $_72a1mgxrjdxlezu3.set(comp.element(), transConfig.destinationAttr(), destination);
    });
  };
  var getState = function (comp, transConfig, transState) {
    var e = comp.element();
    return $_72a1mgxrjdxlezu3.has(e, transConfig.stateAttr()) ? Option.some($_72a1mgxrjdxlezu3.get(e, transConfig.stateAttr())) : Option.none();
  };
  var $_52orkn13sjdxlf13w = {
    findRoute: findRoute,
    disableTransition: disableTransition,
    getCurrentRoute: getCurrentRoute,
    jumpTo: jumpTo,
    progressTo: progressTo,
    getState: getState
  };

  var events$8 = function (transConfig, transState) {
    return $_fpalyxy4jdxlezwy.derive([
      $_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.transitionend(), function (component, simulatedEvent) {
        var raw = simulatedEvent.event().raw();
        $_52orkn13sjdxlf13w.getCurrentRoute(component, transConfig, transState).each(function (route) {
          $_52orkn13sjdxlf13w.findRoute(component, transConfig, transState, route).each(function (rInfo) {
            rInfo.transition().each(function (rTransition) {
              if (raw.propertyName === rTransition.property()) {
                $_52orkn13sjdxlf13w.jumpTo(component, transConfig, transState, route.destination());
                transConfig.onTransition()(component, route);
              }
            });
          });
        });
      }),
      $_fpalyxy4jdxlezwy.runOnAttached(function (comp, se) {
        $_52orkn13sjdxlf13w.jumpTo(comp, transConfig, transState, transConfig.initialState());
      })
    ]);
  };
  var $_8w5dav13rjdxlf13r = { events: events$8 };

  var TransitionSchema = [
    $_5jvmj2y7jdxlezxo.defaulted('destinationAttr', 'data-transitioning-destination'),
    $_5jvmj2y7jdxlezxo.defaulted('stateAttr', 'data-transitioning-state'),
    $_5jvmj2y7jdxlezxo.strict('initialState'),
    $_d0ld34z6jdxlf03c.onHandler('onTransition'),
    $_d0ld34z6jdxlf03c.onHandler('onFinish'),
    $_5jvmj2y7jdxlezxo.strictOf('routes', $_2vagecyejdxlezzg.setOf(Result.value, $_2vagecyejdxlezzg.setOf(Result.value, $_2vagecyejdxlezzg.objOfOnly([$_5jvmj2y7jdxlezxo.optionObjOfOnly('transition', [
        $_5jvmj2y7jdxlezxo.strict('property'),
        $_5jvmj2y7jdxlezxo.strict('transitionClass')
      ])]))))
  ];

  var createRoutes = function (routes) {
    var r = {};
    $_8ih830x0jdxlezpa.each(routes, function (v, k) {
      var waypoints = k.split('<->');
      r[waypoints[0]] = $_ey6c2jxsjdxlezue.wrap(waypoints[1], v);
      r[waypoints[1]] = $_ey6c2jxsjdxlezue.wrap(waypoints[0], v);
    });
    return r;
  };
  var createBistate = function (first, second, transitions) {
    return $_ey6c2jxsjdxlezue.wrapAll([
      {
        key: first,
        value: $_ey6c2jxsjdxlezue.wrap(second, transitions)
      },
      {
        key: second,
        value: $_ey6c2jxsjdxlezue.wrap(first, transitions)
      }
    ]);
  };
  var createTristate = function (first, second, third, transitions) {
    return $_ey6c2jxsjdxlezue.wrapAll([
      {
        key: first,
        value: $_ey6c2jxsjdxlezue.wrapAll([
          {
            key: second,
            value: transitions
          },
          {
            key: third,
            value: transitions
          }
        ])
      },
      {
        key: second,
        value: $_ey6c2jxsjdxlezue.wrapAll([
          {
            key: first,
            value: transitions
          },
          {
            key: third,
            value: transitions
          }
        ])
      },
      {
        key: third,
        value: $_ey6c2jxsjdxlezue.wrapAll([
          {
            key: first,
            value: transitions
          },
          {
            key: second,
            value: transitions
          }
        ])
      }
    ]);
  };
  var Transitioning = $_5tm9cmy2jdxlezw3.create({
    fields: TransitionSchema,
    name: 'transitioning',
    active: $_8w5dav13rjdxlf13r,
    apis: $_52orkn13sjdxlf13w,
    extra: {
      createRoutes: createRoutes,
      createBistate: createBistate,
      createTristate: createTristate
    }
  });

  var scrollable = $_6pb5xszejdxlf051.resolve('scrollable');
  var register = function (element) {
    $_79eveeynjdxlf012.add(element, scrollable);
  };
  var deregister = function (element) {
    $_79eveeynjdxlf012.remove(element, scrollable);
  };
  var $_3zipxj13ujdxlf14h = {
    register: register,
    deregister: deregister,
    scrollable: $_26xiiiwjjdxlezmo.constant(scrollable)
  };

  var getValue$4 = function (item) {
    return $_ey6c2jxsjdxlezue.readOptFrom(item, 'format').getOr(item.title);
  };
  var convert$1 = function (formats, memMenuThunk) {
    var mainMenu = makeMenu('Styles', [].concat($_6dbxmwwsjdxleznr.map(formats.items, function (k) {
      return makeItem(getValue$4(k), k.title, k.isSelected(), k.getPreview(), $_ey6c2jxsjdxlezue.hasKey(formats.expansions, getValue$4(k)));
    })), memMenuThunk, false);
    var submenus = $_8ih830x0jdxlezpa.map(formats.menus, function (menuItems, menuName) {
      var items = $_6dbxmwwsjdxleznr.map(menuItems, function (item) {
        return makeItem(getValue$4(item), item.title, item.isSelected !== undefined ? item.isSelected() : false, item.getPreview !== undefined ? item.getPreview() : '', $_ey6c2jxsjdxlezue.hasKey(formats.expansions, getValue$4(item)));
      });
      return makeMenu(menuName, items, memMenuThunk, true);
    });
    var menus = $_dngveawyjdxlezp5.deepMerge(submenus, $_ey6c2jxsjdxlezue.wrap('styles', mainMenu));
    var tmenu = TieredMenu.tieredData('styles', menus, formats.expansions);
    return { tmenu: tmenu };
  };
  var makeItem = function (value, text, selected, preview, isMenu) {
    return {
      data: {
        value: value,
        text: text
      },
      type: 'item',
      dom: {
        tag: 'div',
        classes: isMenu ? [$_6pb5xszejdxlf051.resolve('styles-item-is-menu')] : []
      },
      toggling: {
        toggleOnExecute: false,
        toggleClass: $_6pb5xszejdxlf051.resolve('format-matches'),
        selected: selected
      },
      itemBehaviours: $_5tm9cmy2jdxlezw3.derive(isMenu ? [] : [$_2qdoh4zdjdxlf04x.format(value, function (comp, status) {
          var toggle = status ? Toggling.on : Toggling.off;
          toggle(comp);
        })]),
      components: [{
          dom: {
            tag: 'div',
            attributes: { style: preview },
            innerHtml: text
          }
        }]
    };
  };
  var makeMenu = function (value, items, memMenuThunk, collapsable) {
    return {
      value: value,
      dom: { tag: 'div' },
      components: [
        Button.sketch({
          dom: {
            tag: 'div',
            classes: [$_6pb5xszejdxlf051.resolve('styles-collapser')]
          },
          components: collapsable ? [
            {
              dom: {
                tag: 'span',
                classes: [$_6pb5xszejdxlf051.resolve('styles-collapse-icon')]
              }
            },
            $_e0aoww12tjdxlf0uv.text(value)
          ] : [$_e0aoww12tjdxlf0uv.text(value)],
          action: function (item) {
            if (collapsable) {
              var comp = memMenuThunk().get(item);
              TieredMenu.collapseMenu(comp);
            }
          }
        }),
        {
          dom: {
            tag: 'div',
            classes: [$_6pb5xszejdxlf051.resolve('styles-menu-items-container')]
          },
          components: [Menu.parts().items({})],
          behaviours: $_5tm9cmy2jdxlezw3.derive([$_940p5d126jdxlf0og.config('adhoc-scrollable-menu', [
              $_fpalyxy4jdxlezwy.runOnAttached(function (component, simulatedEvent) {
                $_99zvvg103jdxlf08t.set(component.element(), 'overflow-y', 'auto');
                $_99zvvg103jdxlf08t.set(component.element(), '-webkit-overflow-scrolling', 'touch');
                $_3zipxj13ujdxlf14h.register(component.element());
              }),
              $_fpalyxy4jdxlezwy.runOnDetached(function (component) {
                $_99zvvg103jdxlf08t.remove(component.element(), 'overflow-y');
                $_99zvvg103jdxlf08t.remove(component.element(), '-webkit-overflow-scrolling');
                $_3zipxj13ujdxlf14h.deregister(component.element());
              })
            ])])
        }
      ],
      items: items,
      menuBehaviours: $_5tm9cmy2jdxlezw3.derive([Transitioning.config({
          initialState: 'after',
          routes: Transitioning.createTristate('before', 'current', 'after', {
            transition: {
              property: 'transform',
              transitionClass: 'transitioning'
            }
          })
        })])
    };
  };
  var sketch$9 = function (settings) {
    var dataset = convert$1(settings.formats, function () {
      return memMenu;
    });
    var memMenu = $_g4pwn311rjdxlf0lb.record(TieredMenu.sketch({
      dom: {
        tag: 'div',
        classes: [$_6pb5xszejdxlf051.resolve('styles-menu')]
      },
      components: [],
      fakeFocus: true,
      stayInDom: true,
      onExecute: function (tmenu, item) {
        var v = me.getValue(item);
        settings.handle(item, v.value);
      },
      onEscape: function () {
      },
      onOpenMenu: function (container, menu) {
        var w = $_3s6gko11kjdxlf0jx.get(container.element());
        $_3s6gko11kjdxlf0jx.set(menu.element(), w);
        Transitioning.jumpTo(menu, 'current');
      },
      onOpenSubmenu: function (container, item, submenu) {
        var w = $_3s6gko11kjdxlf0jx.get(container.element());
        var menu = $_77tktczxjdxlf083.ancestor(item.element(), '[role="menu"]').getOrDie('hacky');
        var menuComp = container.getSystem().getByDom(menu).getOrDie();
        $_3s6gko11kjdxlf0jx.set(submenu.element(), w);
        Transitioning.progressTo(menuComp, 'before');
        Transitioning.jumpTo(submenu, 'after');
        Transitioning.progressTo(submenu, 'current');
      },
      onCollapseMenu: function (container, item, menu) {
        var submenu = $_77tktczxjdxlf083.ancestor(item.element(), '[role="menu"]').getOrDie('hacky');
        var submenuComp = container.getSystem().getByDom(submenu).getOrDie();
        Transitioning.progressTo(submenuComp, 'after');
        Transitioning.progressTo(menu, 'current');
      },
      navigateOnHover: false,
      openImmediately: true,
      data: dataset.tmenu,
      markers: {
        backgroundMenu: $_6pb5xszejdxlf051.resolve('styles-background-menu'),
        menu: $_6pb5xszejdxlf051.resolve('styles-menu'),
        selectedMenu: $_6pb5xszejdxlf051.resolve('styles-selected-menu'),
        item: $_6pb5xszejdxlf051.resolve('styles-item'),
        selectedItem: $_6pb5xszejdxlf051.resolve('styles-selected-item')
      }
    }));
    return memMenu.asSpec();
  };
  var $_bvkz1q12sjdxlf0u2 = { sketch: sketch$9 };

  var getFromExpandingItem = function (item) {
    var newItem = $_dngveawyjdxlezp5.deepMerge($_ey6c2jxsjdxlezue.exclude(item, ['items']), { menu: true });
    var rest = expand(item.items);
    var newMenus = $_dngveawyjdxlezp5.deepMerge(rest.menus, $_ey6c2jxsjdxlezue.wrap(item.title, rest.items));
    var newExpansions = $_dngveawyjdxlezp5.deepMerge(rest.expansions, $_ey6c2jxsjdxlezue.wrap(item.title, item.title));
    return {
      item: newItem,
      menus: newMenus,
      expansions: newExpansions
    };
  };
  var getFromItem = function (item) {
    return $_ey6c2jxsjdxlezue.hasKey(item, 'items') ? getFromExpandingItem(item) : {
      item: item,
      menus: {},
      expansions: {}
    };
  };
  var expand = function (items) {
    return $_6dbxmwwsjdxleznr.foldr(items, function (acc, item) {
      var newData = getFromItem(item);
      return {
        menus: $_dngveawyjdxlezp5.deepMerge(acc.menus, newData.menus),
        items: [newData.item].concat(acc.items),
        expansions: $_dngveawyjdxlezp5.deepMerge(acc.expansions, newData.expansions)
      };
    }, {
      menus: {},
      expansions: {},
      items: []
    });
  };
  var $_3tjgq813vjdxlf14l = { expand: expand };

  var register$1 = function (editor, settings) {
    var isSelectedFor = function (format) {
      return function () {
        return editor.formatter.match(format);
      };
    };
    var getPreview = function (format) {
      return function () {
        var styles = editor.formatter.getCssText(format);
        return styles;
      };
    };
    var enrichSupported = function (item) {
      return $_dngveawyjdxlezp5.deepMerge(item, {
        isSelected: isSelectedFor(item.format),
        getPreview: getPreview(item.format)
      });
    };
    var enrichMenu = function (item) {
      return $_dngveawyjdxlezp5.deepMerge(item, {
        isSelected: $_26xiiiwjjdxlezmo.constant(false),
        getPreview: $_26xiiiwjjdxlezmo.constant('')
      });
    };
    var enrichCustom = function (item) {
      var formatName = $_5a8g5a10rjdxlf0dt.generate(item.title);
      var newItem = $_dngveawyjdxlezp5.deepMerge(item, {
        format: formatName,
        isSelected: isSelectedFor(formatName),
        getPreview: getPreview(formatName)
      });
      editor.formatter.register(formatName, newItem);
      return newItem;
    };
    var formats = $_ey6c2jxsjdxlezue.readOptFrom(settings, 'style_formats').getOr(DefaultStyleFormats);
    var doEnrich = function (items) {
      return $_6dbxmwwsjdxleznr.map(items, function (item) {
        if ($_ey6c2jxsjdxlezue.hasKey(item, 'items')) {
          var newItems = doEnrich(item.items);
          return $_dngveawyjdxlezp5.deepMerge(enrichMenu(item), { items: newItems });
        } else if ($_ey6c2jxsjdxlezue.hasKey(item, 'format')) {
          return enrichSupported(item);
        } else {
          return enrichCustom(item);
        }
      });
    };
    return doEnrich(formats);
  };
  var prune = function (editor, formats) {
    var doPrune = function (items) {
      return $_6dbxmwwsjdxleznr.bind(items, function (item) {
        if (item.items !== undefined) {
          var newItems = doPrune(item.items);
          return newItems.length > 0 ? [item] : [];
        } else {
          var keep = $_ey6c2jxsjdxlezue.hasKey(item, 'format') ? editor.formatter.canApply(item.format) : true;
          return keep ? [item] : [];
        }
      });
    };
    var prunedItems = doPrune(formats);
    return $_3tjgq813vjdxlf14l.expand(prunedItems);
  };
  var ui = function (editor, formats, onDone) {
    var pruned = prune(editor, formats);
    return $_bvkz1q12sjdxlf0u2.sketch({
      formats: pruned,
      handle: function (item, value) {
        editor.undoManager.transact(function () {
          if (Toggling.isOn(item)) {
            editor.formatter.remove(value);
          } else {
            editor.formatter.apply(value);
          }
        });
        onDone();
      }
    });
  };
  var $_atgebw12qjdxlf0tn = {
    register: register$1,
    ui: ui
  };

  var defaults = [
    'undo',
    'bold',
    'italic',
    'link',
    'image',
    'bullist',
    'styleselect'
  ];
  var extract$1 = function (rawToolbar) {
    var toolbar = rawToolbar.replace(/\|/g, ' ').trim();
    return toolbar.length > 0 ? toolbar.split(/\s+/) : [];
  };
  var identifyFromArray = function (toolbar) {
    return $_6dbxmwwsjdxleznr.bind(toolbar, function (item) {
      return $_9wk4wvwzjdxlezp8.isArray(item) ? identifyFromArray(item) : extract$1(item);
    });
  };
  var identify = function (settings) {
    var toolbar = settings.toolbar !== undefined ? settings.toolbar : defaults;
    return $_9wk4wvwzjdxlezp8.isArray(toolbar) ? identifyFromArray(toolbar) : extract$1(toolbar);
  };
  var setup = function (realm, editor) {
    var commandSketch = function (name) {
      return function () {
        return $_50h76zfjdxlf054.forToolbarCommand(editor, name);
      };
    };
    var stateCommandSketch = function (name) {
      return function () {
        return $_50h76zfjdxlf054.forToolbarStateCommand(editor, name);
      };
    };
    var actionSketch = function (name, query, action) {
      return function () {
        return $_50h76zfjdxlf054.forToolbarStateAction(editor, name, query, action);
      };
    };
    var undo = commandSketch('undo');
    var redo = commandSketch('redo');
    var bold = stateCommandSketch('bold');
    var italic = stateCommandSketch('italic');
    var underline = stateCommandSketch('underline');
    var removeformat = commandSketch('removeformat');
    var link = function () {
      return $_6q8b79121jdxlf0ml.sketch(realm, editor);
    };
    var unlink = actionSketch('unlink', 'link', function () {
      editor.execCommand('unlink', null, false);
    });
    var image = function () {
      return $_57prxg11qjdxlf0kz.sketch(editor);
    };
    var bullist = actionSketch('unordered-list', 'ul', function () {
      editor.execCommand('InsertUnorderedList', null, false);
    });
    var numlist = actionSketch('ordered-list', 'ol', function () {
      editor.execCommand('InsertOrderedList', null, false);
    });
    var fontsizeselect = function () {
      return $_dvehm011mjdxlf0k5.sketch(realm, editor);
    };
    var forecolor = function () {
      return $_5voend115jdxlf0hb.sketch(realm, editor);
    };
    var styleFormats = $_atgebw12qjdxlf0tn.register(editor, editor.settings);
    var styleFormatsMenu = function () {
      return $_atgebw12qjdxlf0tn.ui(editor, styleFormats, function () {
        editor.fire('scrollIntoView');
      });
    };
    var styleselect = function () {
      return $_50h76zfjdxlf054.forToolbar('style-formats', function (button) {
        editor.fire('toReading');
        realm.dropup().appear(styleFormatsMenu, Toggling.on, button);
      }, $_5tm9cmy2jdxlezw3.derive([
        Toggling.config({
          toggleClass: $_6pb5xszejdxlf051.resolve('toolbar-button-selected'),
          toggleOnExecute: false,
          aria: { mode: 'pressed' }
        }),
        Receiving.config({
          channels: $_ey6c2jxsjdxlezue.wrapAll([
            $_2qdoh4zdjdxlf04x.receive($_62vx58z1jdxlf026.orientationChanged(), Toggling.off),
            $_2qdoh4zdjdxlf04x.receive($_62vx58z1jdxlf026.dropupDismissed(), Toggling.off)
          ])
        })
      ]));
    };
    var feature = function (prereq, sketch) {
      return {
        isSupported: function () {
          return prereq.forall(function (p) {
            return $_ey6c2jxsjdxlezue.hasKey(editor.buttons, p);
          });
        },
        sketch: sketch
      };
    };
    return {
      undo: feature(Option.none(), undo),
      redo: feature(Option.none(), redo),
      bold: feature(Option.none(), bold),
      italic: feature(Option.none(), italic),
      underline: feature(Option.none(), underline),
      removeformat: feature(Option.none(), removeformat),
      link: feature(Option.none(), link),
      unlink: feature(Option.none(), unlink),
      image: feature(Option.none(), image),
      bullist: feature(Option.some('bullist'), bullist),
      numlist: feature(Option.some('numlist'), numlist),
      fontsizeselect: feature(Option.none(), fontsizeselect),
      forecolor: feature(Option.none(), forecolor),
      styleselect: feature(Option.none(), styleselect)
    };
  };
  var detect$4 = function (settings, features) {
    var itemNames = identify(settings);
    var present = {};
    return $_6dbxmwwsjdxleznr.bind(itemNames, function (iName) {
      var r = !$_ey6c2jxsjdxlezue.hasKey(present, iName) && $_ey6c2jxsjdxlezue.hasKey(features, iName) && features[iName].isSupported() ? [features[iName].sketch()] : [];
      present[iName] = true;
      return r;
    });
  };
  var $_a5ksjgz2jdxlf02b = {
    identify: identify,
    setup: setup,
    detect: detect$4
  };

  var mkEvent = function (target, x, y, stop, prevent, kill, raw) {
    return {
      'target': $_26xiiiwjjdxlezmo.constant(target),
      'x': $_26xiiiwjjdxlezmo.constant(x),
      'y': $_26xiiiwjjdxlezmo.constant(y),
      'stop': stop,
      'prevent': prevent,
      'kill': kill,
      'raw': $_26xiiiwjjdxlezmo.constant(raw)
    };
  };
  var handle = function (filter, handler) {
    return function (rawEvent) {
      if (!filter(rawEvent))
        return;
      var target = $_2ejbh1xfjdxlezs6.fromDom(rawEvent.target);
      var stop = function () {
        rawEvent.stopPropagation();
      };
      var prevent = function () {
        rawEvent.preventDefault();
      };
      var kill = $_26xiiiwjjdxlezmo.compose(prevent, stop);
      var evt = mkEvent(target, rawEvent.clientX, rawEvent.clientY, stop, prevent, kill, rawEvent);
      handler(evt);
    };
  };
  var binder = function (element, event, filter, handler, useCapture) {
    var wrapped = handle(filter, handler);
    element.dom().addEventListener(event, wrapped, useCapture);
    return { unbind: $_26xiiiwjjdxlezmo.curry(unbind, element, event, wrapped, useCapture) };
  };
  var bind$1 = function (element, event, filter, handler) {
    return binder(element, event, filter, handler, false);
  };
  var capture = function (element, event, filter, handler) {
    return binder(element, event, filter, handler, true);
  };
  var unbind = function (element, event, handler, useCapture) {
    element.dom().removeEventListener(event, handler, useCapture);
  };
  var $_b905y313yjdxlf154 = {
    bind: bind$1,
    capture: capture
  };

  var filter$1 = $_26xiiiwjjdxlezmo.constant(true);
  var bind$2 = function (element, event, handler) {
    return $_b905y313yjdxlf154.bind(element, event, filter$1, handler);
  };
  var capture$1 = function (element, event, handler) {
    return $_b905y313yjdxlf154.capture(element, event, filter$1, handler);
  };
  var $_9icj6013xjdxlf151 = {
    bind: bind$2,
    capture: capture$1
  };

  var INTERVAL = 50;
  var INSURANCE = 1000 / INTERVAL;
  var get$11 = function (outerWindow) {
    var isPortrait = outerWindow.matchMedia('(orientation: portrait)').matches;
    return { isPortrait: $_26xiiiwjjdxlezmo.constant(isPortrait) };
  };
  var getActualWidth = function (outerWindow) {
    var isIos = $_g8mzcxwkjdxlezmu.detect().os.isiOS();
    var isPortrait = get$11(outerWindow).isPortrait();
    return isIos && !isPortrait ? outerWindow.screen.height : outerWindow.screen.width;
  };
  var onChange = function (outerWindow, listeners) {
    var win = $_2ejbh1xfjdxlezs6.fromDom(outerWindow);
    var poller = null;
    var change = function () {
      clearInterval(poller);
      var orientation = get$11(outerWindow);
      listeners.onChange(orientation);
      onAdjustment(function () {
        listeners.onReady(orientation);
      });
    };
    var orientationHandle = $_9icj6013xjdxlf151.bind(win, 'orientationchange', change);
    var onAdjustment = function (f) {
      clearInterval(poller);
      var flag = outerWindow.innerHeight;
      var insurance = 0;
      poller = setInterval(function () {
        if (flag !== outerWindow.innerHeight) {
          clearInterval(poller);
          f(Option.some(outerWindow.innerHeight));
        } else if (insurance > INSURANCE) {
          clearInterval(poller);
          f(Option.none());
        }
        insurance++;
      }, INTERVAL);
    };
    var destroy = function () {
      orientationHandle.unbind();
    };
    return {
      onAdjustment: onAdjustment,
      destroy: destroy
    };
  };
  var $_8343fs13wjdxlf14s = {
    get: get$11,
    onChange: onChange,
    getActualWidth: getActualWidth
  };

  function DelayedFunction (fun, delay) {
    var ref = null;
    var schedule = function () {
      var args = arguments;
      ref = setTimeout(function () {
        fun.apply(null, args);
        ref = null;
      }, delay);
    };
    var cancel = function () {
      if (ref !== null) {
        clearTimeout(ref);
        ref = null;
      }
    };
    return {
      cancel: cancel,
      schedule: schedule
    };
  }

  var SIGNIFICANT_MOVE = 5;
  var LONGPRESS_DELAY = 400;
  var getTouch = function (event) {
    if (event.raw().touches === undefined || event.raw().touches.length !== 1)
      return Option.none();
    return Option.some(event.raw().touches[0]);
  };
  var isFarEnough = function (touch, data) {
    var distX = Math.abs(touch.clientX - data.x());
    var distY = Math.abs(touch.clientY - data.y());
    return distX > SIGNIFICANT_MOVE || distY > SIGNIFICANT_MOVE;
  };
  var monitor = function (settings) {
    var startData = Cell(Option.none());
    var longpress = DelayedFunction(function (event) {
      startData.set(Option.none());
      settings.triggerEvent($_7mziizwhjdxlezm8.longpress(), event);
    }, LONGPRESS_DELAY);
    var handleTouchstart = function (event) {
      getTouch(event).each(function (touch) {
        longpress.cancel();
        var data = {
          x: $_26xiiiwjjdxlezmo.constant(touch.clientX),
          y: $_26xiiiwjjdxlezmo.constant(touch.clientY),
          target: event.target
        };
        longpress.schedule(data);
        startData.set(Option.some(data));
      });
      return Option.none();
    };
    var handleTouchmove = function (event) {
      longpress.cancel();
      getTouch(event).each(function (touch) {
        startData.get().each(function (data) {
          if (isFarEnough(touch, data))
            startData.set(Option.none());
        });
      });
      return Option.none();
    };
    var handleTouchend = function (event) {
      longpress.cancel();
      var isSame = function (data) {
        return $_4u044dx9jdxlezqw.eq(data.target(), event.target());
      };
      return startData.get().filter(isSame).map(function (data) {
        return settings.triggerEvent($_7mziizwhjdxlezm8.tap(), event);
      });
    };
    var handlers = $_ey6c2jxsjdxlezue.wrapAll([
      {
        key: $_f2g7alwijdxlezmh.touchstart(),
        value: handleTouchstart
      },
      {
        key: $_f2g7alwijdxlezmh.touchmove(),
        value: handleTouchmove
      },
      {
        key: $_f2g7alwijdxlezmh.touchend(),
        value: handleTouchend
      }
    ]);
    var fireIfReady = function (event, type) {
      return $_ey6c2jxsjdxlezue.readOptFrom(handlers, type).bind(function (handler) {
        return handler(event);
      });
    };
    return { fireIfReady: fireIfReady };
  };
  var $_917ttr144jdxlf16i = { monitor: monitor };

  var monitor$1 = function (editorApi) {
    var tapEvent = $_917ttr144jdxlf16i.monitor({
      triggerEvent: function (type, evt) {
        editorApi.onTapContent(evt);
      }
    });
    var onTouchend = function () {
      return $_9icj6013xjdxlf151.bind(editorApi.body(), 'touchend', function (evt) {
        tapEvent.fireIfReady(evt, 'touchend');
      });
    };
    var onTouchmove = function () {
      return $_9icj6013xjdxlf151.bind(editorApi.body(), 'touchmove', function (evt) {
        tapEvent.fireIfReady(evt, 'touchmove');
      });
    };
    var fireTouchstart = function (evt) {
      tapEvent.fireIfReady(evt, 'touchstart');
    };
    return {
      fireTouchstart: fireTouchstart,
      onTouchend: onTouchend,
      onTouchmove: onTouchmove
    };
  };
  var $_uxhzn143jdxlf16d = { monitor: monitor$1 };

  var isAndroid6 = $_g8mzcxwkjdxlezmu.detect().os.version.major >= 6;
  var initEvents = function (editorApi, toolstrip, alloy) {
    var tapping = $_uxhzn143jdxlf16d.monitor(editorApi);
    var outerDoc = $_s9ri4x3jdxlezpx.owner(toolstrip);
    var isRanged = function (sel) {
      return !$_4u044dx9jdxlezqw.eq(sel.start(), sel.finish()) || sel.soffset() !== sel.foffset();
    };
    var hasRangeInUi = function () {
      return $_9am9mvytjdxlf01i.active(outerDoc).filter(function (input) {
        return $_xp48txkjdxlezsr.name(input) === 'input';
      }).exists(function (input) {
        return input.dom().selectionStart !== input.dom().selectionEnd;
      });
    };
    var updateMargin = function () {
      var rangeInContent = editorApi.doc().dom().hasFocus() && editorApi.getSelection().exists(isRanged);
      alloy.getByDom(toolstrip).each((rangeInContent || hasRangeInUi()) === true ? Toggling.on : Toggling.off);
    };
    var listeners = [
      $_9icj6013xjdxlf151.bind(editorApi.body(), 'touchstart', function (evt) {
        editorApi.onTouchContent();
        tapping.fireTouchstart(evt);
      }),
      tapping.onTouchmove(),
      tapping.onTouchend(),
      $_9icj6013xjdxlf151.bind(toolstrip, 'touchstart', function (evt) {
        editorApi.onTouchToolstrip();
      }),
      editorApi.onToReading(function () {
        $_9am9mvytjdxlf01i.blur(editorApi.body());
      }),
      editorApi.onToEditing($_26xiiiwjjdxlezmo.noop),
      editorApi.onScrollToCursor(function (tinyEvent) {
        tinyEvent.preventDefault();
        editorApi.getCursorBox().each(function (bounds) {
          var cWin = editorApi.win();
          var isOutside = bounds.top() > cWin.innerHeight || bounds.bottom() > cWin.innerHeight;
          var cScrollBy = isOutside ? bounds.bottom() - cWin.innerHeight + 50 : 0;
          if (cScrollBy !== 0) {
            cWin.scrollTo(cWin.pageXOffset, cWin.pageYOffset + cScrollBy);
          }
        });
      })
    ].concat(isAndroid6 === true ? [] : [
      $_9icj6013xjdxlf151.bind($_2ejbh1xfjdxlezs6.fromDom(editorApi.win()), 'blur', function () {
        alloy.getByDom(toolstrip).each(Toggling.off);
      }),
      $_9icj6013xjdxlf151.bind(outerDoc, 'select', updateMargin),
      $_9icj6013xjdxlf151.bind(editorApi.doc(), 'selectionchange', updateMargin)
    ]);
    var destroy = function () {
      $_6dbxmwwsjdxleznr.each(listeners, function (l) {
        l.unbind();
      });
    };
    return { destroy: destroy };
  };
  var $_6u41ze142jdxlf15y = { initEvents: initEvents };

  var safeParse = function (element, attribute) {
    var parsed = parseInt($_72a1mgxrjdxlezu3.get(element, attribute), 10);
    return isNaN(parsed) ? 0 : parsed;
  };
  var $_8a6jqh147jdxlf175 = { safeParse: safeParse };

  function NodeValue (is, name) {
    var get = function (element) {
      if (!is(element))
        throw new Error('Can only get ' + name + ' value of a ' + name + ' node');
      return getOption(element).getOr('');
    };
    var getOptionIE10 = function (element) {
      try {
        return getOptionSafe(element);
      } catch (e) {
        return Option.none();
      }
    };
    var getOptionSafe = function (element) {
      return is(element) ? Option.from(element.dom().nodeValue) : Option.none();
    };
    var browser = $_g8mzcxwkjdxlezmu.detect().browser;
    var getOption = browser.isIE() && browser.version.major === 10 ? getOptionIE10 : getOptionSafe;
    var set = function (element, value) {
      if (!is(element))
        throw new Error('Can only set raw ' + name + ' value of a ' + name + ' node');
      element.dom().nodeValue = value;
    };
    return {
      get: get,
      getOption: getOption,
      set: set
    };
  }

  var api$3 = NodeValue($_xp48txkjdxlezsr.isText, 'text');
  var get$12 = function (element) {
    return api$3.get(element);
  };
  var getOption = function (element) {
    return api$3.getOption(element);
  };
  var set$8 = function (element, value) {
    api$3.set(element, value);
  };
  var $_84twh014ajdxlf17l = {
    get: get$12,
    getOption: getOption,
    set: set$8
  };

  var getEnd = function (element) {
    return $_xp48txkjdxlezsr.name(element) === 'img' ? 1 : $_84twh014ajdxlf17l.getOption(element).fold(function () {
      return $_s9ri4x3jdxlezpx.children(element).length;
    }, function (v) {
      return v.length;
    });
  };
  var isEnd = function (element, offset) {
    return getEnd(element) === offset;
  };
  var isStart = function (element, offset) {
    return offset === 0;
  };
  var NBSP = '\xA0';
  var isTextNodeWithCursorPosition = function (el) {
    return $_84twh014ajdxlf17l.getOption(el).filter(function (text) {
      return text.trim().length !== 0 || text.indexOf(NBSP) > -1;
    }).isSome();
  };
  var elementsWithCursorPosition = [
    'img',
    'br'
  ];
  var isCursorPosition = function (elem) {
    var hasCursorPosition = isTextNodeWithCursorPosition(elem);
    return hasCursorPosition || $_6dbxmwwsjdxleznr.contains(elementsWithCursorPosition, $_xp48txkjdxlezsr.name(elem));
  };
  var $_ad8fdh149jdxlf17i = {
    getEnd: getEnd,
    isEnd: isEnd,
    isStart: isStart,
    isCursorPosition: isCursorPosition
  };

  var adt$4 = $_dxqtfixwjdxlezva.generate([
    { 'before': ['element'] },
    {
      'on': [
        'element',
        'offset'
      ]
    },
    { after: ['element'] }
  ]);
  var cata = function (subject, onBefore, onOn, onAfter) {
    return subject.fold(onBefore, onOn, onAfter);
  };
  var getStart = function (situ) {
    return situ.fold($_26xiiiwjjdxlezmo.identity, $_26xiiiwjjdxlezmo.identity, $_26xiiiwjjdxlezmo.identity);
  };
  var $_cijed114djdxlf185 = {
    before: adt$4.before,
    on: adt$4.on,
    after: adt$4.after,
    cata: cata,
    getStart: getStart
  };

  var type$1 = $_dxqtfixwjdxlezva.generate([
    { domRange: ['rng'] },
    {
      relative: [
        'startSitu',
        'finishSitu'
      ]
    },
    {
      exact: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    }
  ]);
  var range$1 = $_8fo9b5x4jdxlezqc.immutable('start', 'soffset', 'finish', 'foffset');
  var exactFromRange = function (simRange) {
    return type$1.exact(simRange.start(), simRange.soffset(), simRange.finish(), simRange.foffset());
  };
  var getStart$1 = function (selection) {
    return selection.match({
      domRange: function (rng) {
        return $_2ejbh1xfjdxlezs6.fromDom(rng.startContainer);
      },
      relative: function (startSitu, finishSitu) {
        return $_cijed114djdxlf185.getStart(startSitu);
      },
      exact: function (start, soffset, finish, foffset) {
        return start;
      }
    });
  };
  var getWin = function (selection) {
    var start = getStart$1(selection);
    return $_s9ri4x3jdxlezpx.defaultView(start);
  };
  var $_9gmz2r14cjdxlf17s = {
    domRange: type$1.domRange,
    relative: type$1.relative,
    exact: type$1.exact,
    exactFromRange: exactFromRange,
    range: range$1,
    getWin: getWin
  };

  var makeRange = function (start, soffset, finish, foffset) {
    var doc = $_s9ri4x3jdxlezpx.owner(start);
    var rng = doc.dom().createRange();
    rng.setStart(start.dom(), soffset);
    rng.setEnd(finish.dom(), foffset);
    return rng;
  };
  var commonAncestorContainer = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    return $_2ejbh1xfjdxlezs6.fromDom(r.commonAncestorContainer);
  };
  var after$2 = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    var same = $_4u044dx9jdxlezqw.eq(start, finish) && soffset === foffset;
    return r.collapsed && !same;
  };
  var $_a2jtyo14fjdxlf18j = {
    after: after$2,
    commonAncestorContainer: commonAncestorContainer
  };

  var fromElements = function (elements, scope) {
    var doc = scope || document;
    var fragment = doc.createDocumentFragment();
    $_6dbxmwwsjdxleznr.each(elements, function (element) {
      fragment.appendChild(element.dom());
    });
    return $_2ejbh1xfjdxlezs6.fromDom(fragment);
  };
  var $_7e6lzf14gjdxlf18l = { fromElements: fromElements };

  var selectNodeContents = function (win, element) {
    var rng = win.document.createRange();
    selectNodeContentsUsing(rng, element);
    return rng;
  };
  var selectNodeContentsUsing = function (rng, element) {
    rng.selectNodeContents(element.dom());
  };
  var isWithin = function (outerRange, innerRange) {
    return innerRange.compareBoundaryPoints(outerRange.END_TO_START, outerRange) < 1 && innerRange.compareBoundaryPoints(outerRange.START_TO_END, outerRange) > -1;
  };
  var create$4 = function (win) {
    return win.document.createRange();
  };
  var setStart = function (rng, situ) {
    situ.fold(function (e) {
      rng.setStartBefore(e.dom());
    }, function (e, o) {
      rng.setStart(e.dom(), o);
    }, function (e) {
      rng.setStartAfter(e.dom());
    });
  };
  var setFinish = function (rng, situ) {
    situ.fold(function (e) {
      rng.setEndBefore(e.dom());
    }, function (e, o) {
      rng.setEnd(e.dom(), o);
    }, function (e) {
      rng.setEndAfter(e.dom());
    });
  };
  var replaceWith = function (rng, fragment) {
    deleteContents(rng);
    rng.insertNode(fragment.dom());
  };
  var relativeToNative = function (win, startSitu, finishSitu) {
    var range = win.document.createRange();
    setStart(range, startSitu);
    setFinish(range, finishSitu);
    return range;
  };
  var exactToNative = function (win, start, soffset, finish, foffset) {
    var rng = win.document.createRange();
    rng.setStart(start.dom(), soffset);
    rng.setEnd(finish.dom(), foffset);
    return rng;
  };
  var deleteContents = function (rng) {
    rng.deleteContents();
  };
  var cloneFragment = function (rng) {
    var fragment = rng.cloneContents();
    return $_2ejbh1xfjdxlezs6.fromDom(fragment);
  };
  var toRect = function (rect) {
    return {
      left: $_26xiiiwjjdxlezmo.constant(rect.left),
      top: $_26xiiiwjjdxlezmo.constant(rect.top),
      right: $_26xiiiwjjdxlezmo.constant(rect.right),
      bottom: $_26xiiiwjjdxlezmo.constant(rect.bottom),
      width: $_26xiiiwjjdxlezmo.constant(rect.width),
      height: $_26xiiiwjjdxlezmo.constant(rect.height)
    };
  };
  var getFirstRect = function (rng) {
    var rects = rng.getClientRects();
    var rect = rects.length > 0 ? rects[0] : rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect) : Option.none();
  };
  var getBounds = function (rng) {
    var rect = rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect) : Option.none();
  };
  var toString$1 = function (rng) {
    return rng.toString();
  };
  var $_3368ea14hjdxlf18q = {
    create: create$4,
    replaceWith: replaceWith,
    selectNodeContents: selectNodeContents,
    selectNodeContentsUsing: selectNodeContentsUsing,
    relativeToNative: relativeToNative,
    exactToNative: exactToNative,
    deleteContents: deleteContents,
    cloneFragment: cloneFragment,
    getFirstRect: getFirstRect,
    getBounds: getBounds,
    isWithin: isWithin,
    toString: toString$1
  };

  var adt$5 = $_dxqtfixwjdxlezva.generate([
    {
      ltr: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    },
    {
      rtl: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    }
  ]);
  var fromRange = function (win, type, range) {
    return type($_2ejbh1xfjdxlezs6.fromDom(range.startContainer), range.startOffset, $_2ejbh1xfjdxlezs6.fromDom(range.endContainer), range.endOffset);
  };
  var getRanges = function (win, selection) {
    return selection.match({
      domRange: function (rng) {
        return {
          ltr: $_26xiiiwjjdxlezmo.constant(rng),
          rtl: Option.none
        };
      },
      relative: function (startSitu, finishSitu) {
        return {
          ltr: $_6hk83awljdxlezmy.cached(function () {
            return $_3368ea14hjdxlf18q.relativeToNative(win, startSitu, finishSitu);
          }),
          rtl: $_6hk83awljdxlezmy.cached(function () {
            return Option.some($_3368ea14hjdxlf18q.relativeToNative(win, finishSitu, startSitu));
          })
        };
      },
      exact: function (start, soffset, finish, foffset) {
        return {
          ltr: $_6hk83awljdxlezmy.cached(function () {
            return $_3368ea14hjdxlf18q.exactToNative(win, start, soffset, finish, foffset);
          }),
          rtl: $_6hk83awljdxlezmy.cached(function () {
            return Option.some($_3368ea14hjdxlf18q.exactToNative(win, finish, foffset, start, soffset));
          })
        };
      }
    });
  };
  var doDiagnose = function (win, ranges) {
    var rng = ranges.ltr();
    if (rng.collapsed) {
      var reversed = ranges.rtl().filter(function (rev) {
        return rev.collapsed === false;
      });
      return reversed.map(function (rev) {
        return adt$5.rtl($_2ejbh1xfjdxlezs6.fromDom(rev.endContainer), rev.endOffset, $_2ejbh1xfjdxlezs6.fromDom(rev.startContainer), rev.startOffset);
      }).getOrThunk(function () {
        return fromRange(win, adt$5.ltr, rng);
      });
    } else {
      return fromRange(win, adt$5.ltr, rng);
    }
  };
  var diagnose = function (win, selection) {
    var ranges = getRanges(win, selection);
    return doDiagnose(win, ranges);
  };
  var asLtrRange = function (win, selection) {
    var diagnosis = diagnose(win, selection);
    return diagnosis.match({
      ltr: function (start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(start.dom(), soffset);
        rng.setEnd(finish.dom(), foffset);
        return rng;
      },
      rtl: function (start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(finish.dom(), foffset);
        rng.setEnd(start.dom(), soffset);
        return rng;
      }
    });
  };
  var $_9yau7614ijdxlf18y = {
    ltr: adt$5.ltr,
    rtl: adt$5.rtl,
    diagnose: diagnose,
    asLtrRange: asLtrRange
  };

  var searchForPoint = function (rectForOffset, x, y, maxX, length) {
    if (length === 0)
      return 0;
    else if (x === maxX)
      return length - 1;
    var xDelta = maxX;
    for (var i = 1; i < length; i++) {
      var rect = rectForOffset(i);
      var curDeltaX = Math.abs(x - rect.left);
      if (y > rect.bottom) {
      } else if (y < rect.top || curDeltaX > xDelta) {
        return i - 1;
      } else {
        xDelta = curDeltaX;
      }
    }
    return 0;
  };
  var inRect = function (rect, x, y) {
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  };
  var $_7kgyx014ljdxlf19j = {
    inRect: inRect,
    searchForPoint: searchForPoint
  };

  var locateOffset = function (doc, textnode, x, y, rect) {
    var rangeForOffset = function (offset) {
      var r = doc.dom().createRange();
      r.setStart(textnode.dom(), offset);
      r.collapse(true);
      return r;
    };
    var rectForOffset = function (offset) {
      var r = rangeForOffset(offset);
      return r.getBoundingClientRect();
    };
    var length = $_84twh014ajdxlf17l.get(textnode).length;
    var offset = $_7kgyx014ljdxlf19j.searchForPoint(rectForOffset, x, y, rect.right, length);
    return rangeForOffset(offset);
  };
  var locate$1 = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rects = r.getClientRects();
    var foundRect = $_dznnjvy0jdxlezvy.findMap(rects, function (rect) {
      return $_7kgyx014ljdxlf19j.inRect(rect, x, y) ? Option.some(rect) : Option.none();
    });
    return foundRect.map(function (rect) {
      return locateOffset(doc, node, x, y, rect);
    });
  };
  var $_fr9ftc14mjdxlf19l = { locate: locate$1 };

  var searchInChildren = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    var nodes = $_s9ri4x3jdxlezpx.children(node);
    return $_dznnjvy0jdxlezvy.findMap(nodes, function (n) {
      r.selectNode(n.dom());
      return $_7kgyx014ljdxlf19j.inRect(r.getBoundingClientRect(), x, y) ? locateNode(doc, n, x, y) : Option.none();
    });
  };
  var locateNode = function (doc, node, x, y) {
    var locator = $_xp48txkjdxlezsr.isText(node) ? $_fr9ftc14mjdxlf19l.locate : searchInChildren;
    return locator(doc, node, x, y);
  };
  var locate$2 = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return locateNode(doc, node, boundedX, boundedY);
  };
  var $_6tja9h14kjdxlf19d = { locate: locate$2 };

  var first$3 = function (element) {
    return $_6w4r10yvjdxlf01p.descendant(element, $_ad8fdh149jdxlf17i.isCursorPosition);
  };
  var last$2 = function (element) {
    return descendantRtl(element, $_ad8fdh149jdxlf17i.isCursorPosition);
  };
  var descendantRtl = function (scope, predicate) {
    var descend = function (element) {
      var children = $_s9ri4x3jdxlezpx.children(element);
      for (var i = children.length - 1; i >= 0; i--) {
        var child = children[i];
        if (predicate(child))
          return Option.some(child);
        var res = descend(child);
        if (res.isSome())
          return res;
      }
      return Option.none();
    };
    return descend(scope);
  };
  var $_5ujk6g14ojdxlf19v = {
    first: first$3,
    last: last$2
  };

  var COLLAPSE_TO_LEFT = true;
  var COLLAPSE_TO_RIGHT = false;
  var getCollapseDirection = function (rect, x) {
    return x - rect.left < rect.right - x ? COLLAPSE_TO_LEFT : COLLAPSE_TO_RIGHT;
  };
  var createCollapsedNode = function (doc, target, collapseDirection) {
    var r = doc.dom().createRange();
    r.selectNode(target.dom());
    r.collapse(collapseDirection);
    return r;
  };
  var locateInElement = function (doc, node, x) {
    var cursorRange = doc.dom().createRange();
    cursorRange.selectNode(node.dom());
    var rect = cursorRange.getBoundingClientRect();
    var collapseDirection = getCollapseDirection(rect, x);
    var f = collapseDirection === COLLAPSE_TO_LEFT ? $_5ujk6g14ojdxlf19v.first : $_5ujk6g14ojdxlf19v.last;
    return f(node).map(function (target) {
      return createCollapsedNode(doc, target, collapseDirection);
    });
  };
  var locateInEmpty = function (doc, node, x) {
    var rect = node.dom().getBoundingClientRect();
    var collapseDirection = getCollapseDirection(rect, x);
    return Option.some(createCollapsedNode(doc, node, collapseDirection));
  };
  var search$1 = function (doc, node, x) {
    var f = $_s9ri4x3jdxlezpx.children(node).length === 0 ? locateInEmpty : locateInElement;
    return f(doc, node, x);
  };
  var $_16rz8514njdxlf19r = { search: search$1 };

  var caretPositionFromPoint = function (doc, x, y) {
    return Option.from(doc.dom().caretPositionFromPoint(x, y)).bind(function (pos) {
      if (pos.offsetNode === null)
        return Option.none();
      var r = doc.dom().createRange();
      r.setStart(pos.offsetNode, pos.offset);
      r.collapse();
      return Option.some(r);
    });
  };
  var caretRangeFromPoint = function (doc, x, y) {
    return Option.from(doc.dom().caretRangeFromPoint(x, y));
  };
  var searchTextNodes = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return $_6tja9h14kjdxlf19d.locate(doc, node, boundedX, boundedY);
  };
  var searchFromPoint = function (doc, x, y) {
    return $_2ejbh1xfjdxlezs6.fromPoint(doc, x, y).bind(function (elem) {
      var fallback = function () {
        return $_16rz8514njdxlf19r.search(doc, elem, x);
      };
      return $_s9ri4x3jdxlezpx.children(elem).length === 0 ? fallback() : searchTextNodes(doc, elem, x, y).orThunk(fallback);
    });
  };
  var availableSearch = document.caretPositionFromPoint ? caretPositionFromPoint : document.caretRangeFromPoint ? caretRangeFromPoint : searchFromPoint;
  var fromPoint$1 = function (win, x, y) {
    var doc = $_2ejbh1xfjdxlezs6.fromDom(win.document);
    return availableSearch(doc, x, y).map(function (rng) {
      return $_9gmz2r14cjdxlf17s.range($_2ejbh1xfjdxlezs6.fromDom(rng.startContainer), rng.startOffset, $_2ejbh1xfjdxlezs6.fromDom(rng.endContainer), rng.endOffset);
    });
  };
  var $_xqwvs14jjdxlf198 = { fromPoint: fromPoint$1 };

  var withinContainer = function (win, ancestor, outerRange, selector) {
    var innerRange = $_3368ea14hjdxlf18q.create(win);
    var self = $_3c0spqxejdxlezrz.is(ancestor, selector) ? [ancestor] : [];
    var elements = self.concat($_390b63zvjdxlf07x.descendants(ancestor, selector));
    return $_6dbxmwwsjdxleznr.filter(elements, function (elem) {
      $_3368ea14hjdxlf18q.selectNodeContentsUsing(innerRange, elem);
      return $_3368ea14hjdxlf18q.isWithin(outerRange, innerRange);
    });
  };
  var find$4 = function (win, selection, selector) {
    var outerRange = $_9yau7614ijdxlf18y.asLtrRange(win, selection);
    var ancestor = $_2ejbh1xfjdxlezs6.fromDom(outerRange.commonAncestorContainer);
    return $_xp48txkjdxlezsr.isElement(ancestor) ? withinContainer(win, ancestor, outerRange, selector) : [];
  };
  var $_f25jh514pjdxlf19z = { find: find$4 };

  var beforeSpecial = function (element, offset) {
    var name = $_xp48txkjdxlezsr.name(element);
    if ('input' === name)
      return $_cijed114djdxlf185.after(element);
    else if (!$_6dbxmwwsjdxleznr.contains([
        'br',
        'img'
      ], name))
      return $_cijed114djdxlf185.on(element, offset);
    else
      return offset === 0 ? $_cijed114djdxlf185.before(element) : $_cijed114djdxlf185.after(element);
  };
  var preprocessRelative = function (startSitu, finishSitu) {
    var start = startSitu.fold($_cijed114djdxlf185.before, beforeSpecial, $_cijed114djdxlf185.after);
    var finish = finishSitu.fold($_cijed114djdxlf185.before, beforeSpecial, $_cijed114djdxlf185.after);
    return $_9gmz2r14cjdxlf17s.relative(start, finish);
  };
  var preprocessExact = function (start, soffset, finish, foffset) {
    var startSitu = beforeSpecial(start, soffset);
    var finishSitu = beforeSpecial(finish, foffset);
    return $_9gmz2r14cjdxlf17s.relative(startSitu, finishSitu);
  };
  var preprocess = function (selection) {
    return selection.match({
      domRange: function (rng) {
        var start = $_2ejbh1xfjdxlezs6.fromDom(rng.startContainer);
        var finish = $_2ejbh1xfjdxlezs6.fromDom(rng.endContainer);
        return preprocessExact(start, rng.startOffset, finish, rng.endOffset);
      },
      relative: preprocessRelative,
      exact: preprocessExact
    });
  };
  var $_eej8mt14qjdxlf1a3 = {
    beforeSpecial: beforeSpecial,
    preprocess: preprocess,
    preprocessRelative: preprocessRelative,
    preprocessExact: preprocessExact
  };

  var doSetNativeRange = function (win, rng) {
    Option.from(win.getSelection()).each(function (selection) {
      selection.removeAllRanges();
      selection.addRange(rng);
    });
  };
  var doSetRange = function (win, start, soffset, finish, foffset) {
    var rng = $_3368ea14hjdxlf18q.exactToNative(win, start, soffset, finish, foffset);
    doSetNativeRange(win, rng);
  };
  var findWithin = function (win, selection, selector) {
    return $_f25jh514pjdxlf19z.find(win, selection, selector);
  };
  var setRangeFromRelative = function (win, relative) {
    return $_9yau7614ijdxlf18y.diagnose(win, relative).match({
      ltr: function (start, soffset, finish, foffset) {
        doSetRange(win, start, soffset, finish, foffset);
      },
      rtl: function (start, soffset, finish, foffset) {
        var selection = win.getSelection();
        if (selection.extend) {
          selection.collapse(start.dom(), soffset);
          selection.extend(finish.dom(), foffset);
        } else {
          doSetRange(win, finish, foffset, start, soffset);
        }
      }
    });
  };
  var setExact = function (win, start, soffset, finish, foffset) {
    var relative = $_eej8mt14qjdxlf1a3.preprocessExact(start, soffset, finish, foffset);
    setRangeFromRelative(win, relative);
  };
  var setRelative = function (win, startSitu, finishSitu) {
    var relative = $_eej8mt14qjdxlf1a3.preprocessRelative(startSitu, finishSitu);
    setRangeFromRelative(win, relative);
  };
  var toNative = function (selection) {
    var win = $_9gmz2r14cjdxlf17s.getWin(selection).dom();
    var getDomRange = function (start, soffset, finish, foffset) {
      return $_3368ea14hjdxlf18q.exactToNative(win, start, soffset, finish, foffset);
    };
    var filtered = $_eej8mt14qjdxlf1a3.preprocess(selection);
    return $_9yau7614ijdxlf18y.diagnose(win, filtered).match({
      ltr: getDomRange,
      rtl: getDomRange
    });
  };
  var readRange = function (selection) {
    if (selection.rangeCount > 0) {
      var firstRng = selection.getRangeAt(0);
      var lastRng = selection.getRangeAt(selection.rangeCount - 1);
      return Option.some($_9gmz2r14cjdxlf17s.range($_2ejbh1xfjdxlezs6.fromDom(firstRng.startContainer), firstRng.startOffset, $_2ejbh1xfjdxlezs6.fromDom(lastRng.endContainer), lastRng.endOffset));
    } else {
      return Option.none();
    }
  };
  var doGetExact = function (selection) {
    var anchorNode = $_2ejbh1xfjdxlezs6.fromDom(selection.anchorNode);
    var focusNode = $_2ejbh1xfjdxlezs6.fromDom(selection.focusNode);
    return $_a2jtyo14fjdxlf18j.after(anchorNode, selection.anchorOffset, focusNode, selection.focusOffset) ? Option.some($_9gmz2r14cjdxlf17s.range($_2ejbh1xfjdxlezs6.fromDom(selection.anchorNode), selection.anchorOffset, $_2ejbh1xfjdxlezs6.fromDom(selection.focusNode), selection.focusOffset)) : readRange(selection);
  };
  var setToElement = function (win, element) {
    var rng = $_3368ea14hjdxlf18q.selectNodeContents(win, element);
    doSetNativeRange(win, rng);
  };
  var forElement = function (win, element) {
    var rng = $_3368ea14hjdxlf18q.selectNodeContents(win, element);
    return $_9gmz2r14cjdxlf17s.range($_2ejbh1xfjdxlezs6.fromDom(rng.startContainer), rng.startOffset, $_2ejbh1xfjdxlezs6.fromDom(rng.endContainer), rng.endOffset);
  };
  var getExact = function (win) {
    var selection = win.getSelection();
    return selection.rangeCount > 0 ? doGetExact(selection) : Option.none();
  };
  var get$13 = function (win) {
    return getExact(win).map(function (range) {
      return $_9gmz2r14cjdxlf17s.exact(range.start(), range.soffset(), range.finish(), range.foffset());
    });
  };
  var getFirstRect$1 = function (win, selection) {
    var rng = $_9yau7614ijdxlf18y.asLtrRange(win, selection);
    return $_3368ea14hjdxlf18q.getFirstRect(rng);
  };
  var getBounds$1 = function (win, selection) {
    var rng = $_9yau7614ijdxlf18y.asLtrRange(win, selection);
    return $_3368ea14hjdxlf18q.getBounds(rng);
  };
  var getAtPoint = function (win, x, y) {
    return $_xqwvs14jjdxlf198.fromPoint(win, x, y);
  };
  var getAsString = function (win, selection) {
    var rng = $_9yau7614ijdxlf18y.asLtrRange(win, selection);
    return $_3368ea14hjdxlf18q.toString(rng);
  };
  var clear$1 = function (win) {
    var selection = win.getSelection();
    selection.removeAllRanges();
  };
  var clone$3 = function (win, selection) {
    var rng = $_9yau7614ijdxlf18y.asLtrRange(win, selection);
    return $_3368ea14hjdxlf18q.cloneFragment(rng);
  };
  var replace = function (win, selection, elements) {
    var rng = $_9yau7614ijdxlf18y.asLtrRange(win, selection);
    var fragment = $_7e6lzf14gjdxlf18l.fromElements(elements, win.document);
    $_3368ea14hjdxlf18q.replaceWith(rng, fragment);
  };
  var deleteAt = function (win, selection) {
    var rng = $_9yau7614ijdxlf18y.asLtrRange(win, selection);
    $_3368ea14hjdxlf18q.deleteContents(rng);
  };
  var isCollapsed = function (start, soffset, finish, foffset) {
    return $_4u044dx9jdxlezqw.eq(start, finish) && soffset === foffset;
  };
  var $_6gaxwa14ejdxlf18c = {
    setExact: setExact,
    getExact: getExact,
    get: get$13,
    setRelative: setRelative,
    toNative: toNative,
    setToElement: setToElement,
    clear: clear$1,
    clone: clone$3,
    replace: replace,
    deleteAt: deleteAt,
    forElement: forElement,
    getFirstRect: getFirstRect$1,
    getBounds: getBounds$1,
    getAtPoint: getAtPoint,
    findWithin: findWithin,
    getAsString: getAsString,
    isCollapsed: isCollapsed
  };

  var COLLAPSED_WIDTH = 2;
  var collapsedRect = function (rect) {
    return {
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      width: $_26xiiiwjjdxlezmo.constant(COLLAPSED_WIDTH),
      height: rect.height
    };
  };
  var toRect$1 = function (rawRect) {
    return {
      left: $_26xiiiwjjdxlezmo.constant(rawRect.left),
      top: $_26xiiiwjjdxlezmo.constant(rawRect.top),
      right: $_26xiiiwjjdxlezmo.constant(rawRect.right),
      bottom: $_26xiiiwjjdxlezmo.constant(rawRect.bottom),
      width: $_26xiiiwjjdxlezmo.constant(rawRect.width),
      height: $_26xiiiwjjdxlezmo.constant(rawRect.height)
    };
  };
  var getRectsFromRange = function (range) {
    if (!range.collapsed) {
      return $_6dbxmwwsjdxleznr.map(range.getClientRects(), toRect$1);
    } else {
      var start_1 = $_2ejbh1xfjdxlezs6.fromDom(range.startContainer);
      return $_s9ri4x3jdxlezpx.parent(start_1).bind(function (parent) {
        var selection = $_9gmz2r14cjdxlf17s.exact(start_1, range.startOffset, parent, $_ad8fdh149jdxlf17i.getEnd(parent));
        var optRect = $_6gaxwa14ejdxlf18c.getFirstRect(range.startContainer.ownerDocument.defaultView, selection);
        return optRect.map(collapsedRect).map($_6dbxmwwsjdxleznr.pure);
      }).getOr([]);
    }
  };
  var getRectangles = function (cWin) {
    var sel = cWin.getSelection();
    return sel !== undefined && sel.rangeCount > 0 ? getRectsFromRange(sel.getRangeAt(0)) : [];
  };
  var $_ge2bjf148jdxlf178 = { getRectangles: getRectangles };

  var autocompleteHack = function () {
    return function (f) {
      setTimeout(function () {
        f();
      }, 0);
    };
  };
  var resume = function (cWin) {
    cWin.focus();
    var iBody = $_2ejbh1xfjdxlezs6.fromDom(cWin.document.body);
    var inInput = $_9am9mvytjdxlf01i.active().exists(function (elem) {
      return $_6dbxmwwsjdxleznr.contains([
        'input',
        'textarea'
      ], $_xp48txkjdxlezsr.name(elem));
    });
    var transaction = inInput ? autocompleteHack() : $_26xiiiwjjdxlezmo.apply;
    transaction(function () {
      $_9am9mvytjdxlf01i.active().each($_9am9mvytjdxlf01i.blur);
      $_9am9mvytjdxlf01i.focus(iBody);
    });
  };
  var $_giapsr14rjdxlf1a8 = { resume: resume };

  var EXTRA_SPACING = 50;
  var data = 'data-' + $_6pb5xszejdxlf051.resolve('last-outer-height');
  var setLastHeight = function (cBody, value) {
    $_72a1mgxrjdxlezu3.set(cBody, data, value);
  };
  var getLastHeight = function (cBody) {
    return $_8a6jqh147jdxlf175.safeParse(cBody, data);
  };
  var getBoundsFrom = function (rect) {
    return {
      top: $_26xiiiwjjdxlezmo.constant(rect.top()),
      bottom: $_26xiiiwjjdxlezmo.constant(rect.top() + rect.height())
    };
  };
  var getBounds$2 = function (cWin) {
    var rects = $_ge2bjf148jdxlf178.getRectangles(cWin);
    return rects.length > 0 ? Option.some(rects[0]).map(getBoundsFrom) : Option.none();
  };
  var findDelta = function (outerWindow, cBody) {
    var last = getLastHeight(cBody);
    var current = outerWindow.innerHeight;
    return last > current ? Option.some(last - current) : Option.none();
  };
  var calculate = function (cWin, bounds, delta) {
    var isOutside = bounds.top() > cWin.innerHeight || bounds.bottom() > cWin.innerHeight;
    return isOutside ? Math.min(delta, bounds.bottom() - cWin.innerHeight + EXTRA_SPACING) : 0;
  };
  var setup$1 = function (outerWindow, cWin) {
    var cBody = $_2ejbh1xfjdxlezs6.fromDom(cWin.document.body);
    var toEditing = function () {
      $_giapsr14rjdxlf1a8.resume(cWin);
    };
    var onResize = $_9icj6013xjdxlf151.bind($_2ejbh1xfjdxlezs6.fromDom(outerWindow), 'resize', function () {
      findDelta(outerWindow, cBody).each(function (delta) {
        getBounds$2(cWin).each(function (bounds) {
          var cScrollBy = calculate(cWin, bounds, delta);
          if (cScrollBy !== 0) {
            cWin.scrollTo(cWin.pageXOffset, cWin.pageYOffset + cScrollBy);
          }
        });
      });
      setLastHeight(cBody, outerWindow.innerHeight);
    });
    setLastHeight(cBody, outerWindow.innerHeight);
    var destroy = function () {
      onResize.unbind();
    };
    return {
      toEditing: toEditing,
      destroy: destroy
    };
  };
  var $_bdfc8u146jdxlf16w = { setup: setup$1 };

  var getBodyFromFrame = function (frame) {
    return Option.some($_2ejbh1xfjdxlezs6.fromDom(frame.dom().contentWindow.document.body));
  };
  var getDocFromFrame = function (frame) {
    return Option.some($_2ejbh1xfjdxlezs6.fromDom(frame.dom().contentWindow.document));
  };
  var getWinFromFrame = function (frame) {
    return Option.from(frame.dom().contentWindow);
  };
  var getSelectionFromFrame = function (frame) {
    var optWin = getWinFromFrame(frame);
    return optWin.bind($_6gaxwa14ejdxlf18c.getExact);
  };
  var getFrame = function (editor) {
    return editor.getFrame();
  };
  var getOrDerive = function (name, f) {
    return function (editor) {
      var g = editor[name].getOrThunk(function () {
        var frame = getFrame(editor);
        return function () {
          return f(frame);
        };
      });
      return g();
    };
  };
  var getOrListen = function (editor, doc, name, type) {
    return editor[name].getOrThunk(function () {
      return function (handler) {
        return $_9icj6013xjdxlf151.bind(doc, type, handler);
      };
    });
  };
  var toRect$2 = function (rect) {
    return {
      left: $_26xiiiwjjdxlezmo.constant(rect.left),
      top: $_26xiiiwjjdxlezmo.constant(rect.top),
      right: $_26xiiiwjjdxlezmo.constant(rect.right),
      bottom: $_26xiiiwjjdxlezmo.constant(rect.bottom),
      width: $_26xiiiwjjdxlezmo.constant(rect.width),
      height: $_26xiiiwjjdxlezmo.constant(rect.height)
    };
  };
  var getActiveApi = function (editor) {
    var frame = getFrame(editor);
    var tryFallbackBox = function (win) {
      var isCollapsed = function (sel) {
        return $_4u044dx9jdxlezqw.eq(sel.start(), sel.finish()) && sel.soffset() === sel.foffset();
      };
      var toStartRect = function (sel) {
        var rect = sel.start().dom().getBoundingClientRect();
        return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect$2) : Option.none();
      };
      return $_6gaxwa14ejdxlf18c.getExact(win).filter(isCollapsed).bind(toStartRect);
    };
    return getBodyFromFrame(frame).bind(function (body) {
      return getDocFromFrame(frame).bind(function (doc) {
        return getWinFromFrame(frame).map(function (win) {
          var html = $_2ejbh1xfjdxlezs6.fromDom(doc.dom().documentElement);
          var getCursorBox = editor.getCursorBox.getOrThunk(function () {
            return function () {
              return $_6gaxwa14ejdxlf18c.get(win).bind(function (sel) {
                return $_6gaxwa14ejdxlf18c.getFirstRect(win, sel).orThunk(function () {
                  return tryFallbackBox(win);
                });
              });
            };
          });
          var setSelection = editor.setSelection.getOrThunk(function () {
            return function (start, soffset, finish, foffset) {
              $_6gaxwa14ejdxlf18c.setExact(win, start, soffset, finish, foffset);
            };
          });
          var clearSelection = editor.clearSelection.getOrThunk(function () {
            return function () {
              $_6gaxwa14ejdxlf18c.clear(win);
            };
          });
          return {
            body: $_26xiiiwjjdxlezmo.constant(body),
            doc: $_26xiiiwjjdxlezmo.constant(doc),
            win: $_26xiiiwjjdxlezmo.constant(win),
            html: $_26xiiiwjjdxlezmo.constant(html),
            getSelection: $_26xiiiwjjdxlezmo.curry(getSelectionFromFrame, frame),
            setSelection: setSelection,
            clearSelection: clearSelection,
            frame: $_26xiiiwjjdxlezmo.constant(frame),
            onKeyup: getOrListen(editor, doc, 'onKeyup', 'keyup'),
            onNodeChanged: getOrListen(editor, doc, 'onNodeChanged', 'selectionchange'),
            onDomChanged: editor.onDomChanged,
            onScrollToCursor: editor.onScrollToCursor,
            onScrollToElement: editor.onScrollToElement,
            onToReading: editor.onToReading,
            onToEditing: editor.onToEditing,
            onToolbarScrollStart: editor.onToolbarScrollStart,
            onTouchContent: editor.onTouchContent,
            onTapContent: editor.onTapContent,
            onTouchToolstrip: editor.onTouchToolstrip,
            getCursorBox: getCursorBox
          };
        });
      });
    });
  };
  var $_bygz314sjdxlf1an = {
    getBody: getOrDerive('getBody', getBodyFromFrame),
    getDoc: getOrDerive('getDoc', getDocFromFrame),
    getWin: getOrDerive('getWin', getWinFromFrame),
    getSelection: getOrDerive('getSelection', getSelectionFromFrame),
    getFrame: getFrame,
    getActiveApi: getActiveApi
  };

  var attr = 'data-ephox-mobile-fullscreen-style';
  var siblingStyles = 'display:none!important;';
  var ancestorPosition = 'position:absolute!important;';
  var ancestorStyles = 'top:0!important;left:0!important;margin:0' + '!important;padding:0!important;width:100%!important;';
  var bgFallback = 'background-color:rgb(255,255,255)!important;';
  var isAndroid = $_g8mzcxwkjdxlezmu.detect().os.isAndroid();
  var matchColor = function (editorBody) {
    var color = $_99zvvg103jdxlf08t.get(editorBody, 'background-color');
    return color !== undefined && color !== '' ? 'background-color:' + color + '!important' : bgFallback;
  };
  var clobberStyles = function (container, editorBody) {
    var gatherSibilings = function (element) {
      var siblings = $_390b63zvjdxlf07x.siblings(element, '*');
      return siblings;
    };
    var clobber = function (clobberStyle) {
      return function (element) {
        var styles = $_72a1mgxrjdxlezu3.get(element, 'style');
        var backup = styles === undefined ? 'no-styles' : styles.trim();
        if (backup === clobberStyle) {
          return;
        } else {
          $_72a1mgxrjdxlezu3.set(element, attr, backup);
          $_72a1mgxrjdxlezu3.set(element, 'style', clobberStyle);
        }
      };
    };
    var ancestors = $_390b63zvjdxlf07x.ancestors(container, '*');
    var siblings = $_6dbxmwwsjdxleznr.bind(ancestors, gatherSibilings);
    var bgColor = matchColor(editorBody);
    $_6dbxmwwsjdxleznr.each(siblings, clobber(siblingStyles));
    $_6dbxmwwsjdxleznr.each(ancestors, clobber(ancestorPosition + ancestorStyles + bgColor));
    var containerStyles = isAndroid === true ? '' : ancestorPosition;
    clobber(containerStyles + ancestorStyles + bgColor)(container);
  };
  var restoreStyles = function () {
    var clobberedEls = $_390b63zvjdxlf07x.all('[' + attr + ']');
    $_6dbxmwwsjdxleznr.each(clobberedEls, function (element) {
      var restore = $_72a1mgxrjdxlezu3.get(element, attr);
      if (restore !== 'no-styles') {
        $_72a1mgxrjdxlezu3.set(element, 'style', restore);
      } else {
        $_72a1mgxrjdxlezu3.remove(element, 'style');
      }
      $_72a1mgxrjdxlezu3.remove(element, attr);
    });
  };
  var $_86tqj014tjdxlf1az = {
    clobberStyles: clobberStyles,
    restoreStyles: restoreStyles
  };

  var tag = function () {
    var head = $_77tktczxjdxlf083.first('head').getOrDie();
    var nu = function () {
      var meta = $_2ejbh1xfjdxlezs6.fromTag('meta');
      $_72a1mgxrjdxlezu3.set(meta, 'name', 'viewport');
      $_72vikbx2jdxlezpu.append(head, meta);
      return meta;
    };
    var element = $_77tktczxjdxlf083.first('meta[name="viewport"]').getOrThunk(nu);
    var backup = $_72a1mgxrjdxlezu3.get(element, 'content');
    var maximize = function () {
      $_72a1mgxrjdxlezu3.set(element, 'content', 'width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0');
    };
    var restore = function () {
      if (backup !== undefined && backup !== null && backup.length > 0) {
        $_72a1mgxrjdxlezu3.set(element, 'content', backup);
      } else {
        $_72a1mgxrjdxlezu3.set(element, 'content', 'user-scalable=yes');
      }
    };
    return {
      maximize: maximize,
      restore: restore
    };
  };
  var $_6ti03s14ujdxlf1b8 = { tag: tag };

  var create$5 = function (platform, mask) {
    var meta = $_6ti03s14ujdxlf1b8.tag();
    var androidApi = $_cqf8mx12ojdxlf0tg.api();
    var androidEvents = $_cqf8mx12ojdxlf0tg.api();
    var enter = function () {
      mask.hide();
      $_79eveeynjdxlf012.add(platform.container, $_6pb5xszejdxlf051.resolve('fullscreen-maximized'));
      $_79eveeynjdxlf012.add(platform.container, $_6pb5xszejdxlf051.resolve('android-maximized'));
      meta.maximize();
      $_79eveeynjdxlf012.add(platform.body, $_6pb5xszejdxlf051.resolve('android-scroll-reload'));
      androidApi.set($_bdfc8u146jdxlf16w.setup(platform.win, $_bygz314sjdxlf1an.getWin(platform.editor).getOrDie('no')));
      $_bygz314sjdxlf1an.getActiveApi(platform.editor).each(function (editorApi) {
        $_86tqj014tjdxlf1az.clobberStyles(platform.container, editorApi.body());
        androidEvents.set($_6u41ze142jdxlf15y.initEvents(editorApi, platform.toolstrip, platform.alloy));
      });
    };
    var exit = function () {
      meta.restore();
      mask.show();
      $_79eveeynjdxlf012.remove(platform.container, $_6pb5xszejdxlf051.resolve('fullscreen-maximized'));
      $_79eveeynjdxlf012.remove(platform.container, $_6pb5xszejdxlf051.resolve('android-maximized'));
      $_86tqj014tjdxlf1az.restoreStyles();
      $_79eveeynjdxlf012.remove(platform.body, $_6pb5xszejdxlf051.resolve('android-scroll-reload'));
      androidEvents.clear();
      androidApi.clear();
    };
    return {
      enter: enter,
      exit: exit
    };
  };
  var $_8zq160141jdxlf15s = { create: create$5 };

  var adaptable = function (fn, rate) {
    var timer = null;
    var args = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
        args = null;
      }
    };
    var throttle = function () {
      args = arguments;
      if (timer === null) {
        timer = setTimeout(function () {
          fn.apply(null, args);
          timer = null;
          args = null;
        }, rate);
      }
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var first$4 = function (fn, rate) {
    var timer = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };
    var throttle = function () {
      var args = arguments;
      if (timer === null) {
        timer = setTimeout(function () {
          fn.apply(null, args);
          timer = null;
          args = null;
        }, rate);
      }
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var last$3 = function (fn, rate) {
    var timer = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };
    var throttle = function () {
      var args = arguments;
      if (timer !== null)
        clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(null, args);
        timer = null;
        args = null;
      }, rate);
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var $_5hqxi814wjdxlf1bo = {
    adaptable: adaptable,
    first: first$4,
    last: last$3
  };

  var sketch$10 = function (onView, translate) {
    var memIcon = $_g4pwn311rjdxlf0lb.record(Container.sketch({
      dom: $_2vsnm0113jdxlf0gu.dom('<div aria-hidden="true" class="${prefix}-mask-tap-icon"></div>'),
      containerBehaviours: $_5tm9cmy2jdxlezw3.derive([Toggling.config({
          toggleClass: $_6pb5xszejdxlf051.resolve('mask-tap-icon-selected'),
          toggleOnExecute: false
        })])
    }));
    var onViewThrottle = $_5hqxi814wjdxlf1bo.first(onView, 200);
    return Container.sketch({
      dom: $_2vsnm0113jdxlf0gu.dom('<div class="${prefix}-disabled-mask"></div>'),
      components: [Container.sketch({
          dom: $_2vsnm0113jdxlf0gu.dom('<div class="${prefix}-content-container"></div>'),
          components: [Button.sketch({
              dom: $_2vsnm0113jdxlf0gu.dom('<div class="${prefix}-content-tap-section"></div>'),
              components: [memIcon.asSpec()],
              action: function (button) {
                onViewThrottle.throttle();
              },
              buttonBehaviours: $_5tm9cmy2jdxlezw3.derive([Toggling.config({ toggleClass: $_6pb5xszejdxlf051.resolve('mask-tap-icon-selected') })])
            })]
        })]
    });
  };
  var $_b130f514vjdxlf1bf = { sketch: sketch$10 };

  var MobileSchema = $_2vagecyejdxlezzg.objOf([
    $_5jvmj2y7jdxlezxo.strictObjOf('editor', [
      $_5jvmj2y7jdxlezxo.strict('getFrame'),
      $_5jvmj2y7jdxlezxo.option('getBody'),
      $_5jvmj2y7jdxlezxo.option('getDoc'),
      $_5jvmj2y7jdxlezxo.option('getWin'),
      $_5jvmj2y7jdxlezxo.option('getSelection'),
      $_5jvmj2y7jdxlezxo.option('setSelection'),
      $_5jvmj2y7jdxlezxo.option('clearSelection'),
      $_5jvmj2y7jdxlezxo.option('cursorSaver'),
      $_5jvmj2y7jdxlezxo.option('onKeyup'),
      $_5jvmj2y7jdxlezxo.option('onNodeChanged'),
      $_5jvmj2y7jdxlezxo.option('getCursorBox'),
      $_5jvmj2y7jdxlezxo.strict('onDomChanged'),
      $_5jvmj2y7jdxlezxo.defaulted('onTouchContent', $_26xiiiwjjdxlezmo.noop),
      $_5jvmj2y7jdxlezxo.defaulted('onTapContent', $_26xiiiwjjdxlezmo.noop),
      $_5jvmj2y7jdxlezxo.defaulted('onTouchToolstrip', $_26xiiiwjjdxlezmo.noop),
      $_5jvmj2y7jdxlezxo.defaulted('onScrollToCursor', $_26xiiiwjjdxlezmo.constant({ unbind: $_26xiiiwjjdxlezmo.noop })),
      $_5jvmj2y7jdxlezxo.defaulted('onScrollToElement', $_26xiiiwjjdxlezmo.constant({ unbind: $_26xiiiwjjdxlezmo.noop })),
      $_5jvmj2y7jdxlezxo.defaulted('onToEditing', $_26xiiiwjjdxlezmo.constant({ unbind: $_26xiiiwjjdxlezmo.noop })),
      $_5jvmj2y7jdxlezxo.defaulted('onToReading', $_26xiiiwjjdxlezmo.constant({ unbind: $_26xiiiwjjdxlezmo.noop })),
      $_5jvmj2y7jdxlezxo.defaulted('onToolbarScrollStart', $_26xiiiwjjdxlezmo.identity)
    ]),
    $_5jvmj2y7jdxlezxo.strict('socket'),
    $_5jvmj2y7jdxlezxo.strict('toolstrip'),
    $_5jvmj2y7jdxlezxo.strict('dropup'),
    $_5jvmj2y7jdxlezxo.strict('toolbar'),
    $_5jvmj2y7jdxlezxo.strict('container'),
    $_5jvmj2y7jdxlezxo.strict('alloy'),
    $_5jvmj2y7jdxlezxo.state('win', function (spec) {
      return $_s9ri4x3jdxlezpx.owner(spec.socket).dom().defaultView;
    }),
    $_5jvmj2y7jdxlezxo.state('body', function (spec) {
      return $_2ejbh1xfjdxlezs6.fromDom(spec.socket.dom().ownerDocument.body);
    }),
    $_5jvmj2y7jdxlezxo.defaulted('translate', $_26xiiiwjjdxlezmo.identity),
    $_5jvmj2y7jdxlezxo.defaulted('setReadOnly', $_26xiiiwjjdxlezmo.noop)
  ]);

  var produce = function (raw) {
    var mobile = $_2vagecyejdxlezzg.asRawOrDie('Getting AndroidWebapp schema', MobileSchema, raw);
    $_99zvvg103jdxlf08t.set(mobile.toolstrip, 'width', '100%');
    var onTap = function () {
      mobile.setReadOnly(true);
      mode.enter();
    };
    var mask = $_e0aoww12tjdxlf0uv.build($_b130f514vjdxlf1bf.sketch(onTap, mobile.translate));
    mobile.alloy.add(mask);
    var maskApi = {
      show: function () {
        mobile.alloy.add(mask);
      },
      hide: function () {
        mobile.alloy.remove(mask);
      }
    };
    $_72vikbx2jdxlezpu.append(mobile.container, mask.element());
    var mode = $_8zq160141jdxlf15s.create(mobile, maskApi);
    return {
      setReadOnly: mobile.setReadOnly,
      refreshStructure: $_26xiiiwjjdxlezmo.noop,
      enter: mode.enter,
      exit: mode.exit,
      destroy: $_26xiiiwjjdxlezmo.noop
    };
  };
  var $_9imf92140jdxlf15f = { produce: produce };

  var schema$14 = [
    $_5jvmj2y7jdxlezxo.defaulted('shell', true),
    $_32y64u10ojdxlf0d0.field('toolbarBehaviours', [Replacing])
  ];
  var enhanceGroups = function (detail) {
    return { behaviours: $_5tm9cmy2jdxlezw3.derive([Replacing.config({})]) };
  };
  var partTypes$1 = [$_8qnic510vjdxlf0eq.optional({
      name: 'groups',
      overrides: enhanceGroups
    })];
  var $_6rkpxt150jdxlf1cy = {
    name: $_26xiiiwjjdxlezmo.constant('Toolbar'),
    schema: $_26xiiiwjjdxlezmo.constant(schema$14),
    parts: $_26xiiiwjjdxlezmo.constant(partTypes$1)
  };

  var factory$4 = function (detail, components, spec, _externals) {
    var setGroups = function (toolbar, groups) {
      getGroupContainer(toolbar).fold(function () {
        console.error('Toolbar was defined to not be a shell, but no groups container was specified in components');
        throw new Error('Toolbar was defined to not be a shell, but no groups container was specified in components');
      }, function (container) {
        Replacing.set(container, groups);
      });
    };
    var getGroupContainer = function (component) {
      return detail.shell() ? Option.some(component) : $_3ucuv110tjdxlf0e0.getPart(component, detail, 'groups');
    };
    var extra = detail.shell() ? {
      behaviours: [Replacing.config({})],
      components: []
    } : {
      behaviours: [],
      components: components
    };
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: extra.components,
      behaviours: $_dngveawyjdxlezp5.deepMerge($_5tm9cmy2jdxlezw3.derive(extra.behaviours), $_32y64u10ojdxlf0d0.get(detail.toolbarBehaviours())),
      apis: { setGroups: setGroups },
      domModification: { attributes: { role: 'group' } }
    };
  };
  var Toolbar = $_e8py5t10pjdxlf0dc.composite({
    name: 'Toolbar',
    configFields: $_6rkpxt150jdxlf1cy.schema(),
    partFields: $_6rkpxt150jdxlf1cy.parts(),
    factory: factory$4,
    apis: {
      setGroups: function (apis, toolbar, groups) {
        apis.setGroups(toolbar, groups);
      }
    }
  });

  var schema$15 = [
    $_5jvmj2y7jdxlezxo.strict('items'),
    $_d0ld34z6jdxlf03c.markers(['itemClass']),
    $_32y64u10ojdxlf0d0.field('tgroupBehaviours', [Keying])
  ];
  var partTypes$2 = [$_8qnic510vjdxlf0eq.group({
      name: 'items',
      unit: 'item',
      overrides: function (detail) {
        return { domModification: { classes: [detail.markers().itemClass()] } };
      }
    })];
  var $_9ewjmy152jdxlf1d9 = {
    name: $_26xiiiwjjdxlezmo.constant('ToolbarGroup'),
    schema: $_26xiiiwjjdxlezmo.constant(schema$15),
    parts: $_26xiiiwjjdxlezmo.constant(partTypes$2)
  };

  var factory$5 = function (detail, components, spec, _externals) {
    return $_dngveawyjdxlezp5.deepMerge({ dom: { attributes: { role: 'toolbar' } } }, {
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_dngveawyjdxlezp5.deepMerge($_5tm9cmy2jdxlezw3.derive([Keying.config({
          mode: 'flow',
          selector: '.' + detail.markers().itemClass()
        })]), $_32y64u10ojdxlf0d0.get(detail.tgroupBehaviours())),
      'debug.sketcher': spec['debug.sketcher']
    });
  };
  var ToolbarGroup = $_e8py5t10pjdxlf0dc.composite({
    name: 'ToolbarGroup',
    configFields: $_9ewjmy152jdxlf1d9.schema(),
    partFields: $_9ewjmy152jdxlf1d9.parts(),
    factory: factory$5
  });

  var dataHorizontal = 'data-' + $_6pb5xszejdxlf051.resolve('horizontal-scroll');
  var canScrollVertically = function (container) {
    container.dom().scrollTop = 1;
    var result = container.dom().scrollTop !== 0;
    container.dom().scrollTop = 0;
    return result;
  };
  var canScrollHorizontally = function (container) {
    container.dom().scrollLeft = 1;
    var result = container.dom().scrollLeft !== 0;
    container.dom().scrollLeft = 0;
    return result;
  };
  var hasVerticalScroll = function (container) {
    return container.dom().scrollTop > 0 || canScrollVertically(container);
  };
  var hasHorizontalScroll = function (container) {
    return container.dom().scrollLeft > 0 || canScrollHorizontally(container);
  };
  var markAsHorizontal = function (container) {
    $_72a1mgxrjdxlezu3.set(container, dataHorizontal, 'true');
  };
  var hasScroll = function (container) {
    return $_72a1mgxrjdxlezu3.get(container, dataHorizontal) === 'true' ? hasHorizontalScroll : hasVerticalScroll;
  };
  var exclusive = function (scope, selector) {
    return $_9icj6013xjdxlf151.bind(scope, 'touchmove', function (event) {
      $_77tktczxjdxlf083.closest(event.target(), selector).filter(hasScroll).fold(function () {
        event.raw().preventDefault();
      }, $_26xiiiwjjdxlezmo.noop);
    });
  };
  var $_gqv3v153jdxlf1dg = {
    exclusive: exclusive,
    markAsHorizontal: markAsHorizontal
  };

  function ScrollingToolbar () {
    var makeGroup = function (gSpec) {
      var scrollClass = gSpec.scrollable === true ? '${prefix}-toolbar-scrollable-group' : '';
      return {
        dom: $_2vsnm0113jdxlf0gu.dom('<div aria-label="' + gSpec.label + '" class="${prefix}-toolbar-group ' + scrollClass + '"></div>'),
        tgroupBehaviours: $_5tm9cmy2jdxlezw3.derive([$_940p5d126jdxlf0og.config('adhoc-scrollable-toolbar', gSpec.scrollable === true ? [$_fpalyxy4jdxlezwy.runOnInit(function (component, simulatedEvent) {
              $_99zvvg103jdxlf08t.set(component.element(), 'overflow-x', 'auto');
              $_gqv3v153jdxlf1dg.markAsHorizontal(component.element());
              $_3zipxj13ujdxlf14h.register(component.element());
            })] : [])]),
        components: [Container.sketch({ components: [ToolbarGroup.parts().items({})] })],
        markers: { itemClass: $_6pb5xszejdxlf051.resolve('toolbar-group-item') },
        items: gSpec.items
      };
    };
    var toolbar = $_e0aoww12tjdxlf0uv.build(Toolbar.sketch({
      dom: $_2vsnm0113jdxlf0gu.dom('<div class="${prefix}-toolbar"></div>'),
      components: [Toolbar.parts().groups({})],
      toolbarBehaviours: $_5tm9cmy2jdxlezw3.derive([
        Toggling.config({
          toggleClass: $_6pb5xszejdxlf051.resolve('context-toolbar'),
          toggleOnExecute: false,
          aria: { mode: 'none' }
        }),
        Keying.config({ mode: 'cyclic' })
      ]),
      shell: true
    }));
    var wrapper = $_e0aoww12tjdxlf0uv.build(Container.sketch({
      dom: { classes: [$_6pb5xszejdxlf051.resolve('toolstrip')] },
      components: [$_e0aoww12tjdxlf0uv.premade(toolbar)],
      containerBehaviours: $_5tm9cmy2jdxlezw3.derive([Toggling.config({
          toggleClass: $_6pb5xszejdxlf051.resolve('android-selection-context-toolbar'),
          toggleOnExecute: false
        })])
    }));
    var resetGroups = function () {
      Toolbar.setGroups(toolbar, initGroups.get());
      Toggling.off(toolbar);
    };
    var initGroups = Cell([]);
    var setGroups = function (gs) {
      initGroups.set(gs);
      resetGroups();
    };
    var createGroups = function (gs) {
      return $_6dbxmwwsjdxleznr.map(gs, $_26xiiiwjjdxlezmo.compose(ToolbarGroup.sketch, makeGroup));
    };
    var refresh = function () {
      Toolbar.refresh(toolbar);
    };
    var setContextToolbar = function (gs) {
      Toggling.on(toolbar);
      Toolbar.setGroups(toolbar, gs);
    };
    var restoreToolbar = function () {
      if (Toggling.isOn(toolbar)) {
        resetGroups();
      }
    };
    var focus = function () {
      Keying.focusIn(toolbar);
    };
    return {
      wrapper: $_26xiiiwjjdxlezmo.constant(wrapper),
      toolbar: $_26xiiiwjjdxlezmo.constant(toolbar),
      createGroups: createGroups,
      setGroups: setGroups,
      setContextToolbar: setContextToolbar,
      restoreToolbar: restoreToolbar,
      refresh: refresh,
      focus: focus
    };
  }

  var makeEditSwitch = function (webapp) {
    return $_e0aoww12tjdxlf0uv.build(Button.sketch({
      dom: $_2vsnm0113jdxlf0gu.dom('<div class="${prefix}-mask-edit-icon ${prefix}-icon"></div>'),
      action: function () {
        webapp.run(function (w) {
          w.setReadOnly(false);
        });
      }
    }));
  };
  var makeSocket = function () {
    return $_e0aoww12tjdxlf0uv.build(Container.sketch({
      dom: $_2vsnm0113jdxlf0gu.dom('<div class="${prefix}-editor-socket"></div>'),
      components: [],
      containerBehaviours: $_5tm9cmy2jdxlezw3.derive([Replacing.config({})])
    }));
  };
  var showEdit = function (socket, switchToEdit) {
    Replacing.append(socket, $_e0aoww12tjdxlf0uv.premade(switchToEdit));
  };
  var hideEdit = function (socket, switchToEdit) {
    Replacing.remove(socket, switchToEdit);
  };
  var updateMode = function (socket, switchToEdit, readOnly, root) {
    var swap = readOnly === true ? Swapping.toAlpha : Swapping.toOmega;
    swap(root);
    var f = readOnly ? showEdit : hideEdit;
    f(socket, switchToEdit);
  };
  var $_epo0q5154jdxlf1do = {
    makeEditSwitch: makeEditSwitch,
    makeSocket: makeSocket,
    updateMode: updateMode
  };

  var getAnimationRoot = function (component, slideConfig) {
    return slideConfig.getAnimationRoot().fold(function () {
      return component.element();
    }, function (get) {
      return get(component);
    });
  };
  var getDimensionProperty = function (slideConfig) {
    return slideConfig.dimension().property();
  };
  var getDimension = function (slideConfig, elem) {
    return slideConfig.dimension().getDimension()(elem);
  };
  var disableTransitions = function (component, slideConfig) {
    var root = getAnimationRoot(component, slideConfig);
    $_3io6wv137jdxlf0z7.remove(root, [
      slideConfig.shrinkingClass(),
      slideConfig.growingClass()
    ]);
  };
  var setShrunk = function (component, slideConfig) {
    $_79eveeynjdxlf012.remove(component.element(), slideConfig.openClass());
    $_79eveeynjdxlf012.add(component.element(), slideConfig.closedClass());
    $_99zvvg103jdxlf08t.set(component.element(), getDimensionProperty(slideConfig), '0px');
    $_99zvvg103jdxlf08t.reflow(component.element());
  };
  var measureTargetSize = function (component, slideConfig) {
    setGrown(component, slideConfig);
    var expanded = getDimension(slideConfig, component.element());
    setShrunk(component, slideConfig);
    return expanded;
  };
  var setGrown = function (component, slideConfig) {
    $_79eveeynjdxlf012.remove(component.element(), slideConfig.closedClass());
    $_79eveeynjdxlf012.add(component.element(), slideConfig.openClass());
    $_99zvvg103jdxlf08t.remove(component.element(), getDimensionProperty(slideConfig));
  };
  var doImmediateShrink = function (component, slideConfig, slideState) {
    slideState.setCollapsed();
    $_99zvvg103jdxlf08t.set(component.element(), getDimensionProperty(slideConfig), getDimension(slideConfig, component.element()));
    $_99zvvg103jdxlf08t.reflow(component.element());
    disableTransitions(component, slideConfig);
    setShrunk(component, slideConfig);
    slideConfig.onStartShrink()(component);
    slideConfig.onShrunk()(component);
  };
  var doStartShrink = function (component, slideConfig, slideState) {
    slideState.setCollapsed();
    $_99zvvg103jdxlf08t.set(component.element(), getDimensionProperty(slideConfig), getDimension(slideConfig, component.element()));
    $_99zvvg103jdxlf08t.reflow(component.element());
    var root = getAnimationRoot(component, slideConfig);
    $_79eveeynjdxlf012.add(root, slideConfig.shrinkingClass());
    setShrunk(component, slideConfig);
    slideConfig.onStartShrink()(component);
  };
  var doStartGrow = function (component, slideConfig, slideState) {
    var fullSize = measureTargetSize(component, slideConfig);
    var root = getAnimationRoot(component, slideConfig);
    $_79eveeynjdxlf012.add(root, slideConfig.growingClass());
    setGrown(component, slideConfig);
    $_99zvvg103jdxlf08t.set(component.element(), getDimensionProperty(slideConfig), fullSize);
    slideState.setExpanded();
    slideConfig.onStartGrow()(component);
  };
  var grow = function (component, slideConfig, slideState) {
    if (!slideState.isExpanded())
      doStartGrow(component, slideConfig, slideState);
  };
  var shrink = function (component, slideConfig, slideState) {
    if (slideState.isExpanded())
      doStartShrink(component, slideConfig, slideState);
  };
  var immediateShrink = function (component, slideConfig, slideState) {
    if (slideState.isExpanded())
      doImmediateShrink(component, slideConfig, slideState);
  };
  var hasGrown = function (component, slideConfig, slideState) {
    return slideState.isExpanded();
  };
  var hasShrunk = function (component, slideConfig, slideState) {
    return slideState.isCollapsed();
  };
  var isGrowing = function (component, slideConfig, slideState) {
    var root = getAnimationRoot(component, slideConfig);
    return $_79eveeynjdxlf012.has(root, slideConfig.growingClass()) === true;
  };
  var isShrinking = function (component, slideConfig, slideState) {
    var root = getAnimationRoot(component, slideConfig);
    return $_79eveeynjdxlf012.has(root, slideConfig.shrinkingClass()) === true;
  };
  var isTransitioning = function (component, slideConfig, slideState) {
    return isGrowing(component, slideConfig, slideState) === true || isShrinking(component, slideConfig, slideState) === true;
  };
  var toggleGrow = function (component, slideConfig, slideState) {
    var f = slideState.isExpanded() ? doStartShrink : doStartGrow;
    f(component, slideConfig, slideState);
  };
  var $_dhkrhf158jdxlf1eg = {
    grow: grow,
    shrink: shrink,
    immediateShrink: immediateShrink,
    hasGrown: hasGrown,
    hasShrunk: hasShrunk,
    isGrowing: isGrowing,
    isShrinking: isShrinking,
    isTransitioning: isTransitioning,
    toggleGrow: toggleGrow,
    disableTransitions: disableTransitions
  };

  var exhibit$5 = function (base, slideConfig) {
    var expanded = slideConfig.expanded();
    return expanded ? $_8a5bobyhjdxlezzz.nu({
      classes: [slideConfig.openClass()],
      styles: {}
    }) : $_8a5bobyhjdxlezzz.nu({
      classes: [slideConfig.closedClass()],
      styles: $_ey6c2jxsjdxlezue.wrap(slideConfig.dimension().property(), '0px')
    });
  };
  var events$9 = function (slideConfig, slideState) {
    return $_fpalyxy4jdxlezwy.derive([$_fpalyxy4jdxlezwy.run($_f2g7alwijdxlezmh.transitionend(), function (component, simulatedEvent) {
        var raw = simulatedEvent.event().raw();
        if (raw.propertyName === slideConfig.dimension().property()) {
          $_dhkrhf158jdxlf1eg.disableTransitions(component, slideConfig, slideState);
          if (slideState.isExpanded())
            $_99zvvg103jdxlf08t.remove(component.element(), slideConfig.dimension().property());
          var notify = slideState.isExpanded() ? slideConfig.onGrown() : slideConfig.onShrunk();
          notify(component, simulatedEvent);
        }
      })]);
  };
  var $_d15crp157jdxlf1e9 = {
    exhibit: exhibit$5,
    events: events$9
  };

  var SlidingSchema = [
    $_5jvmj2y7jdxlezxo.strict('closedClass'),
    $_5jvmj2y7jdxlezxo.strict('openClass'),
    $_5jvmj2y7jdxlezxo.strict('shrinkingClass'),
    $_5jvmj2y7jdxlezxo.strict('growingClass'),
    $_5jvmj2y7jdxlezxo.option('getAnimationRoot'),
    $_d0ld34z6jdxlf03c.onHandler('onShrunk'),
    $_d0ld34z6jdxlf03c.onHandler('onStartShrink'),
    $_d0ld34z6jdxlf03c.onHandler('onGrown'),
    $_d0ld34z6jdxlf03c.onHandler('onStartGrow'),
    $_5jvmj2y7jdxlezxo.defaulted('expanded', false),
    $_5jvmj2y7jdxlezxo.strictOf('dimension', $_2vagecyejdxlezzg.choose('property', {
      width: [
        $_d0ld34z6jdxlf03c.output('property', 'width'),
        $_d0ld34z6jdxlf03c.output('getDimension', function (elem) {
          return $_3s6gko11kjdxlf0jx.get(elem) + 'px';
        })
      ],
      height: [
        $_d0ld34z6jdxlf03c.output('property', 'height'),
        $_d0ld34z6jdxlf03c.output('getDimension', function (elem) {
          return $_4y496102jdxlf08r.get(elem) + 'px';
        })
      ]
    }))
  ];

  var init$4 = function (spec) {
    var state = Cell(spec.expanded());
    var readState = function () {
      return 'expanded: ' + state.get();
    };
    return BehaviourState({
      isExpanded: function () {
        return state.get() === true;
      },
      isCollapsed: function () {
        return state.get() === false;
      },
      setCollapsed: $_26xiiiwjjdxlezmo.curry(state.set, false),
      setExpanded: $_26xiiiwjjdxlezmo.curry(state.set, true),
      readState: readState
    });
  };
  var $_dwl6ex15ajdxlf1ez = { init: init$4 };

  var Sliding = $_5tm9cmy2jdxlezw3.create({
    fields: SlidingSchema,
    name: 'sliding',
    active: $_d15crp157jdxlf1e9,
    apis: $_dhkrhf158jdxlf1eg,
    state: $_dwl6ex15ajdxlf1ez
  });

  var build$2 = function (refresh, scrollIntoView) {
    var dropup = $_e0aoww12tjdxlf0uv.build(Container.sketch({
      dom: {
        tag: 'div',
        classes: $_6pb5xszejdxlf051.resolve('dropup')
      },
      components: [],
      containerBehaviours: $_5tm9cmy2jdxlezw3.derive([
        Replacing.config({}),
        Sliding.config({
          closedClass: $_6pb5xszejdxlf051.resolve('dropup-closed'),
          openClass: $_6pb5xszejdxlf051.resolve('dropup-open'),
          shrinkingClass: $_6pb5xszejdxlf051.resolve('dropup-shrinking'),
          growingClass: $_6pb5xszejdxlf051.resolve('dropup-growing'),
          dimension: { property: 'height' },
          onShrunk: function (component) {
            refresh();
            scrollIntoView();
            Replacing.set(component, []);
          },
          onGrown: function (component) {
            refresh();
            scrollIntoView();
          }
        }),
        $_2qdoh4zdjdxlf04x.orientation(function (component, data) {
          disappear($_26xiiiwjjdxlezmo.noop);
        })
      ])
    }));
    var appear = function (menu, update, component) {
      if (Sliding.hasShrunk(dropup) === true && Sliding.isTransitioning(dropup) === false) {
        window.requestAnimationFrame(function () {
          update(component);
          Replacing.set(dropup, [menu()]);
          Sliding.grow(dropup);
        });
      }
    };
    var disappear = function (onReadyToShrink) {
      window.requestAnimationFrame(function () {
        onReadyToShrink();
        Sliding.shrink(dropup);
      });
    };
    return {
      appear: appear,
      disappear: disappear,
      component: $_26xiiiwjjdxlezmo.constant(dropup),
      element: dropup.element
    };
  };
  var $_d85wpa155jdxlf1dy = { build: build$2 };

  var isDangerous = function (event) {
    return event.raw().which === $_eha28uzpjdxlf06z.BACKSPACE()[0] && !$_6dbxmwwsjdxleznr.contains([
      'input',
      'textarea'
    ], $_xp48txkjdxlezsr.name(event.target()));
  };
  var isFirefox = $_g8mzcxwkjdxlezmu.detect().browser.isFirefox();
  var settingsSchema = $_2vagecyejdxlezzg.objOfOnly([
    $_5jvmj2y7jdxlezxo.strictFunction('triggerEvent'),
    $_5jvmj2y7jdxlezxo.strictFunction('broadcastEvent'),
    $_5jvmj2y7jdxlezxo.defaulted('stopBackspace', true)
  ]);
  var bindFocus = function (container, handler) {
    if (isFirefox) {
      return $_9icj6013xjdxlf151.capture(container, 'focus', handler);
    } else {
      return $_9icj6013xjdxlf151.bind(container, 'focusin', handler);
    }
  };
  var bindBlur = function (container, handler) {
    if (isFirefox) {
      return $_9icj6013xjdxlf151.capture(container, 'blur', handler);
    } else {
      return $_9icj6013xjdxlf151.bind(container, 'focusout', handler);
    }
  };
  var setup$2 = function (container, rawSettings) {
    var settings = $_2vagecyejdxlezzg.asRawOrDie('Getting GUI events settings', settingsSchema, rawSettings);
    var pointerEvents = $_g8mzcxwkjdxlezmu.detect().deviceType.isTouch() ? [
      'touchstart',
      'touchmove',
      'touchend',
      'gesturestart'
    ] : [
      'mousedown',
      'mouseup',
      'mouseover',
      'mousemove',
      'mouseout',
      'click'
    ];
    var tapEvent = $_917ttr144jdxlf16i.monitor(settings);
    var simpleEvents = $_6dbxmwwsjdxleznr.map(pointerEvents.concat([
      'selectstart',
      'input',
      'contextmenu',
      'change',
      'transitionend',
      'dragstart',
      'dragover',
      'drop'
    ]), function (type) {
      return $_9icj6013xjdxlf151.bind(container, type, function (event) {
        tapEvent.fireIfReady(event, type).each(function (tapStopped) {
          if (tapStopped)
            event.kill();
        });
        var stopped = settings.triggerEvent(type, event);
        if (stopped)
          event.kill();
      });
    });
    var onKeydown = $_9icj6013xjdxlf151.bind(container, 'keydown', function (event) {
      var stopped = settings.triggerEvent('keydown', event);
      if (stopped)
        event.kill();
      else if (settings.stopBackspace === true && isDangerous(event)) {
        event.prevent();
      }
    });
    var onFocusIn = bindFocus(container, function (event) {
      var stopped = settings.triggerEvent('focusin', event);
      if (stopped)
        event.kill();
    });
    var onFocusOut = bindBlur(container, function (event) {
      var stopped = settings.triggerEvent('focusout', event);
      if (stopped)
        event.kill();
      setTimeout(function () {
        settings.triggerEvent($_7mziizwhjdxlezm8.postBlur(), event);
      }, 0);
    });
    var defaultView = $_s9ri4x3jdxlezpx.defaultView(container);
    var onWindowScroll = $_9icj6013xjdxlf151.bind(defaultView, 'scroll', function (event) {
      var stopped = settings.broadcastEvent($_7mziizwhjdxlezm8.windowScroll(), event);
      if (stopped)
        event.kill();
    });
    var unbind = function () {
      $_6dbxmwwsjdxleznr.each(simpleEvents, function (e) {
        e.unbind();
      });
      onKeydown.unbind();
      onFocusIn.unbind();
      onFocusOut.unbind();
      onWindowScroll.unbind();
    };
    return { unbind: unbind };
  };
  var $_fwxfch15djdxlf1g2 = { setup: setup$2 };

  var derive$3 = function (rawEvent, rawTarget) {
    var source = $_ey6c2jxsjdxlezue.readOptFrom(rawEvent, 'target').map(function (getTarget) {
      return getTarget();
    }).getOr(rawTarget);
    return Cell(source);
  };
  var $_c062tp15fjdxlf1gp = { derive: derive$3 };

  var fromSource = function (event, source) {
    var stopper = Cell(false);
    var cutter = Cell(false);
    var stop = function () {
      stopper.set(true);
    };
    var cut = function () {
      cutter.set(true);
    };
    return {
      stop: stop,
      cut: cut,
      isStopped: stopper.get,
      isCut: cutter.get,
      event: $_26xiiiwjjdxlezmo.constant(event),
      setSource: source.set,
      getSource: source.get
    };
  };
  var fromExternal = function (event) {
    var stopper = Cell(false);
    var stop = function () {
      stopper.set(true);
    };
    return {
      stop: stop,
      cut: $_26xiiiwjjdxlezmo.noop,
      isStopped: stopper.get,
      isCut: $_26xiiiwjjdxlezmo.constant(false),
      event: $_26xiiiwjjdxlezmo.constant(event),
      setTarget: $_26xiiiwjjdxlezmo.die(new Error('Cannot set target of a broadcasted event')),
      getTarget: $_26xiiiwjjdxlezmo.die(new Error('Cannot get target of a broadcasted event'))
    };
  };
  var fromTarget = function (event, target) {
    var source = Cell(target);
    return fromSource(event, source);
  };
  var $_9z5tel15gjdxlf1gu = {
    fromSource: fromSource,
    fromExternal: fromExternal,
    fromTarget: fromTarget
  };

  var adt$6 = $_dxqtfixwjdxlezva.generate([
    { stopped: [] },
    { resume: ['element'] },
    { complete: [] }
  ]);
  var doTriggerHandler = function (lookup, eventType, rawEvent, target, source, logger) {
    var handler = lookup(eventType, target);
    var simulatedEvent = $_9z5tel15gjdxlf1gu.fromSource(rawEvent, source);
    return handler.fold(function () {
      logger.logEventNoHandlers(eventType, target);
      return adt$6.complete();
    }, function (handlerInfo) {
      var descHandler = handlerInfo.descHandler();
      var eventHandler = $_avg8t5134jdxlf0y7.getHandler(descHandler);
      eventHandler(simulatedEvent);
      if (simulatedEvent.isStopped()) {
        logger.logEventStopped(eventType, handlerInfo.element(), descHandler.purpose());
        return adt$6.stopped();
      } else if (simulatedEvent.isCut()) {
        logger.logEventCut(eventType, handlerInfo.element(), descHandler.purpose());
        return adt$6.complete();
      } else
        return $_s9ri4x3jdxlezpx.parent(handlerInfo.element()).fold(function () {
          logger.logNoParent(eventType, handlerInfo.element(), descHandler.purpose());
          return adt$6.complete();
        }, function (parent) {
          logger.logEventResponse(eventType, handlerInfo.element(), descHandler.purpose());
          return adt$6.resume(parent);
        });
    });
  };
  var doTriggerOnUntilStopped = function (lookup, eventType, rawEvent, rawTarget, source, logger) {
    return doTriggerHandler(lookup, eventType, rawEvent, rawTarget, source, logger).fold(function () {
      return true;
    }, function (parent) {
      return doTriggerOnUntilStopped(lookup, eventType, rawEvent, parent, source, logger);
    }, function () {
      return false;
    });
  };
  var triggerHandler = function (lookup, eventType, rawEvent, target, logger) {
    var source = $_c062tp15fjdxlf1gp.derive(rawEvent, target);
    return doTriggerHandler(lookup, eventType, rawEvent, target, source, logger);
  };
  var broadcast = function (listeners, rawEvent, logger) {
    var simulatedEvent = $_9z5tel15gjdxlf1gu.fromExternal(rawEvent);
    $_6dbxmwwsjdxleznr.each(listeners, function (listener) {
      var descHandler = listener.descHandler();
      var handler = $_avg8t5134jdxlf0y7.getHandler(descHandler);
      handler(simulatedEvent);
    });
    return simulatedEvent.isStopped();
  };
  var triggerUntilStopped = function (lookup, eventType, rawEvent, logger) {
    var rawTarget = rawEvent.target();
    return triggerOnUntilStopped(lookup, eventType, rawEvent, rawTarget, logger);
  };
  var triggerOnUntilStopped = function (lookup, eventType, rawEvent, rawTarget, logger) {
    var source = $_c062tp15fjdxlf1gp.derive(rawEvent, rawTarget);
    return doTriggerOnUntilStopped(lookup, eventType, rawEvent, rawTarget, source, logger);
  };
  var $_ea7uof15ejdxlf1gh = {
    triggerHandler: triggerHandler,
    triggerUntilStopped: triggerUntilStopped,
    triggerOnUntilStopped: triggerOnUntilStopped,
    broadcast: broadcast
  };

  var closest$4 = function (target, transform, isRoot) {
    var delegate = $_6w4r10yvjdxlf01p.closest(target, function (elem) {
      return transform(elem).isSome();
    }, isRoot);
    return delegate.bind(transform);
  };
  var $_d7igav15jjdxlf1hf = { closest: closest$4 };

  var eventHandler = $_8fo9b5x4jdxlezqc.immutable('element', 'descHandler');
  var messageHandler = function (id, handler) {
    return {
      id: $_26xiiiwjjdxlezmo.constant(id),
      descHandler: $_26xiiiwjjdxlezmo.constant(handler)
    };
  };
  function EventRegistry () {
    var registry = {};
    var registerId = function (extraArgs, id, events) {
      $_8ih830x0jdxlezpa.each(events, function (v, k) {
        var handlers = registry[k] !== undefined ? registry[k] : {};
        handlers[id] = $_avg8t5134jdxlf0y7.curryArgs(v, extraArgs);
        registry[k] = handlers;
      });
    };
    var findHandler = function (handlers, elem) {
      return $_ctuqf410xjdxlf0fo.read(elem).fold(function (err) {
        return Option.none();
      }, function (id) {
        var reader = $_ey6c2jxsjdxlezue.readOpt(id);
        return handlers.bind(reader).map(function (descHandler) {
          return eventHandler(elem, descHandler);
        });
      });
    };
    var filterByType = function (type) {
      return $_ey6c2jxsjdxlezue.readOptFrom(registry, type).map(function (handlers) {
        return $_8ih830x0jdxlezpa.mapToArray(handlers, function (f, id) {
          return messageHandler(id, f);
        });
      }).getOr([]);
    };
    var find = function (isAboveRoot, type, target) {
      var readType = $_ey6c2jxsjdxlezue.readOpt(type);
      var handlers = readType(registry);
      return $_d7igav15jjdxlf1hf.closest(target, function (elem) {
        return findHandler(handlers, elem);
      }, isAboveRoot);
    };
    var unregisterId = function (id) {
      $_8ih830x0jdxlezpa.each(registry, function (handlersById, eventName) {
        if (handlersById.hasOwnProperty(id))
          delete handlersById[id];
      });
    };
    return {
      registerId: registerId,
      unregisterId: unregisterId,
      filterByType: filterByType,
      find: find
    };
  }

  function Registry () {
    var events = EventRegistry();
    var components = {};
    var readOrTag = function (component) {
      var elem = component.element();
      return $_ctuqf410xjdxlf0fo.read(elem).fold(function () {
        return $_ctuqf410xjdxlf0fo.write('uid-', component.element());
      }, function (uid) {
        return uid;
      });
    };
    var failOnDuplicate = function (component, tagId) {
      var conflict = components[tagId];
      if (conflict === component)
        unregister(component);
      else
        throw new Error('The tagId "' + tagId + '" is already used by: ' + $_5vhxqxmjdxleztl.element(conflict.element()) + '\nCannot use it for: ' + $_5vhxqxmjdxleztl.element(component.element()) + '\n' + 'The conflicting element is' + ($_80u4ksxjjdxlezsm.inBody(conflict.element()) ? ' ' : ' not ') + 'already in the DOM');
    };
    var register = function (component) {
      var tagId = readOrTag(component);
      if ($_ey6c2jxsjdxlezue.hasKey(components, tagId))
        failOnDuplicate(component, tagId);
      var extraArgs = [component];
      events.registerId(extraArgs, tagId, component.events());
      components[tagId] = component;
    };
    var unregister = function (component) {
      $_ctuqf410xjdxlf0fo.read(component.element()).each(function (tagId) {
        components[tagId] = undefined;
        events.unregisterId(tagId);
      });
    };
    var filter = function (type) {
      return events.filterByType(type);
    };
    var find = function (isAboveRoot, type, target) {
      return events.find(isAboveRoot, type, target);
    };
    var getById = function (id) {
      return $_ey6c2jxsjdxlezue.readOpt(id)(components);
    };
    return {
      find: find,
      filter: filter,
      register: register,
      unregister: unregister,
      getById: getById
    };
  }

  var create$6 = function () {
    var root = $_e0aoww12tjdxlf0uv.build(Container.sketch({ dom: { tag: 'div' } }));
    return takeover(root);
  };
  var takeover = function (root) {
    var isAboveRoot = function (el) {
      return $_s9ri4x3jdxlezpx.parent(root.element()).fold(function () {
        return true;
      }, function (parent) {
        return $_4u044dx9jdxlezqw.eq(el, parent);
      });
    };
    var registry = Registry();
    var lookup = function (eventName, target) {
      return registry.find(isAboveRoot, eventName, target);
    };
    var domEvents = $_fwxfch15djdxlf1g2.setup(root.element(), {
      triggerEvent: function (eventName, event) {
        return $_8mf2lqxljdxlezsw.monitorEvent(eventName, event.target(), function (logger) {
          return $_ea7uof15ejdxlf1gh.triggerUntilStopped(lookup, eventName, event, logger);
        });
      },
      broadcastEvent: function (eventName, event) {
        var listeners = registry.filter(eventName);
        return $_ea7uof15ejdxlf1gh.broadcast(listeners, event);
      }
    });
    var systemApi = SystemApi({
      debugInfo: $_26xiiiwjjdxlezmo.constant('real'),
      triggerEvent: function (customType, target, data) {
        $_8mf2lqxljdxlezsw.monitorEvent(customType, target, function (logger) {
          $_ea7uof15ejdxlf1gh.triggerOnUntilStopped(lookup, customType, data, target, logger);
        });
      },
      triggerFocus: function (target, originator) {
        $_ctuqf410xjdxlf0fo.read(target).fold(function () {
          $_9am9mvytjdxlf01i.focus(target);
        }, function (_alloyId) {
          $_8mf2lqxljdxlezsw.monitorEvent($_7mziizwhjdxlezm8.focus(), target, function (logger) {
            $_ea7uof15ejdxlf1gh.triggerHandler(lookup, $_7mziizwhjdxlezm8.focus(), {
              originator: $_26xiiiwjjdxlezmo.constant(originator),
              target: $_26xiiiwjjdxlezmo.constant(target)
            }, target, logger);
          });
        });
      },
      triggerEscape: function (comp, simulatedEvent) {
        systemApi.triggerEvent('keydown', comp.element(), simulatedEvent.event());
      },
      getByUid: function (uid) {
        return getByUid(uid);
      },
      getByDom: function (elem) {
        return getByDom(elem);
      },
      build: $_e0aoww12tjdxlf0uv.build,
      addToGui: function (c) {
        add(c);
      },
      removeFromGui: function (c) {
        remove(c);
      },
      addToWorld: function (c) {
        addToWorld(c);
      },
      removeFromWorld: function (c) {
        removeFromWorld(c);
      },
      broadcast: function (message) {
        broadcast(message);
      },
      broadcastOn: function (channels, message) {
        broadcastOn(channels, message);
      }
    });
    var addToWorld = function (component) {
      component.connect(systemApi);
      if (!$_xp48txkjdxlezsr.isText(component.element())) {
        registry.register(component);
        $_6dbxmwwsjdxleznr.each(component.components(), addToWorld);
        systemApi.triggerEvent($_7mziizwhjdxlezm8.systemInit(), component.element(), { target: $_26xiiiwjjdxlezmo.constant(component.element()) });
      }
    };
    var removeFromWorld = function (component) {
      if (!$_xp48txkjdxlezsr.isText(component.element())) {
        $_6dbxmwwsjdxleznr.each(component.components(), removeFromWorld);
        registry.unregister(component);
      }
      component.disconnect();
    };
    var add = function (component) {
      $_fzj7dix1jdxlezpg.attach(root, component);
    };
    var remove = function (component) {
      $_fzj7dix1jdxlezpg.detach(component);
    };
    var destroy = function () {
      domEvents.unbind();
      $_6zenc9xhjdxlezse.remove(root.element());
    };
    var broadcastData = function (data) {
      var receivers = registry.filter($_7mziizwhjdxlezm8.receive());
      $_6dbxmwwsjdxleznr.each(receivers, function (receiver) {
        var descHandler = receiver.descHandler();
        var handler = $_avg8t5134jdxlf0y7.getHandler(descHandler);
        handler(data);
      });
    };
    var broadcast = function (message) {
      broadcastData({
        universal: $_26xiiiwjjdxlezmo.constant(true),
        data: $_26xiiiwjjdxlezmo.constant(message)
      });
    };
    var broadcastOn = function (channels, message) {
      broadcastData({
        universal: $_26xiiiwjjdxlezmo.constant(false),
        channels: $_26xiiiwjjdxlezmo.constant(channels),
        data: $_26xiiiwjjdxlezmo.constant(message)
      });
    };
    var getByUid = function (uid) {
      return registry.getById(uid).fold(function () {
        return Result.error(new Error('Could not find component with uid: "' + uid + '" in system.'));
      }, Result.value);
    };
    var getByDom = function (elem) {
      return $_ctuqf410xjdxlf0fo.read(elem).bind(getByUid);
    };
    addToWorld(root);
    return {
      root: $_26xiiiwjjdxlezmo.constant(root),
      element: root.element,
      destroy: destroy,
      add: add,
      remove: remove,
      getByUid: getByUid,
      getByDom: getByDom,
      addToWorld: addToWorld,
      removeFromWorld: removeFromWorld,
      broadcast: broadcast,
      broadcastOn: broadcastOn
    };
  };
  var $_avaxso15cjdxlf1fj = {
    create: create$6,
    takeover: takeover
  };

  var READ_ONLY_MODE_CLASS = $_26xiiiwjjdxlezmo.constant($_6pb5xszejdxlf051.resolve('readonly-mode'));
  var EDIT_MODE_CLASS = $_26xiiiwjjdxlezmo.constant($_6pb5xszejdxlf051.resolve('edit-mode'));
  function OuterContainer (spec) {
    var root = $_e0aoww12tjdxlf0uv.build(Container.sketch({
      dom: { classes: [$_6pb5xszejdxlf051.resolve('outer-container')].concat(spec.classes) },
      containerBehaviours: $_5tm9cmy2jdxlezw3.derive([Swapping.config({
          alpha: READ_ONLY_MODE_CLASS(),
          omega: EDIT_MODE_CLASS()
        })])
    }));
    return $_avaxso15cjdxlf1fj.takeover(root);
  }

  function AndroidRealm (scrollIntoView) {
    var alloy = OuterContainer({ classes: [$_6pb5xszejdxlf051.resolve('android-container')] });
    var toolbar = ScrollingToolbar();
    var webapp = $_cqf8mx12ojdxlf0tg.api();
    var switchToEdit = $_epo0q5154jdxlf1do.makeEditSwitch(webapp);
    var socket = $_epo0q5154jdxlf1do.makeSocket();
    var dropup = $_d85wpa155jdxlf1dy.build($_26xiiiwjjdxlezmo.noop, scrollIntoView);
    alloy.add(toolbar.wrapper());
    alloy.add(socket);
    alloy.add(dropup.component());
    var setToolbarGroups = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setGroups(groups);
    };
    var setContextToolbar = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setContextToolbar(groups);
    };
    var focusToolbar = function () {
      toolbar.focus();
    };
    var restoreToolbar = function () {
      toolbar.restoreToolbar();
    };
    var init = function (spec) {
      webapp.set($_9imf92140jdxlf15f.produce(spec));
    };
    var exit = function () {
      webapp.run(function (w) {
        w.exit();
        Replacing.remove(socket, switchToEdit);
      });
    };
    var updateMode = function (readOnly) {
      $_epo0q5154jdxlf1do.updateMode(socket, switchToEdit, readOnly, alloy.root());
    };
    return {
      system: $_26xiiiwjjdxlezmo.constant(alloy),
      element: alloy.element,
      init: init,
      exit: exit,
      setToolbarGroups: setToolbarGroups,
      setContextToolbar: setContextToolbar,
      focusToolbar: focusToolbar,
      restoreToolbar: restoreToolbar,
      updateMode: updateMode,
      socket: $_26xiiiwjjdxlezmo.constant(socket),
      dropup: $_26xiiiwjjdxlezmo.constant(dropup)
    };
  }

  var input = function (parent, operation) {
    var input = $_2ejbh1xfjdxlezs6.fromTag('input');
    $_99zvvg103jdxlf08t.setAll(input, {
      opacity: '0',
      position: 'absolute',
      top: '-1000px',
      left: '-1000px'
    });
    $_72vikbx2jdxlezpu.append(parent, input);
    $_9am9mvytjdxlf01i.focus(input);
    operation(input);
    $_6zenc9xhjdxlezse.remove(input);
  };
  var $_7p3xde15ojdxlf1il = { input: input };

  var refreshInput = function (input) {
    var start = input.dom().selectionStart;
    var end = input.dom().selectionEnd;
    var dir = input.dom().selectionDirection;
    setTimeout(function () {
      input.dom().setSelectionRange(start, end, dir);
      $_9am9mvytjdxlf01i.focus(input);
    }, 50);
  };
  var refresh = function (winScope) {
    var sel = winScope.getSelection();
    if (sel.rangeCount > 0) {
      var br = sel.getRangeAt(0);
      var r = winScope.document.createRange();
      r.setStart(br.startContainer, br.startOffset);
      r.setEnd(br.endContainer, br.endOffset);
      sel.removeAllRanges();
      sel.addRange(r);
    }
  };
  var $_2rnh115qjdxlf1iy = {
    refreshInput: refreshInput,
    refresh: refresh
  };

  var resume$1 = function (cWin, frame) {
    $_9am9mvytjdxlf01i.active().each(function (active) {
      if (!$_4u044dx9jdxlezqw.eq(active, frame)) {
        $_9am9mvytjdxlf01i.blur(active);
      }
    });
    cWin.focus();
    $_9am9mvytjdxlf01i.focus($_2ejbh1xfjdxlezs6.fromDom(cWin.document.body));
    $_2rnh115qjdxlf1iy.refresh(cWin);
  };
  var $_6xjkd15pjdxlf1is = { resume: resume$1 };

  var stubborn = function (outerBody, cWin, page, frame) {
    var toEditing = function () {
      $_6xjkd15pjdxlf1is.resume(cWin, frame);
    };
    var toReading = function () {
      $_7p3xde15ojdxlf1il.input(outerBody, $_9am9mvytjdxlf01i.blur);
    };
    var captureInput = $_9icj6013xjdxlf151.bind(page, 'keydown', function (evt) {
      if (!$_6dbxmwwsjdxleznr.contains([
          'input',
          'textarea'
        ], $_xp48txkjdxlezsr.name(evt.target()))) {
        toEditing();
      }
    });
    var onToolbarTouch = function () {
    };
    var destroy = function () {
      captureInput.unbind();
    };
    return {
      toReading: toReading,
      toEditing: toEditing,
      onToolbarTouch: onToolbarTouch,
      destroy: destroy
    };
  };
  var timid = function (outerBody, cWin, page, frame) {
    var dismissKeyboard = function () {
      $_9am9mvytjdxlf01i.blur(frame);
    };
    var onToolbarTouch = function () {
      dismissKeyboard();
    };
    var toReading = function () {
      dismissKeyboard();
    };
    var toEditing = function () {
      $_6xjkd15pjdxlf1is.resume(cWin, frame);
    };
    return {
      toReading: toReading,
      toEditing: toEditing,
      onToolbarTouch: onToolbarTouch,
      destroy: $_26xiiiwjjdxlezmo.noop
    };
  };
  var $_4y8l3c15njdxlf1ie = {
    stubborn: stubborn,
    timid: timid
  };

  var initEvents$1 = function (editorApi, iosApi, toolstrip, socket, dropup) {
    var saveSelectionFirst = function () {
      iosApi.run(function (api) {
        api.highlightSelection();
      });
    };
    var refreshIosSelection = function () {
      iosApi.run(function (api) {
        api.refreshSelection();
      });
    };
    var scrollToY = function (yTop, height) {
      var y = yTop - socket.dom().scrollTop;
      iosApi.run(function (api) {
        api.scrollIntoView(y, y + height);
      });
    };
    var scrollToElement = function (target) {
      scrollToY(iosApi, socket);
    };
    var scrollToCursor = function () {
      editorApi.getCursorBox().each(function (box) {
        scrollToY(box.top(), box.height());
      });
    };
    var clearSelection = function () {
      iosApi.run(function (api) {
        api.clearSelection();
      });
    };
    var clearAndRefresh = function () {
      clearSelection();
      refreshThrottle.throttle();
    };
    var refreshView = function () {
      scrollToCursor();
      iosApi.run(function (api) {
        api.syncHeight();
      });
    };
    var reposition = function () {
      var toolbarHeight = $_4y496102jdxlf08r.get(toolstrip);
      iosApi.run(function (api) {
        api.setViewportOffset(toolbarHeight);
      });
      refreshIosSelection();
      refreshView();
    };
    var toEditing = function () {
      iosApi.run(function (api) {
        api.toEditing();
      });
    };
    var toReading = function () {
      iosApi.run(function (api) {
        api.toReading();
      });
    };
    var onToolbarTouch = function (event) {
      iosApi.run(function (api) {
        api.onToolbarTouch(event);
      });
    };
    var tapping = $_uxhzn143jdxlf16d.monitor(editorApi);
    var refreshThrottle = $_5hqxi814wjdxlf1bo.last(refreshView, 300);
    var listeners = [
      editorApi.onKeyup(clearAndRefresh),
      editorApi.onNodeChanged(refreshIosSelection),
      editorApi.onDomChanged(refreshThrottle.throttle),
      editorApi.onDomChanged(refreshIosSelection),
      editorApi.onScrollToCursor(function (tinyEvent) {
        tinyEvent.preventDefault();
        refreshThrottle.throttle();
      }),
      editorApi.onScrollToElement(function (event) {
        scrollToElement(event.element());
      }),
      editorApi.onToEditing(toEditing),
      editorApi.onToReading(toReading),
      $_9icj6013xjdxlf151.bind(editorApi.doc(), 'touchend', function (touchEvent) {
        if ($_4u044dx9jdxlezqw.eq(editorApi.html(), touchEvent.target()) || $_4u044dx9jdxlezqw.eq(editorApi.body(), touchEvent.target())) {
        }
      }),
      $_9icj6013xjdxlf151.bind(toolstrip, 'transitionend', function (transitionEvent) {
        if (transitionEvent.raw().propertyName === 'height') {
          reposition();
        }
      }),
      $_9icj6013xjdxlf151.capture(toolstrip, 'touchstart', function (touchEvent) {
        saveSelectionFirst();
        onToolbarTouch(touchEvent);
        editorApi.onTouchToolstrip();
      }),
      $_9icj6013xjdxlf151.bind(editorApi.body(), 'touchstart', function (evt) {
        clearSelection();
        editorApi.onTouchContent();
        tapping.fireTouchstart(evt);
      }),
      tapping.onTouchmove(),
      tapping.onTouchend(),
      $_9icj6013xjdxlf151.bind(editorApi.body(), 'click', function (event) {
        event.kill();
      }),
      $_9icj6013xjdxlf151.bind(toolstrip, 'touchmove', function () {
        editorApi.onToolbarScrollStart();
      })
    ];
    var destroy = function () {
      $_6dbxmwwsjdxleznr.each(listeners, function (l) {
        l.unbind();
      });
    };
    return { destroy: destroy };
  };
  var $_g76ci015rjdxlf1j2 = { initEvents: initEvents$1 };

  function FakeSelection (win, frame) {
    var doc = win.document;
    var container = $_2ejbh1xfjdxlezs6.fromTag('div');
    $_79eveeynjdxlf012.add(container, $_6pb5xszejdxlf051.resolve('unfocused-selections'));
    $_72vikbx2jdxlezpu.append($_2ejbh1xfjdxlezs6.fromDom(doc.documentElement), container);
    var onTouch = $_9icj6013xjdxlf151.bind(container, 'touchstart', function (event) {
      event.prevent();
      $_6xjkd15pjdxlf1is.resume(win, frame);
      clear();
    });
    var make = function (rectangle) {
      var span = $_2ejbh1xfjdxlezs6.fromTag('span');
      $_3io6wv137jdxlf0z7.add(span, [
        $_6pb5xszejdxlf051.resolve('layer-editor'),
        $_6pb5xszejdxlf051.resolve('unfocused-selection')
      ]);
      $_99zvvg103jdxlf08t.setAll(span, {
        left: rectangle.left() + 'px',
        top: rectangle.top() + 'px',
        width: rectangle.width() + 'px',
        height: rectangle.height() + 'px'
      });
      return span;
    };
    var update = function () {
      clear();
      var rectangles = $_ge2bjf148jdxlf178.getRectangles(win);
      var spans = $_6dbxmwwsjdxleznr.map(rectangles, make);
      $_gixrgexijdxlezsi.append(container, spans);
    };
    var clear = function () {
      $_6zenc9xhjdxlezse.empty(container);
    };
    var destroy = function () {
      onTouch.unbind();
      $_6zenc9xhjdxlezse.remove(container);
    };
    var isActive = function () {
      return $_s9ri4x3jdxlezpx.children(container).length > 0;
    };
    return {
      update: update,
      isActive: isActive,
      destroy: destroy,
      clear: clear
    };
  }

  var nu$8 = function (baseFn) {
    var data = Option.none();
    var callbacks = [];
    var map = function (f) {
      return nu$8(function (nCallback) {
        get(function (data) {
          nCallback(f(data));
        });
      });
    };
    var get = function (nCallback) {
      if (isReady())
        call(nCallback);
      else
        callbacks.push(nCallback);
    };
    var set = function (x) {
      data = Option.some(x);
      run(callbacks);
      callbacks = [];
    };
    var isReady = function () {
      return data.isSome();
    };
    var run = function (cbs) {
      $_6dbxmwwsjdxleznr.each(cbs, call);
    };
    var call = function (cb) {
      data.each(function (x) {
        setTimeout(function () {
          cb(x);
        }, 0);
      });
    };
    baseFn(set);
    return {
      get: get,
      map: map,
      isReady: isReady
    };
  };
  var pure$1 = function (a) {
    return nu$8(function (callback) {
      callback(a);
    });
  };
  var LazyValue = {
    nu: nu$8,
    pure: pure$1
  };

  var bounce = function (f) {
    return function () {
      var args = Array.prototype.slice.call(arguments);
      var me = this;
      setTimeout(function () {
        f.apply(me, args);
      }, 0);
    };
  };
  var $_fr77xe15xjdxlf1kn = { bounce: bounce };

  var nu$9 = function (baseFn) {
    var get = function (callback) {
      baseFn($_fr77xe15xjdxlf1kn.bounce(callback));
    };
    var map = function (fab) {
      return nu$9(function (callback) {
        get(function (a) {
          var value = fab(a);
          callback(value);
        });
      });
    };
    var bind = function (aFutureB) {
      return nu$9(function (callback) {
        get(function (a) {
          aFutureB(a).get(callback);
        });
      });
    };
    var anonBind = function (futureB) {
      return nu$9(function (callback) {
        get(function (a) {
          futureB.get(callback);
        });
      });
    };
    var toLazy = function () {
      return LazyValue.nu(get);
    };
    return {
      map: map,
      bind: bind,
      anonBind: anonBind,
      toLazy: toLazy,
      get: get
    };
  };
  var pure$2 = function (a) {
    return nu$9(function (callback) {
      callback(a);
    });
  };
  var Future = {
    nu: nu$9,
    pure: pure$2
  };

  var adjust = function (value, destination, amount) {
    if (Math.abs(value - destination) <= amount) {
      return Option.none();
    } else if (value < destination) {
      return Option.some(value + amount);
    } else {
      return Option.some(value - amount);
    }
  };
  var create$7 = function () {
    var interval = null;
    var animate = function (getCurrent, destination, amount, increment, doFinish, rate) {
      var finished = false;
      var finish = function (v) {
        finished = true;
        doFinish(v);
      };
      clearInterval(interval);
      var abort = function (v) {
        clearInterval(interval);
        finish(v);
      };
      interval = setInterval(function () {
        var value = getCurrent();
        adjust(value, destination, amount).fold(function () {
          clearInterval(interval);
          finish(destination);
        }, function (s) {
          increment(s, abort);
          if (!finished) {
            var newValue = getCurrent();
            if (newValue !== s || Math.abs(newValue - destination) > Math.abs(value - destination)) {
              clearInterval(interval);
              finish(destination);
            }
          }
        });
      }, rate);
    };
    return { animate: animate };
  };
  var $_atv8u315yjdxlf1kq = {
    create: create$7,
    adjust: adjust
  };

  var findDevice = function (deviceWidth, deviceHeight) {
    var devices = [
      {
        width: 320,
        height: 480,
        keyboard: {
          portrait: 300,
          landscape: 240
        }
      },
      {
        width: 320,
        height: 568,
        keyboard: {
          portrait: 300,
          landscape: 240
        }
      },
      {
        width: 375,
        height: 667,
        keyboard: {
          portrait: 305,
          landscape: 240
        }
      },
      {
        width: 414,
        height: 736,
        keyboard: {
          portrait: 320,
          landscape: 240
        }
      },
      {
        width: 768,
        height: 1024,
        keyboard: {
          portrait: 320,
          landscape: 400
        }
      },
      {
        width: 1024,
        height: 1366,
        keyboard: {
          portrait: 380,
          landscape: 460
        }
      }
    ];
    return $_dznnjvy0jdxlezvy.findMap(devices, function (device) {
      return deviceWidth <= device.width && deviceHeight <= device.height ? Option.some(device.keyboard) : Option.none();
    }).getOr({
      portrait: deviceHeight / 5,
      landscape: deviceWidth / 4
    });
  };
  var $_d6e1wc161jdxlf1lh = { findDevice: findDevice };

  var softKeyboardLimits = function (outerWindow) {
    return $_d6e1wc161jdxlf1lh.findDevice(outerWindow.screen.width, outerWindow.screen.height);
  };
  var accountableKeyboardHeight = function (outerWindow) {
    var portrait = $_8343fs13wjdxlf14s.get(outerWindow).isPortrait();
    var limits = softKeyboardLimits(outerWindow);
    var keyboard = portrait ? limits.portrait : limits.landscape;
    var visualScreenHeight = portrait ? outerWindow.screen.height : outerWindow.screen.width;
    return visualScreenHeight - outerWindow.innerHeight > keyboard ? 0 : keyboard;
  };
  var getGreenzone = function (socket, dropup) {
    var outerWindow = $_s9ri4x3jdxlezpx.owner(socket).dom().defaultView;
    var viewportHeight = $_4y496102jdxlf08r.get(socket) + $_4y496102jdxlf08r.get(dropup);
    var acc = accountableKeyboardHeight(outerWindow);
    return viewportHeight - acc;
  };
  var updatePadding = function (contentBody, socket, dropup) {
    var greenzoneHeight = getGreenzone(socket, dropup);
    var deltaHeight = $_4y496102jdxlf08r.get(socket) + $_4y496102jdxlf08r.get(dropup) - greenzoneHeight;
    $_99zvvg103jdxlf08t.set(contentBody, 'padding-bottom', deltaHeight + 'px');
  };
  var $_eu4jsw160jdxlf1lb = {
    getGreenzone: getGreenzone,
    updatePadding: updatePadding
  };

  var fixture = $_dxqtfixwjdxlezva.generate([
    {
      fixed: [
        'element',
        'property',
        'offsetY'
      ]
    },
    {
      scroller: [
        'element',
        'offsetY'
      ]
    }
  ]);
  var yFixedData = 'data-' + $_6pb5xszejdxlf051.resolve('position-y-fixed');
  var yFixedProperty = 'data-' + $_6pb5xszejdxlf051.resolve('y-property');
  var yScrollingData = 'data-' + $_6pb5xszejdxlf051.resolve('scrolling');
  var windowSizeData = 'data-' + $_6pb5xszejdxlf051.resolve('last-window-height');
  var getYFixedData = function (element) {
    return $_8a6jqh147jdxlf175.safeParse(element, yFixedData);
  };
  var getYFixedProperty = function (element) {
    return $_72a1mgxrjdxlezu3.get(element, yFixedProperty);
  };
  var getLastWindowSize = function (element) {
    return $_8a6jqh147jdxlf175.safeParse(element, windowSizeData);
  };
  var classifyFixed = function (element, offsetY) {
    var prop = getYFixedProperty(element);
    return fixture.fixed(element, prop, offsetY);
  };
  var classifyScrolling = function (element, offsetY) {
    return fixture.scroller(element, offsetY);
  };
  var classify = function (element) {
    var offsetY = getYFixedData(element);
    var classifier = $_72a1mgxrjdxlezu3.get(element, yScrollingData) === 'true' ? classifyScrolling : classifyFixed;
    return classifier(element, offsetY);
  };
  var findFixtures = function (container) {
    var candidates = $_390b63zvjdxlf07x.descendants(container, '[' + yFixedData + ']');
    return $_6dbxmwwsjdxleznr.map(candidates, classify);
  };
  var takeoverToolbar = function (toolbar) {
    var oldToolbarStyle = $_72a1mgxrjdxlezu3.get(toolbar, 'style');
    $_99zvvg103jdxlf08t.setAll(toolbar, {
      position: 'absolute',
      top: '0px'
    });
    $_72a1mgxrjdxlezu3.set(toolbar, yFixedData, '0px');
    $_72a1mgxrjdxlezu3.set(toolbar, yFixedProperty, 'top');
    var restore = function () {
      $_72a1mgxrjdxlezu3.set(toolbar, 'style', oldToolbarStyle || '');
      $_72a1mgxrjdxlezu3.remove(toolbar, yFixedData);
      $_72a1mgxrjdxlezu3.remove(toolbar, yFixedProperty);
    };
    return { restore: restore };
  };
  var takeoverViewport = function (toolbarHeight, height, viewport) {
    var oldViewportStyle = $_72a1mgxrjdxlezu3.get(viewport, 'style');
    $_3zipxj13ujdxlf14h.register(viewport);
    $_99zvvg103jdxlf08t.setAll(viewport, {
      position: 'absolute',
      height: height + 'px',
      width: '100%',
      top: toolbarHeight + 'px'
    });
    $_72a1mgxrjdxlezu3.set(viewport, yFixedData, toolbarHeight + 'px');
    $_72a1mgxrjdxlezu3.set(viewport, yScrollingData, 'true');
    $_72a1mgxrjdxlezu3.set(viewport, yFixedProperty, 'top');
    var restore = function () {
      $_3zipxj13ujdxlf14h.deregister(viewport);
      $_72a1mgxrjdxlezu3.set(viewport, 'style', oldViewportStyle || '');
      $_72a1mgxrjdxlezu3.remove(viewport, yFixedData);
      $_72a1mgxrjdxlezu3.remove(viewport, yScrollingData);
      $_72a1mgxrjdxlezu3.remove(viewport, yFixedProperty);
    };
    return { restore: restore };
  };
  var takeoverDropup = function (dropup, toolbarHeight, viewportHeight) {
    var oldDropupStyle = $_72a1mgxrjdxlezu3.get(dropup, 'style');
    $_99zvvg103jdxlf08t.setAll(dropup, {
      position: 'absolute',
      bottom: '0px'
    });
    $_72a1mgxrjdxlezu3.set(dropup, yFixedData, '0px');
    $_72a1mgxrjdxlezu3.set(dropup, yFixedProperty, 'bottom');
    var restore = function () {
      $_72a1mgxrjdxlezu3.set(dropup, 'style', oldDropupStyle || '');
      $_72a1mgxrjdxlezu3.remove(dropup, yFixedData);
      $_72a1mgxrjdxlezu3.remove(dropup, yFixedProperty);
    };
    return { restore: restore };
  };
  var deriveViewportHeight = function (viewport, toolbarHeight, dropupHeight) {
    var outerWindow = $_s9ri4x3jdxlezpx.owner(viewport).dom().defaultView;
    var winH = outerWindow.innerHeight;
    $_72a1mgxrjdxlezu3.set(viewport, windowSizeData, winH + 'px');
    return winH - toolbarHeight - dropupHeight;
  };
  var takeover$1 = function (viewport, contentBody, toolbar, dropup) {
    var outerWindow = $_s9ri4x3jdxlezpx.owner(viewport).dom().defaultView;
    var toolbarSetup = takeoverToolbar(toolbar);
    var toolbarHeight = $_4y496102jdxlf08r.get(toolbar);
    var dropupHeight = $_4y496102jdxlf08r.get(dropup);
    var viewportHeight = deriveViewportHeight(viewport, toolbarHeight, dropupHeight);
    var viewportSetup = takeoverViewport(toolbarHeight, viewportHeight, viewport);
    var dropupSetup = takeoverDropup(dropup, toolbarHeight, viewportHeight);
    var isActive = true;
    var restore = function () {
      isActive = false;
      toolbarSetup.restore();
      viewportSetup.restore();
      dropupSetup.restore();
    };
    var isExpanding = function () {
      var currentWinHeight = outerWindow.innerHeight;
      var lastWinHeight = getLastWindowSize(viewport);
      return currentWinHeight > lastWinHeight;
    };
    var refresh = function () {
      if (isActive) {
        var newToolbarHeight = $_4y496102jdxlf08r.get(toolbar);
        var dropupHeight_1 = $_4y496102jdxlf08r.get(dropup);
        var newHeight = deriveViewportHeight(viewport, newToolbarHeight, dropupHeight_1);
        $_72a1mgxrjdxlezu3.set(viewport, yFixedData, newToolbarHeight + 'px');
        $_99zvvg103jdxlf08t.set(viewport, 'height', newHeight + 'px');
        $_99zvvg103jdxlf08t.set(dropup, 'bottom', -(newToolbarHeight + newHeight + dropupHeight_1) + 'px');
        $_eu4jsw160jdxlf1lb.updatePadding(contentBody, viewport, dropup);
      }
    };
    var setViewportOffset = function (newYOffset) {
      var offsetPx = newYOffset + 'px';
      $_72a1mgxrjdxlezu3.set(viewport, yFixedData, offsetPx);
      refresh();
    };
    $_eu4jsw160jdxlf1lb.updatePadding(contentBody, viewport, dropup);
    return {
      setViewportOffset: setViewportOffset,
      isExpanding: isExpanding,
      isShrinking: $_26xiiiwjjdxlezmo.not(isExpanding),
      refresh: refresh,
      restore: restore
    };
  };
  var $_fg8ycl15zjdxlf1kv = {
    findFixtures: findFixtures,
    takeover: takeover$1,
    getYFixedData: getYFixedData
  };

  var animator = $_atv8u315yjdxlf1kq.create();
  var ANIMATION_STEP = 15;
  var NUM_TOP_ANIMATION_FRAMES = 10;
  var ANIMATION_RATE = 10;
  var lastScroll = 'data-' + $_6pb5xszejdxlf051.resolve('last-scroll-top');
  var getTop = function (element) {
    var raw = $_99zvvg103jdxlf08t.getRaw(element, 'top').getOr(0);
    return parseInt(raw, 10);
  };
  var getScrollTop = function (element) {
    return parseInt(element.dom().scrollTop, 10);
  };
  var moveScrollAndTop = function (element, destination, finalTop) {
    return Future.nu(function (callback) {
      var getCurrent = $_26xiiiwjjdxlezmo.curry(getScrollTop, element);
      var update = function (newScroll) {
        element.dom().scrollTop = newScroll;
        $_99zvvg103jdxlf08t.set(element, 'top', getTop(element) + ANIMATION_STEP + 'px');
      };
      var finish = function () {
        element.dom().scrollTop = destination;
        $_99zvvg103jdxlf08t.set(element, 'top', finalTop + 'px');
        callback(destination);
      };
      animator.animate(getCurrent, destination, ANIMATION_STEP, update, finish, ANIMATION_RATE);
    });
  };
  var moveOnlyScroll = function (element, destination) {
    return Future.nu(function (callback) {
      var getCurrent = $_26xiiiwjjdxlezmo.curry(getScrollTop, element);
      $_72a1mgxrjdxlezu3.set(element, lastScroll, getCurrent());
      var update = function (newScroll, abort) {
        var previous = $_8a6jqh147jdxlf175.safeParse(element, lastScroll);
        if (previous !== element.dom().scrollTop) {
          abort(element.dom().scrollTop);
        } else {
          element.dom().scrollTop = newScroll;
          $_72a1mgxrjdxlezu3.set(element, lastScroll, newScroll);
        }
      };
      var finish = function () {
        element.dom().scrollTop = destination;
        $_72a1mgxrjdxlezu3.set(element, lastScroll, destination);
        callback(destination);
      };
      var distance = Math.abs(destination - getCurrent());
      var step = Math.ceil(distance / NUM_TOP_ANIMATION_FRAMES);
      animator.animate(getCurrent, destination, step, update, finish, ANIMATION_RATE);
    });
  };
  var moveOnlyTop = function (element, destination) {
    return Future.nu(function (callback) {
      var getCurrent = $_26xiiiwjjdxlezmo.curry(getTop, element);
      var update = function (newTop) {
        $_99zvvg103jdxlf08t.set(element, 'top', newTop + 'px');
      };
      var finish = function () {
        update(destination);
        callback(destination);
      };
      var distance = Math.abs(destination - getCurrent());
      var step = Math.ceil(distance / NUM_TOP_ANIMATION_FRAMES);
      animator.animate(getCurrent, destination, step, update, finish, ANIMATION_RATE);
    });
  };
  var updateTop = function (element, amount) {
    var newTop = amount + $_fg8ycl15zjdxlf1kv.getYFixedData(element) + 'px';
    $_99zvvg103jdxlf08t.set(element, 'top', newTop);
  };
  var moveWindowScroll = function (toolbar, viewport, destY) {
    var outerWindow = $_s9ri4x3jdxlezpx.owner(toolbar).dom().defaultView;
    return Future.nu(function (callback) {
      updateTop(toolbar, destY);
      updateTop(viewport, destY);
      outerWindow.scrollTo(0, destY);
      callback(destY);
    });
  };
  var $_6o66xg15ujdxlf1k9 = {
    moveScrollAndTop: moveScrollAndTop,
    moveOnlyScroll: moveOnlyScroll,
    moveOnlyTop: moveOnlyTop,
    moveWindowScroll: moveWindowScroll
  };

  function BackgroundActivity (doAction) {
    var action = Cell(LazyValue.pure({}));
    var start = function (value) {
      var future = LazyValue.nu(function (callback) {
        return doAction(value).get(callback);
      });
      action.set(future);
    };
    var idle = function (g) {
      action.get().get(function () {
        g();
      });
    };
    return {
      start: start,
      idle: idle
    };
  }

  var scrollIntoView = function (cWin, socket, dropup, top, bottom) {
    var greenzone = $_eu4jsw160jdxlf1lb.getGreenzone(socket, dropup);
    var refreshCursor = $_26xiiiwjjdxlezmo.curry($_2rnh115qjdxlf1iy.refresh, cWin);
    if (top > greenzone || bottom > greenzone) {
      $_6o66xg15ujdxlf1k9.moveOnlyScroll(socket, socket.dom().scrollTop - greenzone + bottom).get(refreshCursor);
    } else if (top < 0) {
      $_6o66xg15ujdxlf1k9.moveOnlyScroll(socket, socket.dom().scrollTop + top).get(refreshCursor);
    } else {
    }
  };
  var $_5wqirz163jdxlf1lr = { scrollIntoView: scrollIntoView };

  var par = function (asyncValues, nu) {
    return nu(function (callback) {
      var r = [];
      var count = 0;
      var cb = function (i) {
        return function (value) {
          r[i] = value;
          count++;
          if (count >= asyncValues.length) {
            callback(r);
          }
        };
      };
      if (asyncValues.length === 0) {
        callback([]);
      } else {
        $_6dbxmwwsjdxleznr.each(asyncValues, function (asyncValue, i) {
          asyncValue.get(cb(i));
        });
      }
    });
  };
  var $_33yap5166jdxlf1me = { par: par };

  var par$1 = function (futures) {
    return $_33yap5166jdxlf1me.par(futures, Future.nu);
  };
  var mapM = function (array, fn) {
    var futures = $_6dbxmwwsjdxleznr.map(array, fn);
    return par$1(futures);
  };
  var compose$1 = function (f, g) {
    return function (a) {
      return g(a).bind(f);
    };
  };
  var $_6uom4t165jdxlf1mc = {
    par: par$1,
    mapM: mapM,
    compose: compose$1
  };

  var updateFixed = function (element, property, winY, offsetY) {
    var destination = winY + offsetY;
    $_99zvvg103jdxlf08t.set(element, property, destination + 'px');
    return Future.pure(offsetY);
  };
  var updateScrollingFixed = function (element, winY, offsetY) {
    var destTop = winY + offsetY;
    var oldProp = $_99zvvg103jdxlf08t.getRaw(element, 'top').getOr(offsetY);
    var delta = destTop - parseInt(oldProp, 10);
    var destScroll = element.dom().scrollTop + delta;
    return $_6o66xg15ujdxlf1k9.moveScrollAndTop(element, destScroll, destTop);
  };
  var updateFixture = function (fixture, winY) {
    return fixture.fold(function (element, property, offsetY) {
      return updateFixed(element, property, winY, offsetY);
    }, function (element, offsetY) {
      return updateScrollingFixed(element, winY, offsetY);
    });
  };
  var updatePositions = function (container, winY) {
    var fixtures = $_fg8ycl15zjdxlf1kv.findFixtures(container);
    var updates = $_6dbxmwwsjdxleznr.map(fixtures, function (fixture) {
      return updateFixture(fixture, winY);
    });
    return $_6uom4t165jdxlf1mc.par(updates);
  };
  var $_4dijdq164jdxlf1ly = { updatePositions: updatePositions };

  var VIEW_MARGIN = 5;
  var register$2 = function (toolstrip, socket, container, outerWindow, structure, cWin) {
    var scroller = BackgroundActivity(function (y) {
      return $_6o66xg15ujdxlf1k9.moveWindowScroll(toolstrip, socket, y);
    });
    var scrollBounds = function () {
      var rects = $_ge2bjf148jdxlf178.getRectangles(cWin);
      return Option.from(rects[0]).bind(function (rect) {
        var viewTop = rect.top() - socket.dom().scrollTop;
        var outside = viewTop > outerWindow.innerHeight + VIEW_MARGIN || viewTop < -VIEW_MARGIN;
        return outside ? Option.some({
          top: $_26xiiiwjjdxlezmo.constant(viewTop),
          bottom: $_26xiiiwjjdxlezmo.constant(viewTop + rect.height())
        }) : Option.none();
      });
    };
    var scrollThrottle = $_5hqxi814wjdxlf1bo.last(function () {
      scroller.idle(function () {
        $_4dijdq164jdxlf1ly.updatePositions(container, outerWindow.pageYOffset).get(function () {
          var extraScroll = scrollBounds();
          extraScroll.each(function (extra) {
            socket.dom().scrollTop = socket.dom().scrollTop + extra.top();
          });
          scroller.start(0);
          structure.refresh();
        });
      });
    }, 1000);
    var onScroll = $_9icj6013xjdxlf151.bind($_2ejbh1xfjdxlezs6.fromDom(outerWindow), 'scroll', function () {
      if (outerWindow.pageYOffset < 0) {
        return;
      }
      scrollThrottle.throttle();
    });
    $_4dijdq164jdxlf1ly.updatePositions(container, outerWindow.pageYOffset).get($_26xiiiwjjdxlezmo.identity);
    return { unbind: onScroll.unbind };
  };
  var setup$3 = function (bag) {
    var cWin = bag.cWin();
    var ceBody = bag.ceBody();
    var socket = bag.socket();
    var toolstrip = bag.toolstrip();
    var toolbar = bag.toolbar();
    var contentElement = bag.contentElement();
    var keyboardType = bag.keyboardType();
    var outerWindow = bag.outerWindow();
    var dropup = bag.dropup();
    var structure = $_fg8ycl15zjdxlf1kv.takeover(socket, ceBody, toolstrip, dropup);
    var keyboardModel = keyboardType(bag.outerBody(), cWin, $_80u4ksxjjdxlezsm.body(), contentElement, toolstrip, toolbar);
    var toEditing = function () {
      keyboardModel.toEditing();
      clearSelection();
    };
    var toReading = function () {
      keyboardModel.toReading();
    };
    var onToolbarTouch = function (event) {
      keyboardModel.onToolbarTouch(event);
    };
    var onOrientation = $_8343fs13wjdxlf14s.onChange(outerWindow, {
      onChange: $_26xiiiwjjdxlezmo.noop,
      onReady: structure.refresh
    });
    onOrientation.onAdjustment(function () {
      structure.refresh();
    });
    var onResize = $_9icj6013xjdxlf151.bind($_2ejbh1xfjdxlezs6.fromDom(outerWindow), 'resize', function () {
      if (structure.isExpanding()) {
        structure.refresh();
      }
    });
    var onScroll = register$2(toolstrip, socket, bag.outerBody(), outerWindow, structure, cWin);
    var unfocusedSelection = FakeSelection(cWin, contentElement);
    var refreshSelection = function () {
      if (unfocusedSelection.isActive()) {
        unfocusedSelection.update();
      }
    };
    var highlightSelection = function () {
      unfocusedSelection.update();
    };
    var clearSelection = function () {
      unfocusedSelection.clear();
    };
    var scrollIntoView = function (top, bottom) {
      $_5wqirz163jdxlf1lr.scrollIntoView(cWin, socket, dropup, top, bottom);
    };
    var syncHeight = function () {
      $_99zvvg103jdxlf08t.set(contentElement, 'height', contentElement.dom().contentWindow.document.body.scrollHeight + 'px');
    };
    var setViewportOffset = function (newYOffset) {
      structure.setViewportOffset(newYOffset);
      $_6o66xg15ujdxlf1k9.moveOnlyTop(socket, newYOffset).get($_26xiiiwjjdxlezmo.identity);
    };
    var destroy = function () {
      structure.restore();
      onOrientation.destroy();
      onScroll.unbind();
      onResize.unbind();
      keyboardModel.destroy();
      unfocusedSelection.destroy();
      $_7p3xde15ojdxlf1il.input($_80u4ksxjjdxlezsm.body(), $_9am9mvytjdxlf01i.blur);
    };
    return {
      toEditing: toEditing,
      toReading: toReading,
      onToolbarTouch: onToolbarTouch,
      refreshSelection: refreshSelection,
      clearSelection: clearSelection,
      highlightSelection: highlightSelection,
      scrollIntoView: scrollIntoView,
      updateToolbarPadding: $_26xiiiwjjdxlezmo.noop,
      setViewportOffset: setViewportOffset,
      syncHeight: syncHeight,
      refreshStructure: structure.refresh,
      destroy: destroy
    };
  };
  var $_9v83ip15sjdxlf1jc = { setup: setup$3 };

  var create$8 = function (platform, mask) {
    var meta = $_6ti03s14ujdxlf1b8.tag();
    var priorState = $_cqf8mx12ojdxlf0tg.value();
    var scrollEvents = $_cqf8mx12ojdxlf0tg.value();
    var iosApi = $_cqf8mx12ojdxlf0tg.api();
    var iosEvents = $_cqf8mx12ojdxlf0tg.api();
    var enter = function () {
      mask.hide();
      var doc = $_2ejbh1xfjdxlezs6.fromDom(document);
      $_bygz314sjdxlf1an.getActiveApi(platform.editor).each(function (editorApi) {
        priorState.set({
          socketHeight: $_99zvvg103jdxlf08t.getRaw(platform.socket, 'height'),
          iframeHeight: $_99zvvg103jdxlf08t.getRaw(editorApi.frame(), 'height'),
          outerScroll: document.body.scrollTop
        });
        scrollEvents.set({ exclusives: $_gqv3v153jdxlf1dg.exclusive(doc, '.' + $_3zipxj13ujdxlf14h.scrollable()) });
        $_79eveeynjdxlf012.add(platform.container, $_6pb5xszejdxlf051.resolve('fullscreen-maximized'));
        $_86tqj014tjdxlf1az.clobberStyles(platform.container, editorApi.body());
        meta.maximize();
        $_99zvvg103jdxlf08t.set(platform.socket, 'overflow', 'scroll');
        $_99zvvg103jdxlf08t.set(platform.socket, '-webkit-overflow-scrolling', 'touch');
        $_9am9mvytjdxlf01i.focus(editorApi.body());
        var setupBag = $_8fo9b5x4jdxlezqc.immutableBag([
          'cWin',
          'ceBody',
          'socket',
          'toolstrip',
          'toolbar',
          'dropup',
          'contentElement',
          'cursor',
          'keyboardType',
          'isScrolling',
          'outerWindow',
          'outerBody'
        ], []);
        iosApi.set($_9v83ip15sjdxlf1jc.setup(setupBag({
          cWin: editorApi.win(),
          ceBody: editorApi.body(),
          socket: platform.socket,
          toolstrip: platform.toolstrip,
          toolbar: platform.toolbar,
          dropup: platform.dropup.element(),
          contentElement: editorApi.frame(),
          cursor: $_26xiiiwjjdxlezmo.noop,
          outerBody: platform.body,
          outerWindow: platform.win,
          keyboardType: $_4y8l3c15njdxlf1ie.stubborn,
          isScrolling: function () {
            return scrollEvents.get().exists(function (s) {
              return s.socket.isScrolling();
            });
          }
        })));
        iosApi.run(function (api) {
          api.syncHeight();
        });
        iosEvents.set($_g76ci015rjdxlf1j2.initEvents(editorApi, iosApi, platform.toolstrip, platform.socket, platform.dropup));
      });
    };
    var exit = function () {
      meta.restore();
      iosEvents.clear();
      iosApi.clear();
      mask.show();
      priorState.on(function (s) {
        s.socketHeight.each(function (h) {
          $_99zvvg103jdxlf08t.set(platform.socket, 'height', h);
        });
        s.iframeHeight.each(function (h) {
          $_99zvvg103jdxlf08t.set(platform.editor.getFrame(), 'height', h);
        });
        document.body.scrollTop = s.scrollTop;
      });
      priorState.clear();
      scrollEvents.on(function (s) {
        s.exclusives.unbind();
      });
      scrollEvents.clear();
      $_79eveeynjdxlf012.remove(platform.container, $_6pb5xszejdxlf051.resolve('fullscreen-maximized'));
      $_86tqj014tjdxlf1az.restoreStyles();
      $_3zipxj13ujdxlf14h.deregister(platform.toolbar);
      $_99zvvg103jdxlf08t.remove(platform.socket, 'overflow');
      $_99zvvg103jdxlf08t.remove(platform.socket, '-webkit-overflow-scrolling');
      $_9am9mvytjdxlf01i.blur(platform.editor.getFrame());
      $_bygz314sjdxlf1an.getActiveApi(platform.editor).each(function (editorApi) {
        editorApi.clearSelection();
      });
    };
    var refreshStructure = function () {
      iosApi.run(function (api) {
        api.refreshStructure();
      });
    };
    return {
      enter: enter,
      refreshStructure: refreshStructure,
      exit: exit
    };
  };
  var $_4pkoxo15mjdxlf1i2 = { create: create$8 };

  var produce$1 = function (raw) {
    var mobile = $_2vagecyejdxlezzg.asRawOrDie('Getting IosWebapp schema', MobileSchema, raw);
    $_99zvvg103jdxlf08t.set(mobile.toolstrip, 'width', '100%');
    $_99zvvg103jdxlf08t.set(mobile.container, 'position', 'relative');
    var onView = function () {
      mobile.setReadOnly(true);
      mode.enter();
    };
    var mask = $_e0aoww12tjdxlf0uv.build($_b130f514vjdxlf1bf.sketch(onView, mobile.translate));
    mobile.alloy.add(mask);
    var maskApi = {
      show: function () {
        mobile.alloy.add(mask);
      },
      hide: function () {
        mobile.alloy.remove(mask);
      }
    };
    var mode = $_4pkoxo15mjdxlf1i2.create(mobile, maskApi);
    return {
      setReadOnly: mobile.setReadOnly,
      refreshStructure: mode.refreshStructure,
      enter: mode.enter,
      exit: mode.exit,
      destroy: $_26xiiiwjjdxlezmo.noop
    };
  };
  var $_f1wkrv15ljdxlf1hw = { produce: produce$1 };

  function IosRealm (scrollIntoView) {
    var alloy = OuterContainer({ classes: [$_6pb5xszejdxlf051.resolve('ios-container')] });
    var toolbar = ScrollingToolbar();
    var webapp = $_cqf8mx12ojdxlf0tg.api();
    var switchToEdit = $_epo0q5154jdxlf1do.makeEditSwitch(webapp);
    var socket = $_epo0q5154jdxlf1do.makeSocket();
    var dropup = $_d85wpa155jdxlf1dy.build(function () {
      webapp.run(function (w) {
        w.refreshStructure();
      });
    }, scrollIntoView);
    alloy.add(toolbar.wrapper());
    alloy.add(socket);
    alloy.add(dropup.component());
    var setToolbarGroups = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setGroups(groups);
    };
    var setContextToolbar = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setContextToolbar(groups);
    };
    var focusToolbar = function () {
      toolbar.focus();
    };
    var restoreToolbar = function () {
      toolbar.restoreToolbar();
    };
    var init = function (spec) {
      webapp.set($_f1wkrv15ljdxlf1hw.produce(spec));
    };
    var exit = function () {
      webapp.run(function (w) {
        Replacing.remove(socket, switchToEdit);
        w.exit();
      });
    };
    var updateMode = function (readOnly) {
      $_epo0q5154jdxlf1do.updateMode(socket, switchToEdit, readOnly, alloy.root());
    };
    return {
      system: $_26xiiiwjjdxlezmo.constant(alloy),
      element: alloy.element,
      init: init,
      exit: exit,
      setToolbarGroups: setToolbarGroups,
      setContextToolbar: setContextToolbar,
      focusToolbar: focusToolbar,
      restoreToolbar: restoreToolbar,
      updateMode: updateMode,
      socket: $_26xiiiwjjdxlezmo.constant(socket),
      dropup: $_26xiiiwjjdxlezmo.constant(dropup)
    };
  }

  var EditorManager = tinymce.util.Tools.resolve('tinymce.EditorManager');

  var derive$4 = function (editor) {
    var base = $_ey6c2jxsjdxlezue.readOptFrom(editor.settings, 'skin_url').fold(function () {
      return EditorManager.baseURL + '/skins/' + 'lightgray';
    }, function (url) {
      return url;
    });
    return {
      content: base + '/content.mobile.min.css',
      ui: base + '/skin.mobile.min.css'
    };
  };
  var $_aj3c8i167jdxlf1mi = { derive: derive$4 };

  var fontSizes = [
    'x-small',
    'small',
    'medium',
    'large',
    'x-large'
  ];
  var fireChange$1 = function (realm, command, state) {
    realm.system().broadcastOn([$_62vx58z1jdxlf026.formatChanged()], {
      command: command,
      state: state
    });
  };
  var init$5 = function (realm, editor) {
    var allFormats = $_8ih830x0jdxlezpa.keys(editor.formatter.get());
    $_6dbxmwwsjdxleznr.each(allFormats, function (command) {
      editor.formatter.formatChanged(command, function (state) {
        fireChange$1(realm, command, state);
      });
    });
    $_6dbxmwwsjdxleznr.each([
      'ul',
      'ol'
    ], function (command) {
      editor.selection.selectorChanged(command, function (state, data) {
        fireChange$1(realm, command, state);
      });
    });
  };
  var $_2pipck169jdxlf1mm = {
    init: init$5,
    fontSizes: $_26xiiiwjjdxlezmo.constant(fontSizes)
  };

  var fireSkinLoaded = function (editor) {
    var done = function () {
      editor._skinLoaded = true;
      editor.fire('SkinLoaded');
    };
    return function () {
      if (editor.initialized) {
        done();
      } else {
        editor.on('init', done);
      }
    };
  };
  var $_dxsdry16ajdxlf1ms = { fireSkinLoaded: fireSkinLoaded };

  var READING = $_26xiiiwjjdxlezmo.constant('toReading');
  var EDITING = $_26xiiiwjjdxlezmo.constant('toEditing');
  ThemeManager.add('mobile', function (editor) {
    var renderUI = function (args) {
      var cssUrls = $_aj3c8i167jdxlf1mi.derive(editor);
      if ($_8i8331z0jdxlf025.isSkinDisabled(editor) === false) {
        editor.contentCSS.push(cssUrls.content);
        DOMUtils.DOM.styleSheetLoader.load(cssUrls.ui, $_dxsdry16ajdxlf1ms.fireSkinLoaded(editor));
      } else {
        $_dxsdry16ajdxlf1ms.fireSkinLoaded(editor)();
      }
      var doScrollIntoView = function () {
        editor.fire('scrollIntoView');
      };
      var wrapper = $_2ejbh1xfjdxlezs6.fromTag('div');
      var realm = $_g8mzcxwkjdxlezmu.detect().os.isAndroid() ? AndroidRealm(doScrollIntoView) : IosRealm(doScrollIntoView);
      var original = $_2ejbh1xfjdxlezs6.fromDom(args.targetNode);
      $_72vikbx2jdxlezpu.after(original, wrapper);
      $_fzj7dix1jdxlezpg.attachSystem(wrapper, realm.system());
      var findFocusIn = function (elem) {
        return $_9am9mvytjdxlf01i.search(elem).bind(function (focused) {
          return realm.system().getByDom(focused).toOption();
        });
      };
      var outerWindow = args.targetNode.ownerDocument.defaultView;
      var orientation = $_8343fs13wjdxlf14s.onChange(outerWindow, {
        onChange: function () {
          var alloy = realm.system();
          alloy.broadcastOn([$_62vx58z1jdxlf026.orientationChanged()], { width: $_8343fs13wjdxlf14s.getActualWidth(outerWindow) });
        },
        onReady: $_26xiiiwjjdxlezmo.noop
      });
      var setReadOnly = function (readOnlyGroups, mainGroups, ro) {
        if (ro === false) {
          editor.selection.collapse();
        }
        realm.setToolbarGroups(ro ? readOnlyGroups.get() : mainGroups.get());
        editor.setMode(ro === true ? 'readonly' : 'design');
        editor.fire(ro === true ? READING() : EDITING());
        realm.updateMode(ro);
      };
      var bindHandler = function (label, handler) {
        editor.on(label, handler);
        return {
          unbind: function () {
            editor.off(label);
          }
        };
      };
      editor.on('init', function () {
        realm.init({
          editor: {
            getFrame: function () {
              return $_2ejbh1xfjdxlezs6.fromDom(editor.contentAreaContainer.querySelector('iframe'));
            },
            onDomChanged: function () {
              return { unbind: $_26xiiiwjjdxlezmo.noop };
            },
            onToReading: function (handler) {
              return bindHandler(READING(), handler);
            },
            onToEditing: function (handler) {
              return bindHandler(EDITING(), handler);
            },
            onScrollToCursor: function (handler) {
              editor.on('scrollIntoView', function (tinyEvent) {
                handler(tinyEvent);
              });
              var unbind = function () {
                editor.off('scrollIntoView');
                orientation.destroy();
              };
              return { unbind: unbind };
            },
            onTouchToolstrip: function () {
              hideDropup();
            },
            onTouchContent: function () {
              var toolbar = $_2ejbh1xfjdxlezs6.fromDom(editor.editorContainer.querySelector('.' + $_6pb5xszejdxlf051.resolve('toolbar')));
              findFocusIn(toolbar).each($_7qvrqpwgjdxlezlj.emitExecute);
              realm.restoreToolbar();
              hideDropup();
            },
            onTapContent: function (evt) {
              var target = evt.target();
              if ($_xp48txkjdxlezsr.name(target) === 'img') {
                editor.selection.select(target.dom());
                evt.kill();
              } else if ($_xp48txkjdxlezsr.name(target) === 'a') {
                var component = realm.system().getByDom($_2ejbh1xfjdxlezs6.fromDom(editor.editorContainer));
                component.each(function (container) {
                  if (Swapping.isAlpha(container)) {
                    $_9knnkhyzjdxlf023.openLink(target.dom());
                  }
                });
              }
            }
          },
          container: $_2ejbh1xfjdxlezs6.fromDom(editor.editorContainer),
          socket: $_2ejbh1xfjdxlezs6.fromDom(editor.contentAreaContainer),
          toolstrip: $_2ejbh1xfjdxlezs6.fromDom(editor.editorContainer.querySelector('.' + $_6pb5xszejdxlf051.resolve('toolstrip'))),
          toolbar: $_2ejbh1xfjdxlezs6.fromDom(editor.editorContainer.querySelector('.' + $_6pb5xszejdxlf051.resolve('toolbar'))),
          dropup: realm.dropup(),
          alloy: realm.system(),
          translate: $_26xiiiwjjdxlezmo.noop,
          setReadOnly: function (ro) {
            setReadOnly(readOnlyGroups, mainGroups, ro);
          }
        });
        var hideDropup = function () {
          realm.dropup().disappear(function () {
            realm.system().broadcastOn([$_62vx58z1jdxlf026.dropupDismissed()], {});
          });
        };
        $_8mf2lqxljdxlezsw.registerInspector('remove this', realm.system());
        var backToMaskGroup = {
          label: 'The first group',
          scrollable: false,
          items: [$_50h76zfjdxlf054.forToolbar('back', function () {
              editor.selection.collapse();
              realm.exit();
            }, {})]
        };
        var backToReadOnlyGroup = {
          label: 'Back to read only',
          scrollable: false,
          items: [$_50h76zfjdxlf054.forToolbar('readonly-back', function () {
              setReadOnly(readOnlyGroups, mainGroups, true);
            }, {})]
        };
        var readOnlyGroup = {
          label: 'The read only mode group',
          scrollable: true,
          items: []
        };
        var features = $_a5ksjgz2jdxlf02b.setup(realm, editor);
        var items = $_a5ksjgz2jdxlf02b.detect(editor.settings, features);
        var actionGroup = {
          label: 'the action group',
          scrollable: true,
          items: items
        };
        var extraGroup = {
          label: 'The extra group',
          scrollable: false,
          items: []
        };
        var mainGroups = Cell([
          backToReadOnlyGroup,
          actionGroup,
          extraGroup
        ]);
        var readOnlyGroups = Cell([
          backToMaskGroup,
          readOnlyGroup,
          extraGroup
        ]);
        $_2pipck169jdxlf1mm.init(realm, editor);
      });
      return {
        iframeContainer: realm.socket().element().dom(),
        editorContainer: realm.element().dom()
      };
    };
    return {
      getNotificationManagerImpl: function () {
        return {
          open: $_26xiiiwjjdxlezmo.identity,
          close: $_26xiiiwjjdxlezmo.noop,
          reposition: $_26xiiiwjjdxlezmo.noop,
          getArgs: $_26xiiiwjjdxlezmo.identity
        };
      },
      renderUI: renderUI
    };
  });
  function Theme () {
  }

  return Theme;

}());
})();
