input.onPinPressed(TouchPin.P0, function on_pin_pressed_p0() {
    // mars attack
    let ennemie : game.LedSprite = null
    let bullet : game.LedSprite = null
    let my_sprite : game.LedSprite = null
    my_sprite = game.createSprite(2, 4)
    game.setScore(0)
    input.onButtonPressed(Button.A, function on_button_pressed_a() {
        my_sprite.change(LedSpriteProperty.X, -1)
    })
    input.onButtonPressed(Button.B, function on_button_pressed_b() {
        my_sprite.change(LedSpriteProperty.X, 1)
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
    basic.forever(function on_forever() {
        let ennemie = game.createSprite(randint(0, 4), 0)
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
})
input.onPinPressed(TouchPin.P1, function on_pin_pressed_p01() {
    // snap the dot
    let my_sprite = game.createSprite(2, 2)
    game.setScore(0)
    input.onButtonPressed(Button.A, function on_button_pressed_a() {
        if (my_sprite.get(LedSpriteProperty.X) == 2) {
            game.addScore(1)
        } else {
            game.gameOver()
        }
        
    })
    basic.forever(function on_forever() {
        my_sprite.move(1)
        my_sprite.ifOnEdgeBounce()
        basic.pause(300)
    })
})
input.onPinPressed(TouchPin.P2, function on_pin_pressed_p02() {
    // snake
    let checkY = 0
    let checkX = 0
    let fStop = false
    let py = 0
    let px = 0
    let preDy = 0
    let preDx = 0
    let isSouth = false
    let isNorth = false
    let isWest = false
    let isEast = false
    let acc_y = 0
    let acc_x = 0
    let snakeY : number[] = []
    let snakeX : number[] = []
    snakeX.insertAt(0, 2)
    snakeY.insertAt(0, 4)
    let foodX = randint(0, 4)
    let foodY = randint(0, 4)
    led.plotBrightness(foodX, foodY, 21)
    let dx = 0
    let dy = -1
    let score = 0
    let timeDelayGame = 800
    let levelGame = 1
    basic.showNumber(levelGame)
    basic.forever(function on_forever() {
        let snakeX: number[];
        let snakeY: number[];
        let foodX: number;
        let foodY: number;
        let dx: number;
        let dy: number;
        let timeDelayGame: number;
        let levelGame: number;
        let score: number;
        let fStop: boolean;
        let index: number;
        let checkX: number;
        let checkY: number;
        let index2: number;
        let index3: number;
        if (snakeX.length == 20) {
            basic.pause(2000)
            snakeX = [2]
            snakeY = [4]
            foodX = randint(0, 4)
            foodY = randint(0, 4)
            dx = 0
            dy = -1
            timeDelayGame = timeDelayGame - 200
            if (timeDelayGame < 200) {
                timeDelayGame = 200
            }
            
            levelGame = levelGame + 1
            basic.showNumber(levelGame)
            basic.clearScreen()
        }
        
        let acc_x = input.acceleration(Dimension.X)
        let acc_y = input.acceleration(Dimension.Y)
        let isEast = acc_x > 256
        let isWest = acc_x < -256
        let isNorth = acc_y < -256
        let isSouth = acc_y > 256
        let preDx = dx
        let preDy = dy
        if (isEast) {
            dx = 1
            dy = 0
        } else if (isNorth) {
            dx = 0
            dy = -1
        } else if (isSouth) {
            dx = 0
            dy = 1
        } else if (isWest) {
            dx = -1
            dy = 0
        }
        
        let px = snakeX[snakeX.length - 1] + dx
        let py = snakeY[snakeX.length - 1] + dy
        if (snakeX.length > 1) {
            if (px == snakeX[snakeX.length - 2] && py == snakeY[snakeY.length - 2]) {
                px = snakeX[snakeX.length - 1] + preDx
                py = snakeY[snakeX.length - 1] + preDy
            }
            
        }
        
        if (px == foodX && py == foodY) {
            score = score + 1
            game.setScore(score)
            snakeX.insertAt(snakeX.length, foodX)
            snakeY.insertAt(snakeY.length, foodY)
            led.plotBrightness(foodX, foodY, 255)
            fStop = false
            while (fStop == false) {
                foodX = randint(0, 4)
                foodY = randint(0, 4)
                fStop = true
                index = 0
                while (index <= snakeX.length - 1) {
                    checkX = snakeX[index]
                    checkY = snakeY[index]
                    if (checkX == foodX && checkY == foodY) {
                        fStop = false
                    }
                    
                    index += 1
                }
            }
        } else {
            if (px < 0 || px > 4 || (py < 0 || py > 4)) {
                game.gameOver()
            }
            
            index2 = 0
            while (index2 <= snakeX.length - 2) {
                if (px == snakeX[index2] && py == snakeY[index2]) {
                    game.gameOver()
                }
                
                index2 += 1
            }
            index3 = 0
            while (index3 <= snakeX.length - 2) {
                snakeX[index3] = snakeX[index3 + 1]
                snakeY[index3] = snakeY[index3 + 1]
                index3 += 1
            }
            snakeX[snakeX.length - 1] = px
            snakeY[snakeX.length - 1] = py
        }
        
        basic.clearScreen()
        let index4 = 0
        while (index4 <= snakeX.length - 1) {
            led.plot(snakeX[index4], snakeY[index4])
            index4 += 1
            led.plotBrightness(foodX, foodY, 21)
        }
        basic.pause(timeDelayGame)
    })
})
