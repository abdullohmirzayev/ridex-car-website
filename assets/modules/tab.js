function tab(
  tabsSelector,
  tabsContentSelector,
  tabsParentSelector,
  activeClass
) {
  // Tabs
  const tabsParent = document.querySelector(tabsParentSelector),
    tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector);

  function hideTabsContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }
  function showTabsContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add(activeClass);
  }

  hideTabsContent();
  showTabsContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, idx) => {
        if (target == item) {
          hideTabsContent();
          showTabsContent(idx);
        }
      });
    }
  });
}

export default tab;
