window.addEventListener("DOMContentLoaded", () => {
  //js

  const clas = require("../modules/class"),
    form = require("../modules/form"),
    loader = require("../modules/loader"),
    modal = require("../modules/modal"),
    tab = require("../modules/tap"),
    timer = require("../modules/timer");

  clas();
  form();
  loader();
  modal();
  tab();
  timer();
});
