def on_pin_pressed_p0(): #mars attack

    ennemie: game.LedSprite = None
    bullet: game.LedSprite = None
    my_sprite: game.LedSprite = None
    my_sprite = game.create_sprite(2, 4)
    game.set_score(0)
    
    def on_button_pressed_a():
        my_sprite.change(LedSpriteProperty.X, -1)
    input.on_button_pressed(Button.A, on_button_pressed_a)

    def on_button_pressed_b():
        my_sprite.change(LedSpriteProperty.X, 1)
    input.on_button_pressed(Button.B, on_button_pressed_b)

    def on_button_pressed_ab():
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

input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_pin_pressed_p01(): #snap the dot
    my_sprite = game.create_sprite(2, 2)
    game.set_score(0)
    def on_button_pressed_a():
        if my_sprite.get(LedSpriteProperty.X) == 2:
            game.add_score(1)
        else:
            game.game_over()
    input.on_button_pressed(Button.A, on_button_pressed_a)

    def on_forever():
        my_sprite.move(1)
        my_sprite.if_on_edge_bounce()
        basic.pause(300)
    basic.forever(on_forever)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p01)
''''
def on_pin_pressed_p02(): #snake
    checkY = 0
    checkX = 0
    fStop = False
    py = 0
    px = 0
    preDy = 0
    preDx = 0
    isSouth = False
    isNorth = False
    isWest = False
    isEast = False
    acc_y = 0
    acc_x = 0
    snakeY: List[number] = []
    snakeX: List[number] = []
    snakeX.insert_at(0, 2)
    snakeY.insert_at(0, 4)
    foodX = randint(0, 4)
    foodY = randint(0, 4)
    led.plot_brightness(foodX, foodY, 21)
    dx = 0
    dy = -1
    score = 0
    timeDelayGame = 800
    levelGame = 1
    basic.show_number(levelGame)

    def on_forever(): 
        if len(snakeX) == 20:
            basic.pause(2000)
            snakeX = [2]
            snakeY = [4]
            foodX = randint(0, 4)
            foodY = randint(0, 4)
            dx = 0
            dy = -1
            timeDelayGame = timeDelayGame - 200
            if timeDelayGame < 200:
                timeDelayGame = 200
            levelGame = levelGame + 1
            basic.show_number(levelGame)
            basic.clear_screen()
        acc_x = input.acceleration(Dimension.X)
        acc_y = input.acceleration(Dimension.Y)
        isEast = acc_x > 256
        isWest = acc_x < -256
        isNorth = acc_y < -256
        isSouth = acc_y > 256
        preDx = dx
        preDy = dy
        if isEast:
            dx = 1
            dy = 0
        elif isNorth:
            dx = 0
            dy = -1
        elif isSouth:
            dx = 0
            dy = 1
        elif isWest:
            dx = -1
            dy = 0
        px = snakeX[len(snakeX) - 1] + dx
        py = snakeY[len(snakeX) - 1] + dy
        if len(snakeX) > 1:
            if px == snakeX[len(snakeX) - 2] and py == snakeY[len(snakeY) - 2]:
                px = snakeX[len(snakeX) - 1] + preDx
                py = snakeY[len(snakeX) - 1] + preDy
        if px == foodX and py == foodY:
            score = score + 1
            game.set_score(score)
            snakeX.insert_at(len(snakeX), foodX)
            snakeY.insert_at(len(snakeY), foodY)
            led.plot_brightness(foodX, foodY, 255)
            fStop = False
            while fStop == False:
                foodX = randint(0, 4)
                foodY = randint(0, 4)
                fStop = True
                index = 0
                while index <= len(snakeX) - 1:
                    checkX = snakeX[index]
                    checkY = snakeY[index]
                    if checkX == foodX and checkY == foodY:
                        fStop = False
                    index += 1
        else:
            if px < 0 or px > 4 or (py < 0 or py > 4):
                game.game_over()
            index2 = 0
            while index2 <= len(snakeX) - 2:
                if px == snakeX[index2] and py == snakeY[index2]:
                    game.game_over()
                index2 += 1
            index3 = 0
            while index3 <= len(snakeX) - 2:
                snakeX[index3] = snakeX[index3 + 1]
                snakeY[index3] = snakeY[index3 + 1]
                index3 += 1
            snakeX[len(snakeX) - 1] = px
            snakeY[len(snakeX) - 1] = py
        basic.clear_screen()
        index4 = 0
        while index4 <= len(snakeX) - 1:
            led.plot(snakeX[index4], snakeY[index4])
            index4 += 1
            led.plot_brightness(foodX, foodY, 21)
        basic.pause(timeDelayGame)
    basic.forever(on_forever)

input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p02)
'''''