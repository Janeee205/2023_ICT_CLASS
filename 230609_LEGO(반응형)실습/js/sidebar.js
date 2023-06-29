const sidebar = document.querySelector('.sidebar');
const sidebarMenuButton = document.querySelector('.gnb-icon-button');
const sidebarOverlay = document.querySelector('.overlay');

// 오버레이

const openSideBar = () => {
    sidebar.classList.add('is-active');
    sidebarOverlay.classList.add('is-active');
}

sidebarMenuButton.addEventListener('click', openSideBar);

const closeSideBar = () => {
    sidebar.classList.remove('is-active');
    sidebarOverlay.classList.remove('is-active');
}

sidebarOverlay.addEventListener('click', closeSideBar);