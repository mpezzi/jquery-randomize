/**
 * jQuery Randomize Plugin by M. Pezzi
 * http://thespiral.ca/jquery/randomize/demo/
 * Version: 1.0 (08/08/11)
 * Dual licensed under the MIT and GPL licences:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.4.2 or later
 */
(function($){
  $.fn.randomize = function(element) {
    return this.each(function(){
      var self = $(this), children = self.children(element);
      
      // Sort child elements randomly.
      children.sort(function() {
        return Math.round(Math.random()) - 0.5;
      });

      // Remove child elements.
      self.remove(element);

      // Add child elements in new order.
      children.each(function(){
        $(this).appendTo(self);
      });
    });
  };
})(jQuery);
