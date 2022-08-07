'use strict'


function onOpenMenu() {
    document.body.classList.add('menu-open')
}

function onCloseBars() {
    document.body.classList.remove('menu-open')
    document.body.classList.remove('modal-open')
}

function onShowModal() {
    document.body.classList.add('modal-open')
    
}

function onSubmit(ev){
    ev.preventDefault()
    document.body.classList.remove('modal-open')
    // console.log('close modal');
}