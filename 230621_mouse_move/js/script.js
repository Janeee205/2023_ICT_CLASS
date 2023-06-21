const pointer = document.getElementById('pointer');

window.addEventListener('mousemove', (event) => {
  // console.log("마우스 좌표 x값 : " + event.clientX, "/ 마우스 좌표 y값 : " + event.clientY);
  //console.log(`마우스 x 값: ${event.clientX}, 마우스 y값: ${event.clientY}`);
  //css의 top, left 값
  pointer.style.top = `${event.clientY - (pointer.offsetHeight/2)}px`;
  pointer.style.left = `${event.clientX - (pointer.offsetHeight/2)}px`;

  console.log(pointer.offsetWidth);
})