const createControls = (scene) => {
    return scene.input.keyboard.createCursorKeys()
}

const configControls = (player, controls, scene) => {
    player.setVelocityX(0)
    player.setVelocityY(0)

    if (player.isAttacking) return

    if (controls.right.isDown) {
        moveRight(player)
    }

    if (controls.left.isDown) {
        moveLeft(player)
    }

    if (controls.up.isDown) {
        moveUp(player)
    }

    if (controls.down.isDown) {
        moveDown(player)
    }

    if (controls.space.isDown) {
        if (player.isAttacking) return
        attack(player)
    }

    
}

const defaultVelocity = 200

const moveRight = (player) => {
    player.setFlipX(false)
    player.anims.play('player_run', true)
    player.setVelocityX(defaultVelocity)
}

const moveLeft = (player) => {
    player.setFlipX(true)
    player.anims.play('player_run', true)
    player.setVelocityX(-defaultVelocity)
}

const moveUp = (player) => {
    player.anims.play('player_run', true)
    player.setVelocityY(-defaultVelocity)
}

const moveDown = (player) => {
    player.anims.play('player_run', true)
    player.setVelocityY(defaultVelocity)
}

const attack = (player) => {
    player.isAttacking = true
    player.anims.play('player_attack', true)

}