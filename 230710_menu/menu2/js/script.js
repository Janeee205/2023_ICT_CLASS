let mainMenu = document.querySelectorAll('.gnb li');
let subMenu = document.querySelector('.sub-menu');
let subMenuUl = document.querySelectorAll('.sub-menu li');

// find() : 자식 밑 하위태그 찾을때
// children() : 자식요소만 찾을때

// ul을 따로 만들었다면
// index
// eq()
mainMenu.forEach(function (item, mainIndex) {
  item.addEventListener('mouseover', function () {
    subMenu.style.visibility = "visible";

    subMenuUl.forEach(function (li, subIndex) {
      
      // 서브메뉴 하나하나 마우스 올렸을때 나오는 index값을
      // 메인메뉴 index값과 일치시
      // 메인메뉴의 컬러 바뀸
      li.addEventListener('mouseover', function () {
        console.log(li);
        if (mainIndex == subIndex) {
          item.classList.add('active');
          console.log(mainIndex + "메인메뉴인덱스")
          console.log(subIndex + "서브메뉴인덱스")


        }


      })
    })

  })
})