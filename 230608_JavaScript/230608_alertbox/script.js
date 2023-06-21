// const alert = document.getElementById('alert');
// const openBtn = document.getElementById('open-btn');
// const closeBtn = document.getElementById('close-btn');



document.getElementById('open-btn').addEventListener('click', function(){
  document.getElementById('alert').style.display = 'flex';
})

function closeAlert(){
  document.getElementById('alert').style.display = 'none';
}

document.getElementById('click-btn').addEventListener('click', closeAlert);


document.getElementById('open-btn2').addEventListener('click', function(){
document.getElementById('alert2').style.display = 'flex';

})

// document.getElementById('click-btn2').addEventListener('click', function(){
//   document.getElementById('alert2').style.display = 'none';
// })


function closeAlert2(){
  document.getElementById('alert2').style.display = 'none';
}

document.getElementById('click-btn2').addEventListener('click', closeAlert2);


// 연습

