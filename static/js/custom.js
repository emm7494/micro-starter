function toggleClassList(target, classList, condition) {
  classList.forEach((cls) => {
    target.classList.toggle(cls, condition);
  });
}

const siteNavbar = document.querySelector(".site-navbar");
function toggleNavbarTransparent(condition) {
  toggleClassList(siteNavbar, ["navbar-dark"], condition);
  toggleClassList(
    siteNavbar,
    ["navbar-light", "bg-light", "site-navbar--shadow"],
    !condition
  );
}

const heroSentinel = document.createElement("div");
heroSentinel.classList.add("hero_sentinel");

const hero = document.querySelector(".hero");
hero.appendChild(heroSentinel);

const io = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry.isIntersecting);
      toggleNavbarTransparent(entry.isIntersecting);
    });
  },
  { root: null, rootMargin: `0px 0px 0px`, threshold: [0] }
);

io.observe(heroSentinel);

console.log("cool");
