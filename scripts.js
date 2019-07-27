const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100; // 100px - for shadow purpouse

function shadow (e) {
    const { offsetWidth: width, offsetHeight: height } = hero; // getting width and height of element
    let { offsetX: x, offsetY: y } = e; // getting mouse position

    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    // setting how far the shadow should go
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    // showing shadow
    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 5px rgba(255, 0, 255, 0.7),
        ${xWalk*-1}px ${yWalk}px 5px rgba(0, 255, 255, 0.7),
        ${xWalk}px ${yWalk*-1}px 5px rgba(0, 255, 255, 0.7),
        ${xWalk*-1}px ${yWalk}px 5px rgba(0, 0, 255, 0.7)
    `;

    
    // debugging
    // console.clear();
    // console.table({mouseX: x, mouseY: y, elWidth: width, elHeight: height});
    

}

hero.addEventListener('mousemove', shadow);