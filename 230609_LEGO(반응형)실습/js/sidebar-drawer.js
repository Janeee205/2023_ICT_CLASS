const drawerMenuButtonList = document.querySelectorAll('.drawer-menu-button');

function toggleDrawerMenu() {
  // this는 클릭 이벤트가 발생한 요소를 가르킨다.
  // 클릭된 자기자신을 가르킴
  // parentNode : 클릭된 요소의 부모요소를 찾는다.
  const drawerMenu = this.parentNode;

  // toggle : 클래스가 있을경우 제거, 없는경우 추가
  drawerMenu.classList.toggle('is-open');
  drawerMenu.classList.toggle('is-active');
}

// forEach로 반복된 값을 button(매개변수)에 담아준다.
drawerMenuButtonList.forEach(function (button) {
  button.addEventListener('click', toggleDrawerMenu);
})