import Swiper from "swiper";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

(function () {
  const isOpen = document.querySelector(".services-header__burger");
  const isClose = document.querySelector(".services-header__menu-close");
  const navigation = document.querySelector(".services-header__menu");


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

(function () {
  
  const tabs = document.querySelectorAll(".tabs__link");

  
  const contents = document.querySelectorAll(".tabs__content-text");

  
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((n) => n.classList.remove("active"));
      contents.forEach((m) => m.classList.remove("active"));
      tab.classList.add("active");
      contents[index].classList.add("active");
    });
  });
})();


const swiper = new Swiper(".swiper", {
  modules: [ Pagination],
  
  
  pagination: {
    el: ".swiper-pagination",
  },

  
});


