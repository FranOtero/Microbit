function Camina () {
    if (input.compassHeading() > 180) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . # . # .
            # # . # #
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            # # . # #
            . # . # .
            . # # # .
            . . # . .
            `)
    }
}
if (input.lightLevel() < 66) {
    music.ringTone(262)
}
basic.forever(function () {
    Camina()
})
