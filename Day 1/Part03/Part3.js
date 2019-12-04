function preload() {
  // Load in the sprite here!

}

function create() {
  // Create a sprite game object here!

}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#5f2a55",
	scene: {
    create,
    preload
	}
}

const game = new Phaser.Game(config)
