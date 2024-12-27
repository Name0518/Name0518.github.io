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


const mouse = document.querySelector('.sponsorlistsection')
const front = document.querySelector('.front-layer')
const back = document.querySelector('.back-layer')

const sensFront = 600
const sensBack = 900

mouse.addEventListener('mousemove', e=> {
    const x = e.clientX;
    const y = e.clientY;

    front.style.transform = `
    translate(
        ${-x/sensFront}%,
         ${-y/sensFront}%
    )` ; 
    back.style.transform = `
    translate(
        ${
           -x/sensBack
        }%, ${-y/sensBack
}% ) ` ;
})