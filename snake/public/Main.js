/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var blockSize = 10,
    canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

var Block = function () {
    function Block(col, row) {
        _classCallCheck(this, Block);

        this.col = col;
        this.row = row;
    }

    _createClass(Block, [{
        key: 'drawSquare',
        value: function drawSquare(color) {
            var x = this.col * blockSize,
                y = this.row * blockSize;

            ctx.fillStyle = color;
            ctx.fillRect(x, y, blockSize, blockSize);
        }
    }, {
        key: 'drawCircle',
        value: function drawCircle(color) {
            var centerX = this.col * blockSize + blockSize / 2,
                centerY = this.row * blockSize + blockSize / 2;

            ctx.fillStyle = color;
            Main.circle(centerX, centerY, blockSize / 2, true);
        }
    }, {
        key: 'equal',
        value: function equal(otherBlock) {
            return this.col === otherBlock.col && this.row === otherBlock.row;
        }
    }]);

    return Block;
}();

exports.default = Block;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.apple = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Block = __webpack_require__(0);

var _Block2 = _interopRequireDefault(_Block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Apple = function () {
    function Apple() {
        _classCallCheck(this, Apple);

        this.position = new _Block2.default(10, 10);
    }

    _createClass(Apple, [{
        key: 'draw',
        value: function draw() {
            this.position.drawCircle('LimeGreen');
        }
    }, {
        key: 'move',
        value: function move() {
            var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1,
                randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;

            this.position = new _Block2.default(randomCol, randomRow);
        }
    }]);

    return Apple;
}();

var apple = exports.apple = new Apple();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.snake = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Block = __webpack_require__(0);

var _Block2 = _interopRequireDefault(_Block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snake = function () {
    function Snake() {
        _classCallCheck(this, Snake);

        this.segments = [new _Block2.default(7, 5), new _Block2.default(6, 5), new _Block2.default(5, 5)];

        this.direction = 'right';
        this.nextDirection = 'right';
    }

    _createClass(Snake, [{
        key: 'draw',
        value: function draw() {
            for (var i = 0; i < this.segments.length; i++) {
                this.segments[i].drawSquare('blue');
            }
        }
    }, {
        key: 'move',
        value: function move() {
            var head = this.segments[0],
                newHead = void 0;

            this.direction = this.nextDirection;

            if (this.direction === 'right') {
                newHead = new _Block2.default(head.col + 1, head.row);
            } else if (this.direction === 'left') {
                newHead = new _Block2.default(head.col - 1, head.row);
            } else if (this.direction === 'up') {
                newHead = new _Block2.default(head.col, head.row - 1);
            } else if (this.direction === 'down') {
                newHead = new _Block2.default(head.col, head.row + 1);
            }

            if (this.checkCollision(newHead)) {
                gameOver();
                return;
            }

            this.segments.unshift(newHead);

            if (newHead.equal(apple.position)) {
                score++;
                apple.move();
            } else {
                this.segments.pop();
            }
        }
    }, {
        key: 'checkCollision',
        value: function checkCollision(head) {
            var leftCollision = head.col === 0,
                rightCollision = head.col === widthInBlocks - 1,
                topCollision = head.row === 0,
                bottomCollision = head.row === heightInBlocks - 1;

            var wallCollision = leftCollision || rightCollision || topCollision || bottomCollision;
            var selfCollision = false;

            for (var i = 0; i < this.segments.length; i++) {
                if (head.equal(this.segments[i])) {
                    selfCollision = true;
                }
            }

            return wallCollision || selfCollision;
        }
    }, {
        key: 'setDirection',
        value: function setDirection(newDirection) {
            if (this.direction === 'left' && newDirection === 'right' || this.direction === 'right' && newDirection === 'left' || this.direction === 'up' && newDirection === 'down' || this.direction === 'down' && newDirection === 'up') {
                return;
            }

            this.nextDirection = newDirection;
        }
    }]);

    return Snake;
}();

var snake = exports.snake = new Snake();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Snake = __webpack_require__(2);

var _Apple = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
    function Main() {
        _classCallCheck(this, Main);
    }

    _createClass(Main, [{
        key: 'init',
        value: function init() {
            var _this = this;

            this.intervalId = setInterval(function () {
                Main.ctx.clearRect(0, 0, Main.width, Main.height);
                _this.drawScore();
                _Apple.apple.draw();
                _Snake.snake.draw();
                _Snake.snake.move();
                _this.drawBorder();
            }, 100);

            var directions = {
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down'
            };

            $('body').keydown(function (event) {
                var newDirection = directions[event.keyCode];

                if (newDirection !== undefined) {
                    _Snake.snake.setDirection(newDirection);
                }
            });
        }
    }, {
        key: 'drawBorder',
        value: function drawBorder() {
            Main.ctx.fillStyle = 'gray';
            Main.ctx.fillRect(0, 0, Main.width, Main.blockSize);
            Main.ctx.fillRect(0, Main.height - Main.blockSize, Main.width, Main.blockSize);
            Main.ctx.fillRect(0, 0, Main.blockSize, Main.height);
            Main.ctx.fillRect(Main.width - Main.blockSize, 0, Main.blockSize, Main.height);
        }
    }, {
        key: 'drawScore',
        value: function drawScore() {
            Main.ctx.font = '20px Courier';
            Main.ctx.fillStyle = 'black';
            Main.ctx.textAlign = 'left';
            Main.ctx.textBaseline = 'top';
            Main.ctx.fillText('Score: ' + Main.score, Main.blockSize, Main.blockSize);
        }
    }, {
        key: 'gameOver',
        value: function gameOver() {
            clearInterval(this.intervalId);
            Main.ctx.font = '60px Courier';
            Main.ctx.fillStyle = 'black';
            Main.ctx.textAlign = 'center';
            Main.ctx.textBaseline = 'middle';
            Main.ctx.fillText('Game Over!', Main.width / 2, Main.height / 2);
        }
    }], [{
        key: 'circle',
        value: function circle(x, y, radius, fillCircle) {
            var startAngel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
            var endAngel = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2 * Math.PI;

            Main.ctx.beginPath();

            Main.ctx.arc(x, y, radius, startAngel, endAngel);

            if (fillCircle) {
                Main.ctx.fill();
            } else {
                Main.ctx.stroke();
            }
        }
    }, {
        key: 'canvas',
        get: function get() {
            return document.getElementById('canvas');
        }
    }, {
        key: 'ctx',
        get: function get() {
            return Main.canvas.getContext('2d');
        }
    }, {
        key: 'width',
        get: function get() {
            return Main.canvas.width;
        }
    }, {
        key: 'height',
        get: function get() {
            return Main.canvas.height;
        }
    }, {
        key: 'blockSize',
        get: function get() {
            return 10;
        }
    }, {
        key: 'widthInBlocks',
        get: function get() {
            return Main.width / Main.blockSize;
        }
    }, {
        key: 'heightInBlocks',
        get: function get() {
            return Main.height / Main.blockSize;
        }
    }, {
        key: 'score',
        get: function get() {
            return 0;
        }
    }]);

    return Main;
}();

new Main().init();

/***/ })
/******/ ]);