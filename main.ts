input.onGesture(Gesture.TiltRight, function () {
	
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(grove.aht20ReadTemperatureC())
})
input.onButtonPressed(Button.AB, function () {
    katakana.showString("A&Bガヲサレマシタ")
    music.playMelody("C C5 C C5 C C5 C C5 ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(grove.measureInInches(DigitalPin.P0))
})
