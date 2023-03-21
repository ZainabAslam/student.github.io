document.querySelector('body').addEventListener('mousemove',eyeball);

function eyeball(){
    const eye = document.querySelectorAll('.eye')
    eye.forEach(function(eye){
        let x = (eye.getBoundingClientRect().left) + (eye.
            clientWidth / 2);
            let y = (eye.getBoundingClientRect().top) + (eye.
                clientHeight / 2);

                let radian = Math.atan2(event.pageX - x, event.pageY - y);
                let rotation = (radian * (180/Math.PI) * -1)+270;
                eye.style.transform = "rotate("+rotation+"deg)"
    })
    
}
const roads = document.querySelector('.roads');
const main = document.querySelector('.main');

function fade(){
    setTimeout(()=>{
        roads.style.opacity = 0;
        roads.style.display= 'none';
        
        main.style.display = 'flex';
        setTimeout(()=>{
        main.style.opacity= 1, 50
        });
    },4500);
}
fade();