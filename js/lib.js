module.exports = function (window) {
  if (process && process.title != "browser") {
    window.jQuery = window.$ = require("jquery")(window);
  } else {
    window.jQuery = window.$ = require("jquery");
  }

  window.React = require("react");
  window.ReactDOM = require("react-dom");
  window.ReactRouter = require("react-router");
  window.cx = require("classnames");
  window.initData = require('./initData');
};
