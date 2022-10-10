input.onButtonPressed(Button.A, function on_button_pressed_a() {
    my_sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
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
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    my_sprite.change(LedSpriteProperty.X, 1)
})
let sprite_2 : game.LedSprite = null
let sprite_3 : game.LedSprite = null
let my_sprite : game.LedSprite = null
my_sprite = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function on_forever() {
    
    sprite_2 = game.createSprite(randint(0, 4), 0)
    sprite_2.set(LedSpriteProperty.Brightness, 50)
    basic.pause(200)
    for (let index2 = 0; index2 < 4; index2++) {
        sprite_2.change(LedSpriteProperty.Y, 1)
        basic.pause(800)
    }
    if (sprite_2.isTouchingEdge()) {
        game.gameOver()
    }
    
    sprite_2.delete()
})
