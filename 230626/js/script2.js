// list element를 변수에 담는다.
// list element에서 자식요소 list__item요소를 querySelectorAll로 담기

const list = document.querySelector('.list');
const listItem = list.querySelectorAll('.list__item');

listItem.forEach(item => {
  // console.log(item);

  // 불러온 아이템을 click할때마다 active클래스를 추가삭제 한다.

  item.addEventListener('click', () => {
    // item 하나만 active class를 가질 수 있다.
    listItem.forEach(item => item.classList.remove('active'));

    // item에 active 클래스를 추가 또는 삭제
    item.classList.add('active');
    // item.classList.toggle('active');

  })
});