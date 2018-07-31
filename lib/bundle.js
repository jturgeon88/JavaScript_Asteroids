/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/asteroids.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/asteroid.js":
/*!*************************!*\
  !*** ./lib/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./lib/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./lib/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./lib/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./lib/bullet.js\");\n\n\nconst DEFAULTS = {\n  COLOR: \"gray\",\n  RADIUS: 25,\n  SPEED: 5\n};\n\nfunction Asteroid(options) {\n  options = options || {};\n  options.color = DEFAULTS.COLOR;\n  options.pos = options.pos || options.game.randomPosition();\n  options.radius = DEFAULTS.RADIUS;\n  options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);\n\n  MovingObject.call(this, options);\n};\n\n// Must inherit before adding functions\nUtil.inherits(Asteroid, MovingObject);\n\n\nAsteroid.prototype.collideWith = function collideWith(otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate();\n    return true;\n  } else if (otherObject instanceof Bullet) {\n    this.game.remove(otherObject);\n    this.game.remove(this);\n  }\n\n  return false;\n};\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./lib/asteroid.js?");

/***/ }),

/***/ "./lib/asteroids.js":
/*!**************************!*\
  !*** ./lib/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./lib/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./lib/game_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementById(\"game-canvas\");\n  canvasEl.width = Game.DIM_X;\n  canvasEl.height = Game.DIM_Y;\n\n  const ctx = canvasEl.getContext(\"2d\");\n  const game = new Game();\n  new GameView(game, ctx).start();\n});\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./lib/asteroids.js?");

/***/ }),

