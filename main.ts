basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    Tinybit.RGB_Car_Big(Tinybit.enColor.White)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(1000)
    Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
})
