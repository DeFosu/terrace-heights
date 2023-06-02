$('document').ready(function(){
    // localStorage.clear;
    readFromLocal();
});
const date = new Date().toJSON().slice(0, 10);
function readFromLocal () {
    $('.typeRoom').text(localStorage.getItem('typeRoom'));
    $('.dateRoom').text(date);
    $('.priceRoom').text(localStorage.getItem('priceRoom'));
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var formData = new FormData(this);
    console.log([...formData.entries(), ['typeRoom', localStorage.getItem('typeRoom')], ['priceRoom', localStorage.getItem('priceRoom')], ['dateReg', date]]);
  });
  