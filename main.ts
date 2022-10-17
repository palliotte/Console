let my_sprite: game.LedSprite = null
let my_sprite2: game.LedSprite = null
// mars attack
input.onPinPressed(TouchPin.P0, function () {
    my_sprite = game.createSprite(2, 4)
    game.setScore(0)
    input.onButtonPressed(Button.A, function on_button_pressed_a() {
        my_sprite.change(LedSpriteProperty.X, -1)
    })
input.onButtonPressed(Button.B, function on_button_pressed_b() {
        my_sprite.change(LedSpriteProperty.X, 1)
    })
basic.forever(function on_forever() {
        let ennemie2 = game.createSprite(randint(0, 4), 0)
        ennemie2.set(LedSpriteProperty.Brightness, 50)
        basic.pause(200)
        for (let index2 = 0; index2 < 4; index2++) {
            ennemie2.change(LedSpriteProperty.Y, 1)
            basic.pause(800)
        }
        if (ennemie2.isTouchingEdge()) {
            game.gameOver()
        }
        
        ennemie2.delete()
    })
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
        let bullet = game.createSprite(my_sprite.get(LedSpriteProperty.X), 4)
        bullet.set(LedSpriteProperty.Brightness, 50)
        for (let index = 0; index < 4; index++) {
            basic.pause(300)
            bullet.change(LedSpriteProperty.Y, -1)
            if (bullet.isTouching(ennemie)) {
                ennemie.delete()
                bullet.delete()
                game.addScore(1)
            }
            
        }
    })
})
input.onPinPressed(TouchPin.P1, function () {
    // snap the dot
    my_sprite2 = game.createSprite(2, 2)
    game.setScore(0)
    input.onButtonPressed(Button.A, function on_button_pressed_a2() {
        if (my_sprite2.get(LedSpriteProperty.X) == 2) {
            game.addScore(1)
        } else {
            game.gameOver()
        }
        
    })
basic.forever(function on_forever2() {
        my_sprite2.move(1)
        my_sprite2.ifOnEdgeBounce()
        basic.pause(300)
    })
})
