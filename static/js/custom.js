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


var oldScrollPos = window.pageYOffset;
var navbar = document.getElementsByClassName('site-navbar')[0];
window.onscroll = () =>  {
  var newScrollPos = window.pageYOffset;
  if (oldScrollPos > newScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-" + navbar.scrollHeight + "px";
  }
  oldScrollPos = newScrollPos;
};



// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById('zz').style.top = "0";
//   } else {
//     document.getElementById('zz').style.top = "-200x";
//   }
//   prevScrollpos = currentScrollPos;
// };

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
