var btn = document.getElementById('show');
var container = document.getElementById('containerVasio')
var container2 = document.getElementById('container2')
var container3 = document.getElementById('container3')
var container4 = document.getElementById('container4')
var container5 = document.getElementById('container5')

function opcao1() {
    if(container2.style.display === 'block') {
        container2.style.display = 'none';
    } else {
        container2.style.display = 'grid'
        container2.style.placeItems = 'center'
    }
}


function opcao2(){
    if(container3.style.display === 'block') {
        container.style.display = 'none'
    } else {
        container3.style.display = "grid"
        container3.style.placeItems = 'center'
    }
}

function opcao3(){
    if(container4.style.display === 'block') {
        container.style.display = 'none'
    } else {
        container4.style.display = "grid"
        container4.style.placeItems = 'center'
    }
}

function opcao4(){
    if(container5.style.display === 'block') {
        container.style.display = 'none'
    } else {
        container5.style.display = "grid"
        container5.style.placeItems = 'center'
    }
}