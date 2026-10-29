input.onButtonPressed(Button.A, function () {
    hunger += -3
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.createSoundExpression(WaveShape.Noise, 3139, 1, 25, 218, 769, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
    for (let index = 0; index < 8; index++) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.InBackground)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("ZZZZZZ")
})
let hunger = 4
basic.forever(function () {
    if (hunger > 6) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.pause(2000)
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
    }
})
loops.everyInterval(5000, function () {
    hunger += 1
})
