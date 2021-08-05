const mask  = document.querySelector('.loader-wrap');


window.addEventListener('load', ()=>{
    mask.classList.add('animate-hide');
    setTimeout(()=>{
        mask.remove();
    },1000)
});