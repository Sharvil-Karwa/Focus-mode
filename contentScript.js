(() => {
  window.addEventListener("load", function () {
    const alpha = window.location.href.split("?")[0];
    if (
      alpha == "https://www.youtube.com/" ||
      alpha == "https://m.youtube.com/"
    ) {
      document.querySelector("#scroll-container").innerHTML = "<div></div>";
      document.querySelector(
        "#page-manager > ytd-browse > ytd-two-column-browse-results-renderer"
      ).innerHTML = "<div></div>";
      document.querySelector("#sections").innerHTML = "<div></div>";
    }
  });
  console.log(window.location.href);
})();
