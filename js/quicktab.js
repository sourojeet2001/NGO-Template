$(document).ready(function () {
  $(".tab-a").click(function () {
    $(".tab").removeClass("tab-active");
    $(".tab[data-id='" + $(this).attr("data-id") + "']").addClass("tab-active");
    $(".tab-a").removeClass("active-a");
    $(this).parent().find(".tab-a").addClass("active-a");
  });
});
