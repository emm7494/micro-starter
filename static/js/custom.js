// $(".main-site-nav .nav-link").on("click", function() {
//   $(this)
//     .css({ "color": "green" })
//     .parent()
//     .addClass("active");
// });

// $('.site-nav-link').click(function () {
//     $(this).parents('.site-nav-item').addClass('active').siblings().removeClass('active').css({
//         'background-color': 'yellow'
//     })
// })
// $(".nav-link").click(e => {
//   $(e.target)
//     .parent(".nav-item")
//     .addClass("active")
//     .siblings(".nav-item")
//     .removeClass("active");
// });

//Bootstrap4 .active class on clicked links
$("[class$=nav]").on("click", ".nav-link", { x: 99 }, e => {
  $(e.target)
    .parent(".nav-item")
    .addClass("active")
    .siblings(".nav-item")
    .removeClass("active");
});
