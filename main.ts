input.onPinPressed(TouchPin.P0, function () {
    my_sprite.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
    my_sprite.change(LedSpriteProperty.X, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    sprite_3 = game.createSprite(my_sprite.get(LedSpriteProperty.X), 4)
    sprite_3.set(LedSpriteProperty.Brightness, 50)
    for (let index = 0; index < 4; index++) {
        sprite_3.change(LedSpriteProperty.Y, -1)
        basic.pause(400)
        if (sprite_3.isTouching(sprite_2)) {
            sprite_2.delete()
            sprite_3.delete()
            game.addScore(1)
        }
    }
})
let sprite_2: game.LedSprite = null
let sprite_3: game.LedSprite = null
let my_sprite: game.LedSprite = null
my_sprite = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    sprite_2 = game.createSprite(randint(0, 4), 0)
    sprite_2.set(LedSpriteProperty.Brightness, 50)
    basic.pause(200)
    for (let index = 0; index < 4; index++) {
        sprite_2.change(LedSpriteProperty.Y, 1)
        basic.pause(800)
    }
    if (sprite_2.isTouchingEdge()) {
        game.gameOver()
    }
    sprite_2.delete()
})
