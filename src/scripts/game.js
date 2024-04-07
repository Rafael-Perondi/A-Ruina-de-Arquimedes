class Test extends Phaser.Scene {
    constructor() {
        super({ key: 'Test' })
    }

    preload() {
        this.load.image("grassImage", "assets/map/grassTileset.png")
        this.load.image("waterImage", "assets/map/waterTileset.png")
        this.load.tilemapTiledJSON("map", "assets/map/map.json")
    }

    create() {
        const map = this.make.tilemap({ key: "map" })

        const tilesetGrass = map.addTilesetImage("grass", "grassImage")
        const tilesetWater = map.addTilesetImage("water", "waterImage")

        const grass = map.createLayer("grass", tilesetGrass, 0, 0)
        const water = map.createLayer("water", tilesetWater, 0, 0)

    }

    update() {}
}

var config = {
    type: Phaser.AUTO,
    backgroundColor: "#125555",
    width: 960,
    height: 960,
    scene: Test
}


var game = new Phaser.Game(config)
