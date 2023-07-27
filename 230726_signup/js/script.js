/*
const agreeAll = document.querySelector('.all-checkterms input[type="checkbox"]');
// console.log(agreeAll);

agreeAll.addEventListener('change', (e) => {
  let agreeChk = document.querySelectorAll('.checkterms input[type="checkbox"]');
  console.log(agreeChk);

  for (let i = 0; i < agreeChk.length; i++) {
    agreeChk[i].checked = e.target.checked;
  }
});

if('.checkterms input[type="checkbox"][2] && .checkterms input[type="checkbox"][3]')
*/

// $('#total').on('click', function () {
//   if (this.checked) {
//     $('.check_wrap input').attr("checked", true);

//   } else {
//     $('.check_wrap input').attr("checked", false);
//   }
// })

var is_checked = true;

$('.form-wrap').on('click', '#total', function () {
  $(this).parents('.form-wrap').find('input').prop("checked", $(this).is(":checked"));
})

$('.form-wrap').on('click', '.check_wrap input', function () {
  var is_checked = true;

  $('.check_wrap input').each(function () {
    is_checked = is_checked && $(this).is(':checked');
  });

  $('#total').prop('checked', is_checked);
})

let essInput = $('.ess-wrap input[type="checkbox"]:checked+label');

let essInputChecked = $('.ess-wrap input[type="checkbox"]:checked+label');


essInput.change(function () {
  if ('essInput'.length == 'essInputChecked'.length) {
    $('.notice p').css('display') == 'none';
  } else {
    $('.notice p').css('display') == 'block';
  }
})

// $('.ess-wrap input[type="checkbox"]:checked+label').each(function () {
//   var chk = $(this).val;
//   console.log(chk);
//   if (chk < 1) {
//     $('.notice p').css('display') == 'block';
//   }
// })