$(".gnb-list").hover(function () {
  $(this).find("ul").stop().slideDown();
  $(this).find("ul").addClass("active")
}, function () {
  $(this).find("ul").stop().slideUp();
  $(this).find("ul").removeClass("active")
})
