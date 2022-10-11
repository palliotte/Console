def on_button_pressed_a():
    my_sprite.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global bullet
    bullet = game.create_sprite(my_sprite.get(LedSpriteProperty.X), 4)
    bullet.set(LedSpriteProperty.BRIGHTNESS, 50)
    for index in range(4):
        basic.pause(300)
        bullet.change(LedSpriteProperty.Y, -1)
        if bullet.is_touching(ennemie):
            ennemie.delete()
            bullet.delete()
            game.add_score(1)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    my_sprite.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

ennemie: game.LedSprite = None
bullet: game.LedSprite = None
my_sprite: game.LedSprite = None
my_sprite = game.create_sprite(2, 4)
game.set_score(0)

def on_forever():
    global ennemie
    ennemie = game.create_sprite(randint(0, 4), 0)
    ennemie.set(LedSpriteProperty.BRIGHTNESS, 50)
    basic.pause(200)
    for index2 in range(4):
        ennemie.change(LedSpriteProperty.Y, 1)
        basic.pause(800)
    if ennemie.is_touching_edge():
        game.game_over()
    ennemie.delete()
basic.forever(on_forever)
