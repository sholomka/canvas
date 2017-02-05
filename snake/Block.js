const blockSize = 10,
    canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

class Block {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }

    drawSquare(color) {
        let x = this.col * blockSize,
            y = this.row * blockSize;

        ctx.fillStyle = color;
        ctx.fillRect(x, y, blockSize, blockSize);
    };

    drawCircle(color) {
        let centerX = this.col * blockSize + blockSize / 2,
            centerY = this.row * blockSize + blockSize / 2;

            ctx.fillStyle = color;
            Main.circle(centerX, centerY, blockSize / 2, true);
    };

    equal(otherBlock) {
        return this.col === otherBlock.col && this.row === otherBlock.row;
    };
}


export default Block;


