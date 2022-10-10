sprite_2: game.LedSprite = None
sprite_3: game.LedSprite = None
my_sprite: game.LedSprite = None
my_sprite = game.create_sprite(2, 4)
game.set_score(0)

def on_button_pressed_a():
    my_sprite.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    my_sprite.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    global sprite_3, sprite_2
    sprite_3 = game.create_sprite(my_sprite.get(LedSpriteProperty.X), 4)
    sprite_3.set(LedSpriteProperty.BRIGHTNESS, 50)
    for index in range(4):
        sprite_3.change(LedSpriteProperty.Y, -1)
        basic.pause(400)
        if sprite_3.is_touching(sprite_2) :
            sprite_2.delete()
            sprite_3.delete()
            game.add_score(1)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_forever():
    global sprite_2
    sprite_2 = game.create_sprite(randint(0, 4), 0)
    sprite_2.set(LedSpriteProperty.BRIGHTNESS, 50)
    basic.pause(200)
    for index2 in range(4):
        sprite_2.change(LedSpriteProperty.Y, 1)
        basic.pause(800)
    if sprite_2.is_touching_edge():
        game.game_over()
    sprite_2.delete()
basic.forever(on_forever)