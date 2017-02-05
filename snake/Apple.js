import Block from './Block.js';
import { registry } from './Registry.js';

class Apple {
    static get widthInBlocks() {
        return registry.get('widthInBlocks');
    }

    static get heightInBlocks() {
        return registry.get('heightInBlocks');
    }

    constructor() {
        this.position = new Block(10, 10);
    }

    draw() {
        this.position.drawCircle('LimeGreen')
    };

    move() {
        let randomCol = Math.floor(Math.random() * (Apple.widthInBlocks - 2)) + 1,
            randomRow = Math.floor(Math.random() * (Apple.heightInBlocks - 2)) + 1;

        this.position = new Block(randomCol, randomRow);
    };
}

export let apple = new Apple();


