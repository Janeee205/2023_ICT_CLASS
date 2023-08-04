
let inputs = document.querySelectorAll('input');
let labels = document.querySelectorAll('label');
let inputboxs = document.querySelectorAll('.inputbox');


inputs.forEach(function (input) {
  input.addEventListener('focusin', function () {
    this.parentElement.classList.add('border-act');
  })
})

inputs.forEach(function (input) {
  input.addEventListener('focusout', function () {
    this.parentElement.classList.remove('border-act');
  })
})



let idvari = pwveri = pwchkveri = nameveri = birthveri = genderveri = phoneveri = addrveri = false;
let emailveri = true;

document.querySelector('input[name="userid"]').addEventListener('focusout', () => {
  let userId = document.querySelector('input[name="userid"]').value;

  let idExp = /^[a-z0-9]{5,8}$/;

  if (userId == 0) {

  }


})