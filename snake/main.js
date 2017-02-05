import { snake } from './Snake.js';
import { registry } from './Registry.js';
import { apple } from './Apple.js';
import { utils } from './Utils.js';

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
        registry.set('ctx', Main.ctx);
        registry.set('blockSize', Main.blockSize);
        registry.set('width', Main.width);
        registry.set('height', Main.height);
        registry.set('score', Main.score);
        registry.set('widthInBlocks', Main.widthInBlocks);
        registry.set('heightInBlocks', Main.heightInBlocks);
        registry.set('score', Main.score);

        this.intervalId = setInterval(() => {
            Main.ctx.clearRect(0, 0, Main.width, Main.height);
            utils.drawScore();
            apple.draw();
            snake.draw();
            snake.move();
            utils.drawBorder();
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
}

new Main().init();




