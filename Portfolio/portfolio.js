const wavy = document.querySelector('.wavy');
const main = document.querySelector('.main');

function fade(){
    setTimeout(()=>{
        wavy.style.opacity = 0;
        wavy.style.display= 'none';
        
        main.style.display = 'flex';
        setTimeout(()=>{
        main.style.opacity= 1, 50
        });
    },3500);
}
fade();
document.addEventListener("mousemove" , parallax);
function parallax(e){
    this.querySelectorAll('.glass').forEach(glass =>{
        const speed = glass.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100
        glass.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
    this.querySelectorAll('.dots').forEach(dots =>{
        const speed = dots.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100
        dots.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
    this.querySelectorAll('.glass2').forEach(glass2 =>{
        const speed = glass2.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100
        glass2.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
    this.querySelectorAll('.projects').forEach(projects =>{
        const speed = projects.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100
        projects.style.transform = `translateY(${x}px) translateX(${y}px)`
    })
    this.querySelectorAll('.glass3').forEach(glass3 =>{
        const speed = glass3.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100
        glass3.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
    this.querySelectorAll('.glass4').forEach(glass4 =>{
        const speed = glass4.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100
        glass4.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
    this.querySelectorAll('.bowl').forEach(bowl =>{
        const speed = bowl.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100
        bowl.style.transform = `rotateZ(${x}deg)`
    })
    this.querySelectorAll('.liquid').forEach(liquid =>{
        const speed = liquid.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100
        liquid.style.transform = `rotateZ(${-x}deg)`
        
    })
}

let btn = document.querySelector('.btn')
let light = document.querySelector('#light')
btn.onclick=function(){
light.classList.toggle('on')
} 
let menu = document.querySelector('#menu')
let click = document.querySelector('.click')
click.onclick = function(){
menu.classList.toggle('on')
}




window.addEventListener("scroll", function(){
    var menu = this.document.querySelector("#menu");
    menu.classList.toggle("sticky", window.scrollY > 0);
})
window.addEventListener("scroll", function(){
    var nav = this.document.querySelector(".nav");
    nav.classList.toggle("off", window.scrollY > 0);
})

