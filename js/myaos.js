$(document).ready(function() {
  AOS.init();
  setInterval(() => {
    AOS.refreshHard();
  },500);
});