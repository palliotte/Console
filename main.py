my_sprite: game.LedSprite = None
my_sprite = game.create_sprite(2, 4)
game.set_score(0)

def on_button_pressed_a():
    my_sprite.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    my_sprite.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    coin: game.LedSprite = None
    coin = game.create_sprite(randint(0, 4), 0)
    coin.set(LedSpriteProperty.BRIGHTNESS, 50)
    basic.pause(200)
    for index in range(4):
        coin.change(LedSpriteProperty.Y, 1)
        basic.pause(400)
        if coin.is_touching(my_sprite):
            coin.delete()
            game.add_score(1)
    if coin.is_touching_edge() :
        game.game_over()
    coin.delete()    
basic.forever(on_forever)
