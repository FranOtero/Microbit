def Camina():
    if input.compass_heading() > 180:
        basic.show_leds("""
            . . # . .
            . . # . .
            . # . # .
            # # . # #
            . . . . .
            """)
    else:
        basic.show_leds("""
            . . . . .
            # # . # #
            . # . # .
            . # # # .
            . . # . .
            """)
if input.light_level() < 66:
    music.ring_tone(262)

def on_forever():
    Camina()
basic.forever(on_forever)
