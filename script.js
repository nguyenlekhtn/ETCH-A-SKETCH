console.log("hello, parrot");

function createGird(e) {
  while(container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
  let squareNumber;
  do {
    squareNumber = window.prompt("How many squares per side to make the new grid?");
    // console.log(typeof squareNumber);
  }
  while(squareNumber >= 100 || !squareNumber || squareNumber == 0);

  container.setAttribute('style', `grid-template-columns: repeat(${squareNumber}, 1fr); grid-template-rows: repeat(${squareNumber}, 1fr)`);

  for(let i = 0; i < squareNumber**2; i++) {
    let grid = document.createElement('div');
    grid.classList.add("grid");
    container.appendChild(grid);
  }


}



const container = document.querySelector(".container");
for(let i = 0; i < 16; i++) {
  let grid = document.createElement('div');
  grid.classList.add("grid");
  container.appendChild(grid);
}

container.addEventListener("mouseover", function( event ) {
  console.log("Parrot");
  // randomColor = Math.floor(Math.random()*16777215).toString(16);
  let compStyles = window.getComputedStyle(event.target);
  let opa = parseFloat(compStyles.getPropertyValue('opacity')) + 0.1;
  console.log(opa);
  event.target.style.opacity = opa;
  console.log(compStyles.getPropertyValue('opacity'));
});

const reset = document.querySelector('.button');
reset.addEventListener('click', createGird);
