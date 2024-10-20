const elements = document.querySelectorAll('nav');

let prevScrollPos = window.scrollY;

window.onscroll = function(){
    let currentScrollPos = window.scrollY;
    if(prevScrollPos > currentScrollPos){
        elements.forEach(header => {
           header.classList.remove('scroll'); 
        });
    }else{
        elements.forEach(header => {
            header.classList.add('scroll'); 
        });
    }
    prevScrollPos = currentScrollPos;
}