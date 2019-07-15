var jQuery = require("jquery");
var scrollify = require("jquery-scrollify");
window.$ = window.jQuery;
var landingPage = {
  init: function init() {
    var sections = jQuery(".full-height");

    var sectionsArr = jQuery.makeArray(sections);
    var prevPosition = 0;
    scrollify.move(".footer");
    jQuery(document).on("scroll", function() {
      let delta = Math.abs(jQuery(window).scrollTop() - prevPosition);
      console.log("Delta: " + delta);

       
    });
  }
};

module.exports = landingPage;
