input.onButtonPressed(Button.A, function () {
    let Dare = 0
    let Truth = 0
    Number2 = randint(0, 1)
    if (Truth == 1) {
        basic.showString("Truth")
    } else if (Dare == 0) {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Picker = randint(0, 4)
    if (Picker == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (Picker == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (Picker == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (Picker == 4) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
let Picker = 0
let Number2 = 0
basic.showString("T or D!")
basic.forever(function () {
	
})
