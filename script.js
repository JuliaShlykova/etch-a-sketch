const container = document.querySelector('#container');

let numberOfSquares = 16;

const clearSet = document.querySelector('#clearSet');
function createDivs(numberOfSquares){
    container.textContent = '';
    for (let i=1;i<=numberOfSquares*numberOfSquares;i++){
        let div = document.createElement('div');
        div.classList.add('squareDiv');
        container.appendChild(div);
    }    
    let x = 100/numberOfSquares;
    container.setAttribute('style',`grid-template-columns: repeat(${numberOfSquares},${x}%); grid-template-rows: repeat(${numberOfSquares},${x}%)`);
    let squareDivs = document.querySelectorAll('.squareDiv');
    squareDivs.forEach(squareDiv=>squareDiv.addEventListener('mouseover',function(){
        let r = Math.floor(Math.random()*(255-0+1))+0;
        let g = Math.floor(Math.random()*(255-0+1))+0;
        let b = Math.floor(Math.random()*(255-0+1))+0;
        squareDiv.style.backgroundColor = `rgb(${r},${g},${b})`;
    }));   
};
clearSet.addEventListener('click',function(){
    numberOfSquares = Math.min(prompt("How many squares per side?",16),100);
    createDivs(numberOfSquares);
});

createDivs(numberOfSquares);


