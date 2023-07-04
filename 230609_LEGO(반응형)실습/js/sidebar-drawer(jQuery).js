// drawer-menu-button(3)을 클릭했을때
// this(클릭된 요소)를 찾아서 부모요소에게 is-open, is-active를 toggle.

const drawerMenuButtonList = $('.drawer-menu-button');

function toggleDrawerMenu() {
const drawerMenu = $(this).parent();
drawerMenu.toggleClass('is-open');
drawerMenu.toggleClass('is-active');
}

drawerMenuButtonList.on('click', toggleDrawerMenu);