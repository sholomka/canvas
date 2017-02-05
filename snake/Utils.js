import { registry } from './Registry.js';

class Utils {
    static get ctx() {
        return registry.get('ctx');
    }

    static get blockSize() {
        return registry.get('blockSize');
    }

    static get width() {
        return registry.get('width');
    }

    static get height() {
        return registry.get('height');
    }

    static get score() {
        return registry.get('score');
    }

    constructor() {}

    drawBorder() {
        Utils.ctx.fillStyle = 'gray';
        Utils.ctx.fillRect(0, 0, Utils.width, Utils.blockSize);
        Utils.ctx.fillRect(0, Utils.height - Utils.blockSize, Utils.width, Utils.blockSize);
        Utils.ctx.fillRect(0, 0, Utils.blockSize, Utils.height);
        Utils.ctx.fillRect(Utils.width  - Utils.blockSize, 0, Utils.blockSize, Utils.height);
    };

    drawScore() {
        Utils.ctx.font = '20px Courier';
        Utils.ctx.fillStyle = 'black';
        Utils.ctx.textAlign = 'left';
        Utils.ctx.textBaseline = 'top';
        Utils.ctx.fillText('Score: ' + Utils.score, Utils.blockSize, Utils.blockSize);
    };

    gameOver() {
        clearInterval(this.intervalId);
        Utils.ctx.font = '60px Courier';
        Utils.ctx.fillStyle = 'black';
        Utils.ctx.textAlign = 'center';
        Utils.ctx.textBaseline = 'middle';
        Utils.ctx.fillText('Game Over!', Utils.width / 2, Utils.height / 2);
    };

    circle(x, y, radius, fillCircle, startAngel = 0, endAngel = 2 * Math.PI) {
        Utils.ctx.beginPath();
        Utils.ctx.arc(x, y, radius, startAngel, endAngel);

        if (fillCircle) {
            Utils.ctx.fill();
        } else {
            Utils.ctx.stroke();
        }
    };
}

export let utils = new Utils();



