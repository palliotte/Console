let my_sprite : game.LedSprite = null
my_sprite = game.createSprite(2, 4)
game.setScore(0)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    my_sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    my_sprite.change(LedSpriteProperty.X, 1)
})
basic.forever(function on_forever() {
    let coin : game.LedSprite = null
    coin = game.createSprite(randint(0, 4), 0)
    coin.set(LedSpriteProperty.Brightness, 50)
    basic.pause(200)
    for (let index = 0; index < 4; index++) {
        coin.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        if (coin.isTouching(my_sprite)) {
            coin.delete()
            game.addScore(1)
        }
        
    }
    if (coin.isTouchingEdge()) {
        game.gameOver()
    }
    
    coin.delete()
})
