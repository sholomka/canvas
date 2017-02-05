import { registry } from './Registry.js';
import { utils } from './Utils.js';

class Block {
    static get ctx() {
        return registry.get('ctx');
    }

    static get blockSize() {
        return registry.get('blockSize');
    }

    constructor(col, row) {
        this.col = col;
        this.row = row;
    }

    drawSquare(color) {
        let x = this.col * Block.blockSize,
            y = this.row * Block.blockSize;

        Block.ctx.fillStyle = color;
        Block.ctx.fillRect(x, y, Block.blockSize, Block.blockSize);
    };

    drawCircle(color) {
        let centerX = this.col * Block.blockSize + Block.blockSize / 2,
            centerY = this.row * Block.blockSize + Block.blockSize / 2;

            Block.ctx.fillStyle = color;
            utils.circle(centerX, centerY, Block.blockSize / 2, true);
    };

    equal(otherBlock) {
        return this.col === otherBlock.col && this.row === otherBlock.row;
    };
}


export default Block;


