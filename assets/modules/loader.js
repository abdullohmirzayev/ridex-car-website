function loader(loading) {
  loader = document.querySelector(loading);

  // loader
  setTimeout(() => {
    loader.style.opacit = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);
}
export default loader;
