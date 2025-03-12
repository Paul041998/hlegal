import "../scss/style.scss";

(function () {
  const isOpen = document.querySelector(".header__burger");
  const isClose = document.querySelector(".header__menu-close");
  const navigation = document.querySelector(".header__menu");

  if (isOpen && navigation) {
    isOpen.addEventListener("click", () => {
      navigation.classList.toggle("active");
    });
  }

  if (isClose && navigation) {
    isClose.addEventListener("click", () => {
      navigation.classList.remove("active");
    });
  }

  document.addEventListener("click", (event) => {
    if (
      navigation &&
      !navigation.contains(event.target) &&
      isOpen &&
      !isOpen.contains(event.target)
    ) {
      navigation.classList.remove("active");
    }
  });
})();
