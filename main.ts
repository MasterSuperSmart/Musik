input.onPinPressed(TouchPin.P0, function () {
    basic.setLedColor(Colors.Red)
})
input.onPinPressed(TouchPin.P3, function () {
    basic.setLedColor(basic.rgbw(
    255,
    122,
    255,
    0
    ))
})
input.onPinPressed(TouchPin.P2, function () {
    basic.setLedColor(Colors.Blue)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.setLedColor(Colors.Indigo)
})
