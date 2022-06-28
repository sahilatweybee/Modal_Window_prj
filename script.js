'use strict';

var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var btnClose = document.querySelector('.close-modal');
var btnShow = document.querySelectorAll('.show-modal');
console.log(btnShow);

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0; i<btnShow.length; i++){
    btnShow[i].addEventListener('click', openModal);
}

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

btnShow[0].addEventListener('keydown', function(e){
    console.log(e);
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }
});
