class Test extends Phaser.Scene {
    constructor() {
        super({ key: 'Test' })

        this.player = null
        this.controls = null
        this.water = null

    }

    preload() { // Carregando as imagens para o phaser
        this.load.image("grassImage", "assets/map/tiles/grassTileset.png")
        this.load.image("waterImage", "assets/map/tiles/waterTileset.png")
        this.load.tilemapTiledJSON("map", "assets/map/map.json") 

        loadPlayerSprites(this)
    }

    create() {
        const map = this.make.tilemap({ key: "map" }) 

        const tilesetGrass = map.addTilesetImage("grass", "grassImage")
        const tilesetWater = map.addTilesetImage("water", "waterImage")

        const grass = map.createLayer("grass", tilesetGrass, 0, 0) 
        this.water = map.createLayer("water", tilesetWater, 0, 0)

        this.water.setCollisionByProperty({ collider: true})

        this.player = createPlayer(this)
        this.player.anims.play('player_idle', true)

        this.physics.add.collider(this.player, this.water)

        this.controls = createControls(this)

    }

    update() {
        configControls(this.player, this.controls, this)
    }
}

var config = {
    type: Phaser.AUTO,
    backgroundColor: "#125555",
    width: 960,
    height: 960,
    scene: Test,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y: 0}
        }

    }
}


var game = new Phaser.Game(config)
