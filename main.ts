input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
radio.setGroup(21)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    # . # . .
    # # # . .
    `)
basic.showLeds(`
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    # # . . .
    # . # . .
    # # . . .
    # . # . .
    # . # . .
    `)
basic.showLeds(`
    # # # . .
    # . . . .
    # # # . .
    # . . . .
    # # # . .
    `)
basic.forever(function () {
	
})
