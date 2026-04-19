const CELL_AMOUNT = 64;
let current_color = 'black';
let field = document.querySelector('.field');


for (let i = 0; i < CELL_AMOUNT; i++) {
    let newElement = document.createElement('div');
    newElement.classList.add('cell');
    newElement.addEventListener('click', function(event) {
        event.target.style.backgroundColor = current_color;
    });
    field.appendChild(newElement);
}


const colors = document.querySelectorAll('.color');


colors.forEach(color => {
    color.addEventListener('click', function() {
        current_color = this.style.backgroundColor;
    });
});

const clearButton = document.getElementById('clear-btn');

clearButton.addEventListener('click', function() {
    const cells = document.querySelectorAll('.cell');
    
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white'; 
    });
});

const cells = document.querySelectorAll('.cell');

const eraserBtn = document.getElementById('eraser-btn');

        eraserBtn.addEventListener('click', function(){
        
            current_color = 'white';
            
            colors.forEach(c => c.classList.remove('selected'));
            
            this.classList.add('selected');
        });



function paint(event){
    let element = event.target
    let isCell = element.classList.contains('cell')

    if (isCell) {
        element.style.backgroundColor = current_color
    }
}

field.addEventListener('mousedown', function() {
    field.addEventListener('mousemove',paint)
})

field.addEventListener('mouseup', function() {
    field.addEventListener('mousemove', paint)
})
