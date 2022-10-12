my_sprite: game.LedSprite = None
my_sprite2: game.LedSprite = None
# mars attack

def on_pin_pressed_p0():
    global my_sprite
    my_sprite = game.create_sprite(2, 4)
    game.set_score(0)
    
    def on_button_pressed_a():
        my_sprite.change(LedSpriteProperty.X, -1)
    input.on_button_pressed(Button.A, on_button_pressed_a)
    
    
    def on_button_pressed_b():
        my_sprite.change(LedSpriteProperty.X, 1)
    input.on_button_pressed(Button.B, on_button_pressed_b)
    
    def on_forever():
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

    def on_button_pressed_ab():
        bullet2 = game.create_sprite(my_sprite.get(LedSpriteProperty.X), 4)
        bullet2.set(LedSpriteProperty.BRIGHTNESS, 50)
        for index in range(4):
            basic.pause(300)
            bullet2.change(LedSpriteProperty.Y, -1)
            if bullet2.is_touching(ennemie):
                ennemie.delete()
                bullet2.delete()
                game.add_score(1)
    input.on_button_pressed(Button.AB, on_button_pressed_ab)
    
    
    
    
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_pin_pressed_p1():
    global my_sprite2
    # snap the dot
    my_sprite2 = game.create_sprite(2, 2)
    game.set_score(0)
    
    def on_button_pressed_a2():
        if my_sprite2.get(LedSpriteProperty.X) == 2:
            game.add_score(1)
        else:
            game.game_over()
    input.on_button_pressed(Button.A, on_button_pressed_a2)
    
    
    def on_forever2():
        my_sprite2.move(1)
        my_sprite2.if_on_edge_bounce()
        basic.pause(300)
    basic.forever(on_forever2)
    
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)
