var typeRoom;
var priceRoom;
// var dateRoom = getDate();
$('document').ready(function(){
    // localStorage.clear;
    readBtn();
});

function readBtn() {
    $('a.addToLocal').on('click', addToLocal)
}

function addToLocal() {
    typeRoom = $(this).attr('data-type');
    priceRoom = $(this).attr('data-price');
    localStorage.setItem('typeRoom', typeRoom );
    localStorage.setItem('priceRoom', priceRoom );
}