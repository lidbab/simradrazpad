let met = 0
for (let index = 0; index <= 8; index++) {
    met = randint(0, 1)
    basic.showNumber(index)
    if (met == 0) {
        basic.showLeds(`
            # # # # .
            # . . # .
            # # # # .
            # . # . .
            # . . # .
            `)
    } else {
        basic.showLeds(`
            # # # # .
            # . . # .
            # # # # .
            # . . . .
            # . . . .
            `)
    }
    basic.pause(2000)
}
basic.clearScreen()
