const canvas = document.getElementById('gameCanvas');


const ctx = canvas.getContext('2d');


const box = 20;

let snake = [{ x: box * 5, y: box * 5 }];


let direction = 'RIGHT';


let food = {
    x: Math.floor(Math.random() * 20) * box, 
    y: Math.floor(Math.random() * 20) * box  
};


let frutas = 0;
let speed = 150; 
let game;


document.addEventListener('keydown', changeDirection);


function changeDirection(event) {
    if (event.keyCode === 37 && direction !== 'RIGHT') { direction = 'LEFT'; }
    if (event.keyCode === 38 && direction !== 'DOWN') { direction = 'UP'; }
    if (event.keyCode === 39 && direction !== 'LEFT') { direction = 'RIGHT'; }
    if (event.keyCode === 40 && direction !== 'UP') { direction = 'DOWN'; }
}


function draw() {
    
    ctx.fillStyle = 'navy'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i === 0) ? '#64bd68' : '#17631b'; 
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = '#3e7a28'; 
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    
    ctx.fillStyle = '#a80000' ;
    ctx.fillRect(food.x, food.y, box, box);
    ctx.strokeStyle = 'white'; 
    ctx.strokeRect(food.x, food.y, box, box);

    
    let snakeX = snake[0].x; 
    let snakeY = snake[0].y; 

    
    if (direction === 'LEFT') { snakeX -= box; }
    if (direction === 'UP') { snakeY -= box; }
    if (direction === 'RIGHT') { snakeX += box; }
    if (direction === 'DOWN') { snakeY += box; }

    
    if (snakeX === food.x && snakeY === food.y) {
        
        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };
        frutas++; 
        aa.textContent = `frutas: ${frutas}`;
        increaseSpeed();
    } else {
        
        snake.pop();
    }

    
    const newHead = { x: snakeX, y: snakeY };
    
    snake.unshift(newHead);

    
    if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead)) {
        'clear game';
        alert('Game Over');
    }
}

function collision(head, array) {
    for (let i = 1; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

function increaseSpeed() {
    if (speed > 50) { 
        speed -= 10; 
        clearInterval(game);
        game = setInterval(draw, speed);
    }
}


game = setInterval(draw, speed);