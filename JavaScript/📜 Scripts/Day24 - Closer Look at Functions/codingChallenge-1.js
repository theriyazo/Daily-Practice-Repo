"use strict";

const changeheading1ColorToBlue = (function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  return function () {
    document.querySelector("body").addEventListener("click", function () {
      header.style.color = "blue";
    });
  };
})();

changeheading1ColorToBlue();
