const SideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openSideMenu() {
    console.log('openSideMenu');
  SideMenu.style.transform = 'translateX(-100%)';
}

function closeSideMenu() {
    SideMenu.style.transform = 'translateX(100%)';
  }

window.addEventListener('scroll', () => {
  if(scrollY > 50){
    navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
    navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', "dark:bg-transparent");
}else{
    navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
    navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', "dark:bg-transparent");
}
})
