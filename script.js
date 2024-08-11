const SideMenu = document.querySelector('#sideMenu');

function openSideMenu() {
    console.log('openSideMenu');
  SideMenu.style.transform = 'translateX(-100%)';
}

function closeSideMenu() {
    SideMenu.style.transform = 'translateX(100%)';
  }

