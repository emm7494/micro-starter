const heroSentinel = document.createElement("div");
heroSentinel.classList.add("hero_sentinel");

const hero = document.querySelector(".hero");
hero.appendChild(heroSentinel);

const siteNavbar = document.querySelector(".site-navbar");

const io = new IntersectionObserver(
  (entries, observer) => {
    console.log(observer.rootMargin);
    entries.forEach((entry) => {
      console.log(
        entry.target,
        entry.intersectionRatio,
        entry.intersectionRect,
        entry.boundingClientRect,
        entry.rootBounds,
        entry.isIntersecting
      );

      ["navbar-dark"].forEach((cls) =>
        siteNavbar.classList.toggle(cls, entry.isIntersecting)
      );
      ["navbar-light", "bg-light", "site-navbar--shadow"].forEach((cls) =>
        siteNavbar.classList.toggle(cls, !entry.isIntersecting)
      );
      if (!entry.isIntersecting) {
        console.log("not intersecting");
      } else {
        console.log("is intersecting");
      }
    });
  },
  { root: null, rootMargin: `0px 0px 0px`, threshold: [0] }
);

io.observe(heroSentinel);
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

// var oldScrollPos = window.pageYOffset;
// var navbar = document.getElementsByClassName("site-navbarz")[0];
// window.onscroll = () => {
//   var newScrollPos = window.pageYOffset;
//   if (oldScrollPos > newScrollPos) {
//     navbar.style.top = "0";
//   } else {
//     navbar.style.top = "-" + navbar.scrollHeight + "px";
//   }
//   oldScrollPos = newScrollPos;
// };

// var ele = document.querySelector("#on-test")[0];
// var io = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       console.log(entry.target, observer);
//     });
//   },
//   {
//     // delay: 100,
//     // trackVisibility: true
//   }
// );

// io.observe(ele);

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

// let el = document.getElementById("time-areaz");
// (function timeLoop() {
//   el.textContent =
//     moment()
//       .toISOString()
//       .split(".")[0] + "Z";
//   el.textContent +=
//     "\n" +
//     document.documentElement.clientWidth +
//     " x " +
//     document.documentElement.clientHeight;
//   requestAnimationFrame(timeLoop);
// })();

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
