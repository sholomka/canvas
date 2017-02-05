import { snake } from './Snake.js';
import { apple } from './Apple.js';

class Main {
    static get canvas() {
        return document.getElementById('canvas');
    }

    static get ctx() {
        return Main.canvas.getContext('2d');
    }

    static get width() {
        return Main.canvas.width;
    }

    static get height() {
        return Main.canvas.height;
    }

    static get blockSize() {
        return 10;
    }

    static get widthInBlocks() {
        return Main.width / Main.blockSize;
    }

    static get heightInBlocks() {
        return Main.height / Main.blockSize;
    }

    static get score() {
        return 0;
    }

    init() {
        this.intervalId = setInterval(() => {
            Main.ctx.clearRect(0, 0, Main.width, Main.height);
            this.drawScore();
            apple.draw();
            snake.draw();
            snake.move();
            this.drawBorder();
        }, 100);


        let directions = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down',
        };

        $('body').keydown(function(event) {
            let newDirection = directions[event.keyCode];

            if (newDirection !== undefined) {
                snake.setDirection(newDirection);
            }
        });
    }

   drawBorder() {
       Main.ctx.fillStyle = 'gray';
       Main.ctx.fillRect(0, 0, Main.width, Main.blockSize);
       Main.ctx.fillRect(0, Main.height - Main.blockSize, Main.width, Main.blockSize);
       Main.ctx.fillRect(0, 0, Main.blockSize, Main.height);
       Main.ctx.fillRect(Main.width  - Main.blockSize, 0, Main.blockSize, Main.height);
    };

    drawScore() {
        Main.ctx.font = '20px Courier';
        Main.ctx.fillStyle = 'black';
        Main.ctx.textAlign = 'left';
        Main.ctx.textBaseline = 'top';
        Main.ctx.fillText('Score: ' + Main.score, Main.blockSize, Main.blockSize);
    };

    gameOver() {
        clearInterval(this.intervalId);
        Main.ctx.font = '60px Courier';
        Main.ctx.fillStyle = 'black';
        Main.ctx.textAlign = 'center';
        Main.ctx.textBaseline = 'middle';
        Main.ctx.fillText('Game Over!', Main.width / 2, Main.height / 2);
    };


    circle(x, y, radius, fillCircle, startAngel = 0, endAngel = 2 * Math.PI) {
        Main.ctx.beginPath();

        Main.ctx.arc(x, y, radius, startAngel, endAngel);

        if (fillCircle) {
            Main.ctx.fill();
        } else {
            Main.ctx.stroke();
        }
    };
}

new Main().init();




