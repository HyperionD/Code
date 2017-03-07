function Tab() {
  const tab = document.querySelectorAll('.tab');

  function activeTab(tabTitle, tabContents) {
    const tabTitleId = tabTitle.id;
    tabTitle.classList.add('active');
    for (let i=0; i < tabContents.length; i++) {
      const tabContentFor = tabContents[i].getAttribute('for');
      if (tabContentFor === tabTitleId) {
        tabContents[i].classList.add('active');
        break;
      }
    }
  }

  function removeTabActive(tabEl) {
    const activeTabs = tabEl.querySelectorAll('.active');
    for (let i=0; i<activeTabs.length; i++) {
      activeTabs[i].classList.remove('active');
    }
  }

  function tabInit() {
    if (tab) {
      for (let i=0; i < tab.length; i++) {
        const firstTitle = tab[i].querySelector('.tab-title-item');
        const tabContent = tab[i].querySelectorAll('.tab-content-item');
        activeTab(firstTitle, tabContent);
      }
    }
  }


  function tabClick() {
    if (tab) {
      for (let i=0; i < tab.length; i++) {
        const tabTitles = tab[i].querySelectorAll('.tab-title-item');
        const tabContents = tab[i].querySelectorAll('.tab-content-item');
        for (let j=0; j < tabTitles.length; j++) {
          const tabTitle = tabTitles[j];

          function click() {
            removeTabActive(tab[i]);
            activeTab(tabTitle, tabContents);
          }

          tabTitle.addEventListener('click', click, false);
        }
      }
    }
  }

  tabInit();
  tabClick();
}
