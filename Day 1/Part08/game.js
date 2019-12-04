const gameState = {};

function create() {
  gameState.circle = this.add.circle(40, 100, 10, 0xff9999)
}

function update() {
  gameState.circle.y += 1
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#99ff99",
	scene: {
    create,
    update
	}
}

const game = new Phaser.Game(config)
