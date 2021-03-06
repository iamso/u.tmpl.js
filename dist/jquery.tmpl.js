/*!
 * u.tmpl.js - Version 0.2.0
 * simple javascript template function
 * Author: Steve Ottoz <so@dev.so>
 * Build date: 2016-08-13
 * Copyright (c) 2016 Steve Ottoz
 * Released under the MIT license
 */
;(function (factory) {
  'use strict';

  if (/^f/.test(typeof define) && define.amd) {
    define(['jquery'], factory);
  }
  else if (/^o/.test(typeof exports)) {
    factory(require('jquery'));
  }
  else {
    factory(jQuery);
  }
})(function ($) {


  'use strict';

  var cache = {};

  $.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/<%.*%>/.test(str) ?
      cache[str] = cache[str] ||
        tmpl($(str).html()) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'") +
        "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };


});
