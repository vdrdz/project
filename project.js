let circle = document.querySelector('.circle');
let moveBy = 10;
window.addEventListener('load', () => {
    circle.style.position = 'absolute';
    circle.style.left = 20 ;
    circle.style.top = 20 ;
});
window.addEventListener('keydown', (event) => {
    const { style } = block
    switch (event.key) {
        case 'ArrowLeft':
            circle.style.left = '${parseInt(circle.style.left) - moveBy }px';
            break;
        case 'ArrowRight':
            circle.style.left = '${parseInt(circle.style.left) + moveBy}px';
            break;
        case 'ArrowUp':
            circle.style.top = '${parseInt(circle.style.top) - moveBy}px';
            break;
        case 'ArrowDown':
            circle.style.top = '${parseInt(circle.style.top) + moveBy}px';
            break;   }
});

var y = 0 ;
window.onload =function()
{
    var yellowsquare = document.getElementById("yellowsquare")
setInterval(function()
{
    y++;
    yellowsquare.style.left = y ; } , 15 ) ;
}
