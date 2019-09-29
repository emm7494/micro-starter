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
// $("navbar-nav").on("click", ".nav-link", {}, e => {
//   $(e.target)
//     .parent(".nav-item")
//     .addClass("active")
//     .siblings(".nav-item")
//     .removeClass("active");
//   console.log(999);
// });

let el = document.getElementById("time-area");
(function timeLoop() {
  el.textContent =
    moment()
      .toISOString()
      .split(".")[0] + "Z";
  el.textContent +=
    "\n" +
    document.documentElement.clientWidth +
    " x " +
    document.documentElement.clientHeight;
  requestAnimationFrame(timeLoop);
})();

// let th = document.getElementById("time-area");
// th.appendChild(document.createTextNode(""));
// (function timeLoop() {
//   let now = document.createTextNode(moment().toISOString());
//   th.replaceChild(now, th.childNodes[0]);
//   requestAnimationFrame(timeLoop);
// })();

// (function timeLoop() {
//   $("#time-area").text(
//     moment()
//       .toISOString()
//       .split(".")[0] + "Z"
//   );
//   requestAnimationFrame(timeLoop);
// })();
console.log("cool");
