document.addEventListener('DOMContentLoaded', function () {
  var points = document.querySelectorAll('#imagemap area');
  result = document.getElementById('result');

  Array.prototype.slice.call(points).forEach(function(point) {

    point.addEventListener('mouseenter', function() {
      result.innerHTML = this.alt + '<br>' + result.innerHTML;
    });

  });
});