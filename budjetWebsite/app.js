const header = document.querySelector('nav');

let prevScrollPos = window.scrollY;

window.onscroll = function(){
    let currentScrollPos = window.scrollY;
    if(prevScrollPos > currentScrollPos){
        header.classList.remove('scroll')
    }else{
        header.classList.add('scroll');
    }
    prevScrollPos = currentScrollPos;
}