/***/ "./lib/bullet.js":
/*!***********************!*\
  !*** ./lib/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./lib/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./lib/moving_object.js\");\n\nfunction Bullet(options) {\n  options.radius = Bullet.RADIUS;\n\n  MovingObject.call(this, options);\n}\n\nBullet.RADIUS = 5;\nBullet.SPEED = 15;\n\nUtil.inherits(Bullet, MovingObject);\n\n\nBullet.prototype.collideWith = function collideWith(otherObject) {\n  //default do nothing\n}\n\nBullet.prototype.isWrappable = false;\n\nmodule.exports = Bullet;\n\n\n//# sourceURL=webpack:///./lib/bullet.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./lib/asteroid.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./lib/util.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./lib/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./lib/bullet.js\");\n\n//This class will be in charge of holding all of our moving objects. \n// It will also contain the logic for iterating through these\n// objects and calling their corresponding move methods.\n\nfunction Game() {\n  this.asteroids = [];\n  this.ships = [];\n  this.bullets = [];\n\n  this.addAsteroids();\n  // this.addShip();\n};\n\nGame.DIM_X = 1200;\nGame.DIM_Y = 800;\nGame.NUM_ASTEROIDS = 15;\nGame.BG_COLOR = \"blue\";\n\nGame.prototype.add = function add(object) {\n  if (object instanceof Bullet) {\n    this.bullets.push(object);\n  } else if (object instanceof Asteroid) {\n    this.asteroids.push(object);\n  } else if (object instanceof Ship) {\n    this.ships.push(object);\n  } else {\n    throw new Error(\"unkown type of object\");\n  }\n};\n\nGame.prototype.addAsteroids = function addAsteroids() {\n  // need to randomly place the asteroids within the dimensions of the game grid.\n  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n    this.add(new Asteroid( { game : this }));\n  }\n}\n\nGame.prototype.addShip = function addShip() {\n  const ship = new Ship({\n    pos: this.randomPosition(),\n    game: this\n  });\n\n  this.add(ship);\n\n  return ship;        //why do we return the ship?\n};\n\nGame.prototype.allObjects = function allObjects() {\n  return [].concat(this.ships, this.asteroids, this.bullets);\n};\n\nGame.prototype.checkCollisions = function checkCollisions() {\n  // Iterate through asteroids array and check each pair of asteroids for collisions:\n  const allObjects = this.allObjects();\n  console.log(allObjects);\n  for (let i = 0; i < allObjects.length; i++) {\n    for (let j = 0; j < allObjects.length; j++) {\n      const obj1 = allObjects[i];\n      const obj2 = allObjects[j];\n\n      if (obj1.isCollidedWith(obj2)) {\n        const collision = obj1.collideWith(obj2);\n        if (collision) return;\n      }\n    }\n  }\n};\n\n// Game.prototype.checkCollisions = function checkCollisions() {\n//   // Iterate through asteroids array and check each pair of asteroids for collisions:\n\n//   for (let i = 0; i < this.asteroids.length; i++) {\n//     for (let j = i + 1; j < this.asteroids.length; j++) {\n//       if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {\n//         this.allObjects()[i].collideWith(this.allObjects()[j]);\n//       };\n//     };\n//   };\n// }\n\nGame.prototype.draw = function draw(ctx) {\n  // wipe the entire space:\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  ctx.fillStyle = Game.BG_COLOR;\n  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n\n  this.allObjects().forEach((object) => {\n    object.draw(ctx);\n  });\n}\n\nGame.prototype.moveObjects = function moveObjects() {\n  // should call move on each of the asteroids:\n  this.allObjects().forEach((object) => {\n    object.move();\n  });\n};\n\nGame.prototype.randomPosition = function randomPosition() {\n  return [\n    Game.DIM_X * Math.random(),\n    Game.DIM_Y * Math.random()\n  ];\n};\n\nGame.prototype.remove = function remove(object) {\n  if (object instanceof Asteroid) {\n    this.asteroids.splice(this.asteroids.indexOf(object), 1);\n  } else if (object instanceof Ship) {\n    this.ships.splice(this.ships.indexOf(object), 1);\n  } else if (object instanceof Bullet) {\n      this.bullets.splice(this.bullets.indexOf(object), 1);\n  } else {\n    throw new Error(\"unknown type of object\");\n  }\n};\n\nGame.prototype.step = function step () {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.isOutOfBounds = function isOutOfBounds(pos) {\n  return ((pos[0] < 0 || pos[1] < 0) || (pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y));\n}\n\nGame.prototype.wrap = function (pos) {\n  // return a wrapped position\n  return [\n    Util.wrap(pos[0], Game.DIM_X),\n    Util.wrap(pos[1], Game.DIM_Y)\n  ];\n};\n\nmodule.exports = Game;\n\n\n\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n// This file will be in charge of:\n  // 1) Keeping track of the Canvas context (ctx), the game, and the ship\n  // 2) Setting an interval to animate your game\n  // 3) Eventually, bind key handlers to the ship so we can move it around\n\n\nfunction GameView(game, ctx) {\n  this.ctx = ctx;\n  this.game = game;\n  this.ship = this.game.addShip();\n};\n\nGameView.MOVES = {\n  w: [0, -1],\n  a: [-1, 0],\n  s: [0, 1],\n  d: [1, 0]\n};\n\nGameView.prototype.bindKeyHandlers = function bindKeyHandlers() {\n  const ship = this.ship;\n\n\n  // Iterate through the array of keys in the MOVES key-value pairs:\n  Object.keys(GameView.MOVES).forEach((k) => {\n    // declare const that is a 2 el array to pass to Ship.prototype.power\n    const move = GameView.MOVES[k];\n\n    // Define key shortcut from global method \"key\"\n    key(k, function () { ship.power(move); });\n  });\n\n  key(\"space\", function () { ship.fireBullet(); });\n\n}\n\nGameView.prototype.start = function start() {\n  this.bindKeyHandlers();\n  setInterval(this.game.step.bind(this.game), 20);\n  setInterval(() => this.game.draw(this.ctx), 20);\n}\n\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./lib/game_view.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./lib/util.js\");\n\n\nfunction MovingObject (options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.collideWith = function collideWith(otherObject) {\n  //default do nothing\n}\n\nMovingObject.prototype.draw = function draw(ctx) {\n  ctx.fillStyle = this.color;\n\n  ctx.beginPath();\n  ctx.arc(\n    this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n  );\n  ctx.fill();\n};\n\nMovingObject.prototype.isCollidedWith = function isCollidedWith(otherObject) {\n  let minDist = this.radius + otherObject.radius;\n  let distance = Util.dist(this.pos, otherObject.pos);\n\n  return distance < minDist;\n};\n\nMovingObject.prototype.isWrappable = true;\n\nMovingObject.prototype.move = function move() {\n\n  const offsetX = this.vel[0];\n  const offsetY = this.vel[1];\n\n  this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n\n  if (this.game.isOutOfBounds(this.pos)) {\n    if (this.isWrappable) {\n      this.pos = this.game.wrap(this.pos);\n    } else {\n      this.remove();\n    }\n  }\n};\n\nMovingObject.prototype.remove = function remove() {\n  this.game.remove(this);\n};\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/ship.js":
/*!*********************!*\
  !*** ./lib/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./lib/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./lib/moving_object.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./lib/bullet.js\");\n\n\nconst SHIP = {\n  COLOR: \"purple\",\n  RADIUS: 7,\n  VELOCITY: [0,0]\n};\n\nfunction Ship (options) {\n  options.radius = Ship.RADIUS;\n  options.vel = options.vel || SHIP.VELOCITY;\n  options.color = SHIP.COLOR;\n\n  MovingObject.call(this, options);\n}\n\nShip.RADIUS = 15;\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function relocate() {\n  this.pos = this.game.randomPosition();\n  this.vel = SHIP.VELOCITY;\n};\n\nShip.prototype.power = function power(impulse) {\n  this.vel[0] += impulse[0];\n  this.vel[1] += impulse[1];\n};\n\nShip.prototype.fireBullet = function fireBullet() {\n  // This ensures that you can't fire bullets if you're not moving - That would be too easy!!\n  if (this.vel === [0, 0]) {\n    return;\n  } \n\n  //This is the normalized direction of the current Ship's velocity\n  const dir = Util.dir(this.vel);\n\n  // This is the relative velocity of the bullet\n  const relVel = Util.scale(dir, Bullet.SPEED);\n\n  // This adds the relative velocity of the bullet to the velocity of the ship;\n  const bulletVel = [\n    relVel[0] + this.vel[0],\n    relVel[1] + this.vel[1]\n  ];\n\n  // create new Bullet\n  const bullet = new Bullet({ \n    pos: this.pos, \n    vel: bulletVel, \n    color: this.color, \n    game: this.game \n  });\n\n  //add bullet to an array of Game bullets:\n  this.game.add(bullet);\n\n}\n\n\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./lib/ship.js?");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    childClass.prototype = Object.create(parentClass.prototype);\n    childClass.prototype.constructor = childClass;\n  }, \n\n  dist(pos1, pos2) {\n    return Math.sqrt(\n      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n    );\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n\n  wrap(coord, max) {\n    if (coord < 0) {\n      return max - (coord % max);\n    } else if (coord > max) {\n      return coord % max;\n    } else {\n      return coord;\n    }\n  },\n\n  // finds the length of the vector\n  norm(vec) {\n    return Util.dist([0, 0], vec);\n  },\n\n  // Normalizes the length of the vector to 1, while\n  // maintaining the direction:\n  dir(vec) {\n    const norm = Util.norm(vec);\n    return Util.scale(vec, 1/norm);\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./lib/util.js?");

/***/ })

/******/ });