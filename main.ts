input.onButtonPressed(Button.A, function on_button_pressed_a() {
    my_sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    bullet = game.createSprite(my_sprite.get(LedSpriteProperty.X), 4)
    bullet.set(LedSpriteProperty.Brightness, 50)
    for (let index = 0; index < 4; index++) {
        bullet.change(LedSpriteProperty.Y, -1)
        basic.pause(300)
        if (bullet.isTouching(ennemie)) {
            ennemie.delete()
            bullet.delete()
            game.addScore(1)
        }
        
    }
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    my_sprite.change(LedSpriteProperty.X, 1)
})
let ennemie : game.LedSprite = null
let bullet : game.LedSprite = null
let my_sprite : game.LedSprite = null
my_sprite = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function on_forever() {
    
    ennemie = game.createSprite(randint(0, 4), 0)
    ennemie.set(LedSpriteProperty.Brightness, 50)
    basic.pause(200)
    for (let index2 = 0; index2 < 4; index2++) {
        ennemie.change(LedSpriteProperty.Y, 1)
        basic.pause(800)
    }
    if (ennemie.isTouchingEdge()) {
        game.gameOver()
    }
    
    ennemie.delete()
})
