import Block from './Block.js';
import { registry } from './Registry.js';
import { utils } from './Utils.js';
import { apple } from './Apple.js';

class Snake {
    static get widthInBlocks() {
        return registry.get('widthInBlocks');
    }

    static get heightInBlocks() {
        return registry.get('heightInBlocks');
    }

    static get score() {
        return registry.get('score');
    }


    constructor() {
        this.segments = [
            new Block(7,5),
            new Block(6,5),
            new Block(5,5)
        ];

        this.direction = 'right';
        this.nextDirection = 'right';
    }

    draw() {
        for (let i = 0; i < this.segments.length; i++) {
            this.segments[i].drawSquare('blue');
        }
    };

    move() {
        let head = this.segments[0],
            newHead;

        this.direction = this.nextDirection;

        if (this.direction === 'right') {
            newHead = new Block(head.col + 1, head.row);
        } else if (this.direction === 'left') {
            newHead = new Block(head.col - 1, head.row);
        } else if (this.direction === 'up') {
            newHead = new Block(head.col, head.row - 1);
        } else if (this.direction === 'down') {
            newHead = new Block(head.col, head.row + 1);
        }

        if (this.checkCollision(newHead)) {
            utils.gameOver();
            return;
        }

        this.segments.unshift(newHead);

        if (newHead.equal(apple.position)) {
            let score = Snake.score;
            registry.set('score', score++);
            apple.move()
        } else {
            this.segments.pop();
        }
    };

    checkCollision(head) {
        let leftCollision = (head.col === 0),
            rightCollision = (head.col === Snake.widthInBlocks - 1),
            topCollision = (head.row === 0),
            bottomCollision = (head.row === Snake.heightInBlocks - 1);

        let wallCollision = leftCollision || rightCollision || topCollision || bottomCollision;
        let selfCollision = false;


        for (let i = 0; i < this.segments.length; i++) {
            if (head.equal(this.segments[i])) {
                selfCollision = true;
            }
        }

        return wallCollision || selfCollision;
    };

    setDirection(newDirection) {
        if (this.direction === 'left' && newDirection === 'right' ||
            this.direction === 'right' && newDirection === 'left' ||
            this.direction === 'up' && newDirection === 'down' ||
            this.direction === 'down' && newDirection === 'up') {
            return;
        }

        this.nextDirection = newDirection;
    };
}

export let snake = new Snake();

