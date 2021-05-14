let circle = document.querySelector('.circle');
let moveby =5;
window.addEventListener('load', () =>{
    circle.style.position= 'absolute';
    circle.style.right= 0
});
window.addEventListener('keyup',(e) =>{
    switch (e.key) {
        case 'ArrowLeft':
         circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
         break;
    case 'ArrowRight':
        circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
        break;
    default:
        console.log('Please use left or right arrow to move the pink circle ! :)')

    }
});